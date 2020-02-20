/* eslint-disable */
/* tslint:disable */
import {Page} from 'puppeteer';
import {TagUniDriver} from 'wix-ui-core/dist/src/components/tags-list/Tag.uni.driver';
import {LinearProgressBarUniDriver} from 'wix-ui-core/drivers/unidriver';
import {BaseUniDriver} from 'wix-ui-test-utils/base-driver';
import {AccordionUniDriver} from '../src/Accordion/Accordion.uni.driver';
import {AddItemUniDriver} from '../src/AddItem/AddItem.uni.driver';
import {AutoCompleteUniDriver} from '../src/AutoComplete/AutoComplete.uni.driver';
import {AutoCompleteWithLabelUniDriver} from '../src/AutoCompleteWithLabel/AutoCompleteWithLabel.uni.driver';
import AvatarUniDriver from '../src/Avatar/Avatar.uni.driver';
import {BadgeUniDriver} from '../src/Badge/Badge.uni.driver';
import {BarChartUniDriver} from '../src/BarChart/BarChart.uni.driver';
import {BoxUniDriver} from '../src/Box/Box.uni.driver';
import {BreadcrumbsUniDriver} from '../src/Breadcrumbs/Breadcrumbs.uni.driver';
import {BrowserPreviewWidgetUniDriver} from '../src/BrowserPreviewWidget/BrowserPreviewWidget.uni.driver';
import {ButtonUniDriver} from '../src/Button/Button.uni.driver';
import {CalendarUniDriver} from '../src/Calendar/Calendar.uni.driver';
import {CalendarPanelUniDriver} from '../src/CalendarPanel/CalendarPanel.uni.driver';
import {CalendarPanelFooterUniDriver} from '../src/CalendarPanelFooter/CalendarPanelFooter.uni.driver';
import {HeaderUniDriver} from '../src/Card/Header/Header.uni.driver';
import {SubheaderUniDriver} from '../src/Card/Subheader/Subheader.uni.driver';
import {ToggleSwitchUniDriver} from '../src/ToggleSwitch/ToggleSwitch.uni.driver';
import {CardGalleryItemUniDriver} from '../src/CardGalleryItem/CardGalleryItem.uni.driver';
import {CarouselUniDriver} from '../src/Carousel/Carousel.uni.driver';
import {CheckboxUniDriver} from '../src/Checkbox/Checkbox.uni.driver';
import {CircularProgressBarUniDriver} from '../src/CircularProgressBar/CircularProgressBar.uni.driver';
import {CloseButtonUniDriver} from '../src/CloseButton/CloseButton.uni.driver';
import {ColorInputUniDriver} from '../src/ColorInput/ColorInput.uni.driver';
import {ColorPickerUniDriver} from '../src/ColorPicker/ColorPicker.uni.driver';
import {ComposerHeaderUniDriver} from '../src/ComposerHeader/ComposerHeader.uni.driver';
import {ContactItemBuilderUniDriver} from '../src/ContactItemBuilder/ContactItemBuilder.uni.driver';
import {DataTableUniDriver} from '../src/DataTable/DataTable.uni.driver';
import {DateInputUniDriver} from '../src/DateInput/DateInput.uni.driver';
import {DividerUniDriver} from '../src/Divider/Divider.uni.driver';
import {DropdownUniDriver} from '../src/dropdown/Dropdown.uni.driver';
import {DropdownBaseUniDriver} from '../src/DropdownBase/DropdownBase.uni.driver';
import {DropdownLayoutUniDriver} from '../src/DropdownLayout/DropdownLayout.uni.driver';
import {EditableRowUniDriver} from '../src/EditableSelector/EditableRow/EditableRow.uni.driver';
import {EditableSelectorUniDriver} from '../src/EditableSelector/EditableSelector.uni.driver';
import {EditableTitleUniDriver} from '../src/EditableTitle/EditableTitle.uni.driver';
import {EmptyStateUniDriver} from '../src/EmptyState/EmptyState.uni.driver';
import {ErrorIndicatorUniDriver} from '../src/ErrorIndicator/ErrorIndicator.uni.driver';
import {FilePickerUniDriver} from '../src/FilePicker/FilePicker.uni.driver';
import {FillButtonUniDriver} from '../src/FillButton/FillButton.uni.driver';
import {FillPreviewUniDriver} from '../src/FillPreview/FillPreview.uni.driver';
import {FloatingNotificationUniDriver} from '../src/FloatingNotification/FloatingNotification.uni.driver';
import {FontUpgradeUniDriver} from '../src/FontUpgrade/FontUpgrade.uni.driver';
import {FormFieldPuppeteerDriver} from '../src/FormField/FormField.puppeteer.driver';
import {GenericModalLayoutUniDriver} from '../src/GenericModalLayout/GenericModalLayout.uni.driver';
import {GooglePreviewUniDriver} from '../src/GooglePreview/GooglePreview.uni.driver';
import {HeadingPuppeteerDriver} from '../src/Heading/Heading.puppeteer.driver';
import {IconButtonUniDriver} from '../src/IconButton/IconButton.uni.driver';
import {ImageUniDriver} from '../src/Image/Image.uni.driver';
import {ImageViewerUniDriver} from '../src/ImageViewer/ImageViewer.uni.driver';
import {InfoIconUniDriver} from '../src/InfoIcon/InfoIcon.uni.driver';
import {InputUniDriver} from '../src/Input/Input.uni.driver';
import {InputAreaUniDriver} from '../src/InputArea/InputArea.uni.driver';
import {InputWithLabelUniDriver} from '../src/InputWithLabel/InputWithLabel.uni.driver';
import {InputWithOptionsUniDriver} from '../src/InputWithOptions/InputWithOptions.uni.driver';
import {LabelledElementUniDriver} from '../src/LabelledElement/LabelledElement.uni.driver';
import {ListItemActionUniDriver} from '../src/ListItemAction/ListItemAction.uni.driver';
import {ListItemSectionUniDriver} from '../src/ListItemSection/ListItemSection.uni.driver';
import {ListItemSelectUniDriver} from '../src/ListItemSelect/ListItemSelect.uni.driver';
import {LoaderUniDriver} from '../src/Loader/Loader.uni.driver';
import {MarketingLayoutUniDriver} from '../src/MarketingLayout/MarketingLayout.uni.driver';
import {MediaOverlayUniDriver} from '../src/MediaOverlay/MediaOverlay.uni.driver';
import {MessageBoxFunctionalLayoutUniDriver} from '../src/MessageBox/FunctionalLayout/MessageBoxFunctionalLayout.uni.driver';
import {MessageBoxMarketerialLayoutUniDriver} from '../src/MessageBox/MarketerialLayout/MessageBoxMarketerialLayout.uni.driver';
import {MobilePreviewWidgetUniDriver} from '../src/MobilePreviewWidget/MobilePreviewWidget.uni.driver';
import {ModalUniDriver} from '../src/Modal/Modal.uni.driver';
import {ModalMobileLayoutUniDriver} from '../src/ModalMobileLayout/ModalMobileLayout.uni.driver';
import {ModalPreviewLayoutUniDriver} from '../src/ModalPreviewLayout/ModalPreviewLayout.uni.driver';
import {MultiSelectUniDriver} from '../src/MultiSelect/MultiSelect.uni.driver';
import {MultiSelectCheckboxUniDriver} from '../src/MultiSelectCheckbox/MultiSelectCheckbox.uni.driver';
import {NoBorderInputPuppeteerDriver} from '../src/NoBorderInput/NoBorderInput.puppeteer.driver';
import {NotificationUniDriver} from '../src/Notification/Notification.uni.driver';
import {NumberInputUniDriver} from '../src/NumberInput/NumberInput.uni.driver';
import {PageUniDriver} from '../src/Page/Page.uni.driver';
import {PageHeaderUniDriver} from '../src/PageHeader/PageHeader.uni.driver';
import {PaletteUniDriver} from '../src/Palette/Palette.uni.driver';
import {PopoverUniDriver} from '../src/Popover/Popover.uni.driver';
import {PreviewWidgetUniDriver} from '../src/PreviewWidget/PreviewWidget.uni.driver';
import {ProportionUniDriver} from '../src/Proportion/Proportion.uni.driver';
import {RichTextInputAreaUniDriver} from '../src/RichTextInputArea/RichTextInputArea.uni.driver';
import {SearchUniDriver} from '../src/Search/Search.uni.driver';
import {SectionHelperUniDriver} from '../src/SectionHelper/SectionHelper.uni.driver';
import {SegmentedToggleUniDriver} from '../src/SegmentedToggle/SegmentedToggle.uni.driver';
import {SidebarUniDriver} from '../src/Sidebar/Sidebar.uni.driver';
import {SidebarBackButtonUniDriver} from '../src/SidebarBackButton/SidebarBackButton.uni.driver';
import {SidebarDividerUniDriver} from '../src/SidebarDivider/SidebarDivider.uni.driver';
import {SidebarHeaderUniDriver} from '../src/SidebarHeader/SidebarHeader.uni.driver';
import {SidebarSectionItemUniDriver} from '../src/SidebarSectionItem/SidebarSectionItem.uni.driver';
import {SidebarSectionTitleUniDriver} from '../src/SidebarSectionTitle/SidebarSectionTitle.uni.driver';
import {SidePanelUniDriver} from '../src/SidePanel/SidePanel.uni.driver';
import {SliderUniDriver} from '../src/Slider/Slider.uni.driver';
import {SocialButtonUniDriver} from '../src/SocialButton/SocialButton.uni.driver';
import {SocialPreviewUniDriver} from '../src/SocialPreview/SocialPreview.uni.driver';
import {StatisticsWidgetUniDriver} from '../src/StatisticsWidget/StatisticsWidget.uni.driver';
import {StepperUniDriver} from '../src/Stepper/Stepper.uni.driver';
import {SwatchesUniDriver} from '../src/Swatches/Swatches.uni.driver';
import {TablePuppeteerDriver} from '../src/Table/Table.puppeteer.driver';
import {TabsUniDriver} from '../src/Tabs/Tabs.uni.driver';
import {TextPuppeteerDriver} from '../src/Text/Text.puppeteer.driver';
import {TextButtonUniDriver} from '../src/TextButton/TextButton.uni.driver';
import {ThumbnailUniDriver} from '../src/Thumbnail/Thumbnail.uni.driver';
import {TimeInputUniDriver} from '../src/TimeInput/TimeInput.uni.driver';
import {TimeTableUniDriver} from '../src/TimeTable/TimeTable.uni.driver';
import {ToggleButtonUniDriver} from '../src/ToggleButton/ToggleButton.uni.driver';
import {TooltipPuppeteerDriver} from '../src/Tooltip/Tooltip.puppeteer.driver';
import {TooltipUniDriver} from '../src/Tooltip/TooltipNext/Tooltip.uni.driver';
import {VariableInputUniDriver} from '../src/VariableInput/VariableInput.uni.driver';
import {VerticalTabsUniDriver} from '../src/VerticalTabs/VerticalTabs.uni.driver';
import {VerticalTabsItemUniDriver} from '../src/VerticalTabsItem/VerticalTabsItem.uni.driver';
import {WarningIndicatorUniDriver} from '../src/WarningIndicator/WarningIndicator.uni.driver';

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

