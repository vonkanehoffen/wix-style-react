import inputDriverFactory from '../Input/Input.driver';
import dropdownLayoutDriverFactory from '../DropdownLayout/DropdownLayout.driver';
import popoverDriverFactory from '../Popover/Popover.driver';

const inputWithOptionsDriverFactory = ({ element }) => {
  const dropdownLayoutSelector = `[data-hook="dropdown-layout-wrapper"]`;

  const popoverTestkit = popoverDriverFactory({ element });

  const inputWrapper = () =>
    popoverTestkit.getTargetElement().childNodes[0].childNodes[0];

  const dropdownLayoutWrapper = () =>
    popoverTestkit.getContentElement().querySelector(dropdownLayoutSelector)
      .childNodes[0];

  const inputDriver = () =>
    inputDriverFactory({
      element: inputWrapper(),
      wrapper: inputWrapper(),
    });

  const dropdownLayoutDriver = () =>
    dropdownLayoutDriverFactory({
      element: dropdownLayoutWrapper(),
    });

  const dropdownLayoutDummy = dropdownLayoutDriverFactory({
    element: document.body,
  });

  const inputDriverDummy = inputDriverFactory({
    element: document.body,
  });

  const driver = {
    exists: () => !!element,
    /** Select an option by id. (If dropdown options is not opened yet, this will open it and click on the option) */
    selectOptionById: id => {
      inputDriver().focus();
      inputDriver().keyDown('ArrowDown');
      dropdownLayoutDriver()
        .optionById(id)
        .click();
    },
    isReadOnly: () =>
      inputDriver().getReadOnly() &&
      inputWrapper().className.includes('readonly'),
    isEditable: () =>
      !inputDriver().getReadOnly() && !inputDriver().getDisabled(),
    isDisabled: () => !!inputDriver().getDisabled(),
    inputWrapper: () => inputWrapper(),
    focus: () => inputDriver().focus(),
    blur: () => dropdownLayoutDriver().mouseClickOutside(),
    pressKey: key => inputDriver().keyDown(key),
    isMenuOpen: () => popoverTestkit.isContentElementExists(),
    outsideClick: () => popoverTestkit.clickOutside(),
    isOptionWrappedToHighlighter: optionId => {
      inputDriver().keyDown('ArrowDown');
      const { element: optionElm } = dropdownLayoutDriver().optionById(
        optionId,
      );
      return !!optionElm().querySelector(`[data-hook=highlighter-${optionId}]`);
    },
  };

  return {
    exists: () => driver.exists(),
    driver,
    inputDriver: Object.keys(inputDriverDummy).reduce(
      (prev, current) => ({
        ...prev,
        [current]: (...args) => inputDriver()[current](...args),
      }),
      {},
    ),
    dropdownLayoutDriver: Object.keys(dropdownLayoutDummy).reduce(
      (prev, current) => {
        return {
          ...prev,
          [current]: args => {
            if (current === 'isShown' || current === 'exists') {
              return popoverTestkit.isContentElementExists();
            }

            !popoverTestkit.isContentElementExists() &&
              inputDriver().keyDown('ArrowDown');

            return dropdownLayoutDriver()[current](args);
          },
        };
      },
      {},
    ),
  };
};

export default inputWithOptionsDriverFactory;
