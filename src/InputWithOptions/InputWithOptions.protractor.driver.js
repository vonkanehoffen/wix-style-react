import dropdownLayoutDriverFactory from '../DropdownLayout/DropdownLayout.protractor.driver';
import { isFocused } from 'wix-ui-test-utils/protractor';
import inputDriverFactory from '../Input/Input.private.protractor.driver';

const driverFactory = component => {
  const dropdownLayoutDriver = dropdownLayoutDriverFactory(
    component.$('[data-hook="dropdown-layout-wrapper"]'),
  );
  const input = component.$(`input`);
  const inputDriver = inputDriverFactory(component.$('[data-input-parent]'));

  return {
    ...dropdownLayoutDriver,
    click: () => component.click(),
    getInput: () => input,
    isFocused: () => isFocused(input),
    element: () => component,
    /** Check whether the options dropdown is open */
    isOptionsShown: () => dropdownLayoutDriver.getDropdown().isDisplayed(),
    enterText: text => input.clear().sendKeys(text),
    selectOptionAt: async index => {
      await input.click();
      await dropdownLayoutDriver.selectOptionAt(index);
    },
    pressEnter: () => inputDriver.pressEnter(),
  };
};

export default driverFactory;
