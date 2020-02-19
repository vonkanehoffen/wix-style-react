/* eslint-disable */
/* tslint:disable */
/*
 * DO NOT EDIT THIS FILE!
 * YOUR CHANGES WILL BE OVERWRITTEN!
 * FILE IS BASED ON .wuf/testkits/enzyme-typescript.template.ejs
 * AND GENERATED BY `wuf export-teskits`
 */
import {ReactWrapper} from "enzyme";
import {BaseUniDriver} from 'wix-ui-test-utils/base-driver';
import {BaseDriver} from 'wix-ui-test-utils/driver-factory';
import {AccordionUniDriver} from '../src/Accordion/Accordion.uni.driver';
import {AddItemDriver} from '../src/AddItem/AddItem.driver';
import {AutoCompleteDriver} from '../src/AutoComplete/AutoComplete.driver';
import {AutoCompleteUniDriver} from '../src/AutoComplete/AutoComplete.uni.driver';
import AvatarDriver from '../src/Avatar/Avatar.uni.driver';
import {BadgeDriver} from '../src/Badge/Badge.driver';
import {BadgeSelectDriver} from '../src/BadgeSelect/BadgeSelect.driver';
import {BoxDriver} from '../src/Box/Box.uni.driver';
import {ButtonUniDriver} from '../src/Button/Button.uni.driver';
import {CalendarPanelDriver} from '../src/CalendarPanel/CalendarPanel.driver';
import {CalendarPanelFooterUniDriver} from '../src/CalendarPanelFooter/CalendarPanelFooter.uni.driver';
import {CardGalleryItemUniDriver} from '../src/CardGalleryItem/CardGalleryItem.uni.driver';
import {CarouselDriver} from '../src/Carousel/Carousel.driver';
import {CheckboxDriver} from '../src/Checkbox/Checkbox.driver';
import {CircularProgressBarDriver} from '../src/CircularProgressBar/CircularProgressBar.driver';
import {CloseButtonUniDriver} from '../src/CloseButton/CloseButton.uni.driver';
import {ColorPickerDriver} from '../src/ColorPicker/ColorPicker.driver';
import {ComposerHeaderUniDriver} from '../src/ComposerHeader/ComposerHeader.uni.driver';
import {ContactItemBuilderDriver} from '../src/ContactItemBuilder/ContactItemBuilder.driver';
import {CounterBadgeDriver} from '../src/CounterBadge/CounterBadge.driver';
import {DataTableDriver} from '../src/DataTable/DataTable.driver';
import {DateInputUniDriver} from '../src/DateInput/DateInput.uni.driver';
import {DropdownDriver} from '../src/Dropdown/Dropdown.driver';
import {DropdownBaseUniDriver} from '../src/DropdownBase/DropdownBase.uni.driver';
import {DropdownLayoutDriver} from '../src/DropdownLayout/DropdownLayout.driver';
import {EditableSelectorDriver} from '../src/EditableSelector/EditableSelector.driver';
import {EditableTitleUniDriver} from '../src/EditableTitle/EditableTitle.uni.driver';
import {EmptyStateDriver} from '../src/EmptyState/EmptyState.driver';
import {ErrorIndicatorUniDriver} from '../src/ErrorIndicator/ErrorIndicator.uni.driver';
import {FilePickerDriver} from '../src/FilePicker/FilePicker.driver';
import {FillButtonUniDriver} from '../src/FillButton/FillButton.uni.driver';
import {FillPreviewUniDriver} from '../src/FillPreview/FillPreview.uni.driver';
import {FloatingHelperDriver} from '../src/FloatingHelper/FloatingHelper.driver';
import {FloatingNotificationUniDriver} from '../src/FloatingNotification/FloatingNotification.uni.driver';
import {FormFieldDriver} from '../src/FormField/FormField.driver';
import {GenericModalLayoutDriver} from '../src/GenericModalLayout/GenericModalLayout.driver';
import {GooglePreviewUniDriver} from '../src/GooglePreview/GooglePreview.uni.driver';
import {HeadingDriver} from '../src/Heading/Heading.driver';
import {HighlighterDriver} from '../src/Highlighter/Highlighter.driver';
import {IconButtonUniDriver} from '../src/IconButton/IconButton.uni.driver';
import {ImageDriver} from '../src/Image/Image.uni.driver';
import {ImageViewerDriver} from '../src/ImageViewer/ImageViewer.driver';
import {InfoIconDriver} from '../src/InfoIcon/InfoIcon.uni.driver';
import {InputDriver} from '../src/Input/Input.driver';
import {InputAreaDriver} from '../src/InputArea/InputArea.driver';
import {InputWithLabelUniDriver} from '../src/InputWithLabel/InputWithLabel.uni.driver';
import {InputWithOptionsDriver} from '../src/InputWithOptions/InputWithOptions.driver';
import {LabelDriver} from '../src/Label/Label.driver';
import {LinearProgressBarDriver} from '../src/LinearProgressBar/LinearProgressBar.driver';
import {ListItemActionUniDriver} from '../src/ListItemAction/ListItemAction.uni.driver';
import {ListItemSectionDriver} from '../src/ListItemSection/ListItemSection.uni.driver';
import {ListItemSelectDriver} from '../src/ListItemSelect/ListItemSelect.uni.driver';
import {LoaderDriver} from '../src/Loader/Loader.driver';
import {MessageBoxFunctionalLayoutDriver} from '../src/MessageBox/FunctionalLayout/MessageBoxFunctionalLayout.driver';
import {MessageBoxMarketerialLayoutDriver} from '../src/MessageBox/MarketerialLayout/MessageBoxMarketerialLayout.driver';
import {ModalDriver} from '../src/Modal/Modal.driver';
import {ModalMobileLayoutUniDriver} from '../src/ModalMobileLayout/ModalMobileLayout.uni.driver';
import {ModalPreviewLayoutUniDriver} from '../src/ModalPreviewLayout/ModalPreviewLayout.uni.driver';
import {ModalSelectorLayoutDriver} from '../src/ModalSelectorLayout/ModalSelectorLayout.driver';
import {MultiSelectDriver} from '../src/MultiSelect/MultiSelect.driver';
import {MultiSelectCheckboxDriver} from '../src/MultiSelectCheckbox/MultiSelectCheckbox.driver';
import {NestableListDriver} from '../src/NestableList/NestableList.driver';
import {NoBorderInputDriver} from '../src/NoBorderInput/NoBorderInput.driver';
import {NotificationDriver} from '../src/Notification/Notification.driver';
import {NumberInputUniDriver} from '../src/NumberInput/NumberInput.uni.driver';
import {PageDriver} from '../src/Page/Page.driver';
import {PageHeaderDriver} from '../src/PageHeader/PageHeader.driver';
import {PopoverDriver} from '../src/Popover/Popover.driver';
import {PopoverMenuDriver} from '../src/PopoverMenu/PopoverMenu.driver';
import {ProportionUniDriver} from '../src/Proportion/Proportion.uni.driver';
import {RadioButtonDriver} from '../src/RadioGroup/RadioButton/RadioButton.driver';
import {RadioGroupDriver} from '../src/RadioGroup/RadioGroup.driver';
import {RangeDriver} from '../src/Range/Range.driver';
import {RichTextInputAreaUniDriver} from '../src/RichTextInputArea/RichTextInputArea.uni.driver';
import {SearchDriver} from '../src/Search/Search.driver';
import {SectionHelperDriver} from '../src/SectionHelper/SectionHelper.driver';
import {SegmentedToggleUniDriver} from '../src/SegmentedToggle/SegmentedToggle.uni.driver';
import {SelectorDriver} from '../src/Selector/Selector.driver';
import {SidebarUniDriver} from '../src/Sidebar/Sidebar.uni.driver';
import {SidebarBackButtonUniDriver} from '../src/SidebarBackButton/SidebarBackButton.uni.driver';
import {SidebarDividerUniDriver} from '../src/SidebarDivider/SidebarDivider.uni.driver';
import {SidebarHeaderUniDriver} from '../src/SidebarHeader/SidebarHeader.uni.driver';
import {SidebarSectionItemUniDriver} from '../src/SidebarSectionItem/SidebarSectionItem.uni.driver';
import {SidebarSectionTitleUniDriver} from '../src/SidebarSectionTitle/SidebarSectionTitle.uni.driver';
import {SidePanelDriver} from '../src/SidePanel/SidePanel.uni.driver';
import {SkeletonDriver} from '../src/Skeleton/Skeleton.driver';
import {SliderDriver} from '../src/Slider/Slider.driver';
import {SocialButtonDriver} from '../src/SocialButton/SocialButton.uni.driver';
import {SocialPreviewUniDriver} from '../src/SocialPreview/SocialPreview.uni.driver';
import {SortableListDriver} from '../src/SortableList/SortableList.driver';
import {StatisticsWidgetUniDriver} from '../src/StatisticsWidget/StatisticsWidget.uni.driver';
import {StepperUniDriver} from '../src/Stepper/Stepper.uni.driver';
import {SwatchesUniDriver} from '../src/Swatches/Swatches.uni.driver';
import {TableDriver} from '../src/Table/Table.driver';
import {TableActionCellDriver} from '../src/TableActionCell/TableActionCell.driver';
import {TabsDriver} from '../src/Tabs/Tabs.driver';
import {TagDriver} from '../src/Tag/Tag.driver';
import {TextDriver} from '../src/Text/Text.driver';
import {TextButtonUniDriver} from '../src/TextButton/TextButton.uni.driver';
import {ThumbnailUniDriver} from '../src/Thumbnail/Thumbnail.uni.driver';
import {TimeInputDriver} from '../src/TimeInput/TimeInput.driver';
import {TimeTableDriver} from '../src/TimeTable/TimeTable.uni.driver';
import {ToggleButtonUniDriver} from '../src/ToggleButton/ToggleButton.uni.driver';
import {ToggleSwitchDriver} from '../src/ToggleSwitch/ToggleSwitch.driver';
import {TooltipDriver} from '../src/Tooltip/Tooltip.driver';
import {TooltipDriver as TooltipUniDriver} from '../src/Tooltip/TooltipNext/Tooltip.uni.driver';
import {VerticalTabsUniDriver} from '../src/VerticalTabs/VerticalTabs.uni.driver';
import {VerticalTabsItemUniDriver} from '../src/VerticalTabsItem/VerticalTabsItem.uni.driver';

