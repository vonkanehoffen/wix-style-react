import React from 'react';
import {
  GeneralStructure,
  SingleComponent,
  NotDefined,
  NotDeveloped,
} from '../sharedComponents';
import { Container, Row, Col } from 'wix-style-react/Grid';
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
import FormField from 'wix-style-react/FormField';
// import GoogleAPILoader from './utils/GoogleAPILoader';
// import GoogleAddressInput from 'wix-style-react/GoogleAddressInput';
import Search from 'wix-style-react/Search';
import ImageViewer from 'wix-style-react/ImageViewer';

const TextInputExample = () => (
  <SingleComponent
    name="3.1 Text Input"
    componentsNames={['<FormField/>', '<Input/>']}
    compact
  >
    <FormField label="Text Input">
      <Input placeholder="Value" />
    </FormField>
  </SingleComponent>
);

const TextAreaExample = () => (
  <SingleComponent
    name="3.2 Text Area"
    componentsNames={['<FormField/>', '<Input/>']}
    compact
  >
    <FormField label="Text Area">
      <InputArea placeholder="Value" />
    </FormField>
  </SingleComponent>
);

const RichTextAreaExample = () => (
  <SingleComponent
    name="3.3 Rich Text Area"
    componentsNames={['<FormField/>', '<RichTextInputArea/>']}
    compact
  >
    <FormField label="Rich Text Area">
      <RichTextInputArea />
    </FormField>
  </SingleComponent>
);

const NumberInputExample = () => (
  <SingleComponent
    name="3.4 Number Input"
    componentsNames={['<FormField/>', '<NumberInput/>']}
    compact
  >
    <FormField label="Number Input">
      <NumberInput value={500} />
    </FormField>
  </SingleComponent>
);

const NumberRangeExample = () => (
  <SingleComponent secondary light name="3.5 Number Range Input">
    <NotDeveloped />
  </SingleComponent>
);

const IncrementerInputExample = () => (
  <SingleComponent secondary light name="3.6 Incrementer Input">
    <NotDefined />
  </SingleComponent>
);

const DurationInputExample = () => (
  <SingleComponent secondary light name="3.7 Duration Input">
    <NotDeveloped />
  </SingleComponent>
);

const TimeInputExample = () => (
  <SingleComponent
    name="3.8 Time Input"
    componentsNames={['<FormField/>', '<TimeInput/>']}
  >
    <FormField label="Time Input">
      <TimeInput disableAmPm />
    </FormField>
  </SingleComponent>
);

const DateInputExample = () => (
  <SingleComponent
    name="3.9 Date Input"
    componentsNames={['<FormField/>', '<DateInput/>']}
    compact
  >
    <FormField label="Date">
      <DateInput value={new Date().toString()} />
    </FormField>
  </SingleComponent>
);

const DateRangeInputExample = () => (
  <SingleComponent secondary light name="3.10 Date Range Input">
    <NotDeveloped />
  </SingleComponent>
);

const ColorInputExample = () => (
  <SingleComponent
    name="3.11 Color Input"
    componentsNames={['<FormField/>', '<ColorInput/>']}
    compact
  >
    <FormField label="Color Input">
      <ColorInput value="" placeholder="Please choose a color" />
    </FormField>
  </SingleComponent>
);

const TagsInputExample = () => (
  <SingleComponent
    name="3.12 Tags Input"
    componentsNames={['<FormField/>', '<MultiSelect/>', '<Tag/>']}
    compact
  >
    <FormField label="Tag Input">
      <MultiSelect tags={[{ label: 'Tag 1' }, { label: 'Tag 2' }]} />
    </FormField>
  </SingleComponent>
);

const GoogleAddressInputExample = () => (
  <SingleComponent name="3.13 Google Address Input" secondary light>
    <NotDefined />
  </SingleComponent>
);

const SearchInputExample = () => (
  <SingleComponent
    name="3.14 Search Input"
    componentsNames={['<Search/>']}
    compact
  >
    <Search placeholder="Search..." />
  </SingleComponent>
);

const MediaInputExample = () => (
  <SingleComponent
    name="3.15 Media Input"
    componentsNames={['<FormField/>', '<ImageViewer/>']}
  >
    <Box>
      <Box flexBasis="0" marginRight="18px">
        <FormField label="Multimedia Input ">
          <ImageViewer />
        </FormField>
      </Box>
      <Box>
        <FormField label="Multimedia Input ">
          <ImageViewer
            imageUrl="https://static.wixstatic.com/media/c78d05b79ede429fb77c9d8ec4443b93.jpg/v1/fit/w_375,h_375/c78d05b79ede429fb77c9d8ec4443b93.jpg"
            onAddImage={() => 'onAddImage'}
            onRemoveImage={() => 'onRemoveImage'}
            onUpdateImage={() => 'onUpdateImage'}
          />
        </FormField>
      </Box>
    </Box>
  </SingleComponent>
);

const InputFamily = () => (
  <GeneralStructure title="3. Input">
    <TextInputExample />
    <TextAreaExample />
    <RichTextAreaExample />
    <NumberInputExample />
    <NumberRangeExample />
    <IncrementerInputExample />
    <DurationInputExample />
    <TimeInputExample />
    <DateInputExample />
    <DateRangeInputExample />
    <ColorInputExample />
    <TagsInputExample />
    <GoogleAddressInputExample />
    <SearchInputExample />
    <MediaInputExample />
  </GeneralStructure>
);

export default InputFamily;
