import React from 'react';

import Popover from '../../Popover';
import ColorPicker from '../../ColorPicker';
import styles from './ColorViewer.st.css';
import Color from 'color';

export class ColorViewer extends React.Component {
  onChange = _color => {
    const color = typeof _color === 'object' ? _color : Color(_color);
    this.props.onChange(color.alpha() === 0 ? '' : color.hex());
  };

  render() {
    const {
      value,
      disabled,
      active,
      onClick,
      onConfirm,
      onCancel,
      size,
      placement,
      appendTo,
      onClickOutside,
      children,
      onAddColor,
      addTooltipContent,
      placeholder,
    } = this.props;
    return (
      <Popover
        showArrow
        fixed
        dataHook="colorinput-popover"
        shown={active}
        placement={placement}
        appendTo={appendTo}
        onClickOutside={active ? onClickOutside : null}
      >
        <Popover.Element>
          <div
            data-hook="colorinput-viewer"
            onClick={disabled ? undefined : onClick}
            style={{ backgroundColor: value }}
            {...styles('root', { size })}
          >
            {value === '' && (
              <div data-hook="colorinput-viewer-line" {...styles('line')} />
            )}
          </div>
        </Popover.Element>
        <Popover.Content>
          <ColorPicker
            dataHook="colorinput-colorpicker"
            showConverter={false}
            showInput
            onCancel={onCancel}
            onChange={this.onChange}
            onConfirm={onConfirm}
            value={value}
            onAdd={onAddColor}
            allowEmpty
            addTooltipContent={addTooltipContent}
            emptyPlaceholder={placeholder}
          >
            {children}
          </ColorPicker>
        </Popover.Content>
      </Popover>
    );
  }
}
