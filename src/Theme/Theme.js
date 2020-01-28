import React from 'react';
import PropTypes from 'prop-types';
import styles from './Theme.st.css';
import calc_theme from './calc_theme';

/** Customize colors */
class Theme extends React.PureComponent {
  render() {
    const { theme, children, color } = this.props;

    return (
      <span
        {...styles('root', { theme }, this.props)}
        children={children}
        style={color && calc_theme(color)}
      />
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
