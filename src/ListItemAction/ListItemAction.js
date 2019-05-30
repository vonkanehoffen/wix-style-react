import React from 'react';
import PropTypes from 'prop-types';
import styles from './ListItemAction.st.css';
import Text from '../Text';
import Box from '../Box';

const textSizeToPaddingMap = {
  small: { medium: '12px', small: '6px' },
  medium: { medium: '9px', small: '3px' },
};

/** ListItemAction */
export class ListItemAction extends React.PureComponent {
  static displayName = 'ListItemAction';

  static propTypes = {
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
    return (
      <Box className={styles.icon} dataHook="list-item-action-prefix-icon">
        {React.cloneElement(prefixIcon, {
          size: size === 'medium' ? 24 : 18,
        })}
      </Box>
    );
  };

  static defaultProps = {
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
    } = this.props;
    const padding = textSizeToPaddingMap[size][paddingSize];
    return (
      <div
        {...styles('root', { skin, disabled }, this.props)}
        data-hook={dataHook}
        onClick={!disabled && onClick}
      >
        <Box
          className={styles.wrapper}
          padding={`${padding} 24px ${padding} 18px`}
        >
          {prefixIcon && this._renderPrefix()}
          {this._renderText()}
        </Box>
      </div>
    );
  }
}

export const listItemActionBuilder = ({
  title,
  prefixIcon,
  onClick,
  id,
  disabled,
  skin,
  size,
  dataHook,
}) => ({
  id,
  disabled,
  overrideStyle: true,
  value: props => (
    <ListItemAction
      {...props}
      onClick={onClick}
      dataHook={dataHook}
      title={title}
      prefixIcon={prefixIcon}
      skin={skin}
      size={size}
    />
  ),
});
