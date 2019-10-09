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

    namedPuppeteerTestkitExport: true,
    puppeteerTestkitImportName: 'drillViewUniDriverFactory',
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

    puppeteerTestkitImportName: 'multiselectUniDriverFactory',
    namedPuppeteerTestkitExport: true,
  },

  MultiSelectCheckbox: {
    vanillaLegacyTestkit: true,
    enzymeLegacyTestkit: true,
    protractorLegacyTestkit: true,
    skipSanityTest: true, // testkit does not have root `exists` method

    puppeteerTestkitImportName: 'multiSelectCheckboxUniDriverFactory',
    namedPuppeteerTestkitExport: true,
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
  HBox: { skipSanityTest: true, noTestkit: true },
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

    namedProtractorTestkitExport: true,
    protractorTestkitImportName: 'headerUniDriverFactory',
    protractorTestkitPath: '../src/Card/Header/Header.uni.driver',
    protractorTestkitExportName: 'cardHeaderTestkitFactory',

    namedPuppeteerTestkitExport: true,
    puppeteerTestkitImportName: 'headerUniDriverFactory',
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
    namedPuppeteerTestkitExport: true,
    puppeteerTestkitImportName: 'pageHeaderUniDriverFactory',
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
  VBox: { skipSanityTest: true, noTestkit: true },
  Collapse: { skipSanityTest: true, noTestkit: true },
  Card: { skipSanityTest: true, noTestkit: true },
  Composite: { skipSanityTest: true, noTestkit: true },
  FullTextView: { skipSanityTest: true, noTestkit: true },

  Text: {
    vanillaLegacyTestkit: true,
    enzymeLegacyTestkit: true,
    protractorLegacyTestkit: true,
    puppeteerLegacyTestkit: true,
  },

  TextButton: {
    namedProtractorTestkitExport: true,
    namedPuppeteerTestkitExport: true,
  },

  IconButton: {
    namedProtractorTestkitExport: true,
    namedPuppeteerTestkitExport: true,
  },

  CloseButton: {
    namedProtractorTestkitExport: true,
    namedPuppeteerTestkitExport: true,
  },

  ToggleButton: {
    namedProtractorTestkitExport: true,
    namedPuppeteerTestkitExport: true,
  },

  SideMenu: {
    vanillaLegacyTestkit: true,
    enzymeLegacyTestkit: true,
    protractorLegacyTestkit: true,
    testkitPath: '../src/Deprecated/SideMenu/core/SideMenu.driver',

    namedProtractorTestkitExport: true,
    protractorTestkitImportName: 'sideMenuUniDriverFactory',
    protractorTestkitPath:
      '../src/Deprecated/SideMenu/core/SideMenu.uni.driver',

    namedPuppeteerTestkitExport: true,
    puppeteerTestkitImportName: 'sideMenuUniDriverFactory',
    puppeteerTestkitPath: '../src/Deprecated/SideMenu/core/SideMenu.uni.driver',
  },

  Button: {
    namedProtractorTestkitExport: true,
    namedPuppeteerTestkitExport: true,
  },

  Calendar: {
    vanillaLegacyTestkit: true,
    enzymeLegacyTestkit: true,
    protractorLegacyTestkit: true,
    namedPuppeteerTestkitExport: true,
    puppeteerTestkitImportName: 'calendarUniDriverFactory',
    puppeteerTestkitPath: '../src/Calendar/Calendar.uni.driver',
  },

  CalendarPanel: {
    vanillaLegacyTestkit: true,
    enzymeLegacyTestkit: true,
    protractorLegacyTestkit: true,
    namedPuppeteerTestkitExport: true,
    puppeteerTestkitImportName: 'calendarPanelUniDriverFactory',
    puppeteerTestkitPath: '../src/CalendarPanel/CalendarPanel.uni.driver',
  },

  CalendarPanelFooter: {
    namedProtractorTestkitExport: true,
    namedPuppeteerTestkitExport: true,
  },

  ContactItemBuilder: {
    skipSanityTest: true,
    vanillaLegacyTestkit: true,
    enzymeLegacyTestkit: true,
    protractorLegacyTestkit: true,
    namedProtractorTestkitExport: true,
    protractorTestkitImportName: 'contactItemBuilderUniDriverFactory',
    protractorTestkitPath:
      '../src/ContactItemBuilder/ContactItemBuilder.uni.driver',

    namedPuppeteerTestkitExport: true,
    puppeteerTestkitImportName: 'contactItemBuilderUniDriverFactory',
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
    namedProtractorTestkitExport: true,
    protractorTestkitImportName: 'editableRowUniDriverFactory',
    protractorTestkitPath:
      '../src/EditableSelector/EditableRow/EditableRow.uni.driver',

    namedPuppeteerTestkitExport: true,
    puppeteerTestkitImportName: 'editableRowUniDriverFactory',
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
    namedPuppeteerTestkitExport: true,
    puppeteerTestkitImportName: 'carouselUniDriverFactory',
  },

  Input: {
    vanillaLegacyTestkit: true,
    enzymeLegacyTestkit: true,
    protractorLegacyTestkit: true,
  },

  NumberInput: {
    namedProtractorTestkitExport: true,
    namedPuppeteerTestkitExport: true,
  },

  FloatingNotification: {
    namedProtractorTestkitExport: true,
    namedPuppeteerTestkitExport: true,
  },

  DatePicker: {
    vanillaLegacyTestkit: true,
    enzymeLegacyTestkit: true,
    protractorLegacyTestkit: true,
    skipSanityTest: true, // testkit does not have root `exists` method
    noPuppeteerTestkit: true,
  },

  Proportion: {
    namedProtractorTestkitExport: true,
    namedPuppeteerTestkitExport: true,
  },

  Dropdown: {
    vanillaLegacyTestkit: true,
    enzymeLegacyTestkit: true,
    protractorLegacyTestkit: true,
    namedPuppeteerTestkitExport: true,
    puppeteerTestkitImportName: 'dropdownUniDriverFactory',
  },

  DropdownBase: {
    namedProtractorTestkitExport: true,
    namedPuppeteerTestkitExport: true,
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
    namedProtractorTestkitExport: true,
    protractorTestkitImportName: 'messageBoxMarketerialLayoutUniDriverFactory',

    namedPuppeteerTestkitExport: true,
    puppeteerTestkitImportName: 'messageBoxMarketerialLayoutUniDriverFactory',
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

    namedPuppeteerTestkitExport: true,
    puppeteerTestkitImportName: 'MessageBoxFunctionalLayoutUniDriverFactory',
    puppeteerTestkitPath:
      '../src/MessageBox/FunctionalLayout/MessageBoxFunctionalLayout.uni.driver',
  },

  Box: {
    namedProtractorTestkitExport: true,
    namedPuppeteerTestkitExport: true,
    puppeteerTestkitImportName: 'BoxDriver',
  },

  Thumbnail: {
    namedProtractorTestkitExport: true,
    namedPuppeteerTestkitExport: true,
  },

  SegmentedToggle: {
    namedProtractorTestkitExport: true,
    namedPuppeteerTestkitExport: true,
  },

  RichTextInputArea: {
    namedProtractorTestkitExport: true,
  },

  DateInput: {
    namedProtractorTestkitExport: true,
    namedPuppeteerTestkitExport: true,
  },

  ColorInput: {
    namedProtractorTestkitExport: true,
    namedPuppeteerTestkitExport: true,
  },

  EditableTitle: {
    namedProtractorTestkitExport: true,
    protractorTestkitImportName: 'editableTitleUniDriverFactory',
    namedPuppeteerTestkitExport: true,
    puppeteerTestkitImportName: 'editableTitleUniDriverFactory',
  },

  GooglePreview: {
    namedProtractorTestkitExport: true,
    namedPuppeteerTestkitExport: true,
  },

  Accordion: {
    namedProtractorTestkitExport: true,
  },

  SocialPreview: {
    namedProtractorTestkitExport: true,
    namedPuppeteerTestkitExport: true,
  },

  ErrorIndicator: {
    namedProtractorTestkitExport: true,
    namedPuppeteerTestkitExport: true,
  },

  CardSubheader: {
    testkitPath: '../src/Card/Subheader/Subheader.uni.driver',
    skipSanityTest: true,
    protractorTestkitExportName: 'subheaderTestkitFactory',
    namedProtractorTestkitExport: true,

    namedPuppeteerTestkitExport: true,
    puppeteerTestkitExportName: 'subheaderTestkitFactory',
  },

  ListItemAction: {
    namedProtractorTestkitExport: true,
    protractorTestkitImportName: 'ListItemActionDriverFactory',
    protractorTestkitExportName: 'ListItemActionTestkitFactory',

    namedPuppeteerTestkitExport: true,
    puppeteerTestkitImportName: 'ListItemActionDriverFactory',
    puppeteerTestkitExportName: 'ListItemActionTestkitFactory',
  },

  Swatches: {
    namedProtractorTestkitExport: true,
    namedPuppeteerTestkitExport: true,
  },

  Sidebar: {
    namedProtractorTestkitExport: true,
    namedPuppeteerTestkitExport: true,
  },

  Selector: {
    vanillaLegacyTestkit: true,
    enzymeLegacyTestkit: true,
    protractorLegacyTestkit: true,
    testkitPath: '../src/Selector/Selector.driver',
    noProtractorTestkit: true,
    noPuppeteerTestkit: true, // was not exported before automation, keeping that way for now
  },

  Stepper: {
    namedProtractorTestkitExport: true,
    namedPuppeteerTestkitExport: true,
  },

  SidebarSectionTitle: {
    namedPuppeteerTestkitExport: true,
  },

  SidebarSectionItem: {
    namedPuppeteerTestkitExport: true,
  },

  SidebarDivider: {
    namedPuppeteerTestkitExport: true,
  },

  SidebarHeader: {
    namedPuppeteerTestkitExport: true,
  },

  LinearProgressBar: {
    vanillaLegacyTestkit: true,
    enzymeLegacyTestkit: true,
    protractorLegacyTestkit: true,
    namedProtractorTestkitExport: true,
    namedPuppeteerTestkitExport: true,
  },

  CircularProgressBar: {
    vanillaLegacyTestkit: true,
    enzymeLegacyTestkit: true,
    protractorLegacyTestkit: true,
    namedPuppeteerTestkitExport: true,
  },

  NoBorderInput: {
    vanillaLegacyTestkit: true,
    enzymeLegacyTestkit: true,
    protractorLegacyTestkit: true,
    puppeteerLegacyTestkit: true,
    namedProtractorTestkitExport: true,
    namedPuppeteerTestkitExport: true,
  },

  Modal: {
    vanillaLegacyTestkit: true,
    enzymeLegacyTestkit: true,
    protractorLegacyTestkit: true,
    namedProtractorTestkitExport: true,
    protractorTestkitImportName: 'modalUniDriverFactory',
    protractorTestkitPath: '../src/Modal/Modal.uni.driver',
    puppeteerTestkitImportName: 'modalUniDriverFactory',
    namedPuppeteerTestkitExport: true,
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
    namedProtractorTestkitExport: true,
    protractorTestkitImportName: 'timeInputUniDriverFactory',
    protractorTestkitPath: '../src/TimeInput/TimeInput.uni.driver',

    puppeteerTestkitImportName: 'timeInputUniDriverFactory',
    namedPuppeteerTestkitExport: true,
  },

  Notification: {
    vanillaLegacyTestkit: true,
    enzymeLegacyTestkit: true,
    namedProtractorTestkitExport: true,
    protractorTestkitImportName: 'notificationUniDriverFactory',
    protractorTestkitPath: '../src/Notification/Notification.uni.driver',

    namedPuppeteerTestkitExport: true,
    puppeteerTestkitImportName: 'notificationUniDriverFactory',
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
    puppeteerTestkitImportName: 'badgeUniDriverFactory',
    namedPuppeteerTestkitExport: true,
  },

  CounterBadge: {
    vanillaLegacyTestkit: true,
    enzymeLegacyTestkit: true,
    protractorLegacyTestkit: true,
    noPuppeteerTestkit: true,
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
    namedPuppeteerTestkitExport: true,
    puppeteerTestkitImportName: 'checkboxUniDriverFactory',
  },

  Loader: {
    vanillaLegacyTestkit: true,
    enzymeLegacyTestkit: true,
    protractorLegacyTestkit: true,
    namedPuppeteerTestkitExport: true,
    puppeteerTestkitImportName: 'loaderUniDriverFactory',
  },

  InputArea: {
    vanillaLegacyTestkit: true,
    enzymeLegacyTestkit: true,
    protractorLegacyTestkit: true,
    puppeteerTestkitImportName: 'inputAreaUniDriverFactory',
    namedPuppeteerTestkitExport: true,
  },

  Search: {
    vanillaLegacyTestkit: true,
    enzymeLegacyTestkit: true,
    protractorLegacyTestkit: true,
    puppeteerTestkitImportName: 'searchUniDriverFactory',
    namedPuppeteerTestkitExport: true,
  },

  AutoComplete: {
    vanillaLegacyTestkit: true,
    enzymeLegacyTestkit: true,
    protractorLegacyTestkit: true,
    puppeteerTestkitImportName: 'autoCompleteUniDriverFactory',
    namedPuppeteerTestkitExport: true,
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
    puppeteerTestkitImportName: 'editableSelectorUniDriverFactory',
    namedPuppeteerTestkitExport: true,
  },

  Tag: {
    vanillaLegacyTestkit: true,
    enzymeLegacyTestkit: true,
    protractorLegacyTestkit: true,
    puppeteerTestkitImportName: 'tagUniDriverFactory',
    namedPuppeteerTestkitExport: true,
  },

  InputWithOptions: {
    vanillaLegacyTestkit: true,
    enzymeLegacyTestkit: true,
    protractorLegacyTestkit: true,
    puppeteerTestkitImportName: 'inputWithOptionsUniDriverFactory',
    namedPuppeteerTestkitExport: true,
  },

  Breadcrumbs: {
    vanillaLegacyTestkit: true,
    enzymeLegacyTestkit: true,
    protractorLegacyTestkit: true,
    puppeteerTestkitImportName: 'breadcrumbsUniDriverFactory',
    namedPuppeteerTestkitExport: true,
  },

  DataTable: {
    vanillaLegacyTestkit: true,
    enzymeLegacyTestkit: true,
    protractorLegacyTestkit: true,
    puppeteerTestkitImportName: 'dataTableUniDriverFactory',
    namedPuppeteerTestkitExport: true,
  },

  DropdownLayout: {
    vanillaLegacyTestkit: true,
    enzymeLegacyTestkit: true,
    protractorLegacyTestkit: true,
    puppeteerTestkitImportName: 'dropdownLayoutDriverFactory',
    namedPuppeteerTestkitExport: true,
  },

  EmptyState: {
    vanillaLegacyTestkit: true,
    enzymeLegacyTestkit: true,
    protractorLegacyTestkit: true,
    puppeteerTestkitImportName: 'emptyStateUniDriverFactory',
    namedPuppeteerTestkitExport: true,
  },

  Tabs: {
    vanillaLegacyTestkit: true,
    enzymeLegacyTestkit: true,
    protractorLegacyTestkit: true,
    puppeteerTestkitImportName: 'tabsUniDriverFactory',
    namedPuppeteerTestkitExport: true,
  },

  StatsWidget: {
    vanillaLegacyTestkit: true,
    enzymeLegacyTestkit: true,
    protractorLegacyTestkit: true,
    puppeteerTestkitImportName: 'statsWidgetUniDriverFactory',
    namedPuppeteerTestkitExport: true,
  },

  AddItem: {
    vanillaLegacyTestkit: true,
    enzymeLegacyTestkit: true,
    protractorLegacyTestkit: true,
    puppeteerTestkitImportName: 'addItemUniDriverFactory',
    namedPuppeteerTestkitExport: true,
  },

  ImageViewer: {
    vanillaLegacyTestkit: true,
    enzymeLegacyTestkit: true,
    protractorLegacyTestkit: true,
    puppeteerTestkitImportName: 'imageViewerUniDriverFactory',
    namedPuppeteerTestkitExport: true,
  },

  SectionHelper: {
    vanillaLegacyTestkit: true,
    enzymeLegacyTestkit: true,
    protractorLegacyTestkit: true,
    puppeteerTestkitImportName: 'sectionHelperUniDriverFactory',
    namedPuppeteerTestkitExport: true,
  },

  GenericModalLayout: {
    vanillaLegacyTestkit: true,
    enzymeLegacyTestkit: true,
    protractorLegacyTestkit: true,
    puppeteerTestkitImportName: 'genericModalLayoutUniDriverFactory',
    namedPuppeteerTestkitExport: true,
  },

  Slider: {
    vanillaLegacyTestkit: true,
    enzymeLegacyTestkit: true,
    protractorLegacyTestkit: true,
    puppeteerTestkitImportName: 'sliderUniDriverFactory',
    namedPuppeteerTestkitExport: true,
  },

  Range: {
    vanillaLegacyTestkit: true,
    enzymeLegacyTestkit: true,
    protractorLegacyTestkit: true,
    noPuppeteerTestkit: true,
  },

  ModalPreviewLayout: {
    namedProtractorTestkitExport: true,
    namedPuppeteerTestkitExport: true,
  },
};
