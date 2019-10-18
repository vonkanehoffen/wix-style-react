import * as React from 'react';
import {WixComponentProps} from "../BaseComponents/WixComponent";
import TextLabel from './TextLabel';
import CloseButton from '../CloseButton';
import ActionButton from './ActionButton';

export interface NotificationProps extends WixComponentProps {
  show?: boolean,
  theme?: NotificationTheme,
  type?: NotificationType;
  autoHideTimeout?: number,
  zIndex?: number,
  onClose?: Function,
  children?: any,
}

export type NotificationTheme = 'standard' | 'error' | 'success' | 'warning' | 'premium';
export type NotificationType = 'local' | 'global' | 'sticky';

export default class Notification extends React.PureComponent<NotificationProps> {
  static CloseButton: typeof CloseButton;
  static TextLabel: typeof TextLabel;
  static ActionButton: typeof ActionButton;
}
