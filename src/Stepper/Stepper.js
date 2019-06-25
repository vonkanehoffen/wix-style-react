/* eslint-disable no-console */
import React from 'react';
import PropTypes from 'prop-types';

import Step from './Step/Step';
import ChevronRight from '../new-icons/ChevronRight';
import { MIN_STEPS, MAX_STEPS, STEP_TYPES } from './Consts';

import styles from './Stepper.st.css';
import { withResponsive } from './WithResponsive/withResponsive';

/** Stepper */
class Stepper extends React.PureComponent {
  static displayName = 'Stepper';

  static propTypes = {
    /** Applied as data-hook HTML attribute that can be used in the tests */
    dataHook: PropTypes.string,
    /** Callback to be triggered on step click */
    onClick: PropTypes.func,
    /** Id of the active step */
    activeStep: PropTypes.number.isRequired,
    /** Array of steps, each step should have at least text. If no type is passed, step's type is set to normal  */
    steps: PropTypes.arrayOf(
      PropTypes.shape({
        text: PropTypes.string.isRequired,
        type: PropTypes.oneOf(['completed', 'disabled', 'error', 'normal']),
      }),
    ).isRequired,
  };

  static defaultProps = {
    onClick: () => {},
    steps: [],
  };

  constructor(props) {
    super(props);

    this._validateSteps(props.steps, props.activeStep);
  }

  componentDidUpdate() {
    this._validateNumberOfSteps(this.props.steps, this.props.activeStep);
  }

  _validateSteps = (steps, activeStep) => {
    this._validateStepType(steps, activeStep);
    this._validateNumberOfSteps(steps);
  };

  _validateStepType = (steps, activeStep) => {
    if (
      activeStep &&
      typeof activeStep === 'number' &&
      steps[activeStep].type === STEP_TYPES.DISABLED
    ) {
      console.error(
        `Error: Failed prop: The prop 'steps' at [${activeStep}] is invalid. Active step can not be disabled. Falling back to 'normal' type for step[${activeStep}]`,
      );
      steps[activeStep].type = 'normal';
    }
  };

  _validateNumberOfSteps(steps) {
    if (
      !steps ||
      !steps.length ||
      steps.length < MIN_STEPS ||
      steps.length > MAX_STEPS
    ) {
      console.error(
        `Error: Failed prop: The prop 'steps' in 'Stepper' has to be an array in the size of ${MIN_STEPS} to ${MAX_STEPS}.`,
      );
    }
  }

  _renderStepSplitter = () => {
    return (
      <div className={styles.stepSplitter}>
        <ChevronRight size={'24px'} />
      </div>
    );
  };

  render() {
    const { dataHook, steps, activeStep, onClick, stepSize = 0 } = this.props;

    return (
      <div {...styles('root', {}, this.props)} data-hook={dataHook}>
        {steps.map((step, idx) => {
          return [
            <div
              key={'first'}
              className={
                styles.stepAndSplitter +
                ' ' +
                (idx === activeStep ? styles.selected : '')
              }
            >
              <Step
                id={idx}
                {...step}
                active={idx === activeStep}
                onClick={onClick}
                // stepSize={stepSize}
              />
            </div>,
            idx !== steps.length - 1 ? this._renderStepSplitter() : null,
          ];
        })}
      </div>
    );
  }
}

// export default withResponsive(Stepper);
export default Stepper;
