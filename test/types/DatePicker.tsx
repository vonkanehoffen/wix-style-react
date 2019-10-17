import * as React from 'react';
import DatePicker from '../../src/DatePicker';
import { datePickerTestkitFactory } from '../../testkit';
import { datePickerTestkitFactory as DatePickerEnzymeTestkitFactory } from '../../testkit/enzyme';
import { mount } from 'enzyme';

function testkits() {
  const vanilla = datePickerTestkitFactory({
    dataHook: 'hi',
    wrapper: document.createElement('div'),
  });

  vanilla.exists();
  vanilla.click();

  const enzyme = DatePickerEnzymeTestkitFactory({
    dataHook: 'shbem',
    wrapper: mount(<div />),
  });
}

function DatePickerWithMandatoryProps() {
  return <DatePicker onChange={() => {}} />;
}

function DatePickerWithAllProps() {
  return (
    <DatePicker
      dataHook="data-hook"
      styles="styles"
      autoFocus={false}
      numOfMonths={1}
      className="className"
      onChange={() => {}}
      onClose={() => {}}
      excludePastDates={false}
      filterDate={() => {}}
      selectionMode="day"
      showYearDropdown={true}
      showMonthDropdown={true}
      shouldCloseOnSelect={true}
      locale="en"
      customInput={<span />}
      inputProps={{}}
      dateFormat="test"
      disabled={true}
      inputDataHook="input-data-hook"
      calendarDataHook="calendar-data-hook"
      placeholderText="text"
      rtl={true}
      value={{}}
      isOpen={true}
      initialOpen={true}
      error={true}
      errorMessage="error"
      width={400}
      zIndex={400}
    />
  );
}
