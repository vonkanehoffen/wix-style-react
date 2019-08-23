import dropdownLayoutDriverFactory from '../DropdownLayout/DropdownLayout.protractor.driver';
import popoverDriverFactory from '../Popover/Popover.protractor.driver';
import { isFocused } from 'wix-ui-test-utils/protractor';
import inputDriverFactory from '../Input/Input.private.protractor.driver';

const driverFactory = component => {
  const dropdownLayoutSelector = `[data-hook="dropdown-layout-wrapper"]`;

  const popoverTestkit = popoverDriverFactory(component);

  const dropdownLayoutDriver = async () =>
    dropdownLayoutDriverFactory(
      await popoverDriverFactory.querySelector(dropdownLayoutSelector)
        .childNodes[0],
    );

  const dropdownLayoutDummy = dropdownLayoutDriverFactory({
    element: document.body,
  });

  const input = component.$(`input`);
  const inputDriver = inputDriverFactory(component.$('[data-input-parent]'));

  return {
    ...Object.keys(dropdownLayoutDummy).reduce((prev, current) => {
      return {
        ...prev,
        [current]: args => {
          if (current === 'isShown' || current === 'exists') {
            return popoverTestkit.isContentElementExists();
          }

          !popoverTestkit.isContentElementExists() &&
            inputDriver.keyDown('ArrowDown');

          return dropdownLayoutDriver()[current](args);
        },
      };
    }, {}),
    click: () => component.click(),
    getInput: () => input,
    isFocused: () => isFocused(input),
    element: () => component,
    /** Check whether the options dropdown is open */
    isOptionsShown: () =>
      dropdownLayoutDriver()
        .getDropdown()
        .isDisplayed(),
    enterText: text => input.clear().sendKeys(text),
    selectOptionAt: async index => {
      await input.click();
      await dropdownLayoutDriver().selectOptionAt(index);
    },
    pressEnter: () => inputDriver.pressEnter(),
  };
};

export default driverFactory;
