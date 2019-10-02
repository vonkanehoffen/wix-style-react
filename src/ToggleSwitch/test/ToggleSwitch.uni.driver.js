import { baseUniDriverFactory } from 'wix-ui-test-utils/base-driver';

export const toggleSwitchDriverFactory = base => {
  return {
    ...baseUniDriverFactory(base),

    /** Get the current count */
    getCountText: async () => base.$('[data-hook="toggleSwitch-count"]').text(),

    /** Click the button */
    clickButton: async () =>
      base.$('[data-hook="toggleSwitch-button"]').click(),

    /** Get the button's text */
    getButtonText: async () =>
      base.$('[data-hook="toggleSwitch-button"]').text(),
  };
};
