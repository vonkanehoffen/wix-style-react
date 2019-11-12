import React from 'react';
import { string, oneOf, node, bool, func } from 'prop-types';
import { withFocusable } from 'wix-ui-core/dist/src/hocs/Focusable/FocusableHOC';
import Text from '../Text';
import TextButton from '../TextButton';
import styles from './VerticalTabsItem.st.css';

const textSkin = {
  tab: 'dark',
  action: undefined,
  title: 'standard',
};

/** Internal Component to be used by VerticalTabs */
class VerticalTabsItem extends React.PureComponent {
  static displayName = 'VerticalTabsItem';

  static propTypes = {
    /** type of vertical tab item. can be of the following: 'tab' (default), 'action', 'title' */
    type: oneOf(['tab', 'action', 'title']),

    /** Data attribute for testing purposes */
    dataHook: string,

    /** Text Size (small, medium) */
    size: oneOf(['small', 'medium']),

    /** Prefix Icon */
    prefixIcon: node,

    /** Suffix Icon */
    suffixIcon: node,

    /** Children - only single child is allowed here */
    children: node,

    /** Disabled */
    disabled: bool,

    /** On Click */
    onClick: func,
  };

  static defaultProps = {
    type: 'tab',
    size: 'medium',
  };

  focus() {
    if (this.innerComponentRef) {
      this.innerComponentRef.focus();
    }
  }

  _renderText() {
    const { children, size, type } = this.props;
    const isTitle = type === 'title';
    const TextComponent = type === 'action' ? TextButton : Text;
    return (
      <TextComponent
        className={styles.text}
        weight="normal"
        size={isTitle ? 'small' : size}
        dataHook="vertical-tabs-item-text"
        placement="right"
        light={isTitle}
        secondary={isTitle}
      >
        {children}
      </TextComponent>
    );
  }

  _renderPrefix() {
    const { prefixIcon, size, type } = this.props;
    return React.cloneElement(prefixIcon, {
      size: size === 'medium' ? 24 : 18,
      'data-hook': 'vertical-tabs-item-prefix-icon',
      ...styles('prefixIcon', { action: type === 'action' }, this.props),
    });
  }

  _renderSuffix() {
    const { suffixIcon, size } = this.props;
    return React.cloneElement(suffixIcon, {
      size: size === 'medium' ? 24 : 18,
      className: styles.suffixIcon,
      'data-hook': 'vertical-tabs-item-suffix-icon',
    });
  }

  render() {
    const {
      dataHook,
      disabled,
      prefixIcon,
      suffixIcon,
      onClick,
      focusableOnFocus,
      focusableOnBlur,
      tabIndex,
      onKeyDown,
      type,
    } = this.props;

    return (
      <div
        {...styles(
          'root',
          { disabled, action: type === 'title', suffixIcon },
          this.props,
        )}
        tabIndex={tabIndex}
        ref={ref => (this.innerComponentRef = ref)}
        onFocus={focusableOnFocus}
        onBlur={focusableOnBlur}
        data-hook={dataHook}
        onKeyDown={!disabled ? onKeyDown : undefined}
        onClick={!disabled ? onClick : undefined}
      >
        {prefixIcon && this._renderPrefix()}
        {this._renderText()}
        {suffixIcon && this._renderSuffix()}
      </div>
    );
  }
}

export default withFocusable(VerticalTabsItem);
