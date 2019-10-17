import * as React from 'react';

export interface TickerProps {
  onUp: Function,
  onDown: Function,
  upDisabled: boolean,
  downDisabled: boolean,
}

declare const Ticker: React.FunctionComponent<TickerProps>;
export default Ticker;
