import { baseUniDriverFactory } from '../../test/utils/unidriver';
import { inputWithOptionsUniDriverFactory } from '../InputWithOptions/InputWithOptions.uni.driver';
import {
  EXPANDABLE_CLASS,
  EXPANDABLE_COLLAPSED,
  EXPANDABLE_EXPANDED,
} from './constants';

export const searchUniDriverFactory = base => {
  const inputWithOptionsUniDriver = inputWithOptionsUniDriverFactory(base);

  return {
    ...baseUniDriverFactory(base),
    ...inputWithOptionsUniDriver,
    driver: {
      ...inputWithOptionsUniDriver.driver,
      isExpandable: () => base.hasClass(EXPANDABLE_CLASS),
      isCollapsed: async () =>
        (await base.hasClass(EXPANDABLE_COLLAPSED)) &&
        !(await base.hasClass(EXPANDABLE_EXPANDED)),
    },
  };
};
