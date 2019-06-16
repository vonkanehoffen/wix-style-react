import React from 'react';

//Assets
import MoreIcon from 'wix-style-react/new-icons/More';

//TODO
import { Container, Row, Col } from 'wix-style-react/Grid';
import Card from 'wix-style-react/Card';
import Page from 'wix-style-react/Page';
import Text from 'wix-style-react/Text';
import Box from 'wix-style-react/Box';

//3. Inputs
import Input from 'wix-style-react/Input';
import InputArea from 'wix-style-react/InputArea';
import RichTextInputArea from 'wix-style-react/RichTextInputArea';
import NumberInput from 'wix-style-react/NumberInput';
import TimeInput from 'wix-style-react/TimeInput';
import DateInput from 'wix-style-react/DateInput';
import ColorInput from 'wix-style-react/ColorInput';
import MultiSelect from 'wix-style-react/MultiSelect';
// import GoogleAPILoader from './utils/GoogleAPILoader';
// import GoogleAddressInput from 'wix-style-react/GoogleAddressInput';
import Search from 'wix-style-react/Search';
import ImageViewer from 'wix-style-react/ImageViewer';

//4. Selection
import Dropdown from 'wix-style-react/Dropdown';
import MultiSelectCheckbox from 'wix-style-react/MultiSelectCheckbox';
import Checkbox from 'wix-style-react/Checkbox';
import RadioGroup from 'wix-style-react/RadioGroup';
import ToggleSwitch from 'wix-style-react/ToggleSwitch';
import SegmentedToggle from 'wix-style-react/SegmentedToggle';
import Thumbnail from 'wix-style-react/Thumbnail';
import Slider from 'wix-style-react/Slider';

//5. Button
import Button from 'wix-style-react/Button';
import IconButton from 'wix-style-react/IconButton';
import TextButton from 'wix-style-react/TextButton';
import CloseButton from 'wix-style-react/CloseButton';
import AddItem from 'wix-style-react/AddItem';

//6. Sidebar
import Sidebar from 'wix-style-react/Sidebar';
import Tabs from 'wix-style-react/Tabs';

//7. Tooltip
import Tooltip from 'wix-style-react/Tooltip';
import Popover from 'wix-style-react/Popover';
import PopoverMenu from 'wix-style-react/beta/PopoverMenu';
import FloatingHelper from 'wix-style-react/FloatingHelper';

//8. Notifications
import Notification from 'wix-style-react/Notification';
import FloatingNotification from 'wix-style-react/FloatingNotification';
import SectionHelper from 'wix-style-react/SectionHelper';

//11. Other
import Avatar from 'wix-style-react/Avatar';
import Badge from 'wix-style-react/Badge';
import BadgeSelect from 'wix-style-react/BadgeSelect';
import CounterBadge from 'wix-style-react/CounterBadge';
import Tag from 'wix-style-react/Tag';
import Loader from 'wix-style-react/Loader';
import LinearProgressBar from 'wix-style-react/LinearProgressBar';
import CircularProgressBar from 'wix-style-react/CircularProgressBar';

const SingleComponent = ({ name, componentName, children }) => (
  <Row>
    <Col span={3}>
      <Text>{name}</Text>
    </Col>
    <Col span={3}>
      <Text>{componentName}</Text>
    </Col>
    <Col span={6}>{children}</Col>
  </Row>
);

const GeneralStructure = ({ title, children }) => (
  <Card>
    <Card.Header title={title} />
    <Card.Content>
      <Container fluid>
        <SingleComponent
          name={<Text weight="bold">Index Name</Text>}
          componentName={<Text weight="bold">Component Name</Text>}
          children={<Text weight="bold">Preview</Text>}
        />
        {children}
      </Container>
    </Card.Content>
  </Card>
);

const FoundationFamily = () => (
  <GeneralStructure title="1. Foundation - TODO" />
);

const LayoutFamily = () => <GeneralStructure title="2. Layout - TODO" />;

