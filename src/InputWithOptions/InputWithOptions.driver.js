import inputDriverFactory from '../Input/Input.driver';
import dropdownLayoutDriverFactory from '../DropdownLayout/DropdownLayout.driver';
import popoverDriverFactory from '../Popover/Popover.driver';
import { dropdownLayoutDriverProxy } from './InputWithOptions.proxy.driver';

const inputWithOptionsDriverFactory = ({ element }) => {
  const dropdownLayoutSelector = `[data-hook="dropdown-layout-wrapper"]`;
  const inputWrapperSelector = '[data-input-parent]';
  const popoverTestkit = () => popoverDriverFactory({ element });

  const inputWrapper = () =>
    element &&
    element.querySelector(`${inputWrapperSelector} > *:first-child `);

  const dropdownLayoutWrapper = () =>
    popoverTestkit()
      .getContentElement()
      .querySelector(dropdownLayoutSelector).childNodes[0];

  const inputDriver = inputDriverFactory({
    element: inputWrapper(),
    wrapper: inputWrapper(),
  });

  const dropdownLayoutTestkit = () =>
    dropdownLayoutDriverFactory({
      element: dropdownLayoutWrapper(),
    });

  const driver = {
    exists: () => !!element,
    /** Select an option by id. (If dropdown options is not opened yet, this will open it and click on the option) */
    selectOptionById: id => {
      inputDriver.focus();
      inputDriver.keyDown('ArrowDown');
      dropdownLayoutTestkit()
        .optionById(id)
        .click();
    },
    isReadOnly: () =>
      inputDriver.getReadOnly() &&
      inputWrapper().className.includes('readonly'),
    isEditable: () => !inputDriver.getReadOnly() && !inputDriver.getDisabled(),
    isDisabled: () => !!inputDriver.getDisabled(),
    inputWrapper: () => inputWrapper(),
    focus: () => inputDriver.focus(),
    blur: () => dropdownLayoutTestkit().mouseClickOutside(),
    pressKey: key => inputDriver.keyDown(key),
    isMenuOpen: () => popoverTestkit().isContentElementExists(),
    outsideClick: () => popoverTestkit().clickOutside(),
    isOptionWrappedToHighlighter: optionId => {
      inputDriver.keyDown('ArrowDown');
      const { element: optionElm } = dropdownLayoutTestkit().optionById(
        optionId,
      );
      return !!optionElm().querySelector(`[data-hook=highlighter-${optionId}]`);
    },
  };

  const dropdownLayoutDummy = () =>
    dropdownLayoutDriverFactory({
      element: document.body,
    });

  const dropdownLayoutDriver = dropdownLayoutDriverProxy(
    dropdownLayoutDummy,
    dropdownLayoutTestkit,
    popoverTestkit,
    driver,
  );

  return {
    exists: () => driver.exists(),
    driver,
    inputDriver,
    dropdownLayoutDriver,
  };
};

export default inputWithOptionsDriverFactory;
