import { baseUniDriverFactory } from 'wix-ui-test-utils/base-driver';
import { dataHooks } from './constants';

export const talDriverFactory = base => {
  return {
    ...baseUniDriverFactory(base),

    /** Get the current count */
    getCountText: async () =>
      base.$(`[data-hook="${dataHooks.talCount}"]`).text(),

    /** Click the button */
    clickButton: async () =>
      base.$(`[data-hook="${dataHooks.talButton}"]`).click(),

    /** Get the button's text */
    getButtonText: async () =>
      base.$(`[data-hook="${dataHooks.talButton}"]`).text(),
  };
};
