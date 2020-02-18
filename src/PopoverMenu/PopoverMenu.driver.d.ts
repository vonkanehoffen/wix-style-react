import { BaseDriver } from 'wix-ui-test-utils/driver-factory';

export interface PopoverMenuDriver extends BaseDriver {
  click: () => void;
  init: {
    menuItemDataHook: (dataHook: string) => PopoverMenuDriver;
    parentElement: (elm: string) => PopoverMenuDriver;
  };
  menu: {
    isShown: () => boolean;
    itemsLength: () => number;
    itemContentAt: (index: number) => string;
    clickItemAt: (index: number) => void;
    hasArrow: () => boolean;
  };
}
