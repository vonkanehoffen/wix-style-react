import { testkit as inputUniDriverFactory } from '../Input/Input.uni.driver';
import { dropdownLayoutDriverFactory } from '../DropdownLayout/DropdownLayout.uni.driver';
import testkit from '../Popover/Popover.uni.driver';
import { CommonDriver } from 'wix-ui-core/dist/src/components/popover/Popover.common.uni.driver';
import { ReactBase } from '../../test/utils/unidriver';

export const inputWithOptionsUniDriverFactory = (base, body) => {
  const inputWrapperSelector = '[data-input-parent]';
  const dropdownLayoutSelector = `[data-hook="inputwithoptions-dropdownlayout"]`;

  const inputWrapper = base.$(inputWrapperSelector);

  const popoverTestkit = testkit(base, body);
  const popoverCommonTestkit = CommonDriver(base, body);

  const inputDriver = inputUniDriverFactory(
    base.$(`${inputWrapperSelector} > *:first-child `),
  );

  const dropdownLayoutDriver = async () => {
    const content = await popoverCommonTestkit.getContentElement();
    return dropdownLayoutDriverFactory(content.$(dropdownLayoutSelector));
  };

  const dropdownLayoutDummy = dropdownLayoutDriverFactory(base);

  const driver = {
    exists: () => base.exists(),
    /** Select an option by id. (If dropdown options is not opened yet, this will open it and click on the option) */
    selectOptionById: async id => {
      const nativeSelect = await base.$('[data-hook=native-select]');

      if (await nativeSelect.exists()) {
        const dataHookPrefix = `native-option-${id}`;
        const option = await base.$(`[data-hook*=${dataHookPrefix}]`);
        const selectedIndex = await option.attr('data-index');

        return await ReactBase(nativeSelect).select(selectedIndex);
      }

      await driver.focus();
      await driver.pressKey('ArrowDown');
      await (await (await dropdownLayoutDriver()).optionById(id)).click();
    },
    isReadOnly: async () => await inputDriver.getReadOnly(),
    isEditable: async () =>
      !(await inputDriver.getReadOnly()) && !(await inputDriver.getDisabled()),
    isDisabled: () => inputDriver.getDisabled(),
    /** @deprecated  Should be private */
    inputWrapper: () => inputWrapper.getNative(), // eslint-disable-line no-restricted-properties
    focus: () => inputDriver.focus(),
    blur: async () => await (await dropdownLayoutDriver()).mouseClickOutside(),
    // TODO: use pressKey instead of keyDown
    pressKey: async key => await inputDriver.keyDown({ key }),
    outsideClick: async () => await popoverTestkit.clickOutside(),
    isOptionWrappedToHighlighter: async optionId => {
      await driver.pressKey('ArrowDown');
      const {
        element: optionElm,
      } = await (await dropdownLayoutDriver()).optionById(optionId);
      return (
        (await optionElm().exists()) &&
        (await optionElm()
          .$(`[data-hook=highlighter-${optionId}]`)
          .exists())
      );
    },
  };

  return {
    exists: () => driver.exists(),
    driver,
    inputDriver,
    dropdownLayoutDriver: Object.keys(dropdownLayoutDummy).reduce(
      (prev, current) => {
        return {
          ...prev,
          [current]: async args => {
            if (current === 'isShown' || current === 'exists') {
              return await popoverTestkit.isContentElementExists();
            }

            !(await popoverTestkit.isContentElementExists()) &&
              (await driver.pressKey('ArrowDown'));

            return await (await dropdownLayoutDriver())[current](args);
          },
        };
      },
      {},
    ),
  };
};