type DeprecatedPuppeteerTestkit = any;

export const tooltipTestkitFactory: PuppeteerTestkitFactory<TooltipPuppeteerDriver>;
export const TooltipTestkit: PuppeteerUniTestkitFactory<TooltipUniDriver>;
export const accordionTestkitFactory: PuppeteerUniTestkitFactory<AccordionUniDriver>;
export const addItemTestkitFactory: PuppeteerUniTestkitFactory<AddItemUniDriver>;
export const autoCompleteTestkitFactory: PuppeteerUniTestkitFactory<AutoCompleteUniDriver>;
export const autoCompleteCompositeTestkitFactory: DeprecatedPuppeteerTestkit;
export const avatarTestkitFactory: PuppeteerUniTestkitFactory<AvatarUniDriver>;
export const badgeTestkitFactory: PuppeteerUniTestkitFactory<BadgeUniDriver>;
export const boxTestkitFactory: PuppeteerUniTestkitFactory<BoxUniDriver>;
export const breadcrumbsTestkitFactory: PuppeteerUniTestkitFactory<BreadcrumbsUniDriver>;
export const buttonTestkitFactory: PuppeteerUniTestkitFactory<ButtonUniDriver>;
export const calendarTestkitFactory: PuppeteerUniTestkitFactory<CalendarUniDriver>;
export const calendarPanelTestkitFactory: PuppeteerUniTestkitFactory<CalendarPanelUniDriver>;
export const calendarPanelFooterTestkitFactory: PuppeteerUniTestkitFactory<CalendarPanelFooterUniDriver>;
export const cardGalleryItemTestkitFactory: PuppeteerUniTestkitFactory<CardGalleryItemUniDriver>;
export const carouselTestkitFactory: PuppeteerUniTestkitFactory<CarouselUniDriver>;
export const checkboxTestkitFactory: PuppeteerUniTestkitFactory<CheckboxUniDriver>;
export const circularProgressBarTestkitFactory: PuppeteerUniTestkitFactory<CircularProgressBarUniDriver>;
export const closeButtonTestkitFactory: PuppeteerUniTestkitFactory<CloseButtonUniDriver>;
export const colorInputTestkitFactory: PuppeteerUniTestkitFactory<ColorInputUniDriver>;
export const colorPickerTestkitFactory: PuppeteerUniTestkitFactory<ColorPickerUniDriver>;
export const contactItemBuilderTestkitFactory: PuppeteerUniTestkitFactory<ContactItemBuilderUniDriver>;
export const dataTableTestkitFactory: PuppeteerUniTestkitFactory<DataTableUniDriver>;
export const dateInputTestkitFactory: PuppeteerUniTestkitFactory<DateInputUniDriver>;
export const dropdownTestkitFactory: PuppeteerUniTestkitFactory<DropdownUniDriver>;
export const dropdownBaseTestkitFactory: PuppeteerUniTestkitFactory<DropdownBaseUniDriver>;
export const dropdownLayoutTestkitFactory: PuppeteerUniTestkitFactory<DropdownLayoutUniDriver>;
export const editableSelectorTestkitFactory: PuppeteerUniTestkitFactory<EditableSelectorUniDriver>;
export const editableTitleTestkitFactory: PuppeteerUniTestkitFactory<EditableTitleUniDriver>;
export const emptyStateTestkitFactory: PuppeteerUniTestkitFactory<EmptyStateUniDriver>;
export const errorIndicatorTestkitFactory: PuppeteerUniTestkitFactory<ErrorIndicatorUniDriver>;
export const filePickerTestkitFactory: PuppeteerUniTestkitFactory<FilePickerUniDriver>;
export const floatingNotificationTestkitFactory: PuppeteerUniTestkitFactory<FloatingNotificationUniDriver>;
export const formFieldTestkitFactory: PuppeteerTestkitFactory<FormFieldPuppeteerDriver>;
export const genericModalLayoutTestkitFactory: PuppeteerUniTestkitFactory<GenericModalLayoutUniDriver>;
export const googleAddressInputWithLabelTestkitFactory: DeprecatedPuppeteerTestkit;
export const googlePreviewTestkitFactory: PuppeteerUniTestkitFactory<GooglePreviewUniDriver>;
export const headingTestkitFactory: PuppeteerTestkitFactory<HeadingPuppeteerDriver>;
export const iconButtonTestkitFactory: PuppeteerUniTestkitFactory<IconButtonUniDriver>;
export const toggleButtonTestkitFactory: PuppeteerUniTestkitFactory<ToggleButtonUniDriver>;
export const imageViewerTestkitFactory: PuppeteerUniTestkitFactory<ImageViewerUniDriver>;
export const inputTestkitFactory: PuppeteerUniTestkitFactory<InputUniDriver>;
export const inputAreaTestkitFactory: PuppeteerUniTestkitFactory<InputAreaUniDriver>;
export const inputWithOptionsTestkitFactory: PuppeteerUniTestkitFactory<InputWithOptionsUniDriver>;
export const linearProgressBarTestkitFactory: PuppeteerUniTestkitFactory<LinearProgressBarUniDriver>;
export const ListItemActionTestkitFactory: PuppeteerUniTestkitFactory<ListItemActionUniDriver>;
export const loaderTestkitFactory: PuppeteerUniTestkitFactory<LoaderUniDriver>;
export const modalTestkitFactory: PuppeteerUniTestkitFactory<ModalUniDriver>;
export const multiSelectTestkitFactory: PuppeteerUniTestkitFactory<MultiSelectUniDriver>;
export const multiSelectCheckboxTestkitFactory: PuppeteerUniTestkitFactory<MultiSelectCheckboxUniDriver>;
export const multiSelectCompositeTestkitFactory: DeprecatedPuppeteerTestkit;
export const noBorderInputTestkitFactory: PuppeteerTestkitFactory<NoBorderInputPuppeteerDriver>;
export const notificationTestkitFactory: PuppeteerUniTestkitFactory<NotificationUniDriver>;
export const numberInputTestkitFactory: PuppeteerUniTestkitFactory<NumberInputUniDriver>;
export const pageTestkitFactory: PuppeteerUniTestkitFactory<PageUniDriver>;
export const pageHeaderTestkitFactory: PuppeteerUniTestkitFactory<PageHeaderUniDriver>;
export const popoverTestkitFactory: PuppeteerUniTestkitFactory<PopoverUniDriver>;
export const proportionTestkitFactory: PuppeteerUniTestkitFactory<ProportionUniDriver>;
export const richTextInputAreaTestkitFactory: PuppeteerUniTestkitFactory<RichTextInputAreaUniDriver>;
export const searchTestkitFactory: PuppeteerUniTestkitFactory<SearchUniDriver>;
export const sectionHelperTestkitFactory: PuppeteerUniTestkitFactory<SectionHelperUniDriver>;
export const segmentedToggleTestkitFactory: PuppeteerUniTestkitFactory<SegmentedToggleUniDriver>;
export const sidebarTestkitFactory: PuppeteerUniTestkitFactory<SidebarUniDriver>;
export const sidebarSectionTitleTestkitFactory: PuppeteerUniTestkitFactory<SidebarSectionTitleUniDriver>;
export const sliderTestkitFactory: PuppeteerUniTestkitFactory<SliderUniDriver>;
export const socialPreviewTestkitFactory: PuppeteerUniTestkitFactory<SocialPreviewUniDriver>;
export const statsWidgetTestkitFactory: DeprecatedPuppeteerTestkit;
export const stepperTestkitFactory: PuppeteerUniTestkitFactory<StepperUniDriver>;
export const swatchesTestkitFactory: PuppeteerUniTestkitFactory<SwatchesUniDriver>;
export const tableTestkitFactory: PuppeteerTestkitFactory<TablePuppeteerDriver>;
export const tabsTestkitFactory: PuppeteerUniTestkitFactory<TabsUniDriver>;
export const tagTestkitFactory: PuppeteerUniTestkitFactory<TagUniDriver>;
export const textTestkitFactory: PuppeteerTestkitFactory<TextPuppeteerDriver>;
export const textButtonTestkitFactory: PuppeteerUniTestkitFactory<TextButtonUniDriver>;
export const thumbnailTestkitFactory: PuppeteerUniTestkitFactory<ThumbnailUniDriver>;
export const timeInputTestkitFactory: PuppeteerUniTestkitFactory<TimeInputUniDriver>;
export const sidebarSectionItemTestkitFactory: PuppeteerUniTestkitFactory<SidebarSectionItemUniDriver>;
export const sidebarDividerTestkitFactory:  PuppeteerUniTestkitFactory<SidebarDividerUniDriver>;
export const sidebarBackButtonTestkitFactory: PuppeteerUniTestkitFactory<SidebarBackButtonUniDriver>;
export const sidebarHeaderTestkitFactory: PuppeteerUniTestkitFactory<SidebarHeaderUniDriver>;
export const modalPreviewLayoutTestkitFactory: PuppeteerUniTestkitFactory<ModalPreviewLayoutUniDriver>;
export const statisticsWidgetTestkitFactory: PuppeteerUniTestkitFactory<StatisticsWidgetUniDriver>;
export const composerHeaderTestkitFactory: PuppeteerUniTestkitFactory<ComposerHeaderUniDriver>;
export const fillPreviewTestkitFactory: PuppeteerUniTestkitFactory<FillPreviewUniDriver>;
export const fillButtonTestkitFactory: PuppeteerUniTestkitFactory<FillButtonUniDriver>;
export const barChartTestkitFactory: PuppeteerUniTestkitFactory<BarChartUniDriver>;
export const inputWithLabelTestkitFactory: PuppeteerUniTestkitFactory<InputWithLabelUniDriver>;
export const autoCompleteWithLabelTestkitFactory: PuppeteerUniTestkitFactory<AutoCompleteWithLabelUniDriver>;
export const dividerTestkitFactory: PuppeteerUniTestkitFactory<DividerUniDriver>;
export const labelledElementTestkitFactory: PuppeteerUniTestkitFactory<LabelledElementUniDriver>;
export const previewWidgetTestkitFactory: PuppeteerUniTestkitFactory<PreviewWidgetUniDriver>;
export const modalMobileLayoutTestkitFactory: PuppeteerUniTestkitFactory<ModalMobileLayoutUniDriver>;
export const mediaOverlayTestkitFactory: PuppeteerUniTestkitFactory<MediaOverlayUniDriver<HTMLElement>>;
export const infoIconTestkitFactory: PuppeteerUniTestkitFactory<InfoIconUniDriver>;
export const socialButtonTestkitFactory: PuppeteerUniTestkitFactory<SocialButtonUniDriver>;
export const verticalTabsTestkitFactory: PuppeteerUniTestkitFactory<VerticalTabsUniDriver>;
export const verticalTabsItemTestkitFactory: PuppeteerUniTestkitFactory<VerticalTabsItemUniDriver>;
export const mobilePreviewWidgetTestkitFactory: PuppeteerUniTestkitFactory<MobilePreviewWidgetUniDriver>;
export const listItemSectionTestkitFactory: PuppeteerUniTestkitFactory<ListItemSectionUniDriver>;
export const browserPreviewWidgetTestkitFactory: PuppeteerUniTestkitFactory<BrowserPreviewWidgetUniDriver>;
export const listItemSelectTestkitFactory: PuppeteerUniTestkitFactory<ListItemSelectUniDriver>;
export const timeTableTestkitFactory: PuppeteerUniTestkitFactory<TimeTableUniDriver>;
export const marketingLayoutTestkitFactory: PuppeteerUniTestkitFactory<MarketingLayoutUniDriver>;
export const paletteTestkitFactory: PuppeteerUniTestkitFactory<PaletteUniDriver>;
export const warningIndicatorTestkitFactory: PuppeteerUniTestkitFactory<WarningIndicatorUniDriver>;
export const variableInputTestkitFactory: PuppeteerUniTestkitFactory<VariableInputUniDriver>;
export const imageTestkitFactory: PuppeteerUniTestkitFactory<ImageUniDriver>;
export const sidePanelTestkitFactory: PuppeteerUniTestkitFactory<SidePanelUniDriver>;
export const fontUpgradeTestkitFactory: PuppeteerUniTestkitFactory<FontUpgradeUniDriver>;
export const drillViewTestkitFactory: DeprecatedPuppeteerTestkit;
export const cardHeaderTestkitFactory: PuppeteerUniTestkitFactory<HeaderUniDriver>;
export const sideMenuTestkitFactory: DeprecatedPuppeteerTestkit;
export const draggableTestkitFactory: DeprecatedPuppeteerTestkit;
export const editableRowTestkitFactory: PuppeteerUniTestkitFactory<EditableRowUniDriver>;
export const fieldLabelAttributesTestkitFactory: DeprecatedPuppeteerTestkit;
export const fieldWithSelectionCompositeTestkitFactory: DeprecatedPuppeteerTestkit;
export const messageBoxMarketerialLayoutTestkitFactory: PuppeteerUniTestkitFactory<MessageBoxMarketerialLayoutUniDriver>;
export const messageBoxFunctionalLayoutTestkitFactory: PuppeteerUniTestkitFactory<MessageBoxFunctionalLayoutUniDriver>;
export const subheaderTestkitFactory: PuppeteerUniTestkitFactory<SubheaderUniDriver>;
export const toggleSwitchTestkitFactory: PuppeteerUniTestkitFactory<ToggleSwitchUniDriver>;
