import { baseUniDriverFactory } from 'wix-ui-test-utils/base-driver';
import { ReactBase } from '../../test/utils/unidriver';

const getTitle = base => base.$('[data-hook="title"]');
const getBadge = base => base.$('[data-hook="badge"]');
const getPrimaryAction = base => base.$('[data-hook="primary-action"]');
const getSecondaryAction = base => base.$('[data-hook="secondary-action"]');
const getHoverComponent = base => base.$('[data-hook="hover-component"]');

const cardGalleryItemDriverFactory = base => ({
  ...baseUniDriverFactory(base),
  getTitle: () => getTitle(base).text(),
  getBadge: async () =>
    (await getBadge(base).exists())
      ? ReactBase(getBadge(base)).prop('firstChild')
      : null, // eslint-disable-line no-restricted-properties
  getSubtitle: () => base.$('[data-hook="subtitle"]').text(),
  getBackgroundImageUrl: async () => {
    const style = await base.$('[data-hook="background-image"]').attr('style');

    return style.match(/url\("?([^"]*)"?\)/)[1];
  },
  click: () => getHoverComponent(base).click(),
  getPrimaryActionLabel: () => getPrimaryAction(base).text(),
  clickOnPrimaryAction: () => getPrimaryAction(base).click(),
  getSecondaryActionLabel: () => getSecondaryAction(base).text(),
  clickOnSecondaryAction: () => getSecondaryAction(base).click(),
  getHoverComponent: () => getHoverComponent(base),
  getHoveredContent: () => base.$('[data-hook="hovered-content"]'),
});

export default cardGalleryItemDriverFactory;
