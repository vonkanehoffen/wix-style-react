import { selectionSymbols } from './symbols';
import {
  selectionComponentsNames as componentsNames,
  sharedComponents,
} from './components';

export const selectionSymbolsToComponents = {
  [selectionSymbols.dropdown]: [
    sharedComponents.FormField,
    componentsNames.Dropdown,
  ],

  [selectionSymbols.multiSelectDropdown]: [
    sharedComponents.FormField,
    componentsNames.MultiSelectCheckbox,
  ],

  [selectionSymbols.checkbox]: [
    sharedComponents.FormField,
    componentsNames.Checkbox,
  ],

  [selectionSymbols.radio]: [
    sharedComponents.FormField,
    componentsNames.RadioGroup,
  ],

  [selectionSymbols.toggle]: [
    sharedComponents.FormField,
    componentsNames.ToggleSwitch,
  ],

  [selectionSymbols.segmentedToggle]: [
    sharedComponents.FormField,
    componentsNames.SegmentedToggle,
  ],

  [selectionSymbols.thumbnailSelect]: [componentsNames.Thumbnail],

  [selectionSymbols.slider]: [
    sharedComponents.FormField,
    componentsNames.Slider,
  ],

  [selectionSymbols.checkToggle]: [],
};
