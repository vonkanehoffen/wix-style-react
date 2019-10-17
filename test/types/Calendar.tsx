import * as React from 'react';
import Calendar from '../../src/Calendar';
import { calendarTestkitFactory } from '../../testkit';
import { calendarTestkitFactory as CalendarEnzymeTestkitFactory } from '../../testkit/enzyme';
import { mount } from 'enzyme';

function testkits() {
  const vanilla = calendarTestkitFactory({
    dataHook: 'hi',
    wrapper: document.createElement('div'),
  });

  vanilla.exists();
  vanilla.click();

  const enzyme = CalendarEnzymeTestkitFactory({
    dataHook: 'shbem',
    wrapper: mount(<div />),
  });
}

function CalendarWithMandatoryProps() {
  return <Calendar onChange={() => {}} />;
}

function CalendarWithAllProps() {
  return (
    <Calendar
      autoFocus={false}
      numOfMonths={1}
      className="className"
      onChange={() => {}}
      onClose={() => {}}
      excludePastDates={false}
      filterDate={() => {}}
      value=""
      selectionMode="day"
      showYearDropdown={true}
      showMonthDropdown={true}
      shouldCloseOnSelect={true}
      locale="en"
    />
  );
}
