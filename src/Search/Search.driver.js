import inputWithOptionsDriverFactory from '../InputWithOptions/InputWithOptions.driver';
import {
  EXPANDABLE_CLASS,
  EXPANDABLE_COLLAPSED,
  EXPANDABLE_EXPANDED,
} from './constants';

const searchDriverFactory = args => {
  const inputWithOptionsDriver = inputWithOptionsDriverFactory({
    ...args,
    element: args.element && args.element.childNodes[0],
  });

  const { element } = args;

  return {
    ...inputWithOptionsDriver,
    driver: {
      ...inputWithOptionsDriver.driver,
      isExpandable: () => element.className.includes(EXPANDABLE_CLASS),
      isCollapsed: () =>
        element.className.includes(EXPANDABLE_COLLAPSED) &&
        !element.className.includes(EXPANDABLE_EXPANDED),
    },
  };
};

export default searchDriverFactory;
