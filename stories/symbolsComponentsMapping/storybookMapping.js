import { linkTo } from '@storybook/addon-links';
import { inputComponentsNames } from './components';
import { inputsSymbols, symbolsGroup } from './symbols';

export const getComponentUrl = ({ componentName }) =>
  componentActualUrl[componentName] || linkTo('Components', componentName);

export const getSymbolUrl = ({ groupSymbol, symbol }) =>
  symbolActualUrl[symbol] || linkTo(groupSymbol, symbol);

const componentActualUrl = {
  [inputComponentsNames.TimeInput]: linkTo('Components', 'TimePicker'),
  [inputComponentsNames.DateInput]: linkTo('WIP', 'DateInput'),
  [inputComponentsNames.MultiSelect]: linkTo('Components', 'Multiselect'),
};

const symbolActualUrl = {
  [inputsSymbols.colorInput]: linkTo(symbolsGroup.inputs, '3.11 ColorInput'),
  [inputsSymbols.tagsInput]: linkTo(symbolsGroup.inputs, '3.12 Tags'),
};

export const componentsWithoutDocumentation = {
  [inputComponentsNames.ColorInput]: inputComponentsNames.ColorInput,
};
