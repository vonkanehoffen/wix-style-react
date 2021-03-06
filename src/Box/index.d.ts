import * as React from 'react';
import {Omit} from '../common';

export interface BoxProps extends Omit<React.CSSProperties, 'direction'> {
  inline?: boolean;
  className?: string;
  direction?: BoxDirection;
  align?: BoxHorizontalAlignment;
  verticalAlign?: BoxVerticalAlignment;
  dataHook?: string;
  padding?: BoxCssSizingProperty;
  paddingTop?: BoxCssSizingProperty;
  paddingRight?: BoxCssSizingProperty;
  paddingBottom?: BoxCssSizingProperty;
  paddingLeft?: BoxCssSizingProperty;
  margin?: BoxCssSizingProperty;
  marginTop?: BoxCssSizingProperty;
  marginRight?: BoxCssSizingProperty;
  marginBottom?: BoxCssSizingProperty;
  marginLeft?: BoxCssSizingProperty;
  minWidth?: BoxCssSizingProperty;
  maxWidth?: BoxCssSizingProperty;
  width?: BoxCssSizingProperty;
  minHeight?: BoxCssSizingProperty;
  maxHeight?: BoxCssSizingProperty;
  height?: BoxCssSizingProperty;
}

declare const Box: React.SFC<BoxProps>;
export default Box;

export type BoxDirection = 'horizontal' | 'vertical';

export type BoxHorizontalAlignment =
  | 'left'
  | 'center'
  | 'right'
  | 'space-between';

export type BoxVerticalAlignment =
  | 'top'
  | 'middle'
  | 'bottom'
  | 'space-between';

export type BoxSpacing = 'tiny' | 'small' | 'medium' | 'large';

type BoxCssSizingProperty = string | number;
