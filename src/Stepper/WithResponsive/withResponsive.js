import React from 'react';

const stepCircleSize = 42;
const splitter = 30;
const stepSizeWithoutText = stepCircleSize + splitter;

/** Preparation for responsiveness - each step get the same equal size  */
export const withResponsive = Component => {
  class ResponsiveHOC extends React.PureComponent {
    wrappedComponentRef = null;

    state = {
      stepSize: null,
    };

    static defaultProps = {
      steps: [],
    };

    componentDidMount() {
      this._calcStepSize();
      window.addEventListener('resize', this._calcStepSize);
    }

    _calcStepSize = () => {
      const stepsNum = this.props.steps.length;
      if (!this.mainRef) {
        return;
      }
      const fullAvailableWidth = parseInt(
        window.getComputedStyle(this.mainRef, null).width.replace('px', ''),
      );

      const stepSize =
        (fullAvailableWidth - stepsNum * stepSizeWithoutText) / stepsNum;
      this.setState({ stepSize });
    };

    componentDidUpdate() {
      this._calcStepSize();
    }

    render() {
      return (
        <div ref={ref => (this.mainRef = ref)}>
          <Component
            ref={ref => (this.wrappedComponentRef = ref)}
            stepSize={this.state.stepSize}
            {...this.props}
          />
        </div>
      );
    }
  }

  return ResponsiveHOC;
};
