import { BaseUniDriver } from 'wix-ui-test-utils/unidriver';

export interface BadgeUniDriver extends BaseUniDriver {
  getContent: () => Promise<string | null>,
  text: () => Promise<string>;
  getType: () => Promise<string>;
  getSkin: () => Promise<string>;
  getSize: () => Promise<string>;
  isUppercase: Promise<boolean>;
  hasClickCursor: Promise<boolean>;
  getPrefixIcon: () => Promise<HTMLElement>,
  getSuffixIcon: () => Promise<HTMLElement>,
}
