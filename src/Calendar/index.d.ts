import * as React from 'react';
import {WixComponentProps} from "../BaseComponents/WixComponent";

export interface CalendarProps extends WixComponentProps {
  autoFocus?: boolean,
  numOfMonths?: 1 | 2,
  className?: string,
  onChange: Function,
  onClose?: Function,
  excludePastDates?: boolean,
  filterDate?: Function,
  value?: string | Date | {
    from?: string | Date,
    to?: string | Date,
  },
  selectionMode?: 'day' | 'range',
  showYearDropdown?: boolean,
  showMonthDropdown?: boolean,
  shouldCloseOnSelect?: boolean,
  locale?: string | {distanceInWords?: {}, format?: {},}
}

export default class Calendar extends React.PureComponent<CalendarProps> {
}
