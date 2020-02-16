import * as React from 'react';
import {IconElement} from '../BaseComponents';

export interface TableActionCellProps {
  dataHook?: string;
  primaryAction?: TableActionCellPrimaryAction;
  secondaryActions?: TableActionCellSecondaryAction[];
  numOfVisibleSecondaryActions?: number;
  alwaysShowSecondaryActions?: boolean;
  popoverMenuProps?: any; // TODO: replace with PopoverMenuProps
  upgrade?: boolean;
}

export const TableActionCell: React.SFC<TableActionCellProps>;
export default TableActionCell;

export type TableActionCellPrimaryAction = {
  text: string;
  onClick: () => void;
  theme?: 'whiteblue' | 'fullblue';
  disabled?: boolean;
};

export type TableActionCellSecondaryAction = {
  text: string;
  icon: IconElement;
  onClick: () => void;
  disabled?: boolean;
  dataHook?: string;
};
