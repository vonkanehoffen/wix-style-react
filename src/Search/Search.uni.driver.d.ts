import { InputWithOptionsUniDriver } from '../InputWithOptions/InputWithOptions.uni.driver';

export interface SearchUniDriver
  extends __WSR.BaseComponents.OmitPolyfill<
    InputWithOptionsUniDriver,
    'driver'
  > {
  driver: InputWithOptionsUniDriver['driver'] & {
    isExpandable: () => Promise<boolean>;
    isCollapsed: () => Promise<boolean>;
  };
}
