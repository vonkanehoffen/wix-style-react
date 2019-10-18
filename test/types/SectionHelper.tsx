import * as React from 'react';
import SectionHelper from '../../src/SectionHelper';
import { sectionHelperTestkitFactory } from '../../testkit';
import { sectionHelperTestkitFactory as SectionHelperEnzymeTestkitFactory } from '../../testkit/enzyme';
import { mount } from 'enzyme';

function testkits() {
  const vanilla = sectionHelperTestkitFactory({
    dataHook: 'hi',
    wrapper: document.createElement('div'),
  });

  vanilla.exists();
  vanilla.click();

  const enzyme = SectionHelperEnzymeTestkitFactory({
    dataHook: 'shbem',
    wrapper: mount(<div />),
  });
}

function SectionHelperWithMandatoryProps() {
  return <SectionHelper />;
}

function SectionHelperWithAllProps() {
  return (
    <SectionHelper
      dataHook="hook"
      styles="styles"
      appearance="danger"
      title={<div />}
      showCloseButton={true}
      onClose={() => {}}
      onAction={() => {}}
      actionText="text"
      children={<div />}
      fullWidth={true}
    />
  );
}
