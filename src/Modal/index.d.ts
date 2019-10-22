import * as React from 'react';
import WixComponent, {WixComponentProps} from "../BaseComponents/WixComponent";

export interface ModalProps extends WixComponentProps {
  isOpen: boolean,
  borderRadius?: number,
  contentLabel?: string,
  theme?: ModalTheme,
  children?: any,
  zIndex?: number,
  shouldCloseOnOverlayClick?: boolean,
  shouldDisplayCloseButton?: boolean,
  onRequestClose?: Function,
  onOk?: Function,
  onAfterOpen?: Function,
  horizontalPosition?: ModalHorizontalPosition,
  verticalPosition?: ModalVerticalPosition,
  closeTimeoutMS?: number,
  scrollable?: boolean,
  scrollableContent?: boolean,
  maxHeight?: string,
  height?: string,
  overlayPosition?: ModalOverlayPosition,
  parentSelector?: Function,
  appElement?: string,
}

export type ModalTheme = 'blue' | 'red' | 'green' | 'white';
export type ModalHorizontalPosition = 'start' | 'center' | 'end';
export type ModalVerticalPosition = 'start' | 'center' | 'end';
export type ModalOverlayPosition = 'static' | 'relative' | 'absolute' |'fixed' | 'sticky';

export default class Modal extends WixComponent<ModalProps> {
  handleOverlayClick: (event: React.MouseEvent) => void;
  renderCloseButton: () => void;
}
