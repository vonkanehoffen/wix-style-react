import * as React from 'react';
import RadioGroup from '../../src/RadioGroup';
import { radioGroupTestkitFactory } from '../../testkit';
import { radioGroupTestkitFactory as RadioGroupEnzymeTestkitFactory } from '../../testkit/enzyme';
import { mount } from 'enzyme';

function testkits() {
  const vanilla = radioGroupTestkitFactory({
    dataHook: 'hi',
    wrapper: document.createElement('div'),
  });

  vanilla.exists();
  vanilla.click();

  const enzyme = RadioGroupEnzymeTestkitFactory({
    dataHook: 'shbem',
    wrapper: mount(<div />),
  });
}

function RadioGroupWithMandatoryProps() {
  return <RadioGroup />;
}

function RadioGroupWithAllProps() {
  return (
    <RadioGroup
      dataHook="data-hook-string"
      styles="styles-string"
      onChange={() => {}}
      value={1}
      disabledRadios={[1, 2]}
      vAlign="center"
      disabled={false}
      type="default"
      display="vertical"
      selectionArea="none"
      children="any"
      spacing="1q2w3e"
      lineHeight="qwer"
    />
  );
}
