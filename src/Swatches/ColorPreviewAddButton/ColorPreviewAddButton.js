import React, { PureComponent } from 'react';

import Color from 'color';
import styles from './ColorPreviewAddButton.st.css';
import { func, node, object } from 'prop-types';
import { withFocusable } from 'wix-ui-core/dist/src/hocs/Focusable/FocusableHOC';
import ColorPreviewAddIcon, {
  ColorPreviewAddIconSize,
} from './ColorPreviewAddIcon';

function getContrastColor(bg, light = '#ffffff', dark = '#162d3d') {
  try {
    const color = Color(bg);
    const luminosity = color.luminosity();

    if (luminosity > 0.5) {
      return dark;
    } else {
      return light;
    }
  } catch (err) {}
}

class ColorPreviewAddButton extends PureComponent {
  static propTypes = {
    color: object,
    onClick: func,
    addTooltipContent: node,
    iconSize: ColorPreviewAddIconSize,
  };

  static defaultProps = {
    onClick: () => {},
  };

  onAddClick = () => {
    const { color, onClick } = this.props;

    onClick(color.hex());
  };

  render() {
    const { color, focusableOnFocus, focusableOnBlur, iconSize } = this.props;
    const noColorSelected = color.alpha() === 0;

    const styleProps = {
      noColorSelected,
    };

    return React.createElement(
      'button',
      {
        style: {
          backgroundColor: noColorSelected ? undefined : color.hex(),
        },
        'data-hook': 'color-preview-add-button',
        onFocus: focusableOnFocus,
        onBlur: focusableOnBlur,
        ...styles('preview', styleProps, this.props),
        onClick: this.onAddClick,
      },
      <ColorPreviewAddIcon
        iconSize={iconSize}
        color={getContrastColor(color.hex())}
      />,
    );
  }
}

export default withFocusable(ColorPreviewAddButton);
