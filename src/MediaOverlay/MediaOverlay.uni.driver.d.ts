import { BaseUniDriver } from 'wix-ui-test-utils/unidriver';

export interface MediaOverlayUniDriver extends BaseUniDriver {
  hover: () => Promise<void>;
  getMediaUrl: () => Promise<string | null>;
  getMediaNode: () => Promise<HTMLElement | null>;
  getSkin: () => Promise<string | null>;
  getHoverSkin: () => Promise<string | null>;
}
