import { BaseUniDriver } from 'wix-ui-test-utils/unidriver';

export interface VariableInputDriver extends BaseUniDriver {
  isDisabled(): Promise<boolean>;
  getContent(): Promise<string>;
  enterText(value:string): Promise<void>;
}
