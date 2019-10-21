import * as React from 'react';
import { TooltipProps } from '../Tooltip';

export type FormFieldFunctionalChildrenArg = {
  setCharactersLeft: (left: number) => void;
};

export type FormFieldFunctionalChildren = (
  arg: FormFieldFunctionalChildrenArg,
) => React.ReactNode;

export interface FormFieldProps {
  children?: React.ReactNode | FormFieldFunctionalChildren;
  stretchContent?: boolean;
  label?: React.ReactNode;
  labelSize?: FormFieldLabelSize;
  labelPlacement?: FormFieldPlacement;
  required?: boolean;
  infoContent?: React.ReactNode;
  infoTooltipProps?: TooltipProps;
  id?: string;
  dataHook?: string;
}

export type FormFieldLabelSize = 'small' | 'medium';
export type FormFieldPlacement = 'top' | 'right' | 'left';

export default class FormField extends React.PureComponent<FormFieldProps> {}
