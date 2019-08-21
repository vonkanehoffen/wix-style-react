import { linkTo } from '@storybook/addon-links';
import {
  inputsComponentsNames,
  layoutComponentsNames,
  buttonsComponentsNames,
} from './components';
import {
  inputsSymbols,
  symbolsGroup,
  buttonsSymbols,
  navigationSymbols,
} from './symbols';

export const getComponentUrl = ({ componentName }) =>
  componentActualUrl[componentName] || linkTo('Components', componentName);

export const getSymbolUrl = ({ groupSymbol, symbol }) =>
  symbolActualUrl[symbol] || linkTo(groupSymbol, symbol);

const componentActualUrl = {
  [inputsComponentsNames.TimeInput]: linkTo('Components', 'TimePicker'),
  [inputsComponentsNames.DateInput]: linkTo('WIP', 'DateInput'),
  [inputsComponentsNames.MultiSelect]: linkTo('Components', 'Multiselect'),
  [layoutComponentsNames.PageHeader]: linkTo('Components', 'PageHeader'),
  [layoutComponentsNames.Layout]: linkTo('Components/Layout', 'Usage'),
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
};

export const componentsWithoutDocumentation = {
  [inputsComponentsNames.ColorInput]: inputsComponentsNames.ColorInput,

  [layoutComponentsNames.CardHeader]: layoutComponentsNames.CardHeader,
  [layoutComponentsNames.CardContent]: layoutComponentsNames.CardContent,
  [layoutComponentsNames.CardDivider]: layoutComponentsNames.CardDivider,

  [buttonsComponentsNames.Button]: buttonsComponentsNames.Button,
  [buttonsComponentsNames.IconButton]: buttonsComponentsNames.IconButton,
  [buttonsComponentsNames.TextButton]: buttonsComponentsNames.TextButton,
  [buttonsComponentsNames.CloseButton]: buttonsComponentsNames.CloseButton,
};
