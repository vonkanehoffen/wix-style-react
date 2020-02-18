import { BaseUniDriver } from 'wix-ui-test-utils/base-driver';
import { DropdownLayoutUniDriver } from '../DropdownLayout/DropdownLayout.uni.driver';

export interface CalendarPanelUniDriver extends BaseUniDriver {
  calendarDriver: () => Promise<any>; // todo: change to calendar driver when type is added
  presetsDropdownLayoutDriver: () => DropdownLayoutUniDriver;
  isDropdownExists: () => Promise<boolean>;
  findByDataHook: (dataHook: string) => Promise<boolean>;
}
