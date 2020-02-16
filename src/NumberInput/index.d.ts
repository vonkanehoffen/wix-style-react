import * as React from 'react';

import {InputProps} from '../Input';

export default interface NumberInputProps extends InputProps {
  strict?: boolean;
}

export class NumberInput extends React.PureComponent<NumberInputProps> {}
