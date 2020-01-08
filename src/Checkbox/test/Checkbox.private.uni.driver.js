import { checkboxUniDriverFactory as publicUniDriverFactory } from '../Checkbox.uni.driver';
import { tooltipDriverFactory } from '../../Tooltip/TooltipNext/Tooltip.uni.driver';

export const checkboxUniDriverFactory = (base, body) => {
  return {
    ...publicUniDriverFactory(base, body),

    hoverInput: async () => {
      const tooltipDriver = await tooltipDriverFactory(
        base.$('[data-hook="checkbox-box"]'),
        body,
      );
      return tooltipDriver.mouseEnter();
    },
  };
};
