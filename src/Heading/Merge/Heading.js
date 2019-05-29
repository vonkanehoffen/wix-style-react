import React from 'react';
import { node, oneOf, bool } from 'prop-types';
import HeadingM from '../Heading';

function Heading(props) {
  return <HeadingM {...props}>{props.children}</HeadingM>;
}

export const APPEARANCES = {
  H1: 'H1',
  H2: 'H2',
  H3: 'H3',
  H4: 'H4',
  H5: 'H5',
  H6: 'H6',
};

Heading.propTypes = {
  /** any nodes to be rendered (usually text nodes) */
  children: node,

  /** is the text has dark or light skin */
  light: bool,

  /** typography of the heading */
  appearance: oneOf(Object.keys(APPEARANCES)),
};

Heading.defaultProps = {
  appearance: APPEARANCES.H1,
  light: false,
  children: 'My amazing title',
};

export default Heading;
