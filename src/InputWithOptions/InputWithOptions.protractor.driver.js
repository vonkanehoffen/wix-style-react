import dropdownLayoutDriverFactory from '../DropdownLayout/DropdownLayout.protractor.driver';
import popoverDriverFactory from '../Popover/Popover.protractor.driver';
import { isFocused } from 'wix-ui-test-utils/protractor';
import inputDriverFactory from '../Input/Input.private.protractor.driver';

const driverFactory = component => {
  const dropdownLayoutSelector = `[data-hook="dropdown-layout-wrapper"]`;

  const popoverTestkit = popoverDriverFactory(component);

  const dropdownLayoutDriver = async () =>
    dropdownLayoutDriverFactory(
      (await popoverTestkit.getContentElement()).$(dropdownLayoutSelector),
    );

  const dropdownLayoutDummy = dropdownLayoutDriverFactory({
    element: component,
  });

  const input = component.$(`input`);
  const inputDriver = inputDriverFactory(component.$('[data-input-parent]'));

  return {
    ...Object.keys(dropdownLayoutDummy).reduce((prev, current) => {
      return {
        ...prev,
        [current]: async args => {
          if (current === 'isShown' || current === 'exists') {
            return popoverTestkit.isContentElementExists();
          }

          !popoverTestkit.isContentElementExists() &&
            inputDriver.keyDown('ArrowDown');

          return (await dropdownLayoutDriver())[current](args);
        },
      };
    }, {}),
    click: () => component.click(),
    getInput: () => input,
    isFocused: () => isFocused(input),
    element: () => component,
    /** Check whether the options dropdown is open */
    isOptionsShown: () => popoverTestkit.isContentElementExists(),
    enterText: text => input.clear().sendKeys(text),
    selectOptionAt: async index => {
      await input.click();
      await dropdownLayoutDriver().selectOptionAt(index);
    },
    pressEnter: () => inputDriver.pressEnter(),
  };
};

export default driverFactory;
