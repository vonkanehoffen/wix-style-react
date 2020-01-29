import React from 'react';
import PropTypes from 'prop-types';
import styles from './Theme.st.css';
import calc_theme from './calc_theme';

/** Customize colors */
class Theme extends React.PureComponent {
  render() {
    const { theme, children, custom = {} } = this.props;
    const style = {};

    if (custom) {
      if (custom.hasOwnProperty('color'))
        Object.assign(style, calc_theme(custom.color));

      if (custom.hasOwnProperty('radius'))
        style['--wsr-theme-radius'] = custom.radius;

      if (custom.hasOwnProperty('fontFamily'))
        style['--wsr-theme-font-family'] = custom.fontFamily;

      if (custom.hasOwnProperty('fontSize'))
        style['--wsr-theme-font-size'] = custom.fontSize;

      if (custom.hasOwnProperty('borders')) {
        ['top', 'left', 'bottom', 'right'].forEach(
          border =>
            (style[`--wsr-theme-borders-${border}`] =
              !custom.borders.includes(border) && 'transparent'),
        );
      }
    }

    return (
      <span
        {...styles('root', { theme }, this.props)}
        children={children}
        style={style}
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
