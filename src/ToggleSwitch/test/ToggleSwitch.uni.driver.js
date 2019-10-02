import { baseUniDriverFactory } from 'wix-ui-test-utils/base-driver';
import { StylableDOMUtil } from '@stylable/dom-test-kit';
import style from '../ToggleSwitch.st.css';

export const toggleSwitchDriverFactory = base => {
  const stylableDOMUtil = new StylableDOMUtil(style, element);
  return {
    ...baseUniDriverFactory(base),

    //   /** Get the current count */
    //   getCountText: async () => base.$('[data-hook="toggleSwitch-count"]').text(),

    //   /** Click the button */
    //   clickButton: async () =>
    //     base.$('[data-hook="toggleSwitch-button"]').click(),

    //   /** Get the button's text */
    //   getButtonText: async () =>
    //     base.$('[data-hook="toggleSwitch-button"]').text(),
    // };
    getSize: () => stylableDOMUtil.getStyleState(element, 'size'),
    getSkin: () => stylableDOMUtil.getStyleState(element, 'skin'),
  };
};
