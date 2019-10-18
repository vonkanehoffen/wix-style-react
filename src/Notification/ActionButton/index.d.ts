import * as React from 'react';

export interface ActionButtonProps {
  children?: any,
  onClick?: Function,
  link?: string,
  type?: string,
  target?: string,
}

declare const ActionButton: React.FunctionComponent<ActionButtonProps>;
export default ActionButton;