declare namespace EnzymeTestkit {
  type EnzymeTestkitFactory<T extends BaseDriver> = (
    params: EnzymeTestkitParams
  ) => T;

  type EnzymeUniTestkitFactory<T extends BaseUniDriver> = (
    params: EnzymeTestkitParams
  ) => T;

  interface EnzymeTestkitParams {
    wrapper: ReactWrapper;
    dataHook: string;
  }

  export const accordionTestkitFactory: EnzymeUniTestkitFactory<AccordionUniDriver>;
  export const addItemTestkitFactory: EnzymeTestkitFactory<AddItemDriver<ReactWrapper>>;
  export const autoCompleteTestkitFactory: EnzymeTestkitFactory<AutoCompleteDriver>;
  export const autoCompleteCompositeTestkitFactory: any;
  export const avatarTestkitFactory: EnzymeUniTestkitFactory<AvatarDriver>;
  export const badgeTestkitFactory: EnzymeTestkitFactory<BadgeDriver>;
  export const badgeSelectTestkitFactory: EnzymeTestkitFactory<BadgeSelectDriver>;
  export const boxTestkitFactory: EnzymeUniTestkitFactory<BoxDriver>;
  export const breadcrumbsTestkitFactory: any;
  export const buttonTestkitFactory: EnzymeUniTestkitFactory<ButtonUniDriver>;
  export const calendarTestkitFactory: any;
  export const calendarPanelTestkitFactory: EnzymeTestkitFactory<CalendarPanelDriver>;
  export const calendarPanelFooterTestkitFactory: EnzymeUniTestkitFactory<CalendarPanelFooterUniDriver>;
  export const cardGalleryItemTestkitFactory: EnzymeUniTestkitFactory<CardGalleryItemUniDriver>;
  export const carouselTestkitFactory: EnzymeTestkitFactory<CarouselDriver>;
  export const checkboxTestkitFactory: EnzymeTestkitFactory<CheckboxDriver>;
  export const circularProgressBarTestkitFactory: EnzymeTestkitFactory<CircularProgressBarDriver>;
  export const closeButtonTestkitFactory: EnzymeUniTestkitFactory<CloseButtonUniDriver>;
  export const colorInputTestkitFactory: any;
  export const colorPickerTestkitFactory: EnzymeTestkitFactory<ColorPickerDriver>;
  export const contactItemBuilderTestkitFactory: EnzymeTestkitFactory<ContactItemBuilderDriver>;
  export const counterBadgeTestkitFactory: EnzymeTestkitFactory<CounterBadgeDriver>;
  export const dataTableTestkitFactory: EnzymeTestkitFactory<DataTableDriver>;
  export const dateInputTestkitFactory:  EnzymeUniTestkitFactory<DateInputUniDriver>;
  export const datePickerTestkitFactory: any;
  export const dropdownTestkitFactory: EnzymeTestkitFactory<DropdownDriver>;
  export const dropdownBaseTestkitFactory: EnzymeUniTestkitFactory<DropdownBaseUniDriver>;
  export const dropdownLayoutTestkitFactory: EnzymeTestkitFactory<DropdownLayoutDriver>;
  export const editableSelectorTestkitFactory: EnzymeTestkitFactory<EditableSelectorDriver>;
  export const editableTitleTestkitFactory:  EnzymeUniTestkitFactory<EditableTitleUniDriver>;
  export const emptyStateTestkitFactory: EnzymeTestkitFactory<EmptyStateDriver>;
  export const errorIndicatorTestkitFactory: EnzymeUniTestkitFactory<ErrorIndicatorUniDriver>;
  export const filePickerTestkitFactory: EnzymeTestkitFactory<FilePickerDriver>;
  export const floatingHelperTestkitFactory: EnzymeTestkitFactory<FloatingHelperDriver>
  export const floatingNotificationTestkitFactory: EnzymeUniTestkitFactory<FloatingNotificationUniDriver>;
  export const formFieldTestkitFactory:  EnzymeTestkitFactory<FormFieldDriver>;
  export const genericModalLayoutTestkitFactory: EnzymeTestkitFactory<GenericModalLayoutDriver>;
  export const googleAddressInputWithLabelTestkitFactory: any;
  export const googlePreviewTestkitFactory: EnzymeUniTestkitFactory<GooglePreviewUniDriver>;
  export const headingTestkitFactory: EnzymeTestkitFactory<HeadingDriver>;
  export const highlighterTestkitFactory:  EnzymeTestkitFactory<HighlighterDriver<ReactWrapper>>;
  export const iconButtonTestkitFactory: EnzymeUniTestkitFactory<IconButtonUniDriver>;
  export const toggleButtonTestkitFactory: EnzymeUniTestkitFactory<ToggleButtonUniDriver>;
  export const imageViewerTestkitFactory: EnzymeTestkitFactory<ImageViewerDriver<ReactWrapper>>;
  export const inputTestkitFactory: EnzymeTestkitFactory<InputDriver>;
  export const inputAreaTestkitFactory: EnzymeTestkitFactory<InputAreaDriver<ReactWrapper>>;
  export const inputWithOptionsTestkitFactory: EnzymeTestkitFactory<InputWithOptionsDriver>;
  export const labelTestkitFactory: EnzymeTestkitFactory<LabelDriver>;
  export const linearProgressBarTestkitFactory: EnzymeTestkitFactory<LinearProgressBarDriver>;
  export const listItemActionTestkitFactory: EnzymeUniTestkitFactory<ListItemActionUniDriver>;
  export const loaderTestkitFactory: EnzymeTestkitFactory<LoaderDriver>;
  export const modalTestkitFactory: EnzymeTestkitFactory<ModalDriver<ReactWrapper>>;
  export const modalSelectorLayoutTestkitFactory: EnzymeTestkitFactory<ModalSelectorLayoutDriver>;
  export const multiSelectTestkitFactory: EnzymeTestkitFactory<MultiSelectDriver>;
  export const multiSelectCheckboxTestkitFactory: EnzymeTestkitFactory<MultiSelectCheckboxDriver>;
  export const multiSelectCompositeTestkitFactory: any;
  export const nestableListTestkitFactory: EnzymeTestkitFactory<NestableListDriver>;
  export const noBorderInputTestkitFactory: EnzymeTestkitFactory<NoBorderInputDriver>;
  export const notificationTestkitFactory: EnzymeTestkitFactory<NotificationDriver>;
  export const numberInputTestkitFactory: EnzymeUniTestkitFactory<NumberInputUniDriver>;
  export const pageTestkitFactory: EnzymeTestkitFactory<PageDriver>;
  export const pageHeaderTestkitFactory: EnzymeTestkitFactory<PageHeaderDriver>;
  export const popoverTestkitFactory: EnzymeTestkitFactory<PopoverDriver>;
  export const popoverMenuTestkitFactory: EnzymeTestkitFactory<PopoverMenuDriver>;
  export const proportionTestkitFactory: EnzymeUniTestkitFactory<ProportionUniDriver>;
  export const radioGroupTestkitFactory: EnzymeTestkitFactory<RadioGroupDriver>;
  export const rangeTestkitFactory: EnzymeTestkitFactory<RangeDriver>;
  export const richTextInputAreaTestkitFactory: EnzymeUniTestkitFactory<RichTextInputAreaUniDriver>;
  export const searchTestkitFactory: EnzymeTestkitFactory<SearchDriver>;
  export const sectionHelperTestkitFactory: EnzymeTestkitFactory<SectionHelperDriver>;
  export const segmentedToggleTestkitFactory: EnzymeUniTestkitFactory<SegmentedToggleUniDriver>;
  export const selectorTestkitFactory: EnzymeTestkitFactory<SelectorDriver>;
  export const sidebarTestkitFactory: EnzymeUniTestkitFactory<SidebarUniDriver>;
  export const sidebarSectionTitleTestkitFactory: EnzymeUniTestkitFactory<SidebarSectionTitleUniDriver>;
  export const skeletonTestkitFactory: EnzymeTestkitFactory<SkeletonDriver>;
  export const sliderTestkitFactory:  EnzymeTestkitFactory<SliderDriver>;
  export const socialPreviewTestkitFactory: EnzymeUniTestkitFactory<SocialPreviewUniDriver>;
  export const sortableListTestkitFactory: EnzymeTestkitFactory<SortableListDriver>;
  export const statsWidgetTestkitFactory: any;
  export const stepperTestkitFactory: EnzymeUniTestkitFactory<StepperUniDriver>;
  export const swatchesTestkitFactory: EnzymeUniTestkitFactory<SwatchesUniDriver>;
  export const tableTestkitFactory: EnzymeTestkitFactory<TableDriver<ReactWrapper>>;
  export const tableActionCellTestkitFactory: EnzymeTestkitFactory<TableActionCellDriver<ReactWrapper>>;
  export const tabsTestkitFactory: EnzymeTestkitFactory<TabsDriver>;
  export const tagTestkitFactory:  EnzymeTestkitFactory<TagDriver>;
  export const textTestkitFactory: EnzymeTestkitFactory<TextDriver>;
  export const textButtonTestkitFactory: EnzymeUniTestkitFactory<TextButtonUniDriver>;
  export const thumbnailTestkitFactory: EnzymeUniTestkitFactory<ThumbnailUniDriver>;
  export const timeInputTestkitFactory: EnzymeTestkitFactory<TimeInputDriver>;
  export const toggleSwitchTestkitFactory: EnzymeTestkitFactory<ToggleSwitchDriver>;
  export const sidebarSectionItemTestkitFactory: EnzymeUniTestkitFactory<SidebarSectionItemUniDriver>;
  export const sidebarDividerTestkitFactory: EnzymeUniTestkitFactory<SidebarDividerUniDriver>;
  export const sidebarBackButtonTestkitFactory: EnzymeUniTestkitFactory<SidebarBackButtonUniDriver>;
  export const sidebarHeaderTestkitFactory: EnzymeUniTestkitFactory<SidebarHeaderUniDriver>;
  export const modalPreviewLayoutTestkitFactory: EnzymeUniTestkitFactory<ModalPreviewLayoutUniDriver>;
  export const statisticsWidgetTestkitFactory: EnzymeUniTestkitFactory<StatisticsWidgetUniDriver>;
  export const composerHeaderTestkitFactory: EnzymeUniTestkitFactory<ComposerHeaderUniDriver>;
  export const fillPreviewTestkitFactory: EnzymeUniTestkitFactory<FillPreviewUniDriver>;
  export const fillButtonTestkitFactory: EnzymeUniTestkitFactory<FillButtonUniDriver>;
  export const barChartTestkitFactory: any;
  export const inputWithLabelTestkitFactory: EnzymeUniTestkitFactory<InputWithLabelUniDriver>;
  export const autoCompleteWithLabelTestkitFactory: EnzymeUniTestkitFactory<AutoCompleteUniDriver>;
  export const dividerTestkitFactory: any;
  export const labelledElementTestkitFactory: any;
  export const previewWidgetTestkitFactory: any;
  export const modalMobileLayoutTestkitFactory:  EnzymeUniTestkitFactory<ModalMobileLayoutUniDriver>;
  export const mediaOverlayTestkitFactory: any;
  export const infoIconTestkitFactory: EnzymeUniTestkitFactory<InfoIconDriver>;
  export const socialButtonTestkitFactory: EnzymeUniTestkitFactory<SocialButtonDriver>;
  export const verticalTabsTestkitFactory: EnzymeUniTestkitFactory<VerticalTabsUniDriver>;
  export const verticalTabsItemTestkitFactory: EnzymeUniTestkitFactory<VerticalTabsItemUniDriver>;
  export const mobilePreviewWidgetTestkitFactory: any;
  export const listItemSectionTestkitFactory: EnzymeUniTestkitFactory<ListItemSectionDriver>;
  export const browserPreviewWidgetTestkitFactory: any;
  export const listItemSelectTestkitFactory: EnzymeUniTestkitFactory<ListItemSelectDriver>;
  export const timeTableTestkitFactory: EnzymeUniTestkitFactory<TimeTableDriver>;
  export const marketingLayoutTestkitFactory: EnzymeTestkitFactory<MessageBoxMarketerialLayoutDriver>;
  export const paletteTestkitFactory: any;
  export const warningIndicatorTestkitFactory: any;
  export const variableInputTestkitFactory: any;
  export const imageTestkitFactory: EnzymeUniTestkitFactory<ImageDriver>;
  export const sidePanelTestkitFactory: EnzymeUniTestkitFactory<SidePanelDriver>;
  export const fontUpgradeTestkitFactory: any;
  export const sideMenuDrillTestkitFactory: any;
  export const headerTestkitFactory: any;
  export const sideMenuTestkitFactory: any;
  export const draggableTestkitFactory: any;
  export const editableRowTestkitFactory: any;
  export const fieldLabelAttributesTestkitFactory: any;
  export const fieldWithSelectionCompositeTestkitFactory: any;
  export const radioButtonTestkitFactory: EnzymeTestkitFactory<RadioButtonDriver>;
  export const messageBoxMarketerialLayoutTestkitFactory: any;
  export const messageBoxFunctionalLayoutTestkitFactory: EnzymeTestkitFactory<MessageBoxFunctionalLayoutDriver<ReactWrapper>>;
  export const cardSubheaderTestkitFactory: any;
  export const tooltipTestkitFactory: EnzymeTestkitFactory<TooltipDriver>;
  export const TooltipTestkit: EnzymeUniTestkitFactory<TooltipUniDriver>;
}

export = EnzymeTestkit;
