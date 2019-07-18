/*
 * This file exports object with config for component testkits.
 * Ideally there should be no config, it is used for cases that are not following convention.
 *
 * Glossary:
 *   regular components export testkits and pass sanity tests automatically (no config).
 *   non-regular components need additional config for export and sanity tests to be automated.
 *
 * { [component.displayName]: TestkitDefinition }
 *
 * [component.displayName] = {
 *   // what kind of drivers should be tested
 *   drivers?: ['vanilla', 'enzyme']
 *
 *   // set to true if testkit already has export in `test/generate-testkit-exports/enzyme.template
 *   // this is used for proxied components from other libraries (like wix-ui-backoffice)
 *   manualExport?: false;
 *
 *   // skip sanity tests for this component entirely.
 *   // this is likely an indication for a fix
 *   skipTestkitSanity?: false;
 *
 *   // Indicate that component does not have testkit at all.
 *   // It is sometimes ok not to have one.
 *   noTestkit?: false;
 *
 *   // Mark if component uses unidriver.
 *   // It is required for unidriver, because it is tested differently
 *   unidriver?: false;
 *
 *   // set path to testkit if path is not following convention
 *   // this file will be imported and wrapped with appropriate testkit factory
 *   // (one of testkitFactoryCreator, uniTestkitFactoryCreator, enzymeTestkitFactoryCreator or enzymeUniTestkitFactoryCreator
 *   testkitPath?: function;
 * }
 */

