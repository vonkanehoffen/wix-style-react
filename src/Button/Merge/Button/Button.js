import React from 'react';
import {
  oneOfType,
  string,
  node,
  oneOf,
  element,
  object,
  bool,
  func,
} from 'prop-types';
import ButtonM from '../../Button';

function Button(props) {
  return <ButtonM {...props}>{props.children}</ButtonM>;
}

Button.propTypes = {
  /** render as some other component or DOM tag */
  as: oneOfType([func, object, string]),
  /** Additional classes */
  className: string,
  /** Skins of Button content */
  skin: oneOf([
    'standard',
    'inverted',
    'destructive',
    'premium',
    'dark',
    'light',
    'transparent',
    'premium-light',
  ]),
  /** Underline of Button content */
  priority: oneOf(['primary', 'secondary']),
  /** Size of Button content */
  size: oneOf(['tiny', 'small', 'medium', 'large']),
  /** Click event handler  */
  onClick: func,
  /** Sets button width to 100% */
  fullWidth: bool,
  /** Element based icon (svg, image etc.) */
  suffixIcon: element,
  /** Element based icon (svg, image etc.) */
  prefixIcon: element,
  /** Applies disabled styles */
  disabled: bool,
  /** String based node */
  children: node,
  /** String based data hook */
  dataHook: string,
};

export default Button;
