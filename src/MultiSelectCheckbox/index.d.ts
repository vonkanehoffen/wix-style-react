import InputWithOptions, {ManualInputFnSignature, InputWithOptionsProps} from '../InputWithOptions';
import {DropdownLayoutValueOption} from '../DropdownLayout';

export interface MultiSelectCheckboxProps
  extends InputWithOptionsProps<
    ManualInputFnSignature,
    OnSelectFnSignature
  > {
  selectedOptions?: DropdownLayoutValueOption[];
  onDeselect?: (
    id: DropdownLayoutValueOption['id'],
    option: DropdownLayoutValueOption,
  ) => void;
  delimiter?: string;
}

export default class MultiSelectCheckbox extends InputWithOptions<
  ManualInputFnSignature,
  OnSelectFnSignature,
  MultiSelectCheckboxProps
> {}

export type OnSelectFnSignature = (
  id: DropdownLayoutValueOption['id'],
  option: DropdownLayoutValueOption,
) => void;
