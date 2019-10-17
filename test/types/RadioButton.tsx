import * as React from 'react';
import RadioButton from '../../src/RadioGroup/RadioButton';
import { radioButtonTestkitFactory } from '../../testkit';
import { radioButtonTestkitFactory as RadioButtonEnzymeTestkitFactory } from '../../testkit/enzyme';
import { mount } from 'enzyme';

function testkits() {
  const vanilla = radioButtonTestkitFactory({
    dataHook: 'hi',
    wrapper: document.createElement('div'),
  });

  vanilla.exists();
  vanilla.click();

  const enzyme = RadioButtonEnzymeTestkitFactory({
    dataHook: 'shbem',
    wrapper: mount(<div />),
  });
}

function RadioButtonWithMandatoryProps() {
  return <RadioButton />;
}

function RadioButtonWithAllProps() {
  return (
    <RadioButton
      dataHook="data-hook-string"
      styles="styles-string"
      value={1}
      vAlign="center"
      name="name"
      onChange={() => {}}
      checked={true}
      disabled={true}
      children="any"
      style={{a: 1}}
      type="default"
      lineHeight="qwer"
      selectionArea="none"
      content={<span />}
    />
  );
}
