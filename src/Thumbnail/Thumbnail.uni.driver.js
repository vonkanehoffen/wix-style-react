import { baseUniDriverFactory } from 'wix-ui-test-utils/base-driver';
import { textUniDriverFactory } from '../Text/Text.uni.driver';

export const thumbnailDriverFactory = base => {
  const byHook = hook => base.$(`[data-hook*="${hook}"]`);
  const getThumbnailWrapper = () => byHook('thumbnail-wrapper');
  const getStyle = async (element, rule) =>
    (await element.attr('style')).match(new RegExp(`${rule}: (.*?);`))[1];

  return {
    ...baseUniDriverFactory(base),

    /** Get thumbnail title */
    getTitle: async () =>
      (await textUniDriverFactory(await byHook('thumbnail-title'))).getText(),

    /** Get thumbnail description */
    getDescription: () => byHook('thumbnail-description').text(),

    /** Get selected icon */
    getSelectedIcon: () => byHook('thumbnail-selected-icon'),

    getBackgroundImage: () => byHook('thumbnail-background-image'),

    /** Is Thumbnail selected */
    isSelected: async () =>
      (await getThumbnailWrapper().attr('data-selected')) === 'true',

    /** Is Thumbnail disabled */
    isDisabled: async () =>
      (await getThumbnailWrapper().attr('data-disabled')) === 'true',

    /** Get thumbnail image */
    getImage: () => byHook('thumbnail-image'),

    /** Get thumbnail width, if it's set through `width` prop */
    getWidth: async () => await getStyle(base, 'width'),

    /** Get thumbnail height, if it's set through `height` prop */
    getHeight: async () =>
      await getStyle(await getThumbnailWrapper(), 'height'),
  };
};
