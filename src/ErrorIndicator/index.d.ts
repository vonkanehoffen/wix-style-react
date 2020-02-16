import * as React from 'react';
export interface ErrorIndicatorProps extends React.HTMLAttributes<HTMLElement> {
  dataHook?: string;
  errorMessage?: string;
  tooltipPlacement?: ErrorIndicatorTooltipPlacement;
}

export const ErrorIndicator: React.SFC<ErrorIndicatorProps>;
export default ErrorIndicator;
export type ErrorIndicatorTooltipPlacement =
  | 'right'
  | 'left'
  | 'top'
  | 'bottom';
