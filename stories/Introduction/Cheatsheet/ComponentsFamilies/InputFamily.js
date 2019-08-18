/* eslint-disable no-console */
import React from 'react';
import {
  FamilyStructure,
  SingleComponentSideBySide,
  NotDefined,
  NotDeveloped,
  singleComponentSizes,
} from '../sharedComponents';

import { inputsSymbolsToComponents } from '../../../symbolsComponentsMapping/InputsFamily';

import {
  createLinkedSymbolName,
  createLinkedComponentsNames,
} from '../sharedComponents/utils';

import {
  inputsSymbols,
  symbolsGroup,
} from '../../../symbolsComponentsMapping/symbols';

//Assets
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

const groupSymbol = symbolsGroup.inputs;

const TextInputExample = () => {
  const symbol = inputsSymbols.textInput;
  const components = inputsSymbolsToComponents[symbol];

  const textInputProps = {
    name: createLinkedSymbolName({ groupSymbol, symbol }),
    componentsNames: createLinkedComponentsNames(components),
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
  const symbol = inputsSymbols.textArea;
  const components = inputsSymbolsToComponents[symbol];

  const textAreaProps = {
    name: createLinkedSymbolName({ groupSymbol, symbol }),
    componentsNames: createLinkedComponentsNames(components),
    size: singleComponentSizes.compact,
  };

  return (
    <SingleComponentSideBySide {...textAreaProps}>
      <FormField label="Text Area">
        <InputArea placeholder="Value" />
      </FormField>
    </SingleComponentSideBySide>
  );
};

const RichTextAreaExample = () => {
  const symbol = inputsSymbols.richTextArea;
  const components = inputsSymbolsToComponents[symbol];

  const richTextAreaProps = {
    name: createLinkedSymbolName({ groupSymbol, symbol }),
    componentsNames: createLinkedComponentsNames(components),
    size: singleComponentSizes.compact,
  };

  return (
    <SingleComponentSideBySide {...richTextAreaProps}>
      <FormField label="Rich Text Area">
        <RichTextInputArea />
      </FormField>
    </SingleComponentSideBySide>
  );
};

const NumberInputExample = () => {
  const symbol = inputsSymbols.numberInput;
  const components = inputsSymbolsToComponents[symbol];

  const numberInputProps = {
    name: createLinkedSymbolName({ groupSymbol, symbol }),
    componentsNames: createLinkedComponentsNames(components),
    size: singleComponentSizes.compact,
  };

  return (
    <SingleComponentSideBySide {...numberInputProps}>
      <FormField label="Number Input">
        <NumberInput value={500} />
      </FormField>
    </SingleComponentSideBySide>
  );
};

const NumberRangeExample = () => {
  const symbol = inputsSymbols.numberRangeInput;
  const components = inputsSymbolsToComponents[symbol];

  const numberRangeProps = {
    name: symbol,
    componentsNames: components,
  };

  return (
    <SingleComponentSideBySide {...numberRangeProps}>
      <NotDeveloped />
    </SingleComponentSideBySide>
  );
};

const IncrementerInputExample = () => {
  const symbol = inputsSymbols.incrementerInput;
  const components = inputsSymbolsToComponents[symbol];

  const incrementerInputProps = {
    name: symbol,
    componentsNames: components,
  };

  return (
    <SingleComponentSideBySide {...incrementerInputProps}>
      <NotDefined />
    </SingleComponentSideBySide>
  );
};

const DurationInputExample = () => {
  const symbol = inputsSymbols.durationInput;
  const components = inputsSymbolsToComponents[symbol];

  const durationInputProps = {
    name: symbol,
    componentsNames: components,
  };

  return (
    <SingleComponentSideBySide {...durationInputProps}>
      <NotDeveloped />
    </SingleComponentSideBySide>
  );
};

const TimeInputExample = () => {
  const symbol = inputsSymbols.timeInput;
  const components = inputsSymbolsToComponents[symbol];

  const timeInputProps = {
    name: symbol,
    componentsNames: createLinkedComponentsNames(components),
  };

  return (
    <SingleComponentSideBySide {...timeInputProps}>
      <FormField label="Time Input">
        <TimeInput disableAmPm />
      </FormField>
    </SingleComponentSideBySide>
  );
};

const DateInputExample = () => {
  const symbol = inputsSymbols.dateInput;
  const components = inputsSymbolsToComponents[symbol];

  const dateInputProps = {
    name: symbol,
    componentsNames: createLinkedComponentsNames(components),
    size: singleComponentSizes.compact,
  };

  return (
    <SingleComponentSideBySide {...dateInputProps}>
      <FormField label="Date">
        <DateInput value={new Date().toString()} />
      </FormField>
    </SingleComponentSideBySide>
  );
};

const DateRangeInputExample = () => {
  const symbol = inputsSymbols.dateRangeInput;
  const components = inputsSymbolsToComponents[symbol];

  const dateRangeInputProps = {
    name: symbol,
    componentsNames: components,
  };

  return (
    <SingleComponentSideBySide {...dateRangeInputProps}>
      <NotDeveloped />
    </SingleComponentSideBySide>
  );
};

const ColorInputExample = () => {
  const symbol = inputsSymbols.colorInput;
  const components = inputsSymbolsToComponents[symbol];

  const colorInputProps = {
    name: createLinkedSymbolName({ groupSymbol, symbol }),
    componentsNames: createLinkedComponentsNames(components),
    size: singleComponentSizes.compact,
  };

  return (
    <SingleComponentSideBySide {...colorInputProps}>
      <FormField label="Color Input">
        <ColorInput value="" placeholder="Please choose a color" />
      </FormField>
    </SingleComponentSideBySide>
  );
};

const TagsInputExample = () => {
  const symbol = inputsSymbols.tagsInput;
  const components = inputsSymbolsToComponents[symbol];

  const tagsInputProps = {
    name: createLinkedSymbolName({ groupSymbol, symbol }),
    componentsNames: createLinkedComponentsNames(components),
    size: singleComponentSizes.compact,
  };

  return (
    <SingleComponentSideBySide {...tagsInputProps}>
      <FormField label="Tag Input">
        <MultiSelect tags={[{ label: 'Tag 1' }, { label: 'Tag 2' }]} />
      </FormField>
    </SingleComponentSideBySide>
  );
};

//TODO: There's a component for it. No symbol for this one.
const GoogleAddressInputExample = () => {
  const symbol = inputsSymbols.googleAddressInput;
  const components = inputsSymbolsToComponents[symbol];

  const googleAddressInputProps = {
    name: symbol,
    componentsNames: components,
  };

  return (
    <SingleComponentSideBySide {...googleAddressInputProps}>
      <NotDefined />
    </SingleComponentSideBySide>
  );
};

//TODO: No UX Story for this one.
const SearchInputExample = () => {
  const symbol = inputsSymbols.searchInput;
  const components = inputsSymbolsToComponents[symbol];

  const searchInputProps = {
    name: symbol,
    componentsNames: createLinkedComponentsNames(components),
    size: singleComponentSizes.compact,
  };

  return (
    <SingleComponentSideBySide {...searchInputProps}>
      <Search placeholder="Search..." />
    </SingleComponentSideBySide>
  );
};

//TODO: No UX Story for this one.
const MediaInputExample = () => {
  const symbol = inputsSymbols.mediaInput;
  const components = inputsSymbolsToComponents[symbol];

  const mediaInputProps = {
    name: symbol,
    componentsNames: createLinkedComponentsNames(components),
  };

  return (
    <SingleComponentSideBySide {...mediaInputProps}>
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
              onAddImage={() => console.log('onAddImage')}
              onRemoveImage={() => console.log('onRemoveImage')}
              onUpdateImage={() => console.log('onUpdateImage')}
            />
          </FormField>
        </Box>
      </Box>
    </SingleComponentSideBySide>
  );
};

const InputFamily = () => (
  <FamilyStructure title={groupSymbol}>
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
