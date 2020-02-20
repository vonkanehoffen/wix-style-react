import * as React from 'react';
import {BadgeSize, BadgeType, BadgeSkin} from '../Badge';

export interface BadgeSelectProps {
  options?: BadgeSelectOption[];
  selectedId?: string;
  onSelect?: (option: BadgeSelectOption) => void;
  size?: BadgeSize;
  type?: BadgeType;
  uppercase?: boolean;
  dataHook?: string;
}

export default class BadgeSelect extends React.Component<BadgeSelectProps> {
  hideDropdown: () => void;
  showDropdown: () => void;
  toggleDropdown: () => void;
  getSelectedOption: (props: any) => BadgeSelectOption;
}

export interface BadgeSelectOption {
  id: string;
  skin: BadgeSkin;
  text: string;
}
