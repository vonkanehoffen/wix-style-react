import React from 'react';
import { array, bool, func, node, number, string } from 'prop-types';
import resolveColor from 'color';
import styles from './Swatches.st.css';
import Swatch from './Swatch';
import AddColor, { AddColorIconSize } from './AddColor/AddColor';

const MINIMUM_GRID_GAP = 6;

/** Color swatches */
const Swatches = props => {
  const {
    colors,
    onClick,
    onAdd,
    selected,
    dataHook,
    showClear,
    showClearMessage,
    showAddButton,
    addButtonMessage,
    addIconSize,
    columns,
    gap,
  } = props;

  const hexColors = colors.map(color => resolveColor(color).hex());
  const uniqueColors = Array.from(new Set(hexColors));

  return (
    <div
      {...styles('root', {}, props)}
      data-hook={dataHook}
      style={{
        gridTemplateColumns: `repeat(${Math.max(1, columns)}, 1fr)`,
        gridGap: Math.max(MINIMUM_GRID_GAP, gap),
      }}
    >
      {showAddButton && (
        <AddColor
          tooltip={addButtonMessage}
          iconSize={addIconSize}
          onAdd={onAdd}
        />
      )}

      {showClear && (
        <Swatch
          color=""
          tooltipContent={showClearMessage}
          onClick={onClick}
          selected={selected === ''}
        />
      )}

      {uniqueColors.map((color, index) => (
        <Swatch
          key={`${color}-${index}`}
          color={color}
          onClick={onClick}
          selected={selected === color}
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

  /** If true shows no color option */
  showClear: bool,

  /** optional message to display in tooltip when showClear is true */
  showClearMessage: node,

  /** If true shows add button which triggers colors picker*/
  showAddButton: bool,

  /** Text for add button tooltip*/
  addButtonMessage: string,

  /** Size of Plus icon inside add button */
  addIconSize: AddColorIconSize,

  /** Number of maximum columns. Default value is 6 */
  columns: number,

  /** Gap between swatches. Default value is 12 */
  gap: number,
};

Swatches.defaultProps = {
  colors: [],
  onClick: () => {},
  selected: '',
  showClearMessage: '',
  columns: 6,
  gap: 12,
};

export default Swatches;
