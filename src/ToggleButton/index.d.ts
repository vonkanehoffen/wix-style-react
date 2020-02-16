import * as React from 'react';
import {ButtonWithAsProp} from '../Button';

export type ToggleButtonProps = ButtonWithAsProp<{
  skin?: ToggleButtonSkin;
  selected?: boolean;
  disabled?: boolean;
  dataHook?: string;
  tooltipContent?: React.ReactNode;
  // TODO: replace with TooltipProps once merged into WSR
  tooltipProps?: object;
}>;

export default class ToggleButton extends React.Component<ToggleButtonProps> {}

export type ToggleButtonSkin = 'standard' | 'dark';
