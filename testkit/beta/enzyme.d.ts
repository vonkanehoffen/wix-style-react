import { BaseUniDriver } from 'wix-ui-test-utils/base-driver';
import { BaseDriver } from 'wix-ui-test-utils/driver-factory';
import { ReactWrapper } from 'enzyme';

import { PopoverMenuDriver } from '../../src/beta/PopoverMenu/PopoverMenu.uni.driver';

declare namespace EnzymeTestkit {
  type EnzymeUniTestkitFactory<T> = (params: {
    wrapper: ReactWrapper;
    dataHook: string;
  }) => T;

  export const PopoverMenuTestkit: EnzymeUniTestkitFactory<PopoverMenuDriver>;
}

export = EnzymeTestkit;
