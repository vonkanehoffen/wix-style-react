import * as React from 'react';
import Input, {InputSize, InputStatus, InputTheme} from '../../src/Input';
import { inputTestkitFactory } from '../../testkit';
import { inputTestkitFactory as inputEnzymeTestkitFactory } from '../../testkit/enzyme';
import { mount } from 'enzyme';

function testkits() {
  const vanilla = inputTestkitFactory({
    dataHook: 'hi',
    wrapper: document.createElement('div'),
  });

  vanilla.exists();
  vanilla.click();

  const enzyme = inputEnzymeTestkitFactory({
    dataHook: 'shbem',
    wrapper: mount(<div />),
  });
}

function InputWithMandatoryProps() {
  return <Input />;
}

function InputWithAffix() {
  return (
    <Input
      prefix={<Input.Affix>@</Input.Affix>}
      suffix={<Input.Affix>$</Input.Affix>}
      status="error"
    />
  );
}

function IconAffix() {
  return (
    <Input
      size="large"
      prefix={
        <Input.IconAffix>A
        </Input.IconAffix>
      }
      suffix={
        <Input.IconAffix>L
        </Input.IconAffix>
      }
      status="error"
    />
  );
}

function InputWithAllProps() {
  return (
    <Input
      ariaControls="qwerty"
      ariaDescribedby="qwerty"
      ariaLabel="qwerty"
      autoFocus
      autoSelect={false}
      autocomplete="asdf"
      dataHook="asdf"
      defaultValue="asdf"
      disabled={false}
      status="warning"
      statusMessage={<span>Hello</span>}
      hideStatusSuffix={false}
      error={false}
      errorMessage={<span>Hello</span>}
      forceFocus={false}
      forceHover={false}
      help={false}
      helpMessage={<span>Hello</span>}
      id="asdf"
      maxLength={10}
      menuArrow={false}
      clearButton={false}
      className="asdf"
      name="asdf"
      noLeftBorderRadius={false}
      noRightBorderRadius={false}
      onBlur={() => console.log('hello')}
      onChange={() => console.log('hello')}
      onClear={() => console.log('hello')}
      onCompositionChange={() => console.log('hello')}
      onEnterPressed={() => console.log('hello')}
      onEscapePressed={() => console.log('hello')}
      onFocus={() => console.log('hello')}
      onInputClicked={() => console.log('hello')}
      onKeyDown={() => console.log('hello')}
      onKeyUp={() => console.log('hello')}
      onPaste={() => console.log('hello')}
      onTooltipShow={() => console.log('hello')}
      placeholder="asdf"
      prefix={<span>Hello</span>}
      readOnly={false}
      disableEditing={false}
      roundInput={false}
      rtl={false}
      size="medium"
      suffix={<span>Hello</span>}
      tabIndex={50}
      textOverflow="asdf"
      theme="paneltitle"
      title="asdf"
      tooltipPlacement="asdf"
      type="asdf"
      value="value"
      withSelection={false}
      required={false}
      min={10}
      max={20}
      step={1}
      customInput={() => console.log('hello')}
      updateControlledOnClear={false}
    />
  );
}
