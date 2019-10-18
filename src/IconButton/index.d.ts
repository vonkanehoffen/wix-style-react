import * as React from 'react';

export interface IconButtonProps {
  as?: Function | object | string
  className?: string,
  children?: React.ReactNode,
  skin?: IconButtonSkin,
  priority?: IconButtonPriority,
  size?: IconButtonSize,
  onClick?: Function,
  disabled?: boolean,
  dataHook?: string,
}

export type IconButtonSkin = 'standard' | 'inverted' | 'light' | 'transparent' | 'premium';
export type IconButtonPriority = 'primary' | 'secondary';
export type IconButtonSize = 'tiny' | 'small' | 'medium' | 'large';

export default class IconButton extends React.Component<IconButtonProps> {
}
