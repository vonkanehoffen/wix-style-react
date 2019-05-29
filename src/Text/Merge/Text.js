import React from 'react';
import { node, oneOf, bool, string } from 'prop-types';
import TextM from '../Text';

function Text(props) {
  return <TextM {...props}>{props.children}</TextM>;
}

export const SIZES = {
  tiny: 'tiny',
  small: 'small',
  medium: 'medium',
};

export const SKINS = {
  standard: 'standard',
  error: 'error',
  success: 'success',
  premium: 'premium',
  disabled: 'disabled',
};

export const WEIGHTS = {
  thin: 'thin',
  normal: 'normal',
  bold: 'bold',
};

Text.propTypes = {
  dataHook: string,
  /** tag name that will be rendered */
  tagName: string,

  /** class to be applied to the root element */
  className: string,

  /** font size of the text */
  size: oneOf(Object.keys(SIZES)),

  /** any nodes to be rendered (usually text nodes) */
  children: node,

  /** is the text type is secondary. Affects the font color */
  secondary: bool,

  /** skin color of the text */
  skin: oneOf(Object.keys(SKINS)),

  /** is the text has dark or light skin */
  light: bool,

  /** font weight of the text */
  weight: oneOf(Object.keys(WEIGHTS)),
};

Text.defaultProps = {
  children: 'Some text.',
  light: false,
  secondary: false,
  size: SIZES.medium,
  skin: SKINS.standard,
  tagName: 'span',
  weight: WEIGHTS.thin,
};

export default Text;
