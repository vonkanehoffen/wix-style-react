import React from 'react';
import PropTypes from 'prop-types';

import Heading from '../../Heading';
import Tooltip from '../../Tooltip';

import DataHooks from './dataHooks';
import styles from './AdaptiveHeading.st.css';

/** AdaptiveHeading */
class AdaptiveHeading extends React.PureComponent {
  static displayName = 'AdaptiveHeading';

  static propTypes = {
    dataHook: PropTypes.string,

    /** Usual (long) version of header*/
    text: PropTypes.string.isRequired,
    /** Short version text */
    textInShort: PropTypes.string,
    /** Tag name: H1-H6 */
    appearance: PropTypes.string,
    /** Use light theme */
    light: PropTypes.bool,
  };

  render() {
    const {
      dataHook,
      text,
      textInShort,
      appearance = 'H1',
      light,
    } = this.props;

    if (!textInShort) {
      return (
        <Heading
          ellipsis
          appearance={appearance}
          dataHook={dataHook}
          light={light}
        >
          {text}
        </Heading>
      );
    }

    return (
      <Heading
        {...styles('headerWrapper', { appearance }, this.props)}
        data-hook={dataHook}
        appearance={appearance}
        light={light}
      >
        <div className={styles.headerShort}>
          <Tooltip
            upgrade
            {...styles('tooltip', {}, this.props)}
            content={text}
          >
            <span
              data-hook={DataHooks.textInShort}
              aria-hidden="true"
              title={text}
            >
              {textInShort}
            </span>
          </Tooltip>
        </div>
        <span data-hook={DataHooks.text} className={styles.headerFull}>
          {text}
        </span>
      </Heading>
    );
  }
}

export default AdaptiveHeading;
