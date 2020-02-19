import { BaseUniDriver } from 'wix-ui-test-utils/unidriver';

export interface ListItemSelectUniDriver extends BaseUniDriver {
  hasCheckbox(): Promise<boolean>;
  getPrefix(): Promise<BaseUniDriver>;
  getTitle(): Promise<string>;
  getSubtitle(): Promise<string>;
  getSuffix(): Promise<BaseUniDriver>;
}
