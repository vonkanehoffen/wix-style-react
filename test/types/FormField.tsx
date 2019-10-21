import * as React from 'react';
import FormField from '../../src/FormField';
import { formFieldTestkitFactory } from '../../testkit';
import { formFieldTestkitFactory as FormFieldEnzymeTestkitFactory } from '../../testkit/enzyme';
import { mount } from 'enzyme';

function testkits() {
  const vanilla = formFieldTestkitFactory({
    dataHook: 'hi',
    wrapper: document.createElement('div'),
  });

  vanilla.exists();
  vanilla.click();

  const enzyme = FormFieldEnzymeTestkitFactory({
    dataHook: 'shbem',
    wrapper: mount(<div />),
  });
}

function FormFieldWithMandatoryProps() {
  return <FormField />;
}

function FormFieldWithAllProps() {
  return (
    <FormField
      children={<input />}
      stretchContent={true}
      label={<span />}
      labelSize="small"
      labelPlacement="right"
      required={true}
      infoContent={<span />}
      infoTooltipProps={{
        upgrade: true,
        disabled: false,
        dataHook: "some-data-hook1",
        size: "small",
        appendTo: "scrollParent",
        content: "hiiiiiiiii",
        maxWidth: 900,
        moveBy: { x: 999, y: 1234 },
        onHide: () => {},
        onShow: () => {},
        placement: "bottom-start",
        textAlign: "start",
        zIndex: 1999,
      }}
      id="some-id"
      dataHook="some-data-hook"
    />
  );
}
