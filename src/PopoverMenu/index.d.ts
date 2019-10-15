import * as React from 'react';

export interface PopoverMenuProps {
  dataHook?: string,
  size?: PopoverMenuSize,
  placement?: PopoverMenuPlacement,
  buttonTheme?: PopoverMenuButtonTheme,
  buttonHeight?: PopoverMenuButtonHeight,
  maxWidth?: string | number,
  appendToParent?: boolean,
  appendTo?: HTMLElement | Function | 'window' | 'scrollParent' | 'viewPort' | 'parent',
  zIndex?: number,
  showArrow?: boolean,
  onShow?: Function,
  onHide?: Function,
  moveBy?: {
    x?: number,
    y?: number,
  },
}

export type PopoverMenuSize = 'normal' | 'large';
export type PopoverMenuPlacement = 'top' | 'right' | 'bottom' | 'left';
export type PopoverMenuButtonTheme = 'icon-greybackground' | 'icon-standard' | 'icon-standardsecondary' | 'icon-white' | 'icon-whitesecondary';
export type PopoverMenuButtonHeight = 'small' | 'medium' | 'large';

export default class PopoverMenu extends React.Component<PopoverMenuProps> {
}
