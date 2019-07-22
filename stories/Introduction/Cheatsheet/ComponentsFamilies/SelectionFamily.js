import React, { PureComponent } from 'react';
import {
  NotDeveloped,
  FamilyStructure,
  SingleComponentSideBySide,
  singleComponentSizes,
} from '../sharedComponents';

import { Layout, Cell } from 'wix-style-react/Layout';
import Box from 'wix-style-react/Box';

//4. Selection
import Dropdown from 'wix-style-react/Dropdown';
import MultiSelectCheckbox from 'wix-style-react/MultiSelectCheckbox';
import Checkbox from 'wix-style-react/Checkbox';
import RadioGroup from 'wix-style-react/RadioGroup';
import ToggleSwitch from 'wix-style-react/ToggleSwitch';
import SegmentedToggle from 'wix-style-react/SegmentedToggle';
import Thumbnail from 'wix-style-react/Thumbnail';
import Slider from 'wix-style-react/Slider';
import FormField from 'wix-style-react/FormField';

import LockLocked from 'wix-style-react/new-icons/LockLocked';
import LockUnlocked from 'wix-style-react/new-icons/LockUnlocked';

const DropdownExample = () => (
  <SingleComponentSideBySide
    name="4.1 Dropdown"
    componentsNames={['<FormField/>', '<Dropdown/>']}
    size={singleComponentSizes.compact}
  >
    <FormField id="formfieldDropdownId" label="Dropdown">
      <Dropdown
        id="formfieldDropdownId"
        options={[
          { id: 0, value: 0 },
          { id: 1, value: 1 },
          { id: 2, value: 2 },
        ]}
      />
    </FormField>
  </SingleComponentSideBySide>
);

class MultiSelectDropdownExample extends PureComponent {
  state = { selectedOptions: [] };

  removeSelectedItem = optionId => {
    let selectedOptions = [...this.state.selectedOptions];
    selectedOptions = selectedOptions.filter(id => id !== optionId);
    this.setState({ selectedOptions });
  };

  addSelectedItem = optionId => {
    const selectedOptions = [...this.state.selectedOptions];
    selectedOptions.push(optionId);
    this.setState({ selectedOptions });
  };

  render() {
    const multiSelectOptions = [
      { id: 'a', value: 'a' },
      { id: 'b', value: 'b' },
      { id: 'c', value: 'c' },
    ];

    const { selectedOptions } = this.state;

    return (
      <SingleComponentSideBySide
        name="4.2 Multi Select Dropdown"
        componentsNames={['<FormField/>', '<MultiSelectCheckbox/>']}
        size={singleComponentSizes.compact}
      >
        <FormField
          id="formfieldMultiSelectDropdownId"
          label="Multi Select Dropdown"
        >
          <MultiSelectCheckbox
            id="formfieldMultiSelectDropdownId"
            onSelect={optionId => this.addSelectedItem(optionId)}
            onDeselect={optionId => this.removeSelectedItem(optionId)}
            options={multiSelectOptions}
            selectedOptions={selectedOptions}
          />
        </FormField>
      </SingleComponentSideBySide>
    );
  }
}

class CheckboxExample extends PureComponent {
  state = {
    value: false,
  };

  render() {
    const { value } = this.state;

    return (
      <SingleComponentSideBySide
        name="4.3 Checkbox"
        componentsNames={['<FormField/>', '<Checkbox/>']}
      >
        <FormField
          id="formfieldCheckboxId"
          infoContent="I help you to fill info"
          label="Checkbox"
          labelPlacement="right"
          stretchContent={false}
          required
        >
          <Checkbox
            id="formfieldCheckboxId"
            checked={value}
            onChange={e => this.setState({ value: e.target.checked })}
          />
        </FormField>
      </SingleComponentSideBySide>
    );
  }
}

class RadioExample extends PureComponent {
  state = { value: 1 };

  render() {
    const { value } = this.state;
    return (
      <SingleComponentSideBySide
        name="4.4 Radio"
        componentsNames={['<FormField/>', '<RadioGroup/>']}
      >
        <FormField id="formfieldRadioGroupId" label="Radio Group">
          <RadioGroup
            id="formfieldRadioGroupId"
            onChange={value => this.setState({ value })}
            size="medium"
            value={value}
          >
            <RadioGroup.Radio value={1}>Option 1</RadioGroup.Radio>
            <RadioGroup.Radio value={2}>Option 2</RadioGroup.Radio>
            <RadioGroup.Radio value={3}>Option 3</RadioGroup.Radio>
          </RadioGroup>
        </FormField>
      </SingleComponentSideBySide>
    );
  }
}

