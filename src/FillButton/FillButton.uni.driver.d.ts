import { BaseUniDriver } from 'wix-ui-test-utils/unidriver';

export interface FillButtonUniDriver extends BaseUniDriver {
  getTooltipText: () => Promise<string>;
}
