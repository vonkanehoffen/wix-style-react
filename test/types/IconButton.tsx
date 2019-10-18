import * as React from 'react';
import IconButton from '../../src/IconButton';
import { iconButtonTestkitFactory } from '../../testkit';
import { iconButtonTestkitFactory as IconButtonEnzymeTestkitFactory } from '../../testkit/enzyme';
import { mount } from 'enzyme';

function testkits() {
  const vanilla = iconButtonTestkitFactory({
    dataHook: 'hi',
    wrapper: document.createElement('div'),
  });

  vanilla.exists();
  vanilla.click();

  const enzyme = IconButtonEnzymeTestkitFactory({
    dataHook: 'shbem',
    wrapper: mount(<div />),
  });
}

function IconButtonWithMandatoryProps() {
  return <IconButton />;
}

function IconButtonWithAllProps() {
  return (
    <IconButton
      as="something"
      className="some-random-classname"
      children={<div />}
      skin="inverted"
      priority="secondary"
      size="small"
      onClick={() => {}}
      disabled={false}
      dataHook="hook"
    />
  );
}