const InputFamily = () => (
  <GeneralStructure title="3. Input">
    <SingleComponent name="3.1 Text Input" componentName="<Input/>">
      <Input />
    </SingleComponent>
    <SingleComponent name="3.2 Text Area" componentName="<InputArea/>">
      <InputArea />
    </SingleComponent>
    <SingleComponent
      name="3.3 Rich Text Area"
      componentName="<RichTextInputArea/>"
    >
      <RichTextInputArea />
    </SingleComponent>
    <SingleComponent name="3.4 Number Input" componentName="<NumberInput/>">
      <NumberInput />
    </SingleComponent>
    <SingleComponent name="3.5 Number Range Input">
      Not Developed
    </SingleComponent>
    <SingleComponent name="3.6 Incrementer Input">Not Defined</SingleComponent>
    <SingleComponent name="3.7 Duration Input">Not Developed</SingleComponent>
    <SingleComponent name="3.8 Time Input" componentName="<TimeInput/>">
      <TimeInput />
    </SingleComponent>
    <SingleComponent name="3.9 Date Input" componentName="<DateInput/>">
      <DateInput value={new Date().toString()} />
    </SingleComponent>
    <SingleComponent name="3.10 Date Range Input">
      Not Developed
    </SingleComponent>
    <SingleComponent name="3.11 Color Input" componentName="<ColorInput/>">
      <ColorInput value="" />
    </SingleComponent>
    <SingleComponent name="3.12 Tags Input" componentName="<MultiSelect/>">
      <MultiSelect tags={[{ label: 'Tag 1' }, { label: 'Tag 2' }]} />
    </SingleComponent>
    <SingleComponent
      name="3.13 Google Address Input"
      componentName="<GoogleAddressInput/>"
    >
      TODO
    </SingleComponent>
    <SingleComponent name="3.14 Search Input" componentName="<Search/>">
      <Search />
    </SingleComponent>
    <SingleComponent name="3.15 Media Input" componentName="<ImageViewer/>">
      <ImageViewer />
    </SingleComponent>
  </GeneralStructure>
);

const SelectionFamily = () => (
  <GeneralStructure title="4. Selection">
    <SingleComponent name="4.1 Dropdown" componentName="<Dropdown/>">
      <Dropdown
        options={[
          { id: 0, value: 0 },
          { id: 1, value: 1 },
          { id: 2, value: 2 },
        ]}
      />
    </SingleComponent>
    <SingleComponent
      name="4.2 Multi Select Dropdown"
      componentName="<MultiSelectCheckbox/>"
    >
      <MultiSelectCheckbox
        options={[
          { id: 'a', value: 'a' },
          { id: 'b', value: 'b' },
          { id: 'c', value: 'c' },
        ]}
      />
    </SingleComponent>
    <SingleComponent name="4.3 Checkbox" componentName="<Checkbox/>">
      <Checkbox />
    </SingleComponent>
    <SingleComponent name="4.4 Radio" componentName="<RadioGroup/>">
      <RadioGroup>
        <RadioGroup.Radio>a</RadioGroup.Radio>
        <RadioGroup.Radio>b</RadioGroup.Radio>
        <RadioGroup.Radio>c</RadioGroup.Radio>
      </RadioGroup>
    </SingleComponent>
    <SingleComponent name="4.5 Toggle" componentName="<ToggleSwitch/>">
      <ToggleSwitch />
    </SingleComponent>
    <SingleComponent
      name="4.6 Segmented Toggle"
      componentName="<SegmentedToggle/>"
    >
      <SegmentedToggle defaultSelected="option 1  ">
        <SegmentedToggle.Button value="option 1">
          Option 1
        </SegmentedToggle.Button>
        <SegmentedToggle.Button value="option 2">
          Option 2
        </SegmentedToggle.Button>
      </SegmentedToggle>
    </SingleComponent>
    <SingleComponent name="4.7 Thumbnail Select" componentName="<Thumbnail/>">
      <Thumbnail title="Thumbnail" selected />
    </SingleComponent>
    <SingleComponent name="4.8 Slider" componentName="<Slider/>">
      <Slider />
    </SingleComponent>
    <SingleComponent name="4.9 Check Toggle">Not Developed</SingleComponent>
  </GeneralStructure>
);

