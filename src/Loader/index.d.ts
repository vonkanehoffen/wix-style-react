import * as React from 'react';
import {WixComponentProps} from "../BaseComponents/WixComponent";

export interface LoaderProps extends WixComponentProps {
  size?: LoaderSize,
  color?: LoaderColor,
  text?: React.ReactNode,
  status?: LoaderStatus,
  statusMessage?: string,
  shouldLoadAsync?: boolean,
}

export type LoaderSize = 'tiny' | 'small' | 'medium' | 'large';
export type LoaderColor = 'blue' | 'white';
export type LoaderStatus = 'loading' | 'success' | 'error';

export default class Loader extends React.PureComponent<LoaderProps> {
}
