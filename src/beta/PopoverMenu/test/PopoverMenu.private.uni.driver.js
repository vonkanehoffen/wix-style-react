import { PopoverMenuDriver as publicDriverFactory } from '../PopoverMenu.uni.driver';
import { dropdownBasePrivateDriverFactory } from '../../../DropdownBase/DropdownBase.private.uni.driver';

export const PopoverMenuPrivateDriver = base => {
  const { keyDown } = dropdownBasePrivateDriverFactory(base);
  const getOption = option => base.$(`[data-hook="popover-menu-${option}"]`);

  return {
    ...publicDriverFactory(base),
    keyDownTrigger: key => keyDown(key),
    keyDownOption: async (option, key) => getOption(option).pressKey(key),
    getMenuItem: async option => await getOption(option).getNative(),
  };
};
