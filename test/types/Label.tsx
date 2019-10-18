import * as React from 'react';
import Label from '../../src/Label';
import { labelTestkitFactory } from '../../testkit';
import { labelTestkitFactory as LabelEnzymeTestkitFactory } from '../../testkit/enzyme';
import { mount } from 'enzyme';

function testkits() {
  const vanilla = labelTestkitFactory({
    dataHook: 'hi',
    wrapper: document.createElement('div'),
  });

  vanilla.exists();
  vanilla.click();

  const enzyme = LabelEnzymeTestkitFactory({
    dataHook: 'shbem',
    wrapper: mount(<div />),
  });
}

function LabelWithMandatoryProps() {
  return <Label />;
}

function LabelWithAllProps() {
  return (
    <Label
      dataHook="data-hook-string"
      dataClass="data-class-string"
      size="medium"
      className="classname-string"
      children={<div />}
      for="any-id"
      id="any-id"
      ellipsis={true}
      disabled={false}
    />
  );
}
