import React from 'react';
import PropTypes from 'prop-types';
import FormFieldM from '../../FormField';

function FormField(props) {
  return <FormFieldM {...props}>{props.children}</FormFieldM>;
}

const labelPlacements = {
  top: 'top',
  right: 'right',
  left: 'left',
};

FormField.propTypes = {
  /**
   * any kids to render, should be some form of input. Input, InputArea & RichTextArea work well
   *
   * `children` can be React node or a function
   *
   * when function, it receives object with:
   * * `setCharactersLeft` - function accepts a number and will display it on top right of `FormField` component
   *
   */
  children: PropTypes.node,

  /** Defines if the content (children container) grows when there's space available (otherwise, it uses the needed space only) */
  stretchContent: PropTypes.bool,

  /** optional text labeling this form field */
  label: PropTypes.node,

  /** setting label size (small, medium) */
  labelSize: PropTypes.string,

  labelPlacement: PropTypes.oneOf([
    labelPlacements.top,
    labelPlacements.right,
    labelPlacements.left,
  ]),

  /** whether to display an asterisk (*) or not */
  required: PropTypes.bool,

  /** display info icon with tooltip. Node from this prop is content of tooltip */
  infoContent: PropTypes.node,

  /** info icon tooltip props */
  infoTooltipProps: PropTypes.object,

  /** string used to match text label with FormField children. For example:
   *
   * ```js
   * <FormField id="myFormField" label="Hello">
   *   <Input id="myFormField"/>
   * </FormField>
   * ```
   */
  id: PropTypes.string,

  /** used for testing */
  dataHook: PropTypes.string,
};

FormField.defaultProps = {
  labelSize: 'medium',
  required: false,
  stretchContent: true,
  labelPlacement: labelPlacements.top,
  label: 'Some label',
};

export default FormField;
