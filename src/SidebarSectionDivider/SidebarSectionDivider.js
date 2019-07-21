import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from './SidebarSectionDivider.st.css';

/** A divider that separates sections within the sidebar */
class SidebarSectionDivider extends React.PureComponent {
  static displayName = 'SidebarSectionDivider';

  static propTypes = {
    /** Applied as data-hook HTML attribute that can be used in the tests */
    dataHook: PropTypes.string,
    /** Indicates whether to remove the margin from sides */
    fullWidth: PropTypes.bool,
  };

  render() {
    const { dataHook, fullWidth } = this.props;

    return (
      <hr
        data-hook={dataHook}
        className={classNames(styles.root, fullWidth && styles.fullWidth)}
      />
    );
  }
}

export default SidebarSectionDivider;
