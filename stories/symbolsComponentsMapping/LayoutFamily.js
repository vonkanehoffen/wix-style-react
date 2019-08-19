import { layoutSymbols } from './symbols';
import {
  layoutComponentsNames as componentsNames,
  sharedComponents,
} from './components';

export const layoutSymbolsToComponents = {
  [layoutSymbols.pageLayout]: [
    componentsNames.Page,
    componentsNames.PageHeader,
    componentsNames.Grid,
    componentsNames.Layout,
    componentsNames.Card,
    sharedComponents.EmptyState,
  ],
  [layoutSymbols.cardLayout]: [
    componentsNames.Card,
    componentsNames.CardHeader,
    componentsNames.CardSubheader,
    componentsNames.Grid,
    sharedComponents.EmptyState,
  ],
  [layoutSymbols.tableLayout]: [
    componentsNames.Table,
    componentsNames.TableActionCell,
    componentsNames.TableToolbar,
  ],
};
