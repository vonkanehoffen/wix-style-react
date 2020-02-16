import * as React from 'react';
import {
  IconElement,
  WixComponent,
  WixComponentProps,
} from '../BaseComponents';

export interface PopoverMenuItemProps extends WixComponentProps {
  icon?: IconElement;
  text?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  size?: PopoverMenuItemSize;
  disabled?: boolean;
  divider?: boolean;
}

export default class PopoverMenuItem extends WixComponent<
  PopoverMenuItemProps
> {}

export type PopoverMenuItemSize = 'normal' | 'large';
