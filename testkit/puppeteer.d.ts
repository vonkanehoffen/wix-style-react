/* eslint-disable */
/* tslint:disable */
/*
 * DO NOT EDIT THIS FILE!
 * YOUR CHANGES WILL BE OVERWRITTEN!
 * FILE IS BASED ON .wuf/testkits/puppeteer-typescript.template.ejs
 * AND GENERATED BY `wuf export-teskits`
 */
import {Page} from "puppeteer";
import {BaseUniDriver} from 'wix-ui-test-utils/base-driver';
import {AccordionUniDriver} from '../src/Accordion/Accordion.uni.driver';
import {AddItemUniDriver} from '../src/AddItem/AddItem.uni.driver';
import {AutoCompleteUniDriver} from '../src/AutoComplete/AutoComplete.uni.driver';
import {AutoCompleteWithLabelUniDriver} from '../src/AutoCompleteWithLabel/AutoCompleteWithLabel.uni.driver';
import {ButtonUniDriver} from '../src/Button/Button.uni.driver';
import {CalendarPanelUniDriver} from '../src/CalendarPanel/CalendarPanel.uni.driver';
import {CalendarPanelFooterUniDriver} from '../src/CalendarPanelFooter/CalendarPanelFooter.uni.driver';
import {CardGalleryItemUniDriver} from '../src/CardGalleryItem/CardGalleryItem.uni.driver';
import {CarouselUniDriver} from '../src/Carousel/Carousel.uni.driver';
import {CheckboxUniDriver} from '../src/Checkbox/Checkbox.uni.driver';
import {CircularProgressBarUniDriver} from '../src/CircularProgressBar/CircularProgressBar.uni.driver';
import {CloseButtonUniDriver} from '../src/CloseButton/CloseButton.uni.driver';
import {ColorPickerUniDriver} from '../src/ColorPicker/ColorPicker.uni.driver';
import {ComposerHeaderUniDriver} from '../src/ComposerHeader/ComposerHeader.uni.driver';
import {ContactItemBuilderUniDriver} from '../src/ContactItemBuilder/ContactItemBuilder.uni.driver';
import {DataTableUniDriver} from '../src/DataTable/DataTable.uni.driver';
import {DateInputUniDriver} from '../src/DateInput/DateInput.uni.driver';
import {DropdownUniDriver} from '../src/dropdown/Dropdown.uni.driver';
import {DropdownBaseUniDriver} from '../src/DropdownBase/DropdownBase.uni.driver';
import {DropdownLayoutUniDriver} from '../src/DropdownLayout/DropdownLayout.uni.driver';
import {EditableSelectorUniDriver} from '../src/EditableSelector/EditableSelector.uni.driver';
import {EditableTitleUniDriver} from '../src/EditableTitle/EditableTitle.uni.driver';
import {EmptyStateUniDriver} from '../src/EmptyState/EmptyState.uni.driver';
import {ErrorIndicatorUniDriver} from '../src/ErrorIndicator/ErrorIndicator.uni.driver';
import {FilePickerUniDriver} from '../src/FilePicker/FilePicker.uni.driver';
import {FillButtonUniDriver} from '../src/FillButton/FillButton.uni.driver';
import {FillPreviewUniDriver} from '../src/FillPreview/FillPreview.uni.driver';
import {FloatingNotificationUniDriver} from '../src/FloatingNotification/FloatingNotification.uni.driver';
import {FormFieldPuppeteerDriver} from '../src/FormField/FormField.puppeteer.driver';
import {GooglePreviewUniDriver} from '../src/GooglePreview/GooglePreview.uni.driver';
import {IconButtonUniDriver} from '../src/IconButton/IconButton.uni.driver';
import {InputWithLabelUniDriver} from '../src/InputWithLabel/InputWithLabel.uni.driver';
import {ListItemActionUniDriver} from '../src/ListItemAction/ListItemAction.uni.driver';
import {ModalMobileLayoutUniDriver} from '../src/ModalMobileLayout/ModalMobileLayout.uni.driver';
import {ModalPreviewLayoutUniDriver} from '../src/ModalPreviewLayout/ModalPreviewLayout.uni.driver';
import {NumberInputUniDriver} from '../src/NumberInput/NumberInput.uni.driver';
import {ProportionUniDriver} from '../src/Proportion/Proportion.uni.driver';
import {RichTextInputAreaUniDriver} from '../src/RichTextInputArea/RichTextInputArea.uni.driver';
import {SegmentedToggleUniDriver} from '../src/SegmentedToggle/SegmentedToggle.uni.driver';
import {SidebarUniDriver} from '../src/Sidebar/Sidebar.uni.driver';
import {SidebarBackButtonUniDriver} from '../src/SidebarBackButton/SidebarBackButton.uni.driver';
import {SidebarDividerUniDriver} from '../src/SidebarDivider/SidebarDivider.uni.driver';
import {SidebarHeaderUniDriver} from '../src/SidebarHeader/SidebarHeader.uni.driver';
import {SidebarSectionItemUniDriver} from '../src/SidebarSectionItem/SidebarSectionItem.uni.driver';
import {SidebarSectionTitleUniDriver} from '../src/SidebarSectionTitle/SidebarSectionTitle.uni.driver';
import {SocialPreviewUniDriver} from '../src/SocialPreview/SocialPreview.uni.driver';
import {StatisticsWidgetUniDriver} from '../src/StatisticsWidget/StatisticsWidget.uni.driver';
import {StepperUniDriver} from '../src/Stepper/Stepper.uni.driver';
import {SwatchesUniDriver} from '../src/Swatches/Swatches.uni.driver';
import {TextButtonUniDriver} from '../src/TextButton/TextButton.uni.driver';
import {ThumbnailUniDriver} from '../src/Thumbnail/Thumbnail.uni.driver';
import {ToggleButtonUniDriver} from '../src/ToggleButton/ToggleButton.uni.driver';
import {VerticalTabsUniDriver} from '../src/VerticalTabs/VerticalTabs.uni.driver';
import {VerticalTabsItemUniDriver} from '../src/VerticalTabsItem/VerticalTabsItem.uni.driver';

