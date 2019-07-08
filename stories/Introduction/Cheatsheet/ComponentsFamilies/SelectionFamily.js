import React from 'react';
import {
  NotDeveloped,
  GeneralStructure,
  SingleComponent,
} from '../sharedComponents';

//4. Selection
import Dropdown from 'wix-style-react/Dropdown';
import MultiSelectCheckbox from 'wix-style-react/MultiSelectCheckbox';
import Checkbox from 'wix-style-react/Checkbox';
import RadioGroup from 'wix-style-react/RadioGroup';
import ToggleSwitch from 'wix-style-react/ToggleSwitch';
import SegmentedToggle from 'wix-style-react/SegmentedToggle';
import Thumbnail from 'wix-style-react/Thumbnail';
import Slider from 'wix-style-react/Slider';

const SelectionFamily = () => (
  <GeneralStructure title="4. Selection">
    <SingleComponent name="4.1 Dropdown" componentsNames={['<Dropdown/>']}>
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
      componentsNames={['<MultiSelectCheckbox/>']}
    >
      <MultiSelectCheckbox
        options={[
          { id: 'a', value: 'a' },
          { id: 'b', value: 'b' },
          { id: 'c', value: 'c' },
        ]}
      />
    </SingleComponent>
    <SingleComponent name="4.3 Checkbox" componentsNames={['<Checkbox/>']}>
      <Checkbox />
    </SingleComponent>
    <SingleComponent name="4.4 Radio" componentsNames={['<RadioGroup/>']}>
      <RadioGroup>
        <RadioGroup.Radio>a</RadioGroup.Radio>
        <RadioGroup.Radio>b</RadioGroup.Radio>
        <RadioGroup.Radio>c</RadioGroup.Radio>
      </RadioGroup>
    </SingleComponent>
    <SingleComponent name="4.5 Toggle" componentsNames={['<ToggleSwitch/>']}>
      <ToggleSwitch />
    </SingleComponent>
    <SingleComponent
      name="4.6 Segmented Toggle"
      componentsNames={['<SegmentedToggle/>']}
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
    <SingleComponent
      name="4.7 Thumbnail Select"
      componentsNames={['<Thumbnail/>']}
    >
      <Thumbnail title="Thumbnail" selected />
    </SingleComponent>
    <SingleComponent name="4.8 Slider" componentsNames={['<Slider/>']}>
      <Slider />
    </SingleComponent>
    <SingleComponent name="4.9 Check Toggle">
      <NotDeveloped />
    </SingleComponent>
  </GeneralStructure>
);

export default SelectionFamily;
