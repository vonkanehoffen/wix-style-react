import { baseUniDriverFactory } from 'wix-ui-test-utils/base-driver';

import { ReactBase } from '../../test/utils/unidriver';

import DataHooks from './CardGalletyItemDataHooks';

const getTitle = base => base.$(`[data-hook=${DataHooks.title}]`);
const getBadge = base => base.$(`[data-hook=${DataHooks.badge}]`);
const getSettingsMenu = base => base.$(`[data-hook=${DataHooks.settingsMenu}]`);
const getSubtitle = base => base.$(`[data-hook=${DataHooks.subtitle}]`);
const getPrimaryAction = base =>
  base.$(`[data-hook=${DataHooks.primaryAction}]`);
const getSecondaryAction = base =>
  base.$(`[data-hook=${DataHooks.secondaryAction}]`);
const getHoverComponent = base =>
  base.$(`[data-hook=${DataHooks.hoverComponent}]`);

const cardGalleryItemDriverFactory = base => {
  return {
    ...baseUniDriverFactory(base),
    getTitle: async () =>
      (await getTitle(base).exists()) ? getTitle(base).text() : null,
    getBadge: async () =>
      (await getBadge(base).exists())
        ? getBadge(base)._prop('firstChild')
        : null,
    getSubtitle: async () =>
      (await getSubtitle(base).exists()) ? getSubtitle(base).text() : null,
    getBackgroundImageUrl: async () => {
      const style = await base
        .$(`[data-hook=${DataHooks.backgroundImage}]`)
        .attr('style');

      return style.match(/url\("?([^"]*)"?\)/)[1];
    },
    click: async () => {
      await base.$(`[data-hook=${DataHooks.hoverComponent}]`).hover();
      await getPrimaryAction(base).click();
    },
    getPrimaryActionLabel: () => getPrimaryAction(base).text(),
    clickOnPrimaryAction: () => getPrimaryAction(base).click(),
    getSecondaryActionLabel: () => getSecondaryAction(base).text(),
    clickOnSecondaryAction: () => getSecondaryAction(base).click(),
    getHoverComponent: () => getHoverComponent(base),
    getHoveredContent: () => base.$(`[data-hook=${DataHooks.hoverContent}]`),
    getSettingsMenu: async () => {
      await getHoverComponent(base).hover();
      return (await getSettingsMenu(base).exists())
        ? getSettingsMenu(base)._prop('firstChild')
        : null;
    },
  };
};

export default cardGalleryItemDriverFactory;
