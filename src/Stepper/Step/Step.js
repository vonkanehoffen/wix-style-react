/* eslint-disable no-console */
import React from 'react';
import PropTypes from 'prop-types';

import Text from '../../Text';
import StepCircle from './StepCircle/StepCircle';
import DataHooks from '../dataHooks';
import { ACTIVE_STEP, STEP_TYPES } from '../Consts';

import styles from './Step.st.css';

/** Stepper */
class Step extends React.PureComponent {
  static displayName = 'Step';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {
      stepHover: false,
    };
  }

  _onMouseOver = () => {
    this.setState({ stepHover: true });
  };

  _onMouseOut = () => {
    this.setState({ stepHover: false });
  };

  _onClick = ({ id, type, active }) => {
    const { onClick } = this.props;
    type !== STEP_TYPES.DISABLED && !active && onClick && onClick(id);
  };

  render() {
    const { type, active, id, text, stepSize } = this.props;
    const { stepHover } = this.state;

    return (
      <div
        data-type={DataHooks.step}
        data-step-type={type ? type : STEP_TYPES.NORMAL}
        data-active={active ? ACTIVE_STEP : ''}
        key={`step${id}`}
        onMouseOver={this._onMouseOver}
        onMouseOut={this._onMouseOut}
        {...styles(
          'root',
          {
            disabled: type === STEP_TYPES.DISABLED,
            selected: active,
          },
          this.props,
        )}
        onClick={() =>
          this._onClick({
            id,
            type,
            active,
          })
        }
      >
        <StepCircle
          number={id + 1}
          active={active}
          type={type}
          stepHover={stepHover}
        />
        <div
          {...styles(
            'stepText',
            {
              disabled: type === STEP_TYPES.DISABLED,
              selected: active,
            },
            this.props,
          )}
          style={{ maxWidth: `${stepSize}px` }}
        >
          <Text ellipsis>{text}</Text>
        </div>
      </div>
    );
  }
}

export default Step;
