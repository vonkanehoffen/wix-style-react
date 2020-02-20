/* eslint-disable */
/* tslint:disable */
/*
 * DO NOT EDIT THIS FILE!
 * YOUR CHANGES WILL BE OVERWRITTEN!
 * FILE IS BASED ON .wuf/testkits/protractor.template.ejs
 * AND GENERATED BY `wuf export-teskits`
 */
import 'regenerator-runtime/runtime';
import {
  protractorTestkitFactoryCreator,
  protractorUniTestkitFactoryCreator,
} from 'wix-ui-test-utils/protractor';

// here for historical reasons, should probably deprecate it
export {
  waitForVisibilityOf,
  scrollToElement,
} from 'wix-ui-test-utils/protractor';

import tooltipDriverFactory from '../src/Tooltip/Tooltip.protractor.driver';
import { tooltipDriverFactory as tooltipNextDriverFactory } from '../src/Tooltip/TooltipNext/Tooltip.uni.driver';

export const tooltipTestkitFactory = protractorTestkitFactoryCreator(
  tooltipDriverFactory,
);

export const TooltipTestkit = protractorUniTestkitFactoryCreator(
  tooltipNextDriverFactory,
);
const load = module => {
  const MODULE_META_KEYS = ['__esModule'];

  const moduleFields = Object.keys(module).reduce((total, key) => {
    if (!MODULE_META_KEYS.includes(key)) {
      return total.concat(module[key]);
    }
    return total;
  }, []);

  let defaultOrFirstExport;
  if (module.default) {
    defaultOrFirstExport = module.default;
  } else if (moduleFields.length === 1) {
    defaultOrFirstExport = moduleFields[0];
  } else {
    defaultOrFirstExport = module;
  }
  return defaultOrFirstExport;
};

