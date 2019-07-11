import React from 'react';
import { GeneralStructure } from '../../sharedComponents';
import PageExamples from './examples/PageExamples';
import CardExamples from './examples/CardExamples';
import TableExamples from './examples/TableExamples';

const LayoutFamily = () => (
  <GeneralStructure title="2. Layout" showPreview={false}>
    <PageExamples />
    <CardExamples />
    <TableExamples />
  </GeneralStructure>
);

export default LayoutFamily;
