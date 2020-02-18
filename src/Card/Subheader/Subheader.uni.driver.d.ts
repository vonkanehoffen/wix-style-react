import { BaseUniDriver } from 'wix-ui-test-utils/unidriver';

export interface SubheaderUniDriver extends BaseUniDriver {
  title(): Promise<string>;
  titleNode(): Promise<HTMLElement>;
  suffixNode(): Promise<HTMLElement>;
}
