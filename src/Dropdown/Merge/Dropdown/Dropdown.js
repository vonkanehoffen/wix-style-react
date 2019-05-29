import React from 'react';
import {
  oneOfType,
  string,
  number,
  node,
  oneOf,
  element,
  bool,
  func,
  arrayOf,
  shape,
} from 'prop-types';
import DropdownM from '../../Dropdown';

function Dropdown(props) {
  return <DropdownM {...props}>{props.children}</DropdownM>;
}

Dropdown.propTypes = {
  ariaControls: string,
  ariaDescribedby: string,
  ariaLabel: string,

  /** Standard React Input autoFocus (focus the element on mount) */
  autoFocus: bool,

  /** Standard React Input autoSelect (select the entire text of the element on focus) */
  autoSelect: bool,

  /** Sets value of autocomplete attribute (consult the [HTML spec](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#attr-fe-autocomplete) for possible values  */
  autocomplete: string,

  /** Specifies a data-hook for tests */
  dataHook: string,

  /** Default value for those who wants to use this component un-controlled */
  defaultValue: string,

  /** when set to true this component is disabled */
  disabled: bool,

  /** Input status - use to display an status indication for the user. for example: 'error', 'warning' or 'loading' */

  /** The status (error/loading) message to display when hovering the status icon, if not given or empty there will be no tooltip */
  statusMessage: node,

  /** Is input has errors
   * @deprecated
   * @see status
   */
  error: bool,

  /** Error message to display
   * @deprecated
   * @see statusMessage
   */
  errorMessage: node,

  forceFocus: bool,
  forceHover: bool,

  /** Adding a suffix help icon */
  help: bool,

  /** The help message to display when hovering the help icon, if not given or empty there will be no tooltip */
  helpMessage: node,
  id: string,

  /** Input max length */
  maxLength: number,

  /** Should the component include a menu arrow */
  menuArrow: bool,

  /** Displays clear button (X) on a non-empty input */
  clearButton: bool,

  /** A single CSS class name to be appended to ther Input's wrapper element. */
  className: string,

  name: string,

  /** Standard input onBlur callback */
  onBlur: func,

  /** Standard input onChange callback */
  onChange: func,

  /** Displays clear button (X) on a non-empty input and calls callback with no arguments */
  onClear: func,
  onCompositionChange: func,

  /** Called when user presses -enter- */
  onEnterPressed: func,

  /** Called when user presses -escape- */
  onEscapePressed: func,

  /** Standard input onFocus callback */
  onFocus: func,

  /** Standard input onClick callback */
  onInputClicked: func,

  /** Standard input onKeyDown callback */
  onKeyDown: func,
  onKeyUp: func,

  /** called when user pastes text from clipboard (using mouse or keyboard shortcut) */
  onPaste: func,

  /** onShow prop for the error and help tooltips (supported only for amaterial theme for now) */
  onTooltipShow: func,

  /** Placeholder to display */
  placeholder: string,

  /** Component you want to show as the prefix of the input */
  prefix: node,

  /** Sets the input to readOnly */
  readOnly: bool,

  /** When set to true, this input will not be editable */
  disableEditing: bool,

  /** When set to true, this input will be rounded */
  roundInput: bool,

  /** Flip the magnify glass image so it be more suitable to rtl */
  rtl: bool,

  /** Specifies the size of the input */
  size: oneOf(['small', 'normal', 'large']),

  /** Component you want to show as the suffix of the input */
  suffix: node,

  /** Standard component tabIndex */
  tabIndex: number,

  /** Text overflow behaviour */
  textOverflow: string,

  /** The theme of the input */
  theme: oneOf([
    'normal',
    'tags',
    'paneltitle',
    'material',
    'amaterial',
    'flat',
    'flatdark',
  ]),

  /** The material design style floating label for input (supported only for amaterial theme for now) */
  title: string,

  /** Placement of the error and help tooltips (supported only for amaterial theme for now) */
  tooltipPlacement: string,
  type: string,

  /** Inputs value */
  value: oneOfType([string, number]),
  withSelection: bool,
  required: bool,

  /** Minimum value input can have - similar to html5 min attribute */
  min: number,

  /** Maximum value input can have - similar to html5 max attribute */
  max: number,

  /** Step steps to increment/decrement - similar to html5 step attribute */
  step: number,

  /** Use a customized input component instead of the default html input tag */
  customInput: oneOfType([func, node]),

  /** Don't call onChange on a controlled Input when user clicks the clear button.
   *  See https://github.com/wix/wix-style-react/issues/3122
   */
  updateControlledOnClear: bool,
  /** Sets the selected option id. (Implies Controlled mode) */
  selectedId: oneOfType([string, number]),
  /** An initial selected option id. (Implies Uncontrolled mode) */
  initialSelectedId: oneOfType([string, number]),
  autocomplete: string,
  inputElement: element,
  closeOnSelect: bool,
  onManuallyInput: func,
  /** Function that receives an option, and should return the value to be displayed. By default returns `option.value`. */
  valueParser: func,
  dropdownWidth: string,
  dropdownOffsetLeft: string,
  /** Controls whether to show options if input is empty */
  showOptionsIfEmptyInput: bool,
  highlight: bool,
  autocomplete: string,
  inputElement: element,
  closeOnSelect: bool,
  onManuallyInput: func,
  /** Function that receives an option, and should return the value to be displayed. By default returns `option.value`. */
  valueParser: func,
  dropdownWidth: string,
  dropdownOffsetLeft: string,
  /** Controls whether to show options if input is empty */
  showOptionsIfEmptyInput: bool,
  highlight: bool,
  dropDirectionUp: bool,
  focusOnSelectedOption: bool,
  onClose: func,
  /** Callback function called whenever the user selects a different option in the list */
  onSelect: func,
  /** Callback function called whenever an option becomes focused (hovered/active). Receives the relevant option object from the original props.options array. */
  onOptionMarked: func,
  visible: bool,
  /** Array of objects. Objects must have an Id and can can include value and node. If value is '-', a divider will be rendered instead (dividers do not require and id). */
  options: arrayOf(
    shape({
      id: oneOfType([string, number]).isRequired,
      value: oneOfType([node, string, func]).isRequired,
      disabled: bool,
      overrideStyle: bool,
    }),
  ),
  /** The id of the selected option in the list  */
  selectedId: oneOfType([string, number]),
  tabIndex: number,
  theme: string,
  onClickOutside: func,
  /** A fixed header to the list */
  fixedHeader: node,
  /** A fixed footer to the list */
  fixedFooter: node,
  maxHeightPixels: number,
  minWidthPixels: number,
  withArrow: bool,
  closeOnSelect: bool,
  onMouseEnter: func,
  onMouseLeave: func,
  itemHeight: oneOf(['small', 'big']),
  selectedHighlight: bool,
  inContainer: bool,
  infiniteScroll: bool,
  loadMore: func,
  hasMore: bool,
  markedOption: oneOfType([bool, string, number]),
};

Dropdown.defaultProps = {};

export default Dropdown;
