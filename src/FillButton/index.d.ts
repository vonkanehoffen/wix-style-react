import * as React from 'react';
export interface FillButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  iconSize?: FillButtonIconSize;
  disabled?: boolean;
  tooltipContent?: React.ReactNode;
  fill?: string;
  tooltipProps?: any; // TODO: replace with TooltipProps once merged to WSR
}

export default class FillButton extends React.PureComponent<FillButtonProps> {}
export type FillButtonIconSize = 'small' | 'medium';
