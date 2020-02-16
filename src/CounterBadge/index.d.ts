import * as React from 'react';
export interface CounterBadgeProps extends React.HTMLAttributes<HTMLElement> {
  dataHook?: string;
  skin?: CounterBadgeSkin;
  children?: CounterBadgeContent;
}

export default class CounterBadge extends React.PureComponent<CounterBadgeProps> {}

export type CounterBadgeContent = string | number | React.ReactElement<any>;
export type CounterBadgeSkin =
  | 'general'
  | 'standard'
  | 'danger'
  | 'warning'
  | 'urgent'
  | 'success';
