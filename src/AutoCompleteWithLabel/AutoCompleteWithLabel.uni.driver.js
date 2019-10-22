import { baseUniDriverFactory } from 'wix-ui-test-utils/base-driver';
import { testkit as inputUniDriverFactory } from '../Input/Input.uni.driver';
import { labelledElementDriverFactory as labelledElementUniDriverFactory } from '../LabelledElement/LabelledElement.uni.driver';
import dataHooks from './dataHooks';

export const autoCompleteWithLabelDriverFactory = base => {
  const labelledElementSelector = `[data-hook="${dataHooks.labelledElement}"]`;
  const labelledElementDriver = labelledElementUniDriverFactory(
    base.$(labelledElementSelector),
  );
  const inputWrapperSelector = `[data-hook="${dataHooks.inputWithLabel}"]`;
  const inputDriver = inputUniDriverFactory(base.$(inputWrapperSelector));
  return {
    ...baseUniDriverFactory(base),
    getLabelText: () => labelledElementDriver.getLabelText(),
    getValue: () => inputDriver.getValue(),
    enterText: async text => inputDriver.enterText(text),
  };
};
