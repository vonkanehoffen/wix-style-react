import { BaseUniDriver } from 'wix-ui-test-utils/base-driver';
import { BaseDriver } from 'wix-ui-test-utils/driver-factory';

import { PopoverMenuDriver } from '../../src/beta/PopoverMenu/PopoverMenu.uni.driver';

declare namespace VanillaTestkit {
  type VanillaUniTestkitFactory<T> = (params: {
    wrapper: HTMLElement;
    dataHook: string;
  }) => T;

  export const PopoverMenuTestkit: VanillaUniTestkitFactory<PopoverMenuDriver>;
}

export = VanillaTestkit;
