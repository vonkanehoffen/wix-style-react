import { InputWithOptionsUniDriver } from '../InputWithOptions/InputWithOptions.private.uni.driver';
import { BaseUniDriver } from 'wix-ui-test-utils/base-driver';

export interface MultiSelectCheckboxUniDriver
  extends __WSR.BaseComponents.OmitPolyfill<
    InputWithOptionsUniDriver,
    'driver'
  > {
  driver: {
    getNumOfLabels: () => Promise<number>;
    getLabels: () => Promise<string[]>;
    getLabelAt: (index: number) => Promise<string>;
  } & Pick<InputWithOptionsUniDriver, 'driver'> &
    BaseUniDriver;
}
