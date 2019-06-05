import React from 'react';
import PropTypes, { oneOfType, func, object, string } from 'prop-types';
import { withFocusable } from 'wix-ui-core/dist/src/hocs/Focusable/FocusableHOC';
import styles from './ListItemAction.st.css';
import Text from '../Text';

export const textSizeToPaddingMap = {
  small: { medium: '12px', small: '6px' },
  medium: { medium: '9px', small: '3px' },
};

/** ListItemAction */
class ListItemActionComponent extends React.PureComponent {
  static displayName = 'ListItemAction';

  static propTypes = {
    /** render as some other element */
    as: oneOfType([func, object, string]),

    /** Data attribute for testing purposes */
    dataHook: PropTypes.string,

    /** Item theme (standard, dark, destructive) */
    skin: PropTypes.oneOf(['standard', 'dark', 'destructive']),

    /** Text Size (small, medium) */
    size: PropTypes.oneOf(['small', 'medium']),

    /** Padding size (small, medium) */
    paddingSize: PropTypes.oneOf(['small', 'medium']),

    /** Prefix Icon */
    prefixIcon: PropTypes.node,

    /** Title */
    title: PropTypes.string.isRequired,

    /** Disabled */
    disabled: PropTypes.bool,

    /** On Click */
    onClick: PropTypes.func,
  };

  _renderText = () => {
    const { title, size } = this.props;
    return (
      <Text
        className={styles.text}
        weight="normal"
        size={size}
        dataHook="list-item-action-title"
      >
        {title}
      </Text>
    );
  };

  _renderPrefix = () => {
    const { prefixIcon, size } = this.props;
    return React.cloneElement(prefixIcon, {
      size: size === 'medium' ? 24 : 18,
      className: styles.prefixIcon,
      'data-hook': 'list-item-action-prefix-icon',
    });
  };

  static defaultProps = {
    as: 'div',
    skin: 'standard',
    size: 'medium',
    paddingSize: 'medium',
  };

  render() {
    const {
      dataHook,
      size,
      paddingSize,
      disabled,
      skin,
      prefixIcon,
      onClick,
      focusableOnFocus,
      focusableOnBlur,
      as: Component,
      tabIndex,
      onKeyDown,
    } = this.props;
    const padding = textSizeToPaddingMap[size][paddingSize];
    return (
      <Component
        {...styles('root', { skin, disabled }, this.props)}
        tabIndex={tabIndex}
        onFocus={focusableOnFocus}
        onBlur={focusableOnBlur}
        type={Component === 'button' ? 'button' : undefined}
        style={{ padding: `${padding} 24px ${padding} 18px` }}
        data-hook={dataHook}
        onKeyDown={!disabled && onKeyDown}
        onClick={!disabled && onClick}
      >
        {prefixIcon && this._renderPrefix()}
        {this._renderText()}
      </Component>
    );
  }
}

export const ListItemAction = withFocusable(ListItemActionComponent);

export const listItemActionBuilder = ({
  title,
  prefixIcon,
  onClick,
  id,
  paddingSize,
  disabled,
  skin,
  size,
  dataHook,
  as,
  tabIndex,
}) => ({
  id,
  disabled,
  overrideStyle: true,
  value: props => (
    <ListItemAction
      {...props}
      tabopIndex={tabIndex}
      as={as}
      onClick={onClick}
      dataHook={dataHook}
      title={title}
      prefixIcon={prefixIcon}
      skin={skin}
      size={size}
      paddingSize={paddingSize}
    />
  ),
});
