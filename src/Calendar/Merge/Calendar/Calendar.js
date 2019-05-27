import React from 'react';
import PropTypes from 'prop-types';
import CalendarM from '../../Calendar';

function Calendar(props) {
  return <CalendarM {...props}>{props.children}</CalendarM>;
}

Calendar.propTypes = {
  /** Auto focus on selected day when component mounts or updates */
  autoFocus: PropTypes.bool,

  /** Display multiple months, currently allowing only 1 or 2 */
  numOfMonths: PropTypes.oneOf([1, 2]),

  className: PropTypes.string,

  /** Callback function called with a Date or a Range whenever the user selects a day in the calendar */
  onChange: PropTypes.func.isRequired,

  /** Callback function called whenever user press escape or click outside of the element or a date is selected and `shouldCloseOnSelect` is set. Receives an event as first argument */
  onClose: PropTypes.func,

  /** Past dates are unselectable */
  excludePastDates: PropTypes.bool,

  /** Only the truthy dates are selectable */
  filterDate: PropTypes.func,

  /** The selected date */
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.instanceOf(Date),
    PropTypes.shape({
      from: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)]),
      to: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)]),
    }),
  ]),

  /** Whether the user should be able to select a date range, or just a single day */
  selectionMode: PropTypes.oneOf(['day', 'range']),

  /** Display a selectable yearDropdown */
  showYearDropdown: PropTypes.bool,

  /** Display a selectable monthDropdown */
  showMonthDropdown: PropTypes.bool,

  /** should the calendar close on day selection */
  shouldCloseOnSelect: PropTypes.bool,

  /** DatePicker instance locale */
  locale: PropTypes.oneOfType([
    PropTypes.oneOf([
      'en',
      'es',
      'pt',
      'fr',
      'de',
      'pl',
      'it',
      'ru',
      'ja',
      'ko',
      'tr',
      'sv',
      'no',
      'nl',
      'da',
      'zh',
      'th',
      'cs',
    ]),
    PropTypes.shape({
      distanceInWords: PropTypes.object,
      format: PropTypes.object,
    }),
  ]),
};

Calendar.defaultProps = {
  locale: 'en',
  className: '',
  filterDate: () => true,
  shouldCloseOnSelect: true,
  onClose: () => {},
  autoFocus: true,
};

export default Calendar;
