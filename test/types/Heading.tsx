import * as React from 'react';
import Heading, {HeadingAppearance} from '../../src/Heading';
import { headingTestkitFactory } from '../../testkit';
import { headingTestkitFactory as HeadingEnzymeTestkitFactory } from '../../testkit/enzyme';
import { mount } from 'enzyme';

function testkits() {
  const vanilla = headingTestkitFactory({
    dataHook: 'hi',
    wrapper: document.createElement('div'),
  });

  vanilla.exists();
  vanilla.click();

  const enzyme = HeadingEnzymeTestkitFactory({
    dataHook: 'shbem',
    wrapper: mount(<div />),
  });
}

function HeadingWithMandatoryProps() {
  return <Heading />;
}

function HeadingWithAllProps() {
  return (
    <Heading
      dataHook="data-hook-string"
      dataClass="class-string"
      children={<div />}
      light={false}
      ellipsis={true}
      appearance="H1"
    />
  );
}
