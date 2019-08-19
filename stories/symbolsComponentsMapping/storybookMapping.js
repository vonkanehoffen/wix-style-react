import { linkTo } from '@storybook/addon-links';
import { inputComponentsNames, layoutComponentsNames } from './components';
import { inputsSymbols, symbolsGroup } from './symbols';

export const getComponentUrl = ({ componentName }) =>
  componentActualUrl[componentName] || linkTo('Components', componentName);

export const getSymbolUrl = ({ groupSymbol, symbol }) =>
  symbolActualUrl[symbol] || linkTo(groupSymbol, symbol);

const componentActualUrl = {
  [inputComponentsNames.TimeInput]: linkTo('Components', 'TimePicker'),
  [inputComponentsNames.DateInput]: linkTo('WIP', 'DateInput'),
  [inputComponentsNames.MultiSelect]: linkTo('Components', 'Multiselect'),
  [layoutComponentsNames.PageHeader]: linkTo('Components', 'PageHeader'),
  [layoutComponentsNames.Layout]: linkTo('Components/Layout', 'Usage'),
};

const symbolActualUrl = {
  [inputsSymbols.colorInput]: linkTo(symbolsGroup.inputs, '3.11 ColorInput'),
  [inputsSymbols.tagsInput]: linkTo(symbolsGroup.inputs, '3.12 Tags'),
};

export const componentsWithoutDocumentation = {
  [inputComponentsNames.ColorInput]: inputComponentsNames.ColorInput,
  [layoutComponentsNames.CardHeader]: layoutComponentsNames.CardHeader,
  [layoutComponentsNames.CardContent]: layoutComponentsNames.CardContent,
  [layoutComponentsNames.CardDivider]: layoutComponentsNames.CardDivider,
};
