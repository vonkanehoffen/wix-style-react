import React from 'react';
import { storiesOf } from '@storybook/react';
import { uniTestkitFactoryCreator } from 'wix-ui-test-utils/vanilla';

import Calendar from '..';
import { calendarUniDriverFactory } from '../Calendar.uni.driver.js';

const dataHook = 'calendar';
const calendarTestkitFactory = uniTestkitFactoryCreator(
  calendarUniDriverFactory,
);

class CalendarWrapper extends React.PureComponent {
  componentDidMount() {
    const { componentDidMount } = this.props;
    componentDidMount && componentDidMount();
  }

  render() {
    const { componentDidMount, ...props } = this.props;
    return (
      <Calendar dataHook={dataHook} onChange={() => undefined} {...props} />
    );
  }
}

const tests = [
  {
    describe: 'Calendar',
    its: [
      {
        it: 'should correctly render when selectedDays is a single date',
        props: {
          value: new Date('2017/05/01'),
        },
      },
      {
        it: 'should correctly render when selectedDays is a date range',
        props: {
          value: {
            from: new Date('2017/05/02'),
            to: new Date('2017/05/06'),
          },
        },
      },
      {
        it: 'should correctly render two months',
        props: {
          value: {
            from: new Date('2017/05/02'),
            to: new Date('2017/05/06'),
          },
          numOfMonths: 2,
        },
      },
      {
        it:
          'should correctly render when selectedDays is a date range with boundaries outside the current month',
        props: {
          value: {
            from: new Date('2017/04/01'),
            to: new Date('2017/07/01'),
          },
        },
        componentDidMount: async () => {
          const calendarDriver = calendarTestkitFactory({
            wrapper: document.body,
            dataHook,
          });
          await calendarDriver.clickOnNextMonthButton();
        },
      },
      {
        it:
          'should correctly render when selectedDays is an infinite date range starting in the current month',
        props: {
          value: {
            from: new Date('2017/05/02'),
          },
        },
      },
      {
        it: 'should correctly render when selectedDays is a range of one day',
        props: {
          value: {
            from: new Date('2017/05/02'),
            to: new Date('2017/05/02'),
          },
        },
      },
    ],
  },
];

tests.forEach(({ describe, its }) => {
  its.forEach(({ it, props, componentDidMount }) => {
    storiesOf(describe, module).add(it, () => (
      <CalendarWrapper {...props} componentDidMount={componentDidMount} />
    ));
  });
});
