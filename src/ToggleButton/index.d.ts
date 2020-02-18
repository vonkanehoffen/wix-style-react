import * as React from 'react';
import { ButtonWithAsProp } from '../Button';
import { TooltipNewProps } from '../Tooltip';
import { OmitPolyfill } from '../common';

export type ToggleButtonProps = ButtonWithAsProp<{
  skin?: ToggleButtonSkin;
  selected?: boolean;
  disabled?: boolean;
  dataHook?: string;
  tooltipContent?: React.ReactNode;
  tooltipProps?: OmitPolyfill<TooltipNewProps, 'size' | 'content' | 'dataHook' | 'upgrade'>;
}>;

export default class ToggleButton extends React.Component<ToggleButtonProps> {}

export type ToggleButtonSkin = 'standard' | 'dark';
