import * as React from 'react';
import InputWithOptions from '../../src/InputWithOptions';
import { inputWithOptionsTestkitFactory } from '../../testkit';
import { inputWithOptionsTestkitFactory as InputWithOptionsEnzymeTestkitFactory } from '../../testkit/enzyme';
import { mount } from 'enzyme';
import {InputTheme} from "../../src/Input";
import {PopoverPlacement} from "../../src/Popover";

function testkits() {
  const vanilla = inputWithOptionsTestkitFactory({
    dataHook: 'hi',
    wrapper: document.createElement('div'),
  });

  vanilla.exists();
  vanilla.click();

  const enzyme = InputWithOptionsEnzymeTestkitFactory({
    dataHook: 'shbem',
    wrapper: mount(<div />),
  });
}

function InputWithOptionsWithMandatoryProps() {
  return <InputWithOptions />;
}

function InputWithOptionsWithAllProps() {
  return (
    <InputWithOptions
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
      onBlur={() => {}}
      onChange={() => {}}
      onClear={() => {}}
      onCompositionChange={() => {}}
      onEnterPressed={() => {}}
      onEscapePressed={() => {}}
      onFocus={() => {}}
      onInputClicked={() => {}}
      onKeyDown={() => {}}
      onKeyUp={() => {}}
      onPaste={() => {}}
      onTooltipShow={() => {}}
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
      customInput={() => {}}
      updateControlledOnClear={false}
      dropDirectionUp={false}
      focusOnSelectedOption={false}
      onClose={() => {}}
      onSelect={() => {}}
      onOptionMarked={() => {}}
      overflow="qwert"
      visible={false}
      options={[
        {
          id: 0,
          value: <span style={{color: 'red'}}>Option 1</span>
        },
        {
          id: 1,
          value: 'one',
          disabled: false,
          title: true,
          overrideStyle: false,
          linkTo: "qwert"
        },
        {
          id: 2,
          value: 'two',
          disabled: false,
          title: true,
          overrideStyle: false,
          linkTo: "#"
        },
        {
          id: 3,
          value: 'three',
          disabled: false,
          title: true,
          overrideStyle: false,
          linkTo: "#"
        },
        {id: 'first title', value: 'title', title: true},
        {id: 'title', value: 'this is a title', title: true},
        {id: 'disabled', value: 'Disabled', disabled: true},
        {
          id: 'footer',
          overrideStyle: true,
          value: (
            <div
              style={{
                height: '240px',
                padding: '20px',
                fontSize: '20px',
                backgroundColor: '#F0F',
              }}
            >
              Click <a href="http://www.wix.com">here</a> to go to wix.
            </div>
          ),
        },
      ]}
      selectedId={2}
      onClickOutside={() => {}}
      fixedHeader={<span>Hello</span>}
      fixedFooter={<span>Hello</span>}
      maxHeightPixels={400}
      minWidthPixels={400}
      withArrow={false}
      closeOnSelect={false}
      onMouseEnter={() => {}}
      onMouseLeave={() => {}}
      itemHeight="small"
      selectedHighlight={false}
      inContainer={false}
      infiniteScroll={false}
      loadMore={() => {}}
      hasMore={false}
      markedOption={false}
      inputElement={<div />}
      onManuallyInput={() => {}}
      valueParser={() => {}}
      dropdownWidth="qwerty"
      dropdownOffsetLeft="qwerty"
      showOptionsIfEmptyInput={true}
      highlight={true}
      native={true}
      popoverProps={{
        appendTo: 'window',
        maxWidth: 100,
        minWidth: 100,
        flip: true,
        fixed: true,
        placement: 'left',
        dynamicWidth: true,
      }}
    />
  );
}