type PuppeteerTestkitFactory<T> = (
  params: PuppeteerTestkitParams
) => Promise<T>;

type PuppeteerUniTestkitFactory<T extends BaseUniDriver> = (
  params: PuppeteerTestkitParams
) => Promise<T>;

interface PuppeteerTestkitParams {
  dataHook: string;
  page: Page;
}

export const tooltipTestkitFactory: any;
export const accordionTestkitFactory: PuppeteerUniTestkitFactory<AccordionUniDriver>;
export const addItemTestkitFactory: PuppeteerUniTestkitFactory<AddItemUniDriver>;
export const autoCompleteTestkitFactory: PuppeteerUniTestkitFactory<AutoCompleteUniDriver>;
export const autoCompleteCompositeTestkitFactory: any;
export const avatarTestkitFactory: any;
export const badgeTestkitFactory: any;
export const badgeSelectTestkitFactory: any;
export const boxTestkitFactory: any;
export const breadcrumbsTestkitFactory: any;
export const buttonTestkitFactory: PuppeteerUniTestkitFactory<ButtonUniDriver>;
export const calendarTestkitFactory: any;
export const calendarPanelTestkitFactory: PuppeteerUniTestkitFactory<CalendarPanelUniDriver>;
export const calendarPanelFooterTestkitFactory: PuppeteerUniTestkitFactory<CalendarPanelFooterUniDriver>;
export const cardGalleryItemTestkitFactory: PuppeteerUniTestkitFactory<CardGalleryItemUniDriver>;
export const carouselTestkitFactory: PuppeteerUniTestkitFactory<CarouselUniDriver>;
export const checkboxTestkitFactory: PuppeteerUniTestkitFactory<CheckboxUniDriver>;
export const circularProgressBarTestkitFactory: PuppeteerUniTestkitFactory<CircularProgressBarUniDriver>;
export const closeButtonTestkitFactory: PuppeteerUniTestkitFactory<CloseButtonUniDriver>;
export const colorInputTestkitFactory: any;
export const colorPickerTestkitFactory: PuppeteerUniTestkitFactory<ColorPickerUniDriver>;
export const contactItemBuilderTestkitFactory: PuppeteerUniTestkitFactory<ContactItemBuilderUniDriver>;
export const counterBadgeTestkitFactory: any;
export const dataTableTestkitFactory: PuppeteerUniTestkitFactory<DataTableUniDriver>;
export const dateInputTestkitFactory: PuppeteerUniTestkitFactory<DateInputUniDriver>;
export const datePickerTestkitFactory: any;
export const dropdownTestkitFactory: PuppeteerUniTestkitFactory<DropdownUniDriver>;
export const dropdownBaseTestkitFactory: PuppeteerUniTestkitFactory<DropdownBaseUniDriver>;
export const dropdownLayoutTestkitFactory: PuppeteerUniTestkitFactory<DropdownLayoutUniDriver>;
export const editableSelectorTestkitFactory: PuppeteerUniTestkitFactory<EditableSelectorUniDriver>;
export const editableTitleTestkitFactory: PuppeteerUniTestkitFactory<EditableTitleUniDriver>;
export const emptyStateTestkitFactory: PuppeteerUniTestkitFactory<EmptyStateUniDriver>;
export const errorIndicatorTestkitFactory: PuppeteerUniTestkitFactory<ErrorIndicatorUniDriver>;
export const filePickerTestkitFactory: PuppeteerUniTestkitFactory<FilePickerUniDriver>;
export const floatingHelperTestkitFactory: any;
export const floatingNotificationTestkitFactory: PuppeteerUniTestkitFactory<FloatingNotificationUniDriver>;
export const formFieldTestkitFactory: PuppeteerTestkitFactory<FormFieldPuppeteerDriver>;
export const genericModalLayoutTestkitFactory: PuppeteerUniTestkitFactory<GenericModalLayoutUniDriver>;
export const googleAddressInputWithLabelTestkitFactory: any;
export const googlePreviewTestkitFactory: PuppeteerUniTestkitFactory<GooglePreviewUniDriver>;
export const headingTestkitFactory: PuppeteerTestkitFactory<HeadingPuppeteerDriver>;
export const highlighterTestkitFactory: any;
export const iconButtonTestkitFactory: PuppeteerUniTestkitFactory<IconButtonUniDriver>;
export const toggleButtonTestkitFactory: PuppeteerUniTestkitFactory<ToggleButtonUniDriver>;
export const imageViewerTestkitFactory: PuppeteerUniTestkitFactory<ImageViewerUniDriver>;
export const inputTestkitFactory: PuppeteerUniTestkitFactory<InputUniDriver>;
export const inputAreaTestkitFactory: PuppeteerUniTestkitFactory<InputAreaUniDriver>;
export const inputWithOptionsTestkitFactory: PuppeteerUniTestkitFactory<InputWithOptionsUniDriver>;
export const labelTestkitFactory: any;
export const linearProgressBarTestkitFactory: PuppeteerUniTestkitFactory<LinearProgressBarUniDriver>;
export const ListItemActionTestkitFactory: PuppeteerUniTestkitFactory<ListItemActionUniDriver>;
export const loaderTestkitFactory: PuppeteerUniTestkitFactory<LoaderUniDriver>;
export const modalTestkitFactory: PuppeteerUniTestkitFactory<ModalUniDriver>;
export const modalSelectorLayoutTestkitFactory: any;
export const multiSelectTestkitFactory: PuppeteerUniTestkitFactory<MultiSelectUniDriver>;
export const multiSelectCheckboxTestkitFactory: PuppeteerUniTestkitFactory<MultiSelectCheckboxUniDriver>;
export const multiSelectCompositeTestkitFactory: any;
export const nestableListTestkitFactory: any;
export const noBorderInputTestkitFactory: PuppeteerTestkitFactory<NoBorderInputPuppeteerDriver>;
export const notificationTestkitFactory: PuppeteerUniTestkitFactory<NotificationUniDriver>;
export const numberInputTestkitFactory: PuppeteerUniTestkitFactory<NumberInputUniDriver>;
export const pageTestkitFactory: PuppeteerUniTestkitFactory<PageUniDriver>;
export const pageHeaderTestkitFactory: PuppeteerUniTestkitFactory<PageHeaderUniDriver>;
export const popoverTestkitFactory: PuppeteerUniTestkitFactory<PopoverUniDriver>;
export const popoverMenuTestkitFactory: any;
export const proportionTestkitFactory: PuppeteerUniTestkitFactory<ProportionUniDriver>;
export const radioGroupTestkitFactory: any;
export const rangeTestkitFactory: any;
export const richTextInputAreaTestkitFactory: PuppeteerUniTestkitFactory<RichTextInputAreaUniDriver>;
export const searchTestkitFactory: PuppeteerUniTestkitFactory<SearchUniDriver>;
export const sectionHelperTestkitFactory: PuppeteerUniTestkitFactory<SectionHelperUniDriver>;
export const segmentedToggleTestkitFactory: PuppeteerUniTestkitFactory<SegmentedToggleUniDriver>;
export const selectorTestkitFactory: any;
export const sidebarTestkitFactory: PuppeteerUniTestkitFactory<SidebarUniDriver>;
export const sidebarSectionTitleTestkitFactory: PuppeteerUniTestkitFactory<SidebarSectionTitleUniDriver>;
export const skeletonTestkitFactory: any;
export const sliderTestkitFactory: PuppeteerUniTestkitFactory<SliderUniDriver>;
export const socialPreviewTestkitFactory: PuppeteerUniTestkitFactory<SocialPreviewUniDriver>;
export const sortableListTestkitFactory: any;
export const statsWidgetTestkitFactory: any;
export const stepperTestkitFactory: PuppeteerUniTestkitFactory<StepperUniDriver>;
export const swatchesTestkitFactory: PuppeteerUniTestkitFactory<SwatchesUniDriver>;
export const tableTestkitFactory: PuppeteerTestkitFactory<TablePuppeteerDriver>;
export const tableActionCellTestkitFactory: any;
export const tabsTestkitFactory: PuppeteerUniTestkitFactory<TabsUniDriver>;
export const tagTestkitFactory: PuppeteerUniTestkitFactory<TagUniDriver>;
export const textTestkitFactory: PuppeteerTestkitFactory<TextPuppeteerDriver>;
export const textButtonTestkitFactory: PuppeteerUniTestkitFactory<TextButtonUniDriver>;
export const thumbnailTestkitFactory: PuppeteerUniTestkitFactory<ThumbnailUniDriver>;
export const timeInputTestkitFactory: PuppeteerUniTestkitFactory<TimeInputUniDriver>;
export const toggleSwitchTestkitFactory: any;
export const sidebarSectionItemTestkitFactory: PuppeteerUniTestkitFactory<SidebarSectionItemUniDriver>;
export const sidebarDividerTestkitFactory:  PuppeteerUniTestkitFactory<SidebarDividerUniDriver>;
export const sidebarBackButtonTestkitFactory: PuppeteerUniTestkitFactory<SidebarBackButtonUniDriver>;
export const sidebarHeaderTestkitFactory: PuppeteerUniTestkitFactory<SidebarHeaderUniDriver>;
export const modalPreviewLayoutTestkitFactory: PuppeteerUniTestkitFactory<ModalPreviewLayoutUniDriver>;
export const statisticsWidgetTestkitFactory: PuppeteerUniTestkitFactory<StatisticsWidgetUniDriver>;
export const composerHeaderTestkitFactory: PuppeteerUniTestkitFactory<ComposerHeaderUniDriver>;
export const fillPreviewTestkitFactory: PuppeteerUniTestkitFactory<FillPreviewUniDriver>;
export const fillButtonTestkitFactory: PuppeteerUniTestkitFactory<FillButtonUniDriver>;
export const barChartTestkitFactory: any;
export const inputWithLabelTestkitFactory: PuppeteerUniTestkitFactory<InputWithLabelUniDriver>;
export const autoCompleteWithLabelTestkitFactory: PuppeteerUniTestkitFactory<AutoCompleteWithLabelUniDriver>;
export const dividerTestkitFactory: any;
export const labelledElementTestkitFactory: any;
export const previewWidgetTestkitFactory: any;
export const modalMobileLayoutTestkitFactory: PuppeteerUniTestkitFactory<ModalMobileLayoutUniDriver>;
export const mediaOverlayTestkitFactory: any;
export const infoIconTestkitFactory: any;
export const socialButtonTestkitFactory: any;
export const verticalTabsTestkitFactory: PuppeteerUniTestkitFactory<VerticalTabsUniDriver>;
export const verticalTabsItemTestkitFactory: PuppeteerUniTestkitFactory<VerticalTabsItemUniDriver>;
export const mobilePreviewWidgetTestkitFactory: any;
export const listItemSectionTestkitFactory: any;
export const browserPreviewWidgetTestkitFactory: any;
export const listItemSelectTestkitFactory: any;
export const timeTableTestkitFactory: any;
export const marketingLayoutTestkitFactory: any;
export const paletteTestkitFactory: any;
export const warningIndicatorTestkitFactory: any;
export const variableInputTestkitFactory: any;
export const imageTestkitFactory: any;
export const sidePanelTestkitFactory: any;
export const fontUpgradeTestkitFactory: any;
export const drillViewTestkitFactory: any;
export const cardHeaderTestkitFactory: any;
export const sideMenuTestkitFactory: any;
export const draggableTestkitFactory: any;
export const editableRowTestkitFactory: any;
export const fieldLabelAttributesTestkitFactory: any;
export const fieldWithSelectionCompositeTestkitFactory: any;
export const radioButtonTestkitFactory: any;
export const messageBoxMarketerialLayoutTestkitFactory: PuppeteerUniTestkitFactory<MessageBoxMarketerialLayoutUniDriver>;
export const messageBoxFunctionalLayoutTestkitFactory: PuppeteerUniTestkitFactory<MessageBoxFunctionalLayoutUniDriver>;
export const subheaderTestkitFactory: any;

