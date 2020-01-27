import React from 'react';
import PropTypes from 'prop-types';
import styles from './Theme.st.css';

/** Customize colors */
class Theme extends React.PureComponent {
  render() {
    const { theme, children } = this.props;

    return (
      <span {...styles('root', { theme }, this.props)} children={children} />
    );
  }
}

Theme.displayName = 'Theme';

Theme.propTypes = {
  theme: PropTypes.string,
};

Theme.defaultProps = {
  theme: 'standard',
};

export default Theme;