export const accordionTestkitFactory = protractorUniTestkitFactoryCreator(load(require('../src/Accordion/Accordion.uni.driver')));
export const addItemTestkitFactory = protractorTestkitFactoryCreator(load(require('../src/AddItem/AddItem.protractor.driver')));
export const autoCompleteTestkitFactory = protractorTestkitFactoryCreator(load(require('../src/AutoComplete/AutoComplete.protractor.driver')));
export const avatarTestkitFactory = protractorUniTestkitFactoryCreator(load(require('../src/Avatar/Avatar.uni.driver')));
export const badgeTestkitFactory = protractorTestkitFactoryCreator(load(require('../src/Badge/Badge.protractor.driver')));
export const badgeSelectTestkitFactory = protractorTestkitFactoryCreator(load(require('../src/BadgeSelect/BadgeSelect.protractor.driver')));
export const boxTestkitFactory = protractorUniTestkitFactoryCreator(load(require('../src/Box/Box.uni.driver')));
export const breadcrumbsTestkitFactory = protractorTestkitFactoryCreator(load(require('../src/Breadcrumbs/Breadcrumbs.protractor.driver')));
export const buttonTestkitFactory = protractorUniTestkitFactoryCreator(load(require('../src/Button/Button.uni.driver')));
export const calendarTestkitFactory = protractorTestkitFactoryCreator(load(require('../src/Calendar/Calendar.protractor.driver')));
export const calendarPanelTestkitFactory = protractorTestkitFactoryCreator(load(require('../src/CalendarPanel/CalendarPanel.protractor.driver')));
export const calendarPanelFooterTestkitFactory = protractorUniTestkitFactoryCreator(load(require('../src/CalendarPanelFooter/CalendarPanelFooter.uni.driver')));
export const cardGalleryItemTestkitFactory = protractorUniTestkitFactoryCreator(load(require('../src/CardGalleryItem/CardGalleryItem.uni.driver')));
export const carouselTestkitFactory = protractorTestkitFactoryCreator(load(require('../src/Carousel/Carousel.protractor.driver')));
export const checkboxTestkitFactory = protractorTestkitFactoryCreator(load(require('../src/Checkbox/Checkbox.protractor.driver')));
export const circularProgressBarTestkitFactory = protractorTestkitFactoryCreator(load(require('../src/CircularProgressBar/CircularProgressBar.protractor.driver')));
export const closeButtonTestkitFactory = protractorUniTestkitFactoryCreator(load(require('../src/CloseButton/CloseButton.uni.driver')));
export const colorInputTestkitFactory = protractorUniTestkitFactoryCreator(load(require('../src/ColorInput/ColorInput.uni.driver')));
export const colorPickerTestkitFactory = protractorTestkitFactoryCreator(load(require('../src/ColorPicker/ColorPicker.protractor.driver')));
export const contactItemBuilderTestkitFactory = protractorTestkitFactoryCreator(load(require('../src/ContactItemBuilder/ContactItemBuilder.uni.driver')));
export const counterBadgeTestkitFactory = protractorUniTestkitFactoryCreator(load(require('../src/CounterBadge/CounterBadge.uni.driver')));
export const dataTableTestkitFactory = protractorTestkitFactoryCreator(load(require('../src/DataTable/DataTable.protractor.driver')));
export const dateInputTestkitFactory = protractorUniTestkitFactoryCreator(load(require('../src/DateInput/DateInput.uni.driver')));
export const datePickerTestkitFactory = protractorTestkitFactoryCreator(load(require('../src/DatePicker/DatePicker.protractor.driver')));
export const dropdownTestkitFactory = protractorTestkitFactoryCreator(load(require('../src/Dropdown/Dropdown.protractor.driver')));
export const dropdownBaseTestkitFactory = protractorUniTestkitFactoryCreator(load(require('../src/DropdownBase/DropdownBase.uni.driver')));
export const dropdownLayoutTestkitFactory = protractorTestkitFactoryCreator(load(require('../src/DropdownLayout/DropdownLayout.protractor.driver')));
export const editableSelectorTestkitFactory = protractorTestkitFactoryCreator(load(require('../src/EditableSelector/EditableSelector.protractor.driver')));
export const editableTitleTestkitFactory = protractorUniTestkitFactoryCreator(load(require('../src/EditableTitle/EditableTitle.uni.driver')));
export const emptyStateTestkitFactory = protractorTestkitFactoryCreator(load(require('../src/EmptyState/EmptyState.protractor.driver')));
export const errorIndicatorTestkitFactory = protractorUniTestkitFactoryCreator(load(require('../src/ErrorIndicator/ErrorIndicator.uni.driver')));
export const filePickerTestkitFactory = protractorTestkitFactoryCreator(load(require('../src/FilePicker/FilePicker.protractor.driver')));
export const floatingHelperTestkitFactory = protractorTestkitFactoryCreator(load(require('../src/FloatingHelper/FloatingHelper.protractor.driver')));
export const floatingNotificationTestkitFactory = protractorUniTestkitFactoryCreator(load(require('../src/FloatingNotification/FloatingNotification.uni.driver')));
export const formFieldTestkitFactory = protractorTestkitFactoryCreator(load(require('../src/FormField/FormField.protractor.driver')));
export const genericModalLayoutTestkitFactory = protractorTestkitFactoryCreator(load(require('../src/GenericModalLayout/GenericModalLayout.protractor.driver')));
export const googlePreviewTestkitFactory = protractorUniTestkitFactoryCreator(load(require('../src/GooglePreview/GooglePreview.uni.driver')));
export const headingTestkitFactory = protractorTestkitFactoryCreator(load(require('../src/Heading/Heading.protractor.driver')));
export const highlighterTestkitFactory = protractorTestkitFactoryCreator(load(require('../src/Highlighter/Highlighter.protractor.driver')));
export const iconButtonTestkitFactory = protractorUniTestkitFactoryCreator(load(require('../src/IconButton/IconButton.uni.driver')));
export const toggleButtonTestkitFactory = protractorUniTestkitFactoryCreator(load(require('../src/ToggleButton/ToggleButton.uni.driver')));
export const imageViewerTestkitFactory = protractorTestkitFactoryCreator(load(require('../src/ImageViewer/ImageViewer.protractor.driver')));
export const inputTestkitFactory = protractorTestkitFactoryCreator(load(require('../src/Input/Input.protractor.driver')));
export const inputAreaTestkitFactory = protractorTestkitFactoryCreator(load(require('../src/InputArea/InputArea.protractor.driver')));
export const inputWithOptionsTestkitFactory = protractorTestkitFactoryCreator(load(require('../src/InputWithOptions/InputWithOptions.protractor.driver')));
export const labelTestkitFactory = protractorTestkitFactoryCreator(load(require('../src/Label/Label.protractor.driver')));
export const linearProgressBarTestkitFactory = protractorTestkitFactoryCreator(load(require('../src/LinearProgressBar/LinearProgressBar.protractor.driver')));
export const ListItemActionTestkitFactory = protractorUniTestkitFactoryCreator(load(require('../src/ListItemAction/ListItemAction.uni.driver')));
export const loaderTestkitFactory = protractorTestkitFactoryCreator(load(require('../src/Loader/Loader.protractor.driver')));
export const modalTestkitFactory = protractorTestkitFactoryCreator(load(require('../src/Modal/Modal.uni.driver')));
export const modalSelectorLayoutTestkitFactory = protractorTestkitFactoryCreator(load(require('../src/ModalSelectorLayout/ModalSelectorLayout.protractor.driver')));
export const multiSelectTestkitFactory = protractorTestkitFactoryCreator(load(require('../src/MultiSelect/MultiSelect.protractor.driver')));
export const multiSelectCheckboxTestkitFactory = protractorTestkitFactoryCreator(load(require('../src/MultiSelectCheckbox/MultiSelectCheckbox.protractor.driver')));
export const noBorderInputTestkitFactory = protractorTestkitFactoryCreator(load(require('../src/NoBorderInput/NoBorderInput.protractor.driver')));
export const notificationTestkitFactory = protractorUniTestkitFactoryCreator(load(require('../src/Notification/Notification.uni.driver')));
export const numberInputTestkitFactory = protractorUniTestkitFactoryCreator(load(require('../src/NumberInput/NumberInput.uni.driver')));
export const pageTestkitFactory = protractorTestkitFactoryCreator(load(require('../src/Page/Page.protractor.driver')));
export const pageHeaderTestkitFactory = protractorTestkitFactoryCreator(load(require('../src/PageHeader/PageHeader.protractor.driver')));
export const popoverTestkitFactory = protractorTestkitFactoryCreator(load(require('../src/Popover/Popover.protractor.driver')));
export const proportionTestkitFactory = protractorUniTestkitFactoryCreator(load(require('../src/Proportion/Proportion.uni.driver')));
export const radioGroupTestkitFactory = protractorTestkitFactoryCreator(load(require('../src/RadioGroup/RadioGroup.protractor.driver')));
export const rangeTestkitFactory = protractorTestkitFactoryCreator(load(require('../src/Range/Range.protractor.driver')));
export const richTextInputAreaTestkitFactory = protractorUniTestkitFactoryCreator(load(require('../src/RichTextInputArea/RichTextInputArea.uni.driver')));
export const searchTestkitFactory = protractorTestkitFactoryCreator(load(require('../src/Search/Search.protractor.driver')));
export const sectionHelperTestkitFactory = protractorTestkitFactoryCreator(load(require('../src/SectionHelper/SectionHelper.protractor.driver')));
export const segmentedToggleTestkitFactory = protractorUniTestkitFactoryCreator(load(require('../src/SegmentedToggle/SegmentedToggle.uni.driver')));
export const sidebarTestkitFactory = protractorUniTestkitFactoryCreator(load(require('../src/Sidebar/Sidebar.uni.driver')));
export const sidebarSectionTitleTestkitFactory = protractorUniTestkitFactoryCreator(load(require('../src/SidebarSectionTitle/SidebarSectionTitle.uni.driver')));
export const sliderTestkitFactory = protractorTestkitFactoryCreator(load(require('../src/Slider/Slider.protractor.driver')));
export const socialPreviewTestkitFactory = protractorUniTestkitFactoryCreator(load(require('../src/SocialPreview/SocialPreview.uni.driver')));
export const stepperTestkitFactory = protractorUniTestkitFactoryCreator(load(require('../src/Stepper/Stepper.uni.driver')));
export const swatchesTestkitFactory = protractorUniTestkitFactoryCreator(load(require('../src/Swatches/Swatches.uni.driver')));
export const tableTestkitFactory = protractorTestkitFactoryCreator(load(require('../src/Table/Table.protractor.driver')));
export const tableActionCellTestkitFactory = protractorTestkitFactoryCreator(load(require('../src/TableActionCell/TableActionCell.protractor.driver')));
export const tabsTestkitFactory = protractorTestkitFactoryCreator(load(require('../src/Tabs/Tabs.protractor.driver')));
export const tagTestkitFactory = protractorTestkitFactoryCreator(load(require('../src/Tag/Tag.protractor.driver')));
export const textTestkitFactory = protractorTestkitFactoryCreator(load(require('../src/Text/Text.protractor.driver')));
export const textButtonTestkitFactory = protractorUniTestkitFactoryCreator(load(require('../src/TextButton/TextButton.uni.driver')));
export const thumbnailTestkitFactory = protractorUniTestkitFactoryCreator(load(require('../src/Thumbnail/Thumbnail.uni.driver')));
export const timeInputTestkitFactory = protractorTestkitFactoryCreator(load(require('../src/TimeInput/TimeInput.uni.driver')));
export const toggleSwitchTestkitFactory = protractorTestkitFactoryCreator(load(require('../src/ToggleSwitch/ToggleSwitch.protractor.driver')));
export const sidebarSectionItemTestkitFactory = protractorUniTestkitFactoryCreator(load(require('../src/SidebarSectionItem/SidebarSectionItem.uni.driver')));
export const sidebarDividerTestkitFactory = protractorUniTestkitFactoryCreator(load(require('../src/SidebarDivider/SidebarDivider.uni.driver')));
export const sidebarBackButtonTestkitFactory = protractorUniTestkitFactoryCreator(load(require('../src/SidebarBackButton/SidebarBackButton.uni.driver')));
export const sidebarHeaderTestkitFactory = protractorUniTestkitFactoryCreator(load(require('../src/SidebarHeader/SidebarHeader.uni.driver')));
export const modalPreviewLayoutTestkitFactory = protractorUniTestkitFactoryCreator(load(require('../src/ModalPreviewLayout/ModalPreviewLayout.uni.driver')));
export const statisticsWidgetTestkitFactory = protractorUniTestkitFactoryCreator(load(require('../src/StatisticsWidget/StatisticsWidget.uni.driver')));
export const composerHeaderTestkitFactory = protractorUniTestkitFactoryCreator(load(require('../src/ComposerHeader/ComposerHeader.uni.driver')));
export const fillPreviewTestkitFactory = protractorUniTestkitFactoryCreator(load(require('../src/FillPreview/FillPreview.uni.driver')));
export const fillButtonTestkitFactory = protractorUniTestkitFactoryCreator(load(require('../src/FillButton/FillButton.uni.driver')));
export const barChartTestkitFactory = protractorUniTestkitFactoryCreator(load(require('../src/BarChart/BarChart.uni.driver')));
export const inputWithLabelTestkitFactory = protractorUniTestkitFactoryCreator(load(require('../src/InputWithLabel/InputWithLabel.uni.driver')));
export const autoCompleteWithLabelTestkitFactory = protractorUniTestkitFactoryCreator(load(require('../src/AutoCompleteWithLabel/AutoCompleteWithLabel.uni.driver')));
export const dividerTestkitFactory = protractorUniTestkitFactoryCreator(load(require('../src/Divider/Divider.uni.driver')));
export const labelledElementTestkitFactory = protractorUniTestkitFactoryCreator(load(require('../src/LabelledElement/LabelledElement.uni.driver')));
export const previewWidgetTestkitFactory = protractorUniTestkitFactoryCreator(load(require('../src/PreviewWidget/PreviewWidget.uni.driver')));
export const modalMobileLayoutTestkitFactory = protractorUniTestkitFactoryCreator(load(require('../src/ModalMobileLayout/ModalMobileLayout.uni.driver')));
export const mediaOverlayTestkitFactory = protractorUniTestkitFactoryCreator(load(require('../src/MediaOverlay/MediaOverlay.uni.driver')));
export const infoIconTestkitFactory = protractorUniTestkitFactoryCreator(load(require('../src/InfoIcon/InfoIcon.uni.driver')));
export const socialButtonTestkitFactory = protractorUniTestkitFactoryCreator(load(require('../src/SocialButton/SocialButton.uni.driver')));
export const verticalTabsTestkitFactory = protractorUniTestkitFactoryCreator(load(require('../src/VerticalTabs/VerticalTabs.uni.driver')));
export const verticalTabsItemTestkitFactory = protractorUniTestkitFactoryCreator(load(require('../src/VerticalTabsItem/VerticalTabsItem.uni.driver')));
export const mobilePreviewWidgetTestkitFactory = protractorUniTestkitFactoryCreator(load(require('../src/MobilePreviewWidget/MobilePreviewWidget.uni.driver')));
export const listItemSectionTestkitFactory = protractorUniTestkitFactoryCreator(load(require('../src/ListItemSection/ListItemSection.uni.driver')));
export const browserPreviewWidgetTestkitFactory = protractorUniTestkitFactoryCreator(load(require('../src/BrowserPreviewWidget/BrowserPreviewWidget.uni.driver')));
export const listItemSelectTestkitFactory = protractorUniTestkitFactoryCreator(load(require('../src/ListItemSelect/ListItemSelect.uni.driver')));
export const timeTableTestkitFactory = protractorUniTestkitFactoryCreator(load(require('../src/TimeTable/TimeTable.uni.driver')));
export const marketingLayoutTestkitFactory = protractorUniTestkitFactoryCreator(load(require('../src/MarketingLayout/MarketingLayout.uni.driver')));
export const paletteTestkitFactory = protractorUniTestkitFactoryCreator(load(require('../src/Palette/Palette.uni.driver')));
export const warningIndicatorTestkitFactory = protractorUniTestkitFactoryCreator(load(require('../src/WarningIndicator/WarningIndicator.uni.driver')));
export const variableInputTestkitFactory = protractorUniTestkitFactoryCreator(load(require('../src/VariableInput/VariableInput.uni.driver')));
export const imageTestkitFactory = protractorUniTestkitFactoryCreator(load(require('../src/Image/Image.uni.driver')));
export const sidePanelTestkitFactory = protractorUniTestkitFactoryCreator(load(require('../src/SidePanel/SidePanel.uni.driver')));
export const fontUpgradeTestkitFactory = protractorUniTestkitFactoryCreator(load(require('../src/FontUpgrade/FontUpgrade.uni.driver')));
export const customModalTestkitFactory = protractorUniTestkitFactoryCreator(load(require('../src/CustomModal/CustomModal.uni.driver')));
export const statusIndicatorTestkitFactory = protractorUniTestkitFactoryCreator(load(require('../src/StatusIndicator/StatusIndicator.uni.driver')));
export const cardHeaderTestkitFactory = protractorTestkitFactoryCreator(load(require('../src/Card/Header/Header.uni.driver')));
export const editableRowTestkitFactory = protractorTestkitFactoryCreator(load(require('../src/EditableSelector/EditableRow/EditableRow.uni.driver')));
export const fieldLabelAttributesTestkitFactory = protractorTestkitFactoryCreator(load(require('../src/FieldLabelAttributes/FieldLabelAttributes.driver')));
export const radioButtonTestkitFactory = protractorTestkitFactoryCreator(load(require('../src/RadioGroup/RadioButton/RadioButton.protractor.driver')));
export const messageBoxMarketerialLayoutTestkitFactory = protractorTestkitFactoryCreator(load(require('../src/MessageBox/MarketerialLayout/MessageBoxMarketerialLayout.uni.driver')));
export const messageBoxFunctionalLayoutTestkitFactory = protractorTestkitFactoryCreator(load(require('../src/MessageBox/FunctionalLayout/MessageBoxFunctionalLayout.protractor.driver')));
export const subheaderTestkitFactory = protractorUniTestkitFactoryCreator(load(require('../src/Card/Subheader/Subheader.uni.driver')));
