import * as React from 'react';

export interface InputProps {
  children?: React.ReactNode,
  value?: string,
}

export default class Input extends React.Component<InputProps> {}
