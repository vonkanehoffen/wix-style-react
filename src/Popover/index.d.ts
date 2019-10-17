import * as React from 'react';
import {PopoverProps as CorePopoverProps, Popover as CorePopover} from 'wix-ui-core/dist/src/components/popover';

export interface PopoverProps extends CorePopoverProps {
  dataHook?: string,
  animate?: boolean,
  theme?: PopoverTheme,
  children?: any,
}

export type PopoverTheme = 'dark' | 'light';
export type PopoverPlacement =
  'auto-start' |
  'auto' |
  'auto-end' |
  'top-start' |
  'top' |
  'top-end' |
  'right-start' |
  'right' |
  'right-end' |
  'bottom-end' |
  'bottom' |
  'bottom-start' |
  'left-end' |
  'left' |
  'left-start';

export default class Popover extends React.Component<PopoverProps> {
  static Element: typeof CorePopover.Element;
  static Content: typeof CorePopover.Content;
}
