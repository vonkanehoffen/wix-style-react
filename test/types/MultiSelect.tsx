import * as React from "react";
import MultiSelect from "../../src/MultiSelect";
import { multiSelectTestkitFactory } from "../../dist/testkit";
import { multiSelectTestkitFactory as multiSelectEnzymeTestkitFactory } from "../../dist/testkit/enzyme";
import { multiSelectTestkitFactory as multiSelectPuppeteerTestkitFactory } from "../../dist/testkit/puppeteer";
import * as enzyme from "enzyme";
import * as puppeteer from "puppeteer";

function MultiSelectWithMandatoryProps() {
  return <MultiSelect />;
}

function MultiSelectWithAllProps() {
  return (
    <MultiSelect
      onManuallyInput={_e => {}}
      predicate={_option => true}
      clearOnBlur
      tags={[
        {
          className: "class",
          disabled: true,
          id: "",
          label: "label",
          maxWidth: 10,
          onClick: _e => {},
          onRemove: _e => {},
          removable: true,
          size: "small",
          theme: "dark",
          thumb: <span />
        }
      ]}
      maxNumRows={1}
      delimiters={[","]}
      mode="select"
      onReorder={_e => {}}
      customInput={<input />}
      customSuffix={<div />}
      ariaControls="label"
      ariaDescribedby="label"
      ariaLabel="text"
      autoFocus
      autoSelect
      autocomplete="off"
      className="cls"
      clearButton
      onRemoveTag={_e => {}}
      dataHook="hook"
      defaultValue="value"
      disableEditing
      disabled
      error
      errorMessage="msg"
      forceFocus
      forceHover
      help
      helpMessage="msg"
      hideStatusSuffix
      id="1"
      max={10}
      maxLength={100}
      menuArrow
      min={5}
      name="name"
      noLeftBorderRadius
      noRightBorderRadius
      onBlur={_ev => {}}
      onChange={_ev => {}}
      onClear={_ev => {}}
      onCompositionChange={_isComposing => {}}
      onEnterPressed={_ev => {}}
      onEscapePressed={_ev => {}}
      onFocus={_ev => {}}
      onInputClicked={_ev => {}}
      onKeyDown={_ev => {}}
      onKeyUp={_ev => {}}
      onPaste={_ev => {}}
      onTooltipShow={() => {}}
      placeholder="placeholder"
      prefix={<div />}
      readOnly
      ref={React.createRef()}
      required
      roundInput
      rtl
      size="large"
      status="error"
      statusMessage="msg"
      step={1}
      suffix={<div />}
      tabIndex={0}
      textOverflow="clip"
      theme="amaterial"
      title="title"
      tooltipPlacement="bottom"
      type="text"
      updateControlledOnClear
      value="value"
      withSelection
      closeOnSelect
      dropDirectionUp
      fixedFooter={<div />}
      fixedHeader={<div />}
      focusOnSelectedOption
      hasMore
      inContainer
      infiniteScroll
      itemHeight="big"
      loadMore={_page => {}}
      markedOption="1"
      maxHeightPixels={200}
      minWidthPixels={100}
      onClickOutside={_ev => {}}
      onClose={() => {}}
      onMouseEnter={_ev => {}}
      onMouseLeave={_ev => {}}
      onOptionMarked={_opt => {}}
      onSelect={_opt => {}}
      selectedHighlight
      selectedId="1"
      styles="font: 12px"
      visible
      withArrow
      overflow="scroll"
      options={[
        {
          value: "a",
          id: 0,
          disabled: true,
          linkTo: "google.com",
          title: true,
          overrideStyle: true
        },
        {
          value: <div />,
          id: 1,
          disabled: true,
          linkTo: "google.com",
          title: true,
          overrideStyle: true
        },
        { value: "-", id: "2" },
        {
          value: ({ selected, disabled, hovered }) => <div />,
          id: 3,
          disabled: true,
          linkTo: "google.com",
          title: true,
          overrideStyle: true
        }
      ]}
    />
  );
}

function ShouldHaveRefMethods() {
  const instance = new MultiSelect({});
  instance.focus({ preventScroll: true });
  instance.blur();
  instance.select();
}

async function testkits() {
  const testkit = multiSelectTestkitFactory({
    dataHook: "hook",
    wrapper: document.createElement("div")
  });

  const enzymeTestkit = multiSelectEnzymeTestkitFactory({
    dataHook: "hook",
    wrapper: enzyme.mount(<div />)
  });

  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const puppeteerTestkit = await multiSelectPuppeteerTestkitFactory({
    dataHook: "hook",
    page
  });
}
