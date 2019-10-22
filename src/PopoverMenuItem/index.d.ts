import * as React from 'react';
import WixComponent, {WixComponentProps} from "../BaseComponents/WixComponent";

export interface PopoverMenuItemProps extends WixComponentProps {
  icon?: React.ReactNode,
  text?: React.ReactNode,
  onClick?: Function,
  size?: PopoverMenuItemSize,
  disabled?: boolean,
  divider?: boolean,
}

export type PopoverMenuItemSize = 'normal' | 'large';

export default class PopoverMenuItem extends WixComponent<PopoverMenuItemProps> {
}
