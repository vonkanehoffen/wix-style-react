import * as React from 'react';
import {WixComponentProps} from "../BaseComponents/WixComponent";

export interface SectionHelperProps extends WixComponentProps {
  appearance?: SectionHelperAppearance,
  title?: React.ReactNode,
  showCloseButton?: boolean,
  onClose?: Function,
  onAction?: Function,
  actionText?: string,
  children?: React.ReactNode,
  fullWidth?: boolean,
}

export type SectionHelperAppearance = 'warning' |'standard' | 'danger' |'success' | 'premium' | 'preview' | 'experimental-dark';

export default class SectionHelper extends React.PureComponent<SectionHelperProps> {
}
