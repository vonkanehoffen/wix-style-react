import * as React from 'react';
import {WixComponentProps} from "../BaseComponents/WixComponent";
import RadioButton from './RadioButton';

export interface RadioGroupProps extends WixComponentProps {
  onChange?: Function,
  value?: string | number,
  disabledRadios?: (string | number)[],
  vAlign?: RadioGroupVerticalAlign,
  disabled?: boolean,
  type?: RadioGroupType,
  display?: RadioGroupDisplay,
  selectionArea?: RadioGroupSelectionArea,
  children?: any,
  spacing?: string,
  lineHeight?: string,
}

export type RadioGroupVerticalAlign = 'center' | 'top';
export type RadioGroupType = 'default' | 'button';
export type RadioGroupDisplay = 'vertical' | 'horizontal';
export type RadioGroupSelectionArea = 'none' | 'hover' | 'always';

export default class RadioGroup extends React.PureComponent<RadioGroupProps> {
  static Radio: RadioButton
}
