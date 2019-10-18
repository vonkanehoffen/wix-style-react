import * as React from 'react';
import Notification from '../../src/Notification';
import { notificationTestkitFactory } from '../../testkit';
import { notificationTestkitFactory as NotificationEnzymeTestkitFactory } from '../../testkit/enzyme';
import { mount } from 'enzyme';

function testkits() {
  const vanilla = notificationTestkitFactory({
    dataHook: 'hi',
    wrapper: document.createElement('div'),
  });

  vanilla.exists();
  vanilla.click();

  const enzyme = NotificationEnzymeTestkitFactory({
    dataHook: 'shbem',
    wrapper: mount(<div />),
  });
}

function NotificationWithMandatoryProps() {
  return <Notification />;
}

function NotificationWithAllProps() {
  return (
    <Notification
      show={true}
      theme="success"
      type="local"
      autoHideTimeout={500}
      zIndex={500}
      onClose={() => {}}
      children={<>
        <Notification.CloseButton
          as={() => {}}
          className="classname-string"
          children={<div />}
          skin="standardFilled"
          size="medium"
          onClick={() => {}}
          disabled={false}
          dataHook="data-hook-string"
        />
        <Notification.TextLabel
          children={<div />}
        />
        <Notification.ActionButton
          children={<div />}
          onClick={() => {}}
          type="type-string"
          link="#"
          target="target-string"
        />
      </>}
    />
  );
}
