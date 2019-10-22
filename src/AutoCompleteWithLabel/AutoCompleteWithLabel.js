import React from 'react';
import PropTypes from 'prop-types';

import Input from '../Input';
import LabelledElement from '../LabelledElement';
import Text from '../Text';

import InputWithOptions from '../InputWithOptions';
import styles from './AutoCompleteWithLabel.scss';

import dataHooks from './dataHooks';
import { optionValidator } from '../DropdownLayout/DropdownLayout';

class AutoCompleteWithLabel extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      value: props.value || '',
    };
  }

  static propTypes = {
    dataHook: PropTypes.string,
    /** label to appear in input */
    label: PropTypes.string.isRequired,
    /** options to appear in dropdown */
    options: PropTypes.arrayOf(optionValidator).isRequired,
    /** add suffix to input */
    suffix: PropTypes.arrayOf(PropTypes.element),
    /** input status - error, warning or loading */
    status: PropTypes.oneOf(['error', 'warning', 'loading']),
    /** JSX element that appears upon error */
    statusMessage: PropTypes.node,
  };

  static defaultProps = {
    ...Input.defaultProps,
    label: '',
    options: [],
  };

  onSelect = option => {
    const { value } = option;
    this.setState({
      value,
    });
  };

  onChange = event => {
    this.setState({ value: event.target.value });
  };

  render() {
    const {
      label,
      dataHook,
      options,
      status,
      suffix,
      statusMessage,
    } = this.props;
    const { value } = this.state;
    const filteredOptions = value
      ? options.filter(option =>
          option.value.toLowerCase().includes(value.toLowerCase()),
        )
      : options;

    const suffixContainer = suffix
      ? suffix.map((item, index) => {
          return (
            <div key={`${dataHook}-${index}`} className={styles.groupIcon}>
              {item}
            </div>
          );
        })
      : [];

    return (
      <div data-hook={dataHook}>
        <LabelledElement
          value={value}
          label={label}
          dataHook={dataHooks.labelledElement}
        >
          <InputWithOptions
            onChange={this.onChange}
            onSelect={this.onSelect}
            dataHook={dataHooks.inputWithOptions}
            hideStatusSuffix
            inputElement={
              <Input
                dataHook={dataHooks.inputWithLabel}
                value={value}
                className={styles.inputContainer}
                suffix={suffixContainer}
                status={status}
              />
            }
            options={filteredOptions}
            value={value}
          />
        </LabelledElement>
        {status === Input.StatusError && statusMessage && (
          <Text
            dataHook={dataHooks.errorMessage}
            skin="error"
            weight="normal"
            size="small"
            className={styles.statusMessage}
          >
            {statusMessage}
          </Text>
        )}
      </div>
    );
  }
}

export default AutoCompleteWithLabel;
