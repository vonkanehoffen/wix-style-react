import * as React from 'react';
import CloseButton, {CloseButtonSize, CloseButtonSkin} from '../../src/CloseButton';
import { closeButtonTestkitFactory } from '../../testkit';
import { closeButtonTestkitFactory as CloseButtonEnzymeTestkitFactory } from '../../testkit/enzyme';
import { mount } from 'enzyme';

function testkits() {
  const vanilla = closeButtonTestkitFactory({
    dataHook: 'hi',
    wrapper: document.createElement('div'),
  });

  vanilla.exists();
  vanilla.click();

  const enzyme = CloseButtonEnzymeTestkitFactory({
    dataHook: 'shbem',
    wrapper: mount(<div />),
  });
}

function CloseButtonWithMandatoryProps() {
  return <CloseButton />;
}

function CloseButtonWithAllProps() {
  return (
    <CloseButton
      as="as-string"
      className="class-name-string"
      children={<div />}
      skin="lightFilled"
      size="medium"
      onClick={() => {}}
      disabled={false}
      dataHook="data-hook-string"
    />
  );
}
