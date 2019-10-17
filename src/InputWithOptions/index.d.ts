import * as React from 'react';
import {InputProps, InputTheme} from '../Input'
import {DropdownLayoutProps} from '../DropdownLayout'
import {PopoverPlacement} from '../Popover'

export interface InputWithOptionsProps extends InputProps, DropdownLayoutProps {
  theme?: InputTheme | string,
  autocomplete?: string,
  inputElement?: React.ReactElement,
  closeOnSelect?: boolean,
  onManuallyInput?: Function,
  valueParser?: Function,
  dropdownWidth?: string,
  dropdownOffsetLeft?: string,
  showOptionsIfEmptyInput?: boolean,
  highlight?: boolean,
  native?: boolean,
  popoverProps?: {
    appendTo?: 'window' | 'scrollParent' |'parent' | 'viewport',
    maxWidth?: string | number,
    minWidth?: string | number,
    flip?: boolean,
    fixed?: boolean,
    placement?: PopoverPlacement,
    dynamicWidth?: boolean,
  },
}

export default class InputWithOptions extends React.Component<InputWithOptionsProps> {
  blur: Function;
  focus: Function;
  select: Function;
}
