//3. Inputs
import { inputsSymbols } from './symbols';
import {
  inputComponentsNames as componentsNames,
  sharedComponents,
} from './components';

export const inputsSymbolsToComponents = {
  [inputsSymbols.textInput]: [
    sharedComponents.FormField,
    componentsNames.Input,
  ],

  [inputsSymbols.textArea]: [
    sharedComponents.FormField,
    componentsNames.InputArea,
  ],

  [inputsSymbols.richTextArea]: [
    sharedComponents.FormField,
    componentsNames.RichTextInputArea,
  ],

  [inputsSymbols.numberInput]: [
    sharedComponents.FormField,
    componentsNames.NumberInput,
  ],

  [inputsSymbols.numberRangeInput]: [],

  [inputsSymbols.incrementerInput]: [],

  [inputsSymbols.durationInput]: [],

  [inputsSymbols.timeInput]: [
    sharedComponents.FormField,
    componentsNames.TimeInput,
  ],

  [inputsSymbols.dateInput]: [
    sharedComponents.FormField,
    componentsNames.DateInput,
  ],

  [inputsSymbols.dateRangeInput]: [],

  [inputsSymbols.colorInput]: [
    sharedComponents.FormField,
    componentsNames.ColorInput,
  ],

  [inputsSymbols.tagsInput]: [
    sharedComponents.FormField,
    componentsNames.MultiSelect,
    componentsNames.Tag,
  ],

  [inputsSymbols.googleAddressInput]: [],

  [inputsSymbols.searchInput]: [componentsNames.Search],

  [inputsSymbols.mediaInput]: [
    sharedComponents.FormField,
    componentsNames.ImageViewer,
  ],
};
