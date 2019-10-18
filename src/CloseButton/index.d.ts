import * as React from 'react';

export interface CloseButtonProps {
  as?: Function | object | string,
  className?: string,
  children?: Reqct.ReactNode,
  skin?: CloseButtonSkin,
  size?: CloseButtonSize,
  onClick?: Function,
  disabled?: boolean,
  dataHook?: string,
}

export type CloseButtonSkin = 'standard' | 'standardFilled' | 'light' | 'lightFilled' | 'dark' | 'transparent';
export type CloseButtonSize = 'small' | 'medium';

export default class CloseButton extends React.Component<CloseButtonProps> {
}
