import React from 'react';
import { array, bool, func, node, oneOf, string } from 'prop-types';
import resolveColor from 'color';
import styles from './Swatches.st.css';
import Swatch from './Swatch';
import AddColor, { AddColorIconSize } from './AddColor/AddColor';

/** Color swatches */
const Swatches = props => {
  const {
    colors,
    onClick,
    onAdd,
    selected,
    size,
    dataHook,
    showClear,
    showClearMessage,
    showAddButton,
    addButtonMessage,
    iconSize,
  } = props;

  const hexColors = colors.map(color => resolveColor(color).hex());
  const uniqueColors = Array.from(new Set(hexColors));

  return (
    <div {...styles('root', { size }, props)} data-hook={dataHook}>
      {showAddButton && (
        <AddColor
          tooltip={addButtonMessage}
          iconSize={iconSize}
          onAdd={onAdd}
        />
      )}

      {showClear && (
        <Swatch
          color=""
          tooltipContent={showClearMessage}
          onClick={onClick}
          selected={selected === ''}
          size={size}
        />
      )}

      {uniqueColors.map((color, index) => (
        <Swatch
          key={`${color}-${index}`}
          color={color}
          onClick={onClick}
          selected={selected === color}
          size={size}
        />
      ))}
    </div>
  );
};

Swatches.propTypes = {
  /** Array of colors to be shown as swatches */
  colors: array,

  /** Selected color */
  selected: string,

  /** Data-hook for testing */
  dataHook: string,

  /** Callback function when user clicks on a swatch. Returns color HEX string representation. */
  onClick: func,

  /** Callback function when user clicks on Add button and selects a color to be added. Returns color HEX string representation. */
  onAdd: func,

  /** Size of swatches */
  size: oneOf(['small', 'medium']),

  /** If true shows no color option */
  showClear: bool,

  /** optional message to display in tooltip when showClear is true */
  showClearMessage: node,

  /** If true shows add button which triggers colors picker*/
  showAddButton: bool,

  /** Text for add button tooltip*/
  addButtonMessage: string,

  /** Size of Plus icon inside add button */
  iconSize: AddColorIconSize,
};

Swatches.defaultProps = {
  colors: [],
  size: 'small',
  selected: '',
  showClearMessage: '',
};

export default Swatches;
