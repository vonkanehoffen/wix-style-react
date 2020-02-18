import { LinearProgressBarDriver } from 'wix-ui-core/drivers/vanilla';
import { tooltipDriverFactory } from 'wix-ui-backoffice/dist/src/components/Tooltip/Tooltip.driver';

export interface LinearProgressBarDriver extends LinearProgressBarDriver {
  isTooltipShown: () => boolean;
  getTooltip: () => ReturnType<typeof tooltipDriverFactory>;
  isErrorIconShown: () => boolean;
  isSuccessIconShown: () => boolean;
  getTooltipErrorMessage: () => Promise<string>;
}
