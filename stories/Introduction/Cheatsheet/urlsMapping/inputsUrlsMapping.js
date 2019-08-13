//3. Inputs
import { familyNames } from './shared';

const symbolsNames = {
  Text_Input: '3.1 Text Input',
  Text_Area: '3.2 Text Area',
  Rich_Text_Area: '3.3 Rich Text Area',
  Number_Input: '3.4 Number Input',
  Number_Range_Input: '3.5 Number Range Input',
  Incrementer_Input: '3.6 Incrementer Input',
  Duration_Input: '3.7 Duration Input',
  Time_Input: '3.8 Time Input',
  Date_Input: '3.9 Date Input',
  Date_Range_Input: '3.10 Date Range Input',
  Color_Input: '3.11 Color Input',
  Tags_Input: '3.12 Tags Input',
  Google_Address_Input: '3.13 Google Address Input',
  Search_Input: '3.14 Search Input',
  Media_Input: '3.15 Media Input',
};

const componentsNames = {
  Input: 'Input',
  Dropdown: 'Dropdown',
  FormField: 'FormField',
  InputArea: 'InputArea',
  InputWithOptions: 'InputWithOptions',
  RichTextInputArea: 'RichTextInputArea',
  NumberInput: 'NumberInput',
  ColorInput: 'ColorInput',
  MultiSelect: 'MultiSelect',
  Tags: 'Tags',
};

const symbolsToComponents = [
  {
    //3.1
    UxStory: symbolsNames.Text_Input,
    componentsNames: [componentsNames.FormField, componentsNames.Input],
  },
  {
    //3.2
    UxStory: symbolsNames.Text_Area,
    componentsNames: [componentsNames.FormField, componentsNames.InputArea],
  },
];

export const inputFamilyMapping = {
  familyName: familyNames.inputs,
  symbols: symbolsToComponents,
};
