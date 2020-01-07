import * as React from 'react';


export interface VariableInputProps {
  className?: string,
  dataHook?: string;
  initialValue: string,
  onChange: (value:string) => void,
  onSubmit: (value:string) => void,
  variableParser: (value:string) => string|boolean,
  variableTemplate: {
    prefix: string,
    suffix: string,
  },
}

export default class VariableInput extends React.PureComponent<VariableInputProps>{}
