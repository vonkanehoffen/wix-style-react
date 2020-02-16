import * as React from 'react';
import WixComponent, {
  WixComponentProps,
} from '../../BaseComponents/WixComponent';
import { IconElement } from '../../common';
import { ButtonSize } from '../../Button';

export interface MessageBoxFunctionalLayoutProps extends WixComponentProps {
  hideFooter?: boolean;
  confirmText?: React.ReactNode;
  confirmPrefixIcon?: IconElement;
  confirmSuffixIcon?: IconElement;
  cancelText?: React.ReactNode;
  cancelPrefixIcon?: IconElement;
  cancelSuffixIcon?: IconElement;
  theme?: MessageBoxFunctionalLayoutTheme;
  onOk?: React.MouseEventHandler<HTMLButtonElement>;
  onCancel?: React.MouseEventHandler<HTMLButtonElement>;
  onClose?: React.MouseEventHandler<HTMLButtonElement>;
  width?: string;
  margin?: string;
  title?: React.ReactNode;
  maxHeight?: string | number;
  buttonsHeight?: ButtonSize;
  closeButton?: boolean;
  disableCancel?: boolean;
  disableConfirmation?: boolean;
  noBodyPadding?: boolean;
  footerBottomChildren?: React.ReactNode;
  fullscreen?: boolean;
  withEmptyState?: boolean;
  sideActions?: React.ReactNode;
  image?: React.ReactNode;
}

export default class MessageBoxFunctionalLayout extends WixComponent<
  MessageBoxFunctionalLayoutProps
> {}

export type MessageBoxFunctionalLayoutTheme =
  | 'red'
  | 'blue'
  | 'purple'
  | 'green';

export const HeaderLayout: React.SFC<HeaderLayoutProps>;
export interface HeaderLayoutProps {
  title?: React.ReactNode;
  onCancel?: React.MouseEventHandler<HTMLButtonElement>;
  closeButton?: boolean;
  theme?: HeaderLayoutTheme;
}
export type HeaderLayoutTheme =
  | 'red'
  | 'green'
  | 'blue'
  | 'lightGreen'
  | 'purple';

export const FooterLayout: React.SFC<FooterLayoutProps>;
export interface FooterLayoutProps {
  confirmText?: React.ReactNode;
  confirmPrefixIcon?: IconElement;
  confirmSuffixIcon?: IconElement;
  cancelText?: React.ReactNode;
  cancelPrefixIcon?: IconElement;
  cancelSuffixIcon?: IconElement;
  onCancel?: React.MouseEventHandler<HTMLButtonElement>;
  onOk?: React.MouseEventHandler<HTMLButtonElement>;
  enableOk?: boolean;
  enableCancel?: boolean;
  theme?: string;
  buttonsHeight?: string;
  bottomChildren?: React.ReactNode;
  sideActions?: React.ReactNode;
}
