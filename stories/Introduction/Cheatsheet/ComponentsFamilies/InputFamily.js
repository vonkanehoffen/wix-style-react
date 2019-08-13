import React from 'react';
import {
  FamilyStructure,
  SingleComponentSideBySide,
  NotDefined,
  NotDeveloped,
  singleComponentSizes,
} from '../sharedComponents';
import { inputFamilyMapping } from '../urlsMapping/inputsUrlsMapping';
import {
  linkedComponentUxName,
  linkedComponentsNames,
} from '../urlsMapping/shared';

//Assets
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

const { familyName, symbols } = inputFamilyMapping;

const TextInputExample = () => {
  const { UxStory, componentsNames } = symbols[0];

  const textInputProps = {
    name: linkedComponentUxName({ UxStory, familyName }),
    componentsNames: linkedComponentsNames(componentsNames),
    size: singleComponentSizes.compact,
  };

  return (
    <SingleComponentSideBySide {...textInputProps}>
      <FormField label="Text Input">
        <Input placeholder="Value" />
      </FormField>
    </SingleComponentSideBySide>
  );
};

const TextAreaExample = () => {
  const { UxStory, componentsNames } = symbols[1];

  const TextAreaProps = {
    name: linkedComponentUxName({ UxStory, familyName }),
    componentsNames: linkedComponentsNames(componentsNames),
    size: singleComponentSizes.compact,
  };

  return (
    <SingleComponentSideBySide {...TextAreaProps}>
      <FormField label="Text Area">
        <InputArea placeholder="Value" />
      </FormField>
    </SingleComponentSideBySide>
  );
};

const RichTextAreaExample = () => (
  <SingleComponentSideBySide
    name="3.3 Rich Text Area"
    componentsNames={['<FormField/>', '<RichTextInputArea/>']}
    size={singleComponentSizes.compact}
  >
    <FormField label="Rich Text Area">
      <RichTextInputArea />
    </FormField>
  </SingleComponentSideBySide>
);

const NumberInputExample = () => (
  <SingleComponentSideBySide
    name="3.4 Number Input"
    componentsNames={['<FormField/>', '<NumberInput/>']}
    size={singleComponentSizes.compact}
  >
    <FormField label="Number Input">
      <NumberInput value={500} />
    </FormField>
  </SingleComponentSideBySide>
);

const NumberRangeExample = () => (
  <SingleComponentSideBySide name="3.5 Number Range Input">
    <NotDeveloped />
  </SingleComponentSideBySide>
);

const IncrementerInputExample = () => (
  <SingleComponentSideBySide name="3.6 Incrementer Input">
    <NotDefined />
  </SingleComponentSideBySide>
);

const DurationInputExample = () => (
  <SingleComponentSideBySide name="3.7 Duration Input">
    <NotDeveloped />
  </SingleComponentSideBySide>
);

const TimeInputExample = () => (
  <SingleComponentSideBySide
    name="3.8 Time Input"
    componentsNames={['<FormField/>', '<TimeInput/>']}
  >
    <FormField label="Time Input">
      <TimeInput disableAmPm />
    </FormField>
  </SingleComponentSideBySide>
);

const DateInputExample = () => (
  <SingleComponentSideBySide
    name="3.9 Date Input"
    componentsNames={['<FormField/>', '<DateInput/>']}
    size={singleComponentSizes.compact}
  >
    <FormField label="Date">
      <DateInput value={new Date().toString()} />
    </FormField>
  </SingleComponentSideBySide>
);

const DateRangeInputExample = () => (
  <SingleComponentSideBySide name="3.10 Date Range Input">
    <NotDeveloped />
  </SingleComponentSideBySide>
);

const ColorInputExample = () => (
  <SingleComponentSideBySide
    name="3.11 Color Input"
    componentsNames={['<FormField/>', '<ColorInput/>']}
    size={singleComponentSizes.compact}
  >
    <FormField label="Color Input">
      <ColorInput value="" placeholder="Please choose a color" />
    </FormField>
  </SingleComponentSideBySide>
);

const TagsInputExample = () => (
  <SingleComponentSideBySide
    name="3.12 Tags Input"
    componentsNames={['<FormField/>', '<MultiSelect/>', '<Tag/>']}
    size={singleComponentSizes.compact}
  >
    <FormField label="Tag Input">
      <MultiSelect tags={[{ label: 'Tag 1' }, { label: 'Tag 2' }]} />
    </FormField>
  </SingleComponentSideBySide>
);

const GoogleAddressInputExample = () => (
  <SingleComponentSideBySide name="3.13 Google Address Input">
    <NotDefined />
  </SingleComponentSideBySide>
);

const SearchInputExample = () => (
  <SingleComponentSideBySide
    name="3.14 Search Input"
    componentsNames={['<Search/>']}
    size={singleComponentSizes.compact}
  >
    <Search placeholder="Search..." />
  </SingleComponentSideBySide>
);

const MediaInputExample = () => (
  <SingleComponentSideBySide
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
  </SingleComponentSideBySide>
);

const InputFamily = () => (
  <FamilyStructure title="3. Input">
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
  </FamilyStructure>
);

export default InputFamily;
