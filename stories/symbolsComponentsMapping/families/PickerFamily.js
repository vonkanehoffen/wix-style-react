import { pickerSymbols } from '../symbols';
import { pickerComponentsNames as componentsNames } from '../components';

export const pickerSymbolsToComponents = {
  [pickerSymbols.editableSelector]: [componentsNames.EditableSelector],

  [pickerSymbols.modalSelector]: [componentsNames.ModalSelectorLayout],

  [pickerSymbols.colorPicker]: [componentsNames.ColorPicker],

  [pickerSymbols.calendar]: [componentsNames.Calendar],

  [pickerSymbols.calendarPanel]: [
    componentsNames.CalendarPanel,
    componentsNames.CalendarPanelFooter,
  ],

  [pickerSymbols.swatches]: [componentsNames.Swatches],
};
