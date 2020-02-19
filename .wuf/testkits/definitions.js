/*
 * This file exports object with config for component testkits.
 * Ideally there should be no config, it is used for cases that are not following convention.
 *
 * this is temporary and should be treated as a TODO list of things to fix (make consistent)
 */

module.exports = {
  SideMenuDrill: {
    vanillaLegacyTestkit: true,
    enzymeLegacyTestkit: true,
    protractorLegacyTestkit: true,
    skipSanityTest: true,
    testkitPath: '../src/Deprecated/SideMenu/DrillView/DrillView.driver',
    protractorTestkitPath:
      '../src/Deprecated/SideMenu/DrillView/DrillView.protractor.driver',
    protractorTestkitExportName: 'drillViewTestkitFactory',

    puppeteerTestkitPath:
      '../src/Deprecated/SideMenu/DrillView/DrillView.uni.driver',
    puppeteerTestkitExportName: 'drillViewTestkitFactory',
  },

  BadgeSelectItemBuilder: {
    skipSanityTest: true,
    noTestkit: true,
  },

  BadgeSelect: {
    vanillaLegacyTestkit: true,
    enzymeLegacyTestkit: true,
    protractorLegacyTestkit: true,
    noPuppeteerTestkit: true, // was not exported before automation, keeping that way for now
  },

  Table: {
    vanillaLegacyTestkit: true,
    enzymeLegacyTestkit: true,
    protractorLegacyTestkit: true,
    puppeteerLegacyTestkit: true,
  },

  TableActionCell: {
    vanillaLegacyTestkit: true,
    enzymeLegacyTestkit: true,
    protractorLegacyTestkit: true,
    noPuppeteerTestkit: true, // was not exported before automation, keeping that way for now
  },

  MultiSelect: {
    vanillaLegacyTestkit: true,
    enzymeLegacyTestkit: true,
    protractorLegacyTestkit: true,
    skipSanityTest: true, // testkit does not have root `exists` method
  },

  MultiSelectCheckbox: {
    vanillaLegacyTestkit: true,
    enzymeLegacyTestkit: true,
    protractorLegacyTestkit: true,
    skipSanityTest: true, // testkit does not have root `exists` method
  },

  MultiSelectComposite: {
    vanillaLegacyTestkit: true,
    enzymeLegacyTestkit: true,
    protractorLegacyTestkit: true,
    noPuppeteerTestkit: true,
  },

  DragAndDrop: { skipSanityTest: true, noTestkit: true },
  DragDropContextProvider: { skipSanityTest: true, noTestkit: true },

  EndorseContentLayout: {
    skipSanityTest: true,
    // TODO: testkit of this component is not following convention.
    // It is used only internally and before automated export was not exported manually
    noTestkit: true,
  },

  GoogleAddressInput: {
    skipSanityTest: true,
    // TODO: testkit of this component is not following convention.
    // It is used only internally and before automated export was not exported manually
    noTestkit: true,
  },

  GoogleAddressInputWithLabel: {
    vanillaLegacyTestkit: true,
    enzymeLegacyTestkit: true,
    protractorLegacyTestkit: true,
    skipSanityTest: true,
    // TODO: testkit of this component is not following convention.
    // It is used only internally and before automated export was not exported manually

    // the name of export has a typo, it's different than component name
    protractorTestkitExportName: 'googleAddressWithInputTestkitFactory',
    noPuppeteerTestkit: true,
  },

  Grid: { skipSanityTest: true, noTestkit: true },
  Layout: { skipSanityTest: true, noTestkit: true },
  MessageBox: { skipSanityTest: true, noTestkit: true },

  Heading: {
    vanillaLegacyTestkit: true,
    enzymeLegacyTestkit: true,
    protractorLegacyTestkit: true,
    puppeteerLegacyTestkit: true,
  },

  Header: {
    vanillaLegacyTestkit: true,
    enzymeLegacyTestkit: true,
    protractorLegacyTestkit: true,
    // TODO: this is actually  Card.Header, but is exported just as header
    testkitPath: '../src/Card/Header/Header.driver',
    skipSanityTest: true,

    protractorTestkitPath: '../src/Card/Header/Header.uni.driver',
    protractorTestkitExportName: 'cardHeaderTestkitFactory',

    puppeteerTestkitPath: '../src/Card/Header/Header.uni.driver',
    puppeteerTestkitExportName: 'cardHeaderTestkitFactory',
  },

  Page: {
    vanillaLegacyTestkit: true,
    enzymeLegacyTestkit: true,
    protractorLegacyTestkit: true,
    skipSanityTest: true,
  },

  PageHeader: {
    vanillaLegacyTestkit: true,
    enzymeLegacyTestkit: true,
    protractorLegacyTestkit: true,
    skipSanityTest: true,
    puppeteerTestkitPath: '../src/PageHeader/PageHeader.uni.driver',
  },

  Popover: {
    vanillaLegacyTestkit: true,
    enzymeLegacyTestkit: true,
    protractorLegacyTestkit: true,
  },

  PopoverMenu: {
    vanillaLegacyTestkit: true,
    enzymeLegacyTestkit: true,
    protractorLegacyTestkit: true,
    noPuppeteerTestkit: true,
  },

  PopoverMenuItem: { skipSanityTest: true, noTestkit: true },
  TableToolbar: { skipSanityTest: true, noTestkit: true },
  Tooltip: { skipSanityTest: true, manualExport: true },
  Collapse: { skipSanityTest: true, noTestkit: true },
  Card: { skipSanityTest: true, noTestkit: true },
  Composite: { skipSanityTest: true, noTestkit: true },

  Text: {
    vanillaLegacyTestkit: true,
    enzymeLegacyTestkit: true,
    protractorLegacyTestkit: true,
    puppeteerLegacyTestkit: true,
  },

  SideMenu: {
    vanillaLegacyTestkit: true,
    enzymeLegacyTestkit: true,
    protractorLegacyTestkit: true,
    testkitPath: '../src/Deprecated/SideMenu/core/SideMenu.driver',

    protractorTestkitPath:
      '../src/Deprecated/SideMenu/core/SideMenu.uni.driver',

    puppeteerTestkitPath: '../src/Deprecated/SideMenu/core/SideMenu.uni.driver',
  },

  Calendar: {
    vanillaLegacyTestkit: true,
    enzymeLegacyTestkit: true,
    protractorLegacyTestkit: true,
    puppeteerTestkitPath: '../src/Calendar/Calendar.uni.driver',
  },

  CalendarPanel: {
    vanillaLegacyTestkit: true,
    enzymeLegacyTestkit: true,
    protractorLegacyTestkit: true,
    puppeteerTestkitPath: '../src/CalendarPanel/CalendarPanel.uni.driver',
  },

  ContactItemBuilder: {
    skipSanityTest: true,
    vanillaLegacyTestkit: true,
    enzymeLegacyTestkit: true,
    protractorLegacyTestkit: true,
    protractorTestkitPath:
      '../src/ContactItemBuilder/ContactItemBuilder.uni.driver',

    puppeteerTestkitPath:
      '../src/ContactItemBuilder/ContactItemBuilder.uni.driver',
  },

  Draggable: {
    vanillaLegacyTestkit: true,
    enzymeLegacyTestkit: true,
    protractorLegacyTestkit: true,
    testkitPath: '../src/DragAndDrop/Draggable/Draggable.driver',
    skipSanityTest: true,
    noProtractorTestkit: true,
    noPuppeteerTestkit: true,
  },

  EditableRow: {
    vanillaLegacyTestkit: true,
    enzymeLegacyTestkit: true,
    protractorLegacyTestkit: true,
    testkitPath: '../src/EditableSelector/EditableRow/EditableRow.driver',
    skipSanityTest: true,
    protractorTestkitPath:
      '../src/EditableSelector/EditableRow/EditableRow.uni.driver',

    puppeteerTestkitPath:
      '../src/EditableSelector/EditableRow/EditableRow.uni.driver',
  },

  FieldLabelAttributes: {
    vanillaLegacyTestkit: true,
    enzymeLegacyTestkit: true,
    protractorLegacyTestkit: true,
    testkitPath: '../src/FieldLabelAttributes/FieldLabelAttributes.driver',
    skipSanityTest: true,
    noPuppeteerTestkit: true,
  },

  FieldWithSelectionComposite: {
    vanillaLegacyTestkit: true,
    enzymeLegacyTestkit: true,
    protractorLegacyTestkit: true,
    testkitPath:
      '../src/Composite/FieldWithSelectionComposite/FieldWithSelectionComposite.driver',
    protractorTestkitPath:
      '../src/Composite/FieldWithSelectionComposite/FieldWithSelectionComposite.protractor.driver',
    skipSanityTest: true,
    noPuppeteerTestkit: true,
  },

  Carousel: {
    vanillaLegacyTestkit: true,
    enzymeLegacyTestkit: true,
    protractorLegacyTestkit: true,
  },

  Input: {
    vanillaLegacyTestkit: true,
    enzymeLegacyTestkit: true,
    protractorLegacyTestkit: true,
  },

  DatePicker: {
    vanillaLegacyTestkit: true,
    enzymeLegacyTestkit: true,
    protractorLegacyTestkit: true,
    skipSanityTest: true, // testkit does not have root `exists` method
    noPuppeteerTestkit: true,
  },

  Dropdown: {
    vanillaLegacyTestkit: true,
    enzymeLegacyTestkit: true,
    protractorLegacyTestkit: true,
  },

  RadioButton: {
    vanillaLegacyTestkit: true,
    enzymeLegacyTestkit: true,
    protractorLegacyTestkit: true,
    testkitPath: '../src/RadioGroup/RadioButton/RadioButton.driver',
    protractorTestkitPath:
      '../src/RadioGroup/RadioButton/RadioButton.protractor.driver',
    skipSanityTest: true,
    noPuppeteerTestkit: true,
  },

  RadioGroup: {
    vanillaLegacyTestkit: true,
    enzymeLegacyTestkit: true,
    protractorLegacyTestkit: true,
    noPuppeteerTestkit: true,
  },

  MessageBoxMarketerialLayout: {
    vanillaLegacyTestkit: true,
    enzymeLegacyTestkit: true,
    protractorLegacyTestkit: true,
    skipSanityTest: true,

    testkitPath:
      '../src/MessageBox/MarketerialLayout/MessageBoxMarketerialLayout.driver',
    protractorTestkitPath:
      '../src/MessageBox/MarketerialLayout/MessageBoxMarketerialLayout.uni.driver',

    puppeteerTestkitPath:
      '../src/MessageBox/MarketerialLayout/MessageBoxMarketerialLayout.uni.driver',
  },

  MessageBoxFunctionalLayout: {
    vanillaLegacyTestkit: true,
    enzymeLegacyTestkit: true,
    protractorLegacyTestkit: true,
    skipSanityTest: true,

    testkitPath:
      '../src/MessageBox/FunctionalLayout/MessageBoxFunctionalLayout.driver',

    protractorTestkitPath:
      '../src/MessageBox/FunctionalLayout/MessageBoxFunctionalLayout.protractor.driver',

    puppeteerTestkitPath:
      '../src/MessageBox/FunctionalLayout/MessageBoxFunctionalLayout.uni.driver',
  },

  CardSubheader: {
    testkitPath: '../src/Card/Subheader/Subheader.uni.driver',
    skipSanityTest: true,
    protractorTestkitExportName: 'subheaderTestkitFactory',

    puppeteerTestkitExportName: 'subheaderTestkitFactory',
  },

  ListItemAction: {
    protractorTestkitExportName: 'ListItemActionTestkitFactory',

    puppeteerTestkitExportName: 'ListItemActionTestkitFactory',
  },

  Selector: {
    vanillaLegacyTestkit: true,
    enzymeLegacyTestkit: true,
    protractorLegacyTestkit: true,
    testkitPath: '../src/Selector/Selector.driver',
    noProtractorTestkit: true,
    noPuppeteerTestkit: true, // was not exported before automation, keeping that way for now
  },

  LinearProgressBar: {
    vanillaLegacyTestkit: true,
    enzymeLegacyTestkit: true,
    protractorLegacyTestkit: true,
  },

  CircularProgressBar: {
    vanillaLegacyTestkit: true,
    enzymeLegacyTestkit: true,
    protractorLegacyTestkit: true,
  },

  NoBorderInput: {
    vanillaLegacyTestkit: true,
    enzymeLegacyTestkit: true,
    protractorLegacyTestkit: true,
    puppeteerLegacyTestkit: true,
  },

  Modal: {
    vanillaLegacyTestkit: true,
    enzymeLegacyTestkit: true,
    protractorLegacyTestkit: true,
    protractorTestkitPath: '../src/Modal/Modal.uni.driver',
  },

  ModalSelectorLayout: {
    vanillaLegacyTestkit: true,
    enzymeLegacyTestkit: true,
    protractorLegacyTestkit: true,
    noPuppeteerTestkit: true,
  },

  TimeInput: {
    vanillaLegacyTestkit: true,
    enzymeLegacyTestkit: true,
    protractorLegacyTestkit: true,
    enzymeLegacyTestkit: true,
    protractorLegacyTestkit: true,
    protractorTestkitPath: '../src/TimeInput/TimeInput.uni.driver',
  },

  Notification: {
    vanillaLegacyTestkit: true,
    enzymeLegacyTestkit: true,
    protractorTestkitPath: '../src/Notification/Notification.uni.driver',

    puppeteerTestkitPath: '../src/Notification/Notification.uni.driver',
  },

  Skeleton: {
    vanillaLegacyTestkit: true,
    enzymeLegacyTestkit: true,
    protractorLegacyTestkit: true,
    noProtractorTestkit: true,
    noPuppeteerTestkit: true,
  },

  SortableList: {
    vanillaLegacyTestkit: true,
    enzymeLegacyTestkit: true,
    protractorLegacyTestkit: true,
    noProtractorTestkit: true,
    noPuppeteerTestkit: true,
  },

  NestableList: {
    vanillaLegacyTestkit: true,
    enzymeLegacyTestkit: true,
    protractorLegacyTestkit: true,
    noProtractorTestkit: true,
    noPuppeteerTestkit: true,
  },

  Badge: {
    vanillaLegacyTestkit: true,
    enzymeLegacyTestkit: true,
    protractorLegacyTestkit: true,
  },

  FloatingHelper: {
    vanillaLegacyTestkit: true,
    enzymeLegacyTestkit: true,
    protractorLegacyTestkit: true,
    noPuppeteerTestkit: true,
  },

  FormField: {
    vanillaLegacyTestkit: true,
    enzymeLegacyTestkit: true,
    protractorLegacyTestkit: true,
    puppeteerLegacyTestkit: true,
  },

  ToggleSwitch: {
    vanillaLegacyTestkit: true,
    enzymeLegacyTestkit: true,
    protractorLegacyTestkit: true,
    noPuppeteerTestkit: true,
  },

  Label: {
    vanillaLegacyTestkit: true,
    enzymeLegacyTestkit: true,
    protractorLegacyTestkit: true,
    noPuppeteerTestkit: true,
  },

  Highlighter: {
    vanillaLegacyTestkit: true,
    enzymeLegacyTestkit: true,
    protractorLegacyTestkit: true,
    noPuppeteerTestkit: true,
  },

  ColorPicker: {
    vanillaLegacyTestkit: true,
    enzymeLegacyTestkit: true,
    protractorLegacyTestkit: true,
  },

  FilePicker: {
    vanillaLegacyTestkit: true,
    enzymeLegacyTestkit: true,
    protractorLegacyTestkit: true,
  },

  Checkbox: {
    vanillaLegacyTestkit: true,
    enzymeLegacyTestkit: true,
    protractorLegacyTestkit: true,
  },

  Loader: {
    vanillaLegacyTestkit: true,
    enzymeLegacyTestkit: true,
    protractorLegacyTestkit: true,
  },

  InputArea: {
    vanillaLegacyTestkit: true,
    enzymeLegacyTestkit: true,
    protractorLegacyTestkit: true,
  },

  Search: {
    vanillaLegacyTestkit: true,
    enzymeLegacyTestkit: true,
    protractorLegacyTestkit: true,
  },

  AutoComplete: {
    vanillaLegacyTestkit: true,
    enzymeLegacyTestkit: true,
    protractorLegacyTestkit: true,
  },

  AutoCompleteComposite: {
    vanillaLegacyTestkit: true,
    enzymeLegacyTestkit: true,
    protractorLegacyTestkit: true,
    noPuppeteerTestkit: true,
  },

  EditableSelector: {
    vanillaLegacyTestkit: true,
    enzymeLegacyTestkit: true,
    protractorLegacyTestkit: true,
  },

  Tag: {
    vanillaLegacyTestkit: true,
    enzymeLegacyTestkit: true,
    protractorLegacyTestkit: true,
  },

  InputWithOptions: {
    vanillaLegacyTestkit: true,
    enzymeLegacyTestkit: true,
    protractorLegacyTestkit: true,
  },

  Breadcrumbs: {
    vanillaLegacyTestkit: true,
    enzymeLegacyTestkit: true,
    protractorLegacyTestkit: true,
  },

  DataTable: {
    vanillaLegacyTestkit: true,
    enzymeLegacyTestkit: true,
    protractorLegacyTestkit: true,
  },

  DropdownLayout: {
    vanillaLegacyTestkit: true,
    enzymeLegacyTestkit: true,
    protractorLegacyTestkit: true,
  },

  EmptyState: {
    vanillaLegacyTestkit: true,
    enzymeLegacyTestkit: true,
    protractorLegacyTestkit: true,
  },

  Tabs: {
    vanillaLegacyTestkit: true,
    enzymeLegacyTestkit: true,
    protractorLegacyTestkit: true,
  },

  StatsWidget: {
    vanillaLegacyTestkit: true,
    enzymeLegacyTestkit: true,
    protractorLegacyTestkit: true,
  },

  AddItem: {
    vanillaLegacyTestkit: true,
    enzymeLegacyTestkit: true,
    protractorLegacyTestkit: true,
  },

  ImageViewer: {
    vanillaLegacyTestkit: true,
    enzymeLegacyTestkit: true,
    protractorLegacyTestkit: true,
  },

  SectionHelper: {
    vanillaLegacyTestkit: true,
    enzymeLegacyTestkit: true,
    protractorLegacyTestkit: true,
  },

  GenericModalLayout: {
    vanillaLegacyTestkit: true,
    enzymeLegacyTestkit: true,
    protractorLegacyTestkit: true,
  },

  Slider: {
    vanillaLegacyTestkit: true,
    enzymeLegacyTestkit: true,
    protractorLegacyTestkit: true,
  },

  Range: {
    vanillaLegacyTestkit: true,
    enzymeLegacyTestkit: true,
    protractorLegacyTestkit: true,
    noPuppeteerTestkit: true,
  },

  AutoCompleteWithLabel: {
    namedProtractorTestkitExport: true,
    namedPuppeteerTestkitExport: true,
  },
};
