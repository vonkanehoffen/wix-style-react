import React from 'react';
import PropTypes from 'prop-types';
import typography from '../../Typography';
import WixComponent from '../../BaseComponents/WixComponent';
import styles from './TextLinkLayout.scss';
import classNames from 'classnames';

const ICON_SIZES = {
  small: '18px',
  medium: '24px'
};

const addIcon = (className, icon, size = 'medium') => (
  icon ?
    <div className={className} data-hook={className === styles.prefix ? 'prefix-icon' : 'suffix-icon'}>
      {React.cloneElement(icon, {size: ICON_SIZES[size]})}
    </div> :
    null
);

export const ThemeOptions = {
  NORMAL: {type: 'normal', color: {hover: '#4eb7f5', normal: '#3899ec'}},
  DARK_BACKGROUND: {type: 'darkBackground', color: {hover: '#f0f4f7', normal: '#f0f4f7'}},
  GREYSCALE: {type: 'greyScale', color: {hover: '#162d3d', normal: '#162d3d'}},
  DISABLED: {type: 'disabled', color: {hover: '#cbd3dc', normal: '#cbd3dc'}}
};

export default class TextLinkLayout extends WixComponent {

  static propTypes = {
    children: PropTypes.node,
    underlineStyle: PropTypes.oneOf(['always', 'hover', 'never']),
    darkBackground: PropTypes.bool,
    theme: PropTypes.oneOf(['normal', 'darkBackground', 'greyScale']),
    size: PropTypes.oneOf(['small', 'medium']),
    display: PropTypes.oneOf(['block', 'inline-block']),
    disabled: PropTypes.bool,
    prefixIcon: PropTypes.node,
    suffixIcon: PropTypes.node
  };

  static defaultProps = {
    underlineStyle: 'hover',
    darkBackground: false, //TODO - this should be deprecated
    theme: ThemeOptions.NORMAL.type,
    size: 'medium',
    display: 'block',
    disabled: false
  };

  constructor(props) {
    super(props);
    this.state = {
      isHover: false
    };

    this.setHover = this.setHover.bind(this);
  }

  setHover(hover) {
    this.setState({
      isHover: hover
    });
  }

  getColor() {
    const {theme, darkBackground, disabled} = this.props;
    const {isHover} = this.state;

    if (disabled) {
      return ThemeOptions.DISABLED.color.normal;
    }

    //this should be deprecated
    if (darkBackground) {
      return ThemeOptions.DARK_BACKGROUND.color.normal;
    }

    switch (theme) {
      case ThemeOptions.DARK_BACKGROUND.type:
        return ThemeOptions.DARK_BACKGROUND.color.normal;
      case ThemeOptions.GREYSCALE.type:
        return ThemeOptions.GREYSCALE.color.normal;
      default: {
        const {color} = ThemeOptions.NORMAL;
        return isHover ? color.hover : color.normal;
      }
    }
  }

  render() {
    const {isHover} = this.state;
    const {underlineStyle, size, children, display, disabled, prefixIcon, suffixIcon} = this.props;
    const color = this.getColor();

    const displayStyle = (prefixIcon || suffixIcon) ? 'flex' : display;

    const style = {
      color,
      display: displayStyle,
      background: 'none',
      cursor: disabled ? 'default' : 'pointer',
      textDecoration: ((underlineStyle === 'hover' && isHover && !disabled) || underlineStyle === 'always') ? 'underline' : 'none'
    };

    const className = classNames(
      size === 'medium' ? typography.t1_3 : typography.t3_3
    );

    return (
      <div
        role="link"
        className={className}
        style={style}
        onMouseLeave={() => this.setHover(false)}
        onMouseEnter={() => this.setHover(true)}
        >
        {addIcon(styles.prefix, prefixIcon, size)}
        {children}
        {addIcon(styles.suffix, suffixIcon, size)}
      </div>
    );
  }
}
