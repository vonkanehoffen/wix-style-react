import React from 'react';
import Layout from '../Layout';
import Cell from '../../Cell/Cell';

export default (
  <Layout uxpId="layout1">
    <Cell span={12} uxpId="cell1">
      #header
    </Cell>
    <Cell span={4} uxpId="cell2">
      #left
    </Cell>
    <Cell span={4} uxpId="cell3">
      #middle
    </Cell>
    <Cell span={4} uxpId="cell4">
      #right
    </Cell>
    <Cell span={12} uxpId="cell5">
      #footer
    </Cell>
  </Layout>
);
