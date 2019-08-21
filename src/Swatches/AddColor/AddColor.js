import React from 'react';
import { func, oneOf, string } from 'prop-types';
import { withFocusable } from 'wix-ui-core/dist/src/hocs/Focusable/FocusableHOC';

import Tooltip from '../../Tooltip/index';
import ColorPicker from '../../ColorPicker/index';
import Color from 'color';
import Popover from '../../Popover';
import styles from './AddColor.st.css';
import IconAdd from '../../new-icons/Add';
import IconAddSmall from '../../new-icons/AddSmall';

const EMPTY_COLOR = Color('#00000000');

export const AddColorIconSize = oneOf(['small', 'normal']);

const Button = withFocusable(
  ({
    focusableOnBlur,
    focusableOnFocus,
    onClick,
    buttonColor,
    iconSize = 'small',
    ...rest
  }) => {
    const backgroundColor = buttonColor ? buttonColor.hex() : buttonColor;
    return (
      <button
        {...styles('root', { selected: !!backgroundColor }, rest)}
        data-hook="color-preview-add-button"
        style={{ backgroundColor }}
        onFocus={focusableOnFocus}
        onBlur={focusableOnBlur}
        onClick={onClick}
      >
        {iconSize === 'small' ? <IconAddSmall /> : <IconAdd />}
      </button>
    );
  },
);

class AddColor extends React.PureComponent {
  static propTypes = {
    tooltip: string,
    iconSize: AddColorIconSize,
    onAdd: func,
  };

  static defaultProps = {
    onAdd: () => {},
  };

  state = {
    color: EMPTY_COLOR,
    isColorPickerShown: false,
  };

  toggleColorPicker = () => {
    this.setState({
      isColorPickerShown: !this.state.isColorPickerShown,
    });
  };

  hideColorPicker = () => {
    this.setState({
      isColorPickerShown: false,
      color: EMPTY_COLOR,
    });
  };

  setColor = color => {
    this.setState({
      color,
    });
  };

  confirm = () => {
    this.hideColorPicker();
    this.props.onAdd(this.state.color.hex());
  };

  render() {
    const { tooltip, iconSize } = this.props;
    const { isColorPickerShown, color } = this.state;
    const isEmptyColor = color.alpha() === 0;
    const noColorSelected = !isColorPickerShown || isEmptyColor;
    const buttonColor = noColorSelected ? undefined : color;

    return (
      <Popover
        appendTo="parent"
        placement="top"
        showArrow
        shown={isColorPickerShown}
        onClickOutside={this.hideColorPicker}
      >
        <Popover.Element>
          <Tooltip
            upgrade
            disabled={!tooltip || isColorPickerShown}
            appendTo="window"
            size="small"
            dataHook="add-color-button-tooltip"
            content={tooltip}
          >
            <Button
              buttonColor={buttonColor}
              iconSize={iconSize}
              onClick={this.toggleColorPicker}
            />
          </Tooltip>
        </Popover.Element>
        <Popover.Content>
          <ColorPicker
            allowEmpty={false}
            dataHook="swatches-color-picker"
            onCancel={this.hideColorPicker}
            onChange={this.setColor}
            onConfirm={this.confirm}
            showConverter={false}
            showInput={false}
            value={isEmptyColor ? '' : color}
          />
        </Popover.Content>
      </Popover>
    );
  }
}
export default AddColor;
