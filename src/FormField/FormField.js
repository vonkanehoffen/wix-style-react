import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Tooltip from '../Tooltip';
import Text, { SKINS, SIZES, WEIGHTS } from '../Text';
import InfoIcon from '../common/InfoIcon';
import styles from './FormField.scss';

const PLACEMENT = {
  top: 'top',
  right: 'right',
  left: 'left',
};

const asterisk = (
  <div
    data-hook="formfield-asterisk"
    className={styles.asterisk}
    children="*"
  />
);

const charactersLeft = lengthLeft => {
  const colorProps =
    lengthLeft >= 0 ? { light: true, secondary: true } : { skin: SKINS.error };
  return (
    <Text
      size={SIZES.small}
      weight={WEIGHTS.normal}
      {...colorProps}
      data-hook="formfield-counter"
      className={styles.counter}
      children={lengthLeft}
    />
  );
};

class FormField extends React.Component {
  static displayName = 'FormField';
  static propTypes = {
    /**
     * any kids to render, should be some form of input. Input, InputArea & RichTextArea work well
     *
     * `children` can be React node or a function
     *
     * when function, it receives object with:
     * * `setCharactersLeft` - function accepts a number and will display it on top right of `FormField` component
     *
     */
    children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),

    /** Defines if the content (children container) grows when there's space available (otherwise, it uses the needed space only) */
    stretchContent: PropTypes.bool,

    /** optional text labeling this form field */
    label: PropTypes.node,

    /** setting label size (small, medium) */
    labelSize: PropTypes.oneOf(['small', 'medium']),

    labelPlacement: PropTypes.oneOf([
      PLACEMENT.top,
      PLACEMENT.right,
      PLACEMENT.left,
    ]),

    /** whether to display an asterisk (*) or not */
    required: PropTypes.bool,

    /** display info icon with tooltip. Node from this prop is content of tooltip */
    infoContent: PropTypes.node,

    /** info icon tooltip props */
    infoTooltipProps: PropTypes.shape(Tooltip.propTypes),

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

  static defaultProps = {
    labelSize: 'medium',
    required: false,
    stretchContent: true,
    labelPlacement: PLACEMENT.top,
  };

  state = {
    lengthLeft: undefined,
  };

  childrenRenderPropInterface = {
    setCharactersLeft: lengthLeft => this.setState({ lengthLeft }),
  };

  renderChildren() {
    const { children } = this.props;
    if (typeof children === 'function') {
      return children(this.childrenRenderPropInterface);
    }

    return children;
  }

  _hasCharCounter = () => typeof this.state.lengthLeft === 'number';

  _renderInfoIcon = () => {
    const { dataHook, infoContent, infoTooltipProps, labelSize } = this.props;
    return (
      infoContent && (
        <InfoIcon
          dataHook={`${dataHook}-formfield-infotooltip`}
          className={styles.infoIcon}
          tooltipProps={{
            content: infoContent,
            ...infoTooltipProps,
          }}
          iconSize={
            {
              [SIZES.small]: '18px',
              [SIZES.medium]: '24px',
            }[labelSize]
          }
        />
      )
    );
  };

  _renderInlineSuffixes = () => {
    const { required, children } = this.props;

    return (
      <div
        data-hook="formfield-inline-suffixes"
        className={classnames(styles.suffixesInline, {
          [styles.minLabelHeight]: !children,
          [styles.inlineWithCharCounter]: this._hasCharCounter(),
        })}
      >
        {this._renderLabel({ trimLongText: false })}
        {required && asterisk}
        {this._renderInfoIcon()}
      </div>
    );
  };

  _hasInlineLabel = (label, labelPlacement) =>
    label &&
    (labelPlacement === PLACEMENT.left || labelPlacement === PLACEMENT.right);

  _renderLabel = ({ trimLongText }) => {
    const { label, labelSize, id } = this.props;

    return (
      <Text
        size={labelSize}
        htmlFor={id}
        tagName={'label'}
        data-hook="formfield-label"
        ellipsis={trimLongText}
        style={{ display: 'block' }} // allows the label to center vertically
        secondary
      >
        {label}
      </Text>
    );
  };

  render() {
    const {
      label,
      labelPlacement,
      required,
      infoContent,
      dataHook,
      children,
      stretchContent,
    } = this.props;
    const { lengthLeft } = this.state;

    return (
      <div
        data-hook={dataHook}
        className={classnames(styles.root, {
          [styles.labelFromTop]: label && labelPlacement === PLACEMENT.top,
          [styles.labelFromLeft]: label && labelPlacement === PLACEMENT.left,
          [styles.labelFromRight]: label && labelPlacement === PLACEMENT.right,
          [styles.stretchContent]: stretchContent,
        })}
      >
        {label && labelPlacement === PLACEMENT.top && (
          <div
            className={classnames(styles.label, {
              [styles.minLabelHeight]: !children,
            })}
          >
            {this._renderLabel({ trimLongText: true })}
            {required && asterisk}
            {this._renderInfoIcon()}
            {this._hasCharCounter() && charactersLeft(lengthLeft)}
          </div>
        )}

        {children && (
          <div
            data-hook="formfield-children"
            className={classnames(styles.children, {
              [styles.childrenWithInlineSuffixes]:
                !label || this._hasInlineLabel(label, labelPlacement),
            })}
          >
            {(!label || labelPlacement !== PLACEMENT.top) &&
              this._hasCharCounter() &&
              charactersLeft(lengthLeft)}
            {this.renderChildren()}
          </div>
        )}

        {!label && (required || infoContent) && this._renderInlineSuffixes()}

        {this._hasInlineLabel(label, labelPlacement) &&
          this._renderInlineSuffixes()}
      </div>
    );
  }
}

export default FormField;