class ToggleExample extends PureComponent {
  state = {
    value: false,
  };

  render() {
    const { value } = this.state;
    return (
      <SingleComponentSideBySide
        name="4.5 Toggle"
        componentsNames={['<FormField/>', '<ToggleSwitch/>']}
      >
        <FormField
          id="formfieldToggleSwitchId"
          infoContent="I help you to fill info"
          label="Toggle"
          labelPlacement="right"
          stretchContent={false}
          required
        >
          <ToggleSwitch
            id="formfieldToggleSwitchId"
            checked={value}
            onChange={e => this.setState({ value: e.target.checked })}
          />
        </FormField>
      </SingleComponentSideBySide>
    );
  }
}

const SegmentedToggleExample = () => (
  <SingleComponentSideBySide
    name="4.6 Segmented Toggle"
    componentsNames={['<FormField/>', '<SegmentedToggle/>']}
  >
    <FormField id="formfieldSegmentedToggleId" label="Segmented Toggle">
      <Box>
        <SegmentedToggle
          defaultSelected="option 1"
          id="formfieldSegmentedToggleId"
        >
          <SegmentedToggle.Icon value="option" tooltipText="Locked">
            <LockLocked />
          </SegmentedToggle.Icon>
          <SegmentedToggle.Icon value="option2" tooltipText="Unlocked">
            <LockUnlocked />
          </SegmentedToggle.Icon>
        </SegmentedToggle>
      </Box>
    </FormField>
  </SingleComponentSideBySide>
);

class ThumbnailWithTitleExmaple extends PureComponent {
  state = { selected: 1 };

  render() {
    const { selected } = this.state;

    return (
      <Layout gap="12px">
        {[1, 2, 3].map(n => (
          <Cell key={`title-thumbnail-${n}`} span={3}>
            <Thumbnail
              title="Thumbnail"
              selected={selected === n}
              onClick={() => this.setState({ selected: n })}
            />
          </Cell>
        ))}
      </Layout>
    );
  }
}

class ListSmallThumbnailaExmaple extends PureComponent {
  state = { selected: 1 };

  render() {
    const { selected } = this.state;
    return (
      <Layout gap="12px">
        {[1, 2, 3].map(n => (
          <Cell key={`list-thumbnail-${n}`} span={1}>
            <Thumbnail
              title="Thumbnail Title"
              selected={selected === n}
              description="Description here"
              image="https://static.wixstatic.com/media/c78d05b79ede429fb77c9d8ec4443b93.jpg/v1/fit/w_234,h_72/c78d05b79ede429fb77c9d8ec4443b93.jpg"
              onClick={() => this.setState({ selected: n })}
              width={170}
            />
          </Cell>
        ))}
      </Layout>
    );
  }
}

const ThumbnailSelectExamples = () => (
  <SingleComponentSideBySide
    name="4.7 Thumbnail Select"
    componentsNames={['<Thumbnail/>']}
  >
    <Box marginBottom="20px" />
    <ThumbnailWithTitleExmaple />
    <Box marginBottom="30px" />
    <ListSmallThumbnailaExmaple />
  </SingleComponentSideBySide>
);

/* This Box component was added due to an issue with the Slider */
/* https://github.com/wix/wix-style-react/issues/3741 */
class SliderExample extends PureComponent {
  state = { value: [2, 4] };

  change = value => {
    this.setState({ value });
  };

  render() {
    const { value } = this.state;
    return (
      <SingleComponentSideBySide
        name="4.8 Slider"
        componentsNames={['<FormField/>', '<Slider/>']}
        size={singleComponentSizes.compact}
      >
        <FormField id="formfieldSliderId" label="Slider Label">
          <Slider
            id="formfieldSliderId"
            onChange={this.change}
            min={1}
            max={10}
            value={value}
            displayMarks
          />
        </FormField>
        <Box marginBottom="50px" />
      </SingleComponentSideBySide>
    );
  }
}

const CheckToggleExample = () => (
  <SingleComponentSideBySide name="4.9 Check Toggle">
    <NotDeveloped />
  </SingleComponentSideBySide>
);

const SelectionFamily = () => (
  <FamilyStructure title="4. Selection">
    <DropdownExample />
    <MultiSelectDropdownExample />
    <CheckboxExample />
    <RadioExample />
    <ToggleExample />
    <SegmentedToggleExample />
    <ThumbnailSelectExamples />
    <SliderExample />
    <CheckToggleExample />
  </FamilyStructure>
);

export default SelectionFamily;
