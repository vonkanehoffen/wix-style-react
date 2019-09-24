import React from 'react';

import LabelledElement from '../LabelledElement';
import Input from '../Input';
import Text from '../Text';
import { PropTypes } from 'prop-types';
import styles from './InputWithLabel.st.css';
import dataHooks from './dataHooks';

class InputWithLabel extends React.Component {
  static propTypes = {
    ...Input.propTypes,
    /** Array of suffix icons */
    suffix: PropTypes.arrayOf(PropTypes.element),
    /** Text of rendered label */
    label: PropTypes.string,
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
