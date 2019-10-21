import * as React from 'react';
import InputArea from '../../src/InputArea';
import { inputAreaTestkitFactory } from '../../testkit';
import { inputAreaTestkitFactory as InputAreaEnzymeTestkitFactory } from '../../testkit/enzyme';
import { mount } from 'enzyme';

function testkits() {
  const vanilla = inputAreaTestkitFactory({
    dataHook: 'hi',
    wrapper: document.createElement('div'),
  });

  vanilla.exists();
  vanilla.click();

  const enzyme = InputAreaEnzymeTestkitFactory({
    dataHook: 'shbem',
    wrapper: mount(<div />),
  });
}

function InputAreaWithMandatoryProps() {
  return <InputArea />;
}

function InputAreaWithAllProps() {
  return (
    <InputArea
      ariaControls="test-string"
      ariaDescribedby="test-string"
      ariaLabel="test-string"
      autoFocus={true}
      autoSelect={true}
      dataHook="test-string"
      size="small"
      defaultValue="test-string"
      disabled={true}
      error={true}
      errorMessage="test-string"
      forceFocus={true}
      forceHover={true}
      hasCounter={true}
      id="test-string"
      name="test-string"
      maxHeight="test-string"
      maxLength={400}
      menuArrow={true}
      minHeight="test-string"
      onBlur={() => {}}
      onChange={() => {}}
      onClear={() => {}}
      onEnterPressed={() => {}}
      onEscapePressed={() => {}}
      onFocus={() => {}}
      onKeyDown={() => {}}
      onKeyUp={() => {}}
      onTooltipShow={() => {}}
      placeholder="test-string"
      readOnly={true}
      resizable={true}
      rows={400}
      autoGrow={true}
      minRowsAutoGrow={400}
      style="paneltitle"
      tabIndex={400}
      theme="amaterial"
      tooltipPlacement="test-string"
      value="test-string"
    />
  );
}
