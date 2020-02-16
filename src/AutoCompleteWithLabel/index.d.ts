import * as React from 'react';
import {InputStatus} from '../Input';

export interface AutoCompleteWithLabelProps {
  dataHook?: string;
  label: string;
  suffix?: React.ReactNode[];
  options: DropdownLayoutOption[];
  status?: InputStatus;
  statusMessage?: React.ReactNode;
  onFocus?: React.FocusEventHandler<HTMLInputElement>;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  name?: string;
  type?: string;
  ariaLabel?: string;
  autoFocus?: boolean;
  autocomplete?: string;
  disabled?: boolean;
  className?: string;
  maxLength?: number;
  placeholder?: string;
  onSelect?: (option: DropdownLayoutValueOption) => void;
  native?: boolean;
}

export default class AutoCompleteWithLabel extends React.Component<
  AutoCompleteWithLabelProps
> {}

export type DropdownLayoutOption =
  | DropdownLayoutValueOption
  | DropdownLayoutDividerOption;

export type DropdownLayoutValueOption = {
  id: string | number;
  value: React.ReactNode | string | RenderOptionFn;
  disabled?: boolean;
  title?: boolean;
  linkTo?: string;
  overrideStyle?: boolean;
};

export type RenderOptionFn = (options: {
  selected: boolean;
  hovered: boolean;
  disabled: boolean;
}) => JSX.Element;

export type DropdownLayoutDividerOption = {
  value: '-';
  id?: string | number;
};
