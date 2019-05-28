import React from 'react';
import { number, node, string } from 'prop-types';
import LayoutM from '../Layout/index';

function Layout(props) {
  return <LayoutM {...props}>{props.children}</LayoutM>;
}

Layout.propTypes = {
  /** one or more Cell components. Other nodes are accepted although not recommended */
  children: node,

  /** distance between cells both vertically and horizontally */
  gap: string,

  /** set custom amount of columns to be rendered. Default is 12 which means at `<Cell span={12}/>` occupies all columns, in other words, full width */
  cols: number,

  /** is used to justify the grid items along the row axis */
  justifyItems: string,

  /** is used to aligns the grid items along the column axis */
  alignItems: string,
};

Layout.defaultProps = {
  gap: '30px',
};
export default Layout;
