import * as React from 'react';
import {ButtonWithAsProp} from '../Button';
import CloseButton from '../CloseButton';

export interface NotificationProps {
  dataHook?: string;
  show?: boolean;
  theme?: 'standard' | 'error' | 'success' | 'warning' | 'premium';
  type?: 'local' | 'global' | 'sticky';
  autoHideTimeout?: number;
  zIndex?: number;
  onClose?: (source: string) => void;
}

export default class Notification extends React.Component<NotificationProps> {
  static ActionButton: typeof ActionButton;
  static TextLabel: typeof TextLabel;
  static CloseButton: typeof CloseButton;
}

declare const TextLabel: React.SFC;
declare const ActionButton: React.SFC<ActionButtonProps>;
type ActionButtonProps = ButtonWithAsProp<{
  link?: boolean;
  type?: string;
  target?: string;
}>;
