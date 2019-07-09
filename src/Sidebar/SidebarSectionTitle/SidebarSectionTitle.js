import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './SidebarSectionTitle.scss';

class SidebarSectionTitle extends Component {
  static propTypes = {
    /** Usually plain text, but could be any renderable node */
    children: PropTypes.node,
  };

  render() {
    const { children } = this.props;

    return <div className={styles.root}>{children}</div>;
  }
}

export default SidebarSectionTitle;
