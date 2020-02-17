import * as React from 'react';
import ToggleSwitch from '../../src/ToggleSwitch';
import {toggleSwitchTestkitFactory} from '../../dist/testkit';
import {toggleSwitchTestkitFactory as toggleSwitchEnzymeTestkitFactory} from '../../dist/testkit/enzyme';
import * as enzyme from 'enzyme';

function ToggleSwitchWithMandatoryProps() {
  return <ToggleSwitch/>;
}

function ToggleSwitchWithAllProps() {
  return (
    <ToggleSwitch
      dataHook="hook"
      skin="standard"
      size="small"
      checked
      disabled
      id='toggle-id'
      onChange={() => null}
      tabIndex={1}
    />
  );
}


async function testkits() {
  const testkit = toggleSwitchTestkitFactory({
    dataHook: 'hook',
    wrapper: document.createElement('div')
  });

  const enzymeTestkit = toggleSwitchEnzymeTestkitFactory({
    dataHook: 'hook',
    wrapper: enzyme.mount(<div />)
  });
}
