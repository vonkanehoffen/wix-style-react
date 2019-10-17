import * as React from 'react';
import Modal from '../../src/Modal';
import { modalTestkitFactory } from '../../testkit';
import { modalTestkitFactory as ModalEnzymeTestkitFactory } from '../../testkit/enzyme';
import { mount } from 'enzyme';

function testkits() {
  const vanilla = modalTestkitFactory({
    dataHook: 'hi',
    wrapper: document.createElement('div'),
  });

  vanilla.exists();
  vanilla.click();

  const enzyme = ModalEnzymeTestkitFactory({
    dataHook: 'shbem',
    wrapper: mount(<div />),
  });
}

function ModalWithMandatoryProps() {
  return <Modal isOpen={true} />;
}

function ModalWithAllProps() {
  return (
    <Modal
      isOpen={true}
      dataHook="data-hook-string"
      styles="styles-string"
      borderRadius={400}
      contentLabel="test"
      theme="green"
      children={null}
      zIndex={400}
      shouldCloseOnOverlayClick={true}
      shouldDisplayCloseButton={true}
      onRequestClose={() => {}}
      onOk={() => {}}
      onAfterOpen={() => {}}
      horizontalPosition="center"
      verticalPosition="start"
      closeTimeoutMS={400}
      scrollable={true}
      scrollableContent={true}
      maxHeight="test"
      height="test"
      overlayPosition="absolute"
      parentSelector={() => {}}
      appElement="test"
    />
  );
}
