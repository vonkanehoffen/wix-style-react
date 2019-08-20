import React from 'react';
import { func, oneOf, string } from 'prop-types';
import Tooltip from '../../Tooltip/index';
import ColorPicker from '../../ColorPicker/index';
import Color from 'color';
import Popover from '../../Popover';
import styles from './AddColor.st.css';
import IconAdd from '../../new-icons/Add';
import IconAddSmall from '../../new-icons/AddSmall';
import SwatchProportion from '../SwatchProportion';

const EMPTY_COLOR = Color('#00000000');

export const AddColorIconSize = oneOf(['small', 'normal']);

function getContrastColor(color, light = '#ffffff', dark = '#162d3d') {
  if (!color) {
    return light;
  }
  try {
    const luminosity = color.luminosity();

    if (luminosity > 0.5) {
      return dark;
    } else {
      return light;
    }
  } catch (err) {}
}

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

  getIconComponent = () => {
    switch (this.props.iconSize) {
      case 'normal':
        return IconAdd;

      case 'small':
      default:
        return IconAddSmall;
    }
  };

  render() {
    const { tooltip } = this.props;
    const { isColorPickerShown, color } = this.state;
    const isEmptyColor = color.alpha() === 0;
    const noColorSelected = !isColorPickerShown || isEmptyColor;
    const styleProps = {
      noColorSelected,
    };
    const buttonColor = noColorSelected ? undefined : color;
    const IconComponent = this.getIconComponent();

    return (
      <Popover
        appendTo="parent"
        placement="top"
        showArrow
        className={styles.popover}
        shown={isColorPickerShown}
        onClickOutside={this.hideColorPicker}
      >
        <Popover.Element>
          <Tooltip
            upgrade
            disabled={!tooltip || isColorPickerShown}
            hideDelay={0}
            appendTo="window"
            size="small"
            dataHook="add-color-button-tooltip"
            content={tooltip}
          >
            <SwatchProportion>
              <button
                style={{
                  backgroundColor: buttonColor
                    ? buttonColor.hex()
                    : buttonColor,
                }}
                data-hook="color-preview-add-button"
                {...styles('preview', styleProps, this.props)}
                onClick={this.toggleColorPicker}
              >
                <IconComponent
                  style={{ color: getContrastColor(buttonColor) }}
                />
              </button>
            </SwatchProportion>
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
