import * as React from 'react';
import {TooltipProps} from "../Tooltip";

export interface FormFieldProps {
  children?: React.ReactNode | Function,
  stretchContent?: boolean,
  label?: React.ReactNode,
  labelSize?: FormFieldLabelSize,
  labelPlacement?: FormFieldPlacement,
  required?: boolean,
  infoContent?: React.ReactNode,
  infoTooltipProps?: TooltipProps,
  id?: string,
  dataHook?: string,
}

export type FormFieldLabelSize = 'small' | 'medium';
export type FormFieldPlacement = 'top' | 'right' | 'left';

export default class FormField extends React.PureComponent<FormFieldProps> {
}
