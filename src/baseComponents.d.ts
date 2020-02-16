import * as React from "react";
import { PopoverProps } from './Popover';

export interface WixComponentProps {
  dataHook?: string;
  styles?: string;
}

export class WixComponent<
  T extends WixComponentProps = {}
  > extends React.PureComponent<T> {}

export type IconElement = React.ReactElement<any>;

export type WixComponentClickOutsideEventHandler = (
  e: TouchEvent | MouseEvent
) => void;

/**
 * Construct a type with the properties of T except for those in type K.
 */
export type OmitPolyfill<T, K extends keyof any> = Pick<
  T,
  Exclude<keyof T, K>
  >;

export interface FocusOptionsPolyfill {
  preventScroll?: boolean;
}

export interface EllipsisHOCProps {
  ellipsis?: boolean;
  appendTo?: PopoverProps["appendTo"];
  flip?: boolean;
  fixed?: boolean;
  placement?: PopoverProps["placement"];
  timeout?: number;
  maxWidth?: string | number;
  zIndex?: number;
  hideDelay?: number;
  showDelay?: number;
}
