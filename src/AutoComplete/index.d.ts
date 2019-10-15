import * as React from 'react';
import {InputWithOptionsProps} from "../InputWithOptions";

export interface AutoCompleteProps extends InputWithOptionsProps {
  predicate?: Function,
}

export default class AutoComplete extends React.PureComponent<AutoCompleteProps> {
}
