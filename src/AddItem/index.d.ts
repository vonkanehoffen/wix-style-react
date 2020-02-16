import * as React from 'react';

export interface AddItemProps {
  disabled?: boolean;
  theme?: AddItemTheme;
  alignItems?: AddItemAlignItems;
  size?: AddItemSize;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  dataHook?: string;
  /** @deprecated do not use this prop. Check for other available props. */
  tooltipProps?: any; // TODO: replace with TooltipProps once merged into wsr
  tooltipAppendTo?: AddItemAppendTo;
  tooltipFlip?: boolean;
  tooltipFixed?: boolean;
  tooltipContent?: string;
  tooltipPlacement?: string;
  showIcon?: boolean;
  removePadding?: boolean;
}

export default class AddItem extends React.Component<AddItemProps> {}

export type AddItemTheme = 'dashes' | 'plain' | 'filled' | 'image';
export type AddItemAlignItems = 'center' | 'right' | 'left';
export type AddItemSize = 'large' | 'medium' | 'small' | 'tiny';
export type AddItemAppendTo = 'window' | 'scrollParent' | 'viewport' | 'parent';
