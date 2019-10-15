import * as React from 'react';
import {optionValidator} from './DropdownLayout';
import {WixComponentProps} from "../BaseComponents/WixComponent";

export interface DropdownLayoutProps extends WixComponentProps {
  dropDirectionUp?: boolean,
  focusOnSelectedOption?: boolean,
  onClose?: Function,
  onSelect?: Function,
  onOptionMarked?: Function,
  overflow?: string,
  visible?: boolean,
  options?: {
    id: string | number,
    value: string | Function | React.ReactNode,
    disabled?: boolean,
    title?: boolean,
    overrideStyle?: boolean,
    linkTo?: string,
  }[],
  selectedId?: string | number,
  tabIndex?: number,
  theme?: string,
  onClickOutside?: Function,
  fixedHeader?: React.ReactNode,
  fixedFooter?: React.ReactNode,
  maxHeightPixels?: string | number,
  minWidthPixels?: string | number,
  withArrow?: boolean,
  closeOnSelect?: boolean,
  onMouseEnter?: Function,
  onMouseLeave?: Function,
  itemHeight?: DropdownLayoutItemHeight,
  selectedHighlight?: boolean,
  inContainer?: boolean,
  infiniteScroll?: boolean,
  loadMore?: Function,
  hasMore?: boolean,
  markedOption?: boolean | string | number,
}

export type DropdownLayoutItemHeight = 'small' | 'big';

export default class DropdownLayout extends React.PureComponent<DropdownLayoutProps> {
}
