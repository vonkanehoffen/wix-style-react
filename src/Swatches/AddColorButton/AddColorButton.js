import React from 'react';
import { withFocusable } from 'wix-ui-core/dist/src/hocs/Focusable/FocusableHOC';
import { func, string } from 'prop-types';
import color from 'color';
import Tooltip from '../../Tooltip/index';
import ColorPicker from '../../ColorPicker/index';
import ColorPreviewAddButton from '../ColorPreviewAddButton/ColorPreviewAddButton';
import { ColorPreviewAddIconSize } from '../ColorPreviewAddButton/ColorPreviewAddIcon';
import Popover from '../../Popover';

const DEFAULT_INITIAL__COLOR = color('#3899eb');
const EMPTY__COLOR = color('#00000000');

class AddColorButton extends React.PureComponent {
  static propTypes = {
    tooltip: string,
    iconSize: ColorPreviewAddIconSize,
    onAdd: func,
  };

  static defaultProps = {
    onAdd: () => {},
  };

  state = {
    color: DEFAULT_INITIAL__COLOR,
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
    const { iconSize, tooltip } = this.props;
    const { isColorPickerShown, color } = this.state;

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
            hideDelay={0}
            appendTo="window"
            size="small"
            dataHook="add-color-button-tooltip"
            content={tooltip}
          >
            <ColorPreviewAddButton
              onClick={this.toggleColorPicker}
              color={isColorPickerShown ? color : EMPTY__COLOR}
              iconSize={iconSize}
            />
          </Tooltip>
        </Popover.Element>
        <Popover.Content>
          <ColorPicker
            dataHook="swatches-color-picker"
            onCancel={this.hideColorPicker}
            onChange={this.setColor}
            onConfirm={this.confirm}
            showConverter={false}
            showInput={false}
            value={color}
          />
        </Popover.Content>
      </Popover>
    );
  }
}
export default withFocusable(AddColorButton);
