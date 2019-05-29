import React from 'react';
import { number, node, bool } from 'prop-types';
import CellM from '../Cell/index';

function Cell(props) {
  return <CellM {...props}>{props.children}</CellM>;
}

Cell.propTypes = {
  /** any node to be rendered inside */
  children: node,

  /** how many columns should this cell occupy. Can be any number from 1 to 12 inclusive */
  span: number,

  /** whether to align children vertically to the middle */
  vertical: bool,
};

Cell.defaultProps = {
  span: 12,
  children: 'Cell contents',
};

export default Cell;
