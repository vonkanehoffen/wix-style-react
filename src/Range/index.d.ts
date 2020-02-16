import * as React from 'react';

export default interface RangeProps {
  required?: boolean;
  info?: string;
  dataHook?: string;
  style?: string;
  appendToParent?: boolean;
}

export class Range extends React.Component<RangeProps> {}