const ButtonFamily = () => (
  <GeneralStructure title="5. Button">
    <SingleComponent name="5.1 Button" componentName="<Button/>">
      <Button>Button</Button>
    </SingleComponent>
    <SingleComponent name="5.2 Icon Button" componentName="<IconButton/>">
      <IconButton>
        <MoreIcon />
      </IconButton>
    </SingleComponent>
    <SingleComponent name="5.3 Text Button" componentName="<TextButton/>">
      <TextButton>Text Button</TextButton>
    </SingleComponent>
    <SingleComponent name="5.4 Close Button" componentName="<CloseButton/>">
      <CloseButton />
    </SingleComponent>
    <SingleComponent name="5.5 Add Item" componentName="<AddItem/>">
      <AddItem>Add New Item</AddItem>
    </SingleComponent>
  </GeneralStructure>
);

const NavigationFamily = () => (
  <GeneralStructure title="6. Navigation">
    <SingleComponent name="6.1 Sidebar Menu" componentName="<Sidebar/>">
      <Sidebar selectedKey="item1">
        <Sidebar.PersistentHeader>
          <Box direction="vertical" padding="30px">
            <Text light weight="bold">
              Site Name
            </Text>
            <Text light size="tiny">
              Role: Owner
            </Text>
          </Box>
        </Sidebar.PersistentHeader>

        <Sidebar.Item itemKey={'item1'}>
          <Box direction="vertical" padding="9px 30px">
            <Text size="small" light>
              Action
            </Text>
          </Box>
        </Sidebar.Item>
      </Sidebar>
    </SingleComponent>
    <SingleComponent name="6.2 Tree Navigation"> Not defined </SingleComponent>
    <SingleComponent name="6.3 Text Tabs" componentName="<Tabs/>">
      <Tabs
        activeId={1}
        items={[
          {
            id: 1,
            title: 'First Item',
          },
          {
            id: 2,
            title: 'Second Item',
          },
          {
            id: 3,
            title: 'Third Item',
          },
        ]}
      />
    </SingleComponent>
  </GeneralStructure>
);

const TooltipFamily = () => (
  <GeneralStructure title="7. Tooltips and Popovers">
    <SingleComponent name="7.1 Tooltip" componentName="<Tooltip/>">
      <Tooltip upgrade content="Tooltip">
        <Text>Hover me</Text>
      </Tooltip>
    </SingleComponent>
    <SingleComponent name="7.2 Popover" componentName="<Popover/>">
      <Popover showArrow shown placement="right">
        <Popover.Element>
          <div />
        </Popover.Element>
        <Popover.Content>
          <Box padding="12px 24px">
            <Text size="small">Popover</Text>
          </Box>
        </Popover.Content>
      </Popover>
    </SingleComponent>
    <SingleComponent name="7.3 Popover Menu" componentName="<PopoverMenu/>">
      <PopoverMenu
        triggerElement={({ onClick }) => (
          <IconButton onClick={onClick} priority="secondary">
            <MoreIcon />
          </IconButton>
        )}
      >
        <PopoverMenu.MenuItem text="option 1" />
        <PopoverMenu.MenuItem text="option 2" />
        <PopoverMenu.MenuItem text="option 3" />
      </PopoverMenu>
    </SingleComponent>
    <SingleComponent
      name="7.4 Floating Helper"
      componentName="<FloatingHelper/>"
    >
      <FloatingHelper
        content={
          <Box>
            <Box direction="vertical">
              <Box marginBottom={1}>
                <Text light weight="normal">
                  Don’t forget to setup payments
                </Text>
              </Box>
              <Text light weight="light">
                In order to sell your music you need to choose a payment method.
              </Text>
            </Box>
          </Box>
        }
        initiallyOpened
        placement="right"
        target={<Box height="150px" />}
      />
    </SingleComponent>
  </GeneralStructure>
);

