import React from 'react';
import PropTypes from 'prop-types';
import { withFocusable } from 'wix-ui-core/dist/src/hocs/Focusable';
import ChevronRight from 'wix-ui-icons-common/ChevronRight';

import styles from './SidebarSectionItem.st.css';
import Text from '../Text';

/** An item for the section within the sidebar */
class SidebarSectionItem extends React.PureComponent {
  static displayName = 'SidebarSectionItem';

  static propTypes = {
    /** Applied as data-hook HTML attribute that can be used in the tests */
    dataHook: PropTypes.string,
    /** Usually plain text, but could be any node */
    children: PropTypes.node.isRequired,
    /** An element to appear at the beginning of the text */
    prefix: PropTypes.node,
    /** An element to appear at the end of the text */
    suffix: PropTypes.node,
    /** Indicates whether to display the item as selected */
    selected: PropTypes.bool,
    /** Indicates whether to display the item as disabled */
    disabled: PropTypes.bool,
    /** A callback to be triggered on click */
    onClick: PropTypes.func,
  };

  render() {
    const {
      dataHook,
      children,
      selected,
      disabled,
      prefix,
      suffix,
      onClick,
    } = this.props;

    return (
      <div
        data-hook={dataHook}
        onClick={!disabled && onClick}
        {...styles('root', { selected, disabled }, this.props)}
      >
        {prefix && <span className={styles.prefix}>{prefix}</span>}
        <Text className={styles.text} size="small" weight="bold" light ellipsis>
          {children}
        </Text>
        {!disabled && <ChevronRight className={styles.chevron} />}
        {!disabled && suffix && <span className={styles.suffix}>{suffix}</span>}
      </div>
    );
  }
}

export default withFocusable(SidebarSectionItem);
