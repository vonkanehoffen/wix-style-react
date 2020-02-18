import { BaseDriver } from 'wix-ui-test-utils/driver-factory';
import { UniDriver } from 'wix-ui-test-utils/unidriver';

export interface TabsDriver extends BaseDriver {
  getTitles: () => Array<string>;
  clickTabAt: (index: number) => void;
  getActiveTabIndex: () => number;
  isDefaultType: () => boolean;
  getItemsContainerClassList: () => DOMTokenList;
  getDataHook: () => string;
  getItemsWidth: () => Set<string>;
  hasDivider: () => boolean;
  getSideContent: Array<UniDriver | null>;
  getItemsMaxWidths: () => Array<string>;
}
