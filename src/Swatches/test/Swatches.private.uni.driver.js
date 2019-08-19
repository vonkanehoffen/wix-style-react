import { swatchesDriverFactory as publicDriverFactory } from '../Swatches.uni.driver';
import { StylableUnidriverUtil } from '../../../test/utils/unidriver';
import { tooltipDriverFactory } from '../../Tooltip/TooltipNext/Tooltip.uni.driver';
import style from '../Swatches.st.css';
import { colorPickerUniDriverFactory } from '../../ColorPicker/ColorPicker.uni.driver';

export const swatchesPrivateDriverFactory = (base, body) => {
  const publicDriver = publicDriverFactory(base);
  const stylableUtil = new StylableUnidriverUtil(style);
  const tooltipSelector = '[data-hook="color-swatches-swatch-tooltip"]';
  const tooltipTestkit = tooltipDriverFactory(base.$(tooltipSelector), body);
  const addButtonTooltipTestkit = tooltipDriverFactory(
    base.$('[data-hook="add-color-button-tooltip"]'),
    body,
  );
  const colorPickerTestkit = colorPickerUniDriverFactory(
    base.$(`[data-hook="swatches-color-picker"]`),
  );

  const getAddButton = () => base.$('[data-hook="color-preview-add-button"]');

  return {
    ...publicDriver,

    /** Test if swatch is transparent at given index */
    isSwatchTransparentAt: async index => {
      const swatch = await publicDriver.getSwatch(index);
      return (
        (await stylableUtil.getStyleState(swatch, 'transparent')) === 'true'
      );
    },

    hasTooltip: async () => tooltipTestkit.exists(),

    getTooltipText: async () => tooltipTestkit.getTooltipText(),

    isColorPickerShown: () =>
      base.$('[data-hook="swatches-color-picker"]').exists(),

    clickAddColorButton: async () => getAddButton().click(),

    confirmSelectedColor: colorPickerTestkit.confirm,
    cancelColorPicker: colorPickerTestkit.cancel,

    hasAddButtonTooltip: async () => addButtonTooltipTestkit.tooltipExists(),
    getAddButtonTooltipText: async () =>
      addButtonTooltipTestkit.getTooltipText(),
  };
};
