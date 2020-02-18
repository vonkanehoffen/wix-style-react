import { InputWithOptionsDriver } from '../InputWithOptions/InputWithOptions.driver';

export interface MultiSelectCheckboxDriver
  extends __WSR.BaseComponents.OmitPolyfill<InputWithOptionsDriver, 'driver'> {
  driver: {
    getNumOfLabels: () => number;
    getLabels: () => string[];
    getLabelAt: (index: number) => string;
  } & Pick<InputWithOptionsDriver, 'driver'>;
}
