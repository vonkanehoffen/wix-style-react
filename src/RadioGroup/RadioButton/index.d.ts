import * as React from 'react';
import WixComponent, {WixComponentProps} from "../../BaseComponents/WixComponent";

export interface RadioButtonProps extends WixComponentProps {
  value?: string | number,
  vAlign?: RadioButtonVerticalAlign,
  name?: string,
  onChange?: Function,
  checked?: boolean,
  disabled?: boolean,
  children?: any,
  style?: object,
  type?: RadioButtonType,
  lineHeight?: string,
  selectionArea?: RadioButtonSelectionArea,
  content?: React.ReactNode,
}

export type RadioButtonVerticalAlign = 'center' | 'top';
export type RadioButtonType = 'default' | 'button';
export type RadioButtonSelectionArea = 'none' | 'hover' | 'always';

export default class RadioButton extends WixComponent<RadioButtonProps> {}
