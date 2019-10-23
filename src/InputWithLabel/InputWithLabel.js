import React from 'react';

import LabelledElement from '../LabelledElement';
import Input from '../Input';
import Text from '../Text';
import { PropTypes } from 'prop-types';
import styles from './InputWithLabel.st.css';
import dataHooks from './dataHooks';

class InputWithLabel extends React.Component {
  static propTypes = {
    /** Applied as data-hook HTML attribute that can be used in the tests */
    dataHook: PropTypes.string,
    /** Array of suffix icons */
    suffix: PropTypes.arrayOf(PropTypes.element),
    /** Text of rendered label */
    label: PropTypes.string,
    /** Input value */
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    /** Input status - use to display an status indication for the user. for example: 'error', 'warning' or 'loading' */
    status: PropTypes.oneOf([
      Input.StatusError,
      Input.StatusWarning,
      Input.StatusLoading,
    ]),
    /** The status (error/loading) message to display when hovering the status icon, if not given or empty there will be no tooltip */
    statusMessage: PropTypes.node,
    /** Standard input onFocus callback */
    onFocus: PropTypes.func,
    /** Standard input onBlur callback */
    onBlur: PropTypes.func,
    /** Standard input onChange callback */
    onChange: PropTypes.func,
  };

  static defaultProps = {
    statusMessage: '',
  };

  render() {
    const {
      label,
      suffix,
      value,
      dataHook,
      status,
      statusMessage,
      onChange,
      onFocus,
      onBlur,
    } = this.props;
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
      <div
        data-hook={dataHook}
        className={status ? undefined : styles.statusMessagePlaceholder}
      >
        <LabelledElement
          value={value}
          label={label}
          dataHook={dataHooks.labelledElement}
        >
          <Input
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
            dataHook={dataHooks.input}
            className={styles.inputContainer}
            size="large"
            value={value}
            suffix={suffixContainer}
            status={status}
            hideStatusSuffix
          />
        </LabelledElement>
        {status === Input.StatusError && statusMessage && (
          <Text
            dataHook={dataHooks.errorMessage}
            skin="error"
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

export default InputWithLabel;