const NotifiationFamily = () => (
  <GeneralStructure title="8. Notifications">
    <SingleComponent name="8.1 Notification" componentName="<Notification/>">
      <Notification theme="standard" show>
        <Notification.TextLabel>
          You have enabled new functionallity
        </Notification.TextLabel>
        <Notification.CloseButton />
      </Notification>
    </SingleComponent>
    <SingleComponent
      name="8.2 Floating Notification"
      componentName="<FloatingNotification/>"
    >
      <FloatingNotification
        type="destructive"
        text="Image.jpg failed to upload"
      />
    </SingleComponent>
    <SingleComponent name="8.3 Section Helper" componentName="<SectionHelper/>">
      <SectionHelper title="Don’t forget to setup payments">
        In order to sell your music you need to choose a payment method.
      </SectionHelper>
    </SingleComponent>
  </GeneralStructure>
);

const ModalFamily = () => <GeneralStructure title="9. Modal - TODO" />;

const PickerFamily = () => <GeneralStructure title="10. Picker - TODO" />;

const OtherFamily = () => (
  <GeneralStructure title="11. Other">
    <SingleComponent name="11.1 Avatar" componentName="<Avatar/>">
      <Avatar />
    </SingleComponent>
    <SingleComponent name="11.2 Badge" componentName="<Badge/>">
      <Badge uppercase={false}>Badge</Badge>
    </SingleComponent>
    <SingleComponent name="11.3 Badge Select" componentName="<BadgeSelect/>">
      <BadgeSelect
        options={[
          {
            id: '0',
            skin: 'general',
            text: 'general',
          },
          {
            id: '1',
            skin: 'standard',
            text: 'standard',
          },
          {
            id: '2',
            skin: 'danger',
            text: 'danger',
          },
          {
            id: '3',
            skin: 'success',
            text: 'success',
          },
          {
            id: '4',
            skin: 'neutral',
            text: 'neutral',
          },
          {
            id: '5',
            skin: 'neutralLight',
            text: 'neutralLight',
          },
          {
            id: '6',
            skin: 'warning',
            text: 'warning',
          },
          {
            id: '7',
            skin: 'warningLight',
            text: 'warningLight',
          },
          {
            id: '8',
            skin: 'urgent',
            text: 'urgent',
          },
          {
            id: '9',
            skin: 'neutralStandard',
            text: 'neutralStandard',
          },
          {
            id: '10',
            skin: 'neutralSuccess',
            text: 'neutralSuccess',
          },
          {
            id: '11',
            skin: 'neutralDanger',
            text: 'neutralDanger',
          },
          {
            id: '12',
            skin: 'premium',
            text: 'premium',
          },
        ]}
        uppercase
      />
    </SingleComponent>
    <SingleComponent name="11.4 Counter Badge" componentName="<CounterBadge/>">
      <CounterBadge>12</CounterBadge>
    </SingleComponent>
    <SingleComponent name="11.5 Tag" componentName="<Tag/>">
      <Tag>Tag</Tag>
    </SingleComponent>
    <SingleComponent name="11.6 Loader" componentName="<Loader/>">
      <Loader />
    </SingleComponent>
    <SingleComponent
      name="11.7 Linear Progress Bar"
      componentName="<LinearProgressBar/>"
    >
      <LinearProgressBar value={25} />
    </SingleComponent>
    <SingleComponent
      name="11.8 Circular Progress Bar"
      componentName="<CircularProgressBar/>"
    >
      <CircularProgressBar value={25} />
    </SingleComponent>
  </GeneralStructure>
);

class ComponentsCheatsheet extends React.Component {
  render() {
    return (
      <Page upgrade>
        <Page.Header
          title="Components Cheatsheet"
          subtitle="Common components index"
        />
        <Page.Content>
          <Container>
            {[
              FoundationFamily,
              LayoutFamily,
              InputFamily,
              SelectionFamily,
              ButtonFamily,
              NavigationFamily,
              TooltipFamily,
              NotifiationFamily,
              ModalFamily,
              PickerFamily,
              OtherFamily,
            ].map((Family, i) => (
              <Row key={i}>
                <Family />
              </Row>
            ))}
          </Container>
        </Page.Content>
      </Page>
    );
  }
}
export default ComponentsCheatsheet;
