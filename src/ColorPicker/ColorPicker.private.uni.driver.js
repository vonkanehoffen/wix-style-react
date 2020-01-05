import publicDriverFactory from './ColorPicker.uni.driver';
import { ReactBase } from '../../test/utils/unidriver';
import { DataHooks } from './ColorPicker.const';

export const colorPickerUniDriverFactory = base => ({
  ...publicDriverFactory(base),

  selectBlackColor: async () =>
    ReactBase(base.$(`[data-hook="${DataHooks.hsb}"]`))._private.mouseDown({
      clientX: 1,
      clientY: 1,
    }),

  clickCancelButton: () =>
    base.$('[data-hook="color-picker-cancel-button"]').click(),
});
