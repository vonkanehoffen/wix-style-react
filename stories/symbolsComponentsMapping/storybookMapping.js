import { linkTo } from '@storybook/addon-links';

import {
  inputsComponentsNames,
  layoutComponentsNames,
  buttonsComponentsNames,
  notificationsComponentsNames,
  tooltipPopoverComponentsNames,
  modalsComponentsNames,
  sharedComponentsNames,
} from './components';

import {
  foundationSymbols,
  inputsSymbols,
  symbolsGroup,
  buttonsSymbols,
  navigationSymbols,
  tooltipPopoverSymbols,
  modalsSymbols,
  notificationsSymbols,
} from './symbols';

const Category = {
  COMPONENTS: 'Components',
  BETA: 'BETA',
  WIP: 'WIP',
};

export const getComponentUrl = ({ componentName }) =>
  componentActualUrl[componentName] ||
  linkTo(Category.COMPONENTS, componentName);

export const getSymbolUrl = ({ groupSymbol, symbol }) =>
  symbolActualUrl[symbol] || linkTo(groupSymbol, symbol);

const componentActualUrl = {
  [inputsComponentsNames.TimeInput]: linkTo(Category.COMPONENTS, 'TimePicker'),
  [inputsComponentsNames.DateInput]: linkTo(Category.WIP, 'DateInput'),
  [inputsComponentsNames.MultiSelect]: linkTo(
    Category.COMPONENTS,
    'Multiselect',
  ),
  [inputsComponentsNames.ColorInput]: linkTo(
    symbolsGroup.inputs,
    '3.11 ColorInput',
  ),

  [layoutComponentsNames.PageHeader]: linkTo(Category.COMPONENTS, 'PageHeader'),
  [layoutComponentsNames.Layout]: linkTo(
    `${Category.COMPONENTS}/Layout`,
    'Usage',
  ),
  [layoutComponentsNames.CardHeader]: linkTo(Category.COMPONENTS, 'Card'),
  [layoutComponentsNames.CardContent]: linkTo(Category.COMPONENTS, 'Card'),
  [layoutComponentsNames.CardDivider]: linkTo(Category.COMPONENTS, 'Card'),

  [tooltipPopoverComponentsNames.PopoverMenu]: linkTo(
    Category.BETA,
    'PopoverMenu',
  ),

  [sharedComponentsNames.Icon]: linkTo(
    symbolsGroup.foundation,
    foundationSymbols.icons,
  ),
  [modalsComponentsNames.ModalPreviewLayout]: linkTo(
    Category.WIP,
    modalsComponentsNames.ModalPreviewLayout,
  ),

  [buttonsComponentsNames.Button]: linkTo(
    symbolsGroup.buttons,
    buttonsSymbols.button,
  ),
  [buttonsComponentsNames.IconButton]: linkTo(
    symbolsGroup.buttons,
    '5.2 IconButton',
  ),
  [buttonsComponentsNames.TextButton]: linkTo(
    symbolsGroup.buttons,
    '5.3 TextButton',
  ),
  [buttonsComponentsNames.CloseButton]: linkTo(
    symbolsGroup.buttons,
    '5.4 CloseButton',
  ),

  [notificationsComponentsNames.Notification]: linkTo(
    symbolsGroup.notificationBars,
    notificationsSymbols.notification,
  ),
  [notificationsComponentsNames.FloatingNotification]: linkTo(
    symbolsGroup.notificationBars,
    notificationsSymbols.floatingNotification,
  ),

  [modalsComponentsNames.MessageBoxMarketerialLayout]: linkTo(
    symbolsGroup.modals,
    '9.4 Announcement',
  ),
};

const symbolActualUrl = {
  [inputsSymbols.colorInput]: linkTo(symbolsGroup.inputs, '3.11 ColorInput'),
  [inputsSymbols.tagsInput]: linkTo(symbolsGroup.inputs, '3.12 Tags'),

  [buttonsSymbols.iconButton]: linkTo(symbolsGroup.buttons, '5.2 IconButton'),
  [buttonsSymbols.textButton]: linkTo(symbolsGroup.buttons, '5.3 TextButton'),
  [buttonsSymbols.closeButton]: linkTo(symbolsGroup.buttons, '5.4 CloseButton'),

  [navigationSymbols.sidebarMenu]: linkTo(
    symbolsGroup.navigation,
    '6.1 Sidebar',
  ),

  [tooltipPopoverSymbols.popoverMenu]: linkTo(
    symbolsGroup.tooltipPopovers,
    '7.3 PopoverMenu',
  ),

  [modalsSymbols.content]: linkTo(symbolsGroup.modals, '9.3 Custom Modal'),
  [modalsSymbols.marketing]: linkTo(symbolsGroup.modals, '9.4 Announcement'),
};
