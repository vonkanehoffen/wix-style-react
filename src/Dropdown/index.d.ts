import * as React from 'react';
import {InputWithOptionsProps} from "../InputWithOptions";
import {DropdownLayoutProps} from "../DropdownLayout";

export interface DropdownProps extends InputWithOptionsProps {
  selectedId?: DropdownLayoutProps.selectedId,
  initialSelectedId?: DropdownLayoutProps.selectedId,
}

export default class Dropdown extends React.PureComponent<DropdownProps> {
}