module.exports = {
  SideMenuDrill: {
    skipSanityTest: true,
    testkitPath: "../src/SideMenu/DrillView/DrillView.driver",
    protractorTestkitPath:
      "../src/SideMenu/DrillView/DrillView.protractor.driver",
    protractorTestkitExportName: "drillViewTestkitFactory"
  },

  BadgeSelectItemBuilder: {
    skipSanityTest: true,
    noTestkit: true
  },

  MultiSelect: {
    skipSanityTest: true // testkit does not have root `exists` method
  },

  MultiSelectCheckbox: {
    skipSanityTest: true // testkit does not have root `exists` method
  },

  DragAndDrop: { skipSanityTest: true, noTestkit: true },
  DragDropContextProvider: { skipSanityTest: true, noTestkit: true },

  EndorseContentLayout: {
    skipSanityTest: true,
    // TODO: testkit of this component is not following convention.
    // It is used only internally and before automated export was not exported manually
    noTestkit: true
  },

  GoogleAddressInput: {
    skipSanityTest: true,
    // TODO: testkit of this component is not following convention.
    // It is used only internally and before automated export was not exported manually
    noTestkit: true
  },

  GoogleAddressInputWithLabel: {
    skipSanityTest: true,
    // TODO: testkit of this component is not following convention.
    // It is used only internally and before automated export was not exported manually

    // the name of export has a typo, it's different than component name
    protractorTestkitExportName: "googleAddressWithInputTestkitFactory"
  },

  Grid: { skipSanityTest: true, noTestkit: true },
  HBox: { skipSanityTest: true, noTestkit: true },
  Layout: { skipSanityTest: true, noTestkit: true },
  MessageBox: { skipSanityTest: true, noTestkit: true },

  Header: {
    testkitPath: "../src/Card/Header/Header.driver",
    // TODO: this is actually  Card.Header, but is exported just as header
    skipSanityTest: true,
    namedTestkitExport: true,
    testkitImportName: "headerUniDriverFactory",
    protractorTestkitPath: "../src/Card/Header/Header.uni.driver",
    protractorTestkitExportName: "cardHeaderTestkitFactory"
  },

  Page: { skipSanityTest: true },
  PageHeader: { skipSanityTest: true },
  PopoverMenuItem: { skipSanityTest: true, noTestkit: true },
  TableToolbar: { skipSanityTest: true, noTestkit: true },
  Tooltip: { skipSanityTest: true, manualExport: true },
  VBox: { skipSanityTest: true, noTestkit: true },
  Collapse: { skipSanityTest: true, noTestkit: true },
  Card: { skipSanityTest: true, noTestkit: true },
  Composite: { skipSanityTest: true, noTestkit: true },
  FullTextView: { skipSanityTest: true, noTestkit: true },

  RichTextArea: {
    beforeAllHook: () => (window.getSelection = () => ({})),
    testkitPath: "../src/Deprecated/RichTextArea/RichTextArea.driver",
    protractorTestkitPath:
      "../src/Deprecated/RichTextArea/RichTextArea.protractor.driver"
  },

  RichTextAreaComposite: {
    beforeAllHook: () => (window.getSelection = () => ({})),
    testkitPath:
      "../src/Deprecated/RichTextAreaComposite/RichTextAreaComposite.driver"
  },

  Avatar: {
    unidriver: true,
    namedTestkitExport: true,
    protractorTestkitPath: "../src/Avatar/Avatar.driver"
  },

  TextButton: {
    unidriver: true,
    testkitPath: "../src/TextButton/TextButton.uni.driver",
    namedTestkitExport: true
  },

  IconButton: {
    unidriver: true,
    testkitPath: "../src/IconButton/IconButton.uni.driver",
    namedTestkitExport: true
  },

  CloseButton: {
    unidriver: true,
    testkitPath: "../src/CloseButton/CloseButton.uni.driver",
    namedTestkitExport: true
  },

  CardGalleryItem: {
    unidriver: true,
    testkitPath: "../src/CardGalleryItem/CardGalleryItem.uni.driver"
  },

  SideMenu: {
    testkitPath: "../src/SideMenu/core/SideMenu.driver",
    namedTestkitExport: true,
    testkitImportName: "sideMenuUniDriverFactory",
    protractorTestkitPath: "../src/SideMenu/core/SideMenu.uni.driver"
  },

  Button: {
    unidriver: true,
    testkitPath: "../src/Button/Button.uni.driver",
    namedTestkitExport: true
  },

  CalendarPanelFooter: {
    unidriver: true,
    testkitPath: "../src/CalendarPanelFooter/CalendarPanelFooter.uni.driver",
    namedTestkitExport: true
  },

  ContactItemBuilder: {
    skipSanityTest: true,
    namedTestkitExport: true,
    testkitImportName: "contactItemBuilderUniDriverFactory",
    protractorTestkitPath:
      "../src/ContactItemBuilder/ContactItemBuilder.uni.driver"
  },

  Draggable: {
    testkitPath: "../src/DragAndDrop/Draggable/Draggable.driver",
    skipSanityTest: true,
    noProtractorTestkit: true
  },

  EditableRow: {
    testkitPath: "../src/EditableSelector/EditableRow/EditableRow.driver",
    unidriver: false, // TODO: component has unidriver, but it is exported as legacy driver. Changing it is a breaking change
    skipSanityTest: true,
    namedTestkitExport: true,
    testkitImportName: "editableRowUniDriverFactory",
    protractorTestkitPath:
      "../src/EditableSelector/EditableRow/EditableRow.uni.driver"
  },

  FieldLabelAttributes: {
    testkitPath: "../src/FieldLabelAttributes/FieldLabelAttributes.driver",
    skipSanityTest: true
  },

  FieldWithSelectionComposite: {
    testkitPath:
      "../src/Composite/FieldWithSelectionComposite/FieldWithSelectionComposite.driver",
    protractorTestkitPath:
      "../src/Composite/FieldWithSelectionComposite/FieldWithSelectionComposite.protractor.driver",
    skipSanityTest: true
  },

  Carousel: {
    drivers: ["enzyme"]
  },

  NumberInput: {
    unidriver: true,
    testkitPath: "../src/NumberInput/NumberInput.uni.driver",
    namedTestkitExport: true
  },

  FloatingNotification: {
    unidriver: true,
    drivers: ["enzyme"],
    testkitPath: "../src/FloatingNotification/FloatingNotification.uni.driver",
    namedTestkitExport: true
  },

  DatePicker: {
    skipSanityTest: true // testkit does not have root `exists` method
  },

  Proportion: {
    unidriver: true,
    drivers: ["enzyme"],
    testkitPath: "../src/Proportion/Proportion.uni.driver",
    namedTestkitExport: true
  },

  DropdownBase: {
    unidriver: true,
    testkitPath: "../src/DropdownBase/DropdownBase.uni.driver",
    namedTestkitExport: true
  },

  RadioButton: {
    testkitPath: "../src/RadioGroup/RadioButton/RadioButton.driver",
    protractorTestkitPath:
      "../src/RadioGroup/RadioButton/RadioButton.protractor.driver",
    skipSanityTest: true
  },

  MessageBoxMarketerialLayout: {
    testkitPath:
      "../src/MessageBox/MarketerialLayout/MessageBoxMarketerialLayout.driver",
    protractorTestkitPath:
      "../src/MessageBox/MarketerialLayout/MessageBoxMarketerialLayout.uni.driver",
    skipSanityTest: true,
    namedTestkitExport: true,
    testkitImportName: "messageBoxMarketerialLayoutUniDriverFactory"
  },

  MessageBoxFunctionalLayout: {
    testkitPath:
      "../src/MessageBox/FunctionalLayout/MessageBoxFunctionalLayout.driver",

    protractorTestkitPath:
      "../src/MessageBox/FunctionalLayout/MessageBoxFunctionalLayout.protractor.driver",

    skipSanityTest: true
  },

  Box: {
    unidriver: true,
    testkitPath: "../src/Box/Box.uni.driver",
    namedTestkitExport: true
  },

  Thumbnail: {
    unidriver: true,
    testkitPath: "../src/Thumbnail/Thumbnail.uni.driver",
    namedTestkitExport: true
  },

  SegmentedToggle: {
    unidriver: true,
    testkitPath: "../src/SegmentedToggle/SegmentedToggle.uni.driver",
    namedTestkitExport: true
  },

  RichTextInputArea: {
    unidriver: true,
    testkitPath: "../src/RichTextInputArea/RichTextInputArea.uni.driver",
    namedTestkitExport: true
  },

  DateInput: {
    unidriver: true,
    testkitPath: "../src/DateInput/DateInput.uni.driver",
    namedTestkitExport: true
  },

  ColorInput: {
    unidriver: true,
    testkitPath: "../src/ColorInput/ColorInput.uni.driver",
    namedTestkitExport: true
  },

  EditableTitle: {
    testkitPath: "../src/EditableTitle/EditableTitle.uni.driver",
    unidriver: true,
    namedTestkitExport: true,
    testkitImportName: "editableTitleUniDriverFactory"
  },

  GooglePreview: {
    unidriver: true,
    testkitPath: "../src/GooglePreview/GooglePreview.uni.driver",
    namedTestkitExport: true
  },

  Accordion: {
    unidriver: true,
    testkitPath: "../src/Accordion/Accordion.uni.driver",
    namedTestkitExport: true
  },

  SocialPreview: {
    unidriver: true,
    testkitPath: "../src/SocialPreview/SocialPreview.uni.driver",
    namedTestkitExport: true
  },

  ErrorIndicator: {
    unidriver: true,
    testkitPath: "../src/ErrorIndicator/ErrorIndicator.uni.driver",
    namedTestkitExport: true
  },

  CardSubheader: {
    unidriver: true,
    skipSanityTest: true,
    testkitPath: "../src/Card/Subheader/Subheader.uni.driver",
    protractorTestkitExportName: "subheaderTestkitFactory",
    namedTestkitExport: true
  },

  ListItemAction: {
    unidriver: true,
    testkitPath: "../src/ListItemAction/ListItemAction.uni.driver",
    namedTestkitExport: true,
    testkitImportName: "ListItemActionDriverFactory",
    protractorTestkitExportName: "ListItemActionTestkitFactory"
  },

  Swatches: {
    unidriver: true,
    testkitPath: "../src/Swatches/Swatches.uni.driver",
    namedTestkitExport: true
  },

  Sidebar: {
    unidriver: true,
    testkitPath: "../src/Sidebar/Sidebar.uni.driver",
    namedTestkitExport: true
  },

  Selector: {
    unidriver: false, // TODO: component has unidriver, but it is exported as legacy driver. Changing it is a breaking change
    testkitPath: "../src/Selector/Selector.driver",
    noProtractorTestkit: true
  },

  Stepper: {
    unidriver: true,
    testkitPath: "../src/Stepper/Stepper.uni.driver",
    namedTestkitExport: true
  },

  SidebarSectionTitle: {
    unidriver: true,
    testkitPath: "../src/SidebarSectionTitle/SidebarSectionTitle.uni.driver"
  },

  SidebarSectionItem: {
    unidriver: true,
    testkitPath: "../src/SidebarSectionItem/SidebarSectionItem.uni.driver"
  },

  SidebarSectionDivider: {
    unidriver: true,
    testkitPath: "../src/SidebarSectionDivider/SidebarSectionDivider.uni.driver"
  },

  LinearProgressBar: {
    namedTestkitExport: true
  },

  NoBorderInput: {
    namedTestkitExport: true
  },

  Modal: {
    namedTestkitExport: true,
    testkitImportName: "modalUniDriverFactory",
    protractorTestkitPath: "../src/Modal/Modal.uni.driver"
  },

  TimeInput: {
    namedTestkitExport: true,
    testkitImportName: "timeInputUniDriverFactory",
    protractorTestkitPath: "../src/TimeInput/TimeInput.uni.driver"
  },

  Notification: {
    protractorUnidriver: true,
    namedTestkitExport: true,
    testkitImportName: "notificationUniDriverFactory",
    protractorTestkitPath: "../src/Notification/Notification.uni.driver"
  },

  Skeleton: {
    noProtractorTestkit: true
  },

  SortableList: {
    noProtractorTestkit: true
  },

  NestableList: {
    noProtractorTestkit: true
  },

  CounterBadge: {
    noProtractorTestkit: true // it is exported manually in `.wuf/testkits/protractor.template.ejs`
  },

  FloatingHelper: {
    noProtractorTestkit: true // it is exported manually in `.wuf/testkits/protractor.template.ejs`
  },

  ToggleSwitch: {
    noProtractorTestkit: true // it is exported manually in `.wuf/testkits/protractor.template.ejs`
  },

  Label: {
    noProtractorTestkit: true // it is exported manually in `.wuf/testkits/protractor.template.ejs`
  }
};
