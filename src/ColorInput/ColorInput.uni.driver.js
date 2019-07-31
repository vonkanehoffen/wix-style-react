import { baseUniDriverFactory } from 'wix-ui-test-utils/base-driver';
import inputUniDriverFactory from '../Input/Input.uni.driver.js';
import { colorPickerUniDriverFactory } from '../ColorPicker/ColorPicker.uni.driver.js';
import DATA_HOOKS from './DataHooks';
import { ReactBase } from '../../test/utils/unidriver';

export const colorInputDriverFactory = base => {
  const inputTestkit = inputUniDriverFactory(base);
  const colorPickerTestkit = colorPickerUniDriverFactory(
    base.$(`[data-hook="${DATA_HOOKS.COLOR_INPUT_COLOR_PICKER}"]`),
  );

  return {
    ...baseUniDriverFactory(base),
    cancel: colorPickerTestkit.cancel,
    confirm: colorPickerTestkit.confirm,
    /** Clicks on color viewer box */
    clickColorViewer: async () =>
      base.$(`[data-hook="${DATA_HOOKS.COLOR_INPUT_VIEWER}"]`).click(),
    enterText: async text => {
      await inputTestkit.click();
      await inputTestkit.enterText(text);
    },
    getValue: inputTestkit.getValue,
    keyDown: async event => {
      if (typeof event === 'string') {
        await inputTestkit.keyDown({ key: event });
      } else {
        await inputTestkit.keyDown(event);
      }
    },
    blur: inputTestkit.blur,
    focus: inputTestkit.focus,
    hasError: inputTestkit.hasError,
    getPlaceholder: inputTestkit.getPlaceholder,
    isOfSize: inputTestkit.isOfSize,
    isDisabled: inputTestkit.isDisabled,
    colorPickerExists: () => colorPickerTestkit.exists(),
    hasPrefix: inputTestkit.hasPrefix,
    click: inputTestkit.click,
    clickOutside: async () => {
      if (base.type === 'react') {
        ReactBase.clickDocument();
      } else {
        throw new Error('Supported only in React/DOM.');
      }
    },
  };
};
