import { baseUniDriverFactory } from 'wix-ui-test-utils/base-driver';

export const verticalTabsDriverFactory = base => {
  return {
    ...baseUniDriverFactory(base),

    /** Get the current count */
    getCountText: async () => base.$('[data-hook="verticalTabs-count"]').text(),

    /** Click the button */
    clickButton: async () =>
      base.$('[data-hook="verticalTabs-button"]').click(),

    /** Get the button's text */
    getButtonText: async () =>
      base.$('[data-hook="verticalTabs-button"]').text(),
  };
};
