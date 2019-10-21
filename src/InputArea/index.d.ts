import * as React from 'react';
import {WixComponentProps} from "../BaseComponents/WixComponent";

export interface InputAreaProps extends WixComponentProps {
  ariaControls?: string,
  ariaDescribedby?: string,
  ariaLabel?: string,
  autoFocus?: boolean,
  autoSelect?: boolean,
  dataHook?: string,
  size?: InputAreaSize,
  defaultValue?: string,
  disabled?: boolean,
  error?: boolean,
  errorMessage?: string,
  forceFocus?: boolean,
  forceHover?: boolean,
  hasCounter?: boolean,
  id?: string,
  name?: string,
  maxHeight?: string,
  maxLength?: number,
  menuArrow?: boolean,
  minHeight?: string,
  onBlur?: Function,
  onChange?: Function,
  onClear?: Function,
  onEnterPressed?: Function,
  onEscapePressed?: Function,
  onFocus?: Function,
  onKeyDown?: Function,
  onKeyUp?: Function,
  onTooltipShow?: Function,
  placeholder?: string,
  readOnly?: boolean,
  resizable?: boolean,
  rows?: number,
  autoGrow?: boolean,
  minRowsAutoGrow?: number,
  style?: InputAreaStyle,
  tabIndex?: number,
  theme?: InputAreaTheme,
  tooltipPlacement?: string,
  value?: string,
}

export type InputAreaSize = 'small' | 'normal';
export type InputAreaStyle = 'normal' | 'paneltitle' | 'material' | 'amaterial';
export type InputAreaTheme = 'normal' | 'paneltitle' | 'material' | 'amaterial';

export default class InputArea extends React.Component<InputAreaProps> {
}
