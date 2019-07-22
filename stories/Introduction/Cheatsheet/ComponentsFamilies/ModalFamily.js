import React, { PureComponent } from 'react';
import {
  FamilyStructure,
  SingleComponentSideBySide,
  NotDeveloped,
} from '../sharedComponents';

import {
  MessageBoxFunctionalLayout,
  MessageBoxMarketerialLayout,
} from 'wix-style-react/MessageBox';

import Button from 'wix-style-react/Button';
import Modal from 'wix-style-react/Modal';
import Box from 'wix-style-react/Box';

const AlretExamples = () => (
  <SingleComponentSideBySide
    name="9.1 Alert"
    componentsNames={['<MessageBoxFunctionalLayout/>']}
  >
    <MessageBoxFunctionalLayout
      title="Leaving Already?"
      confirmText="Leave this page"
      cancelText="Cancel"
      theme="blue"
    >
      This is a generic message. No harm done, but really needed to interrupt
      you.
    </MessageBoxFunctionalLayout>
    <Box marginBottom="30px" />
    <MessageBoxFunctionalLayout
      title="System Crashed!"
      confirmText="Action"
      theme="red"
      cancelText="Secondary"
      image={
        <Box
          height="120px"
          width="120px"
          backgroundColor="D60"
          borderRadius="50%"
        />
      }
    >
      Something terribly bad happened, that cannot be undone.
    </MessageBoxFunctionalLayout>
  </SingleComponentSideBySide>
);

class FullScreenModal extends PureComponent {
  state = {
    isOpenFullScreenModal: false,
  };

  render() {
    const setState = state => () => this.setState(state);
    const closeFullScreenModal = setState({ isOpenFullScreenModal: false });
    const openFullScreenModal = setState({ isOpenFullScreenModal: true });

    const { isOpenFullScreenModal } = this.state;
    return (
      <Box>
        <Button onClick={openFullScreenModal}>Open Full Screen Modal</Button>
        <Modal
          isOpen={isOpenFullScreenModal}
          onRequestClose={closeFullScreenModal}
          contentLabel="Full screen modal example"
        >
          <MessageBoxFunctionalLayout
            cancelText="Cancel"
            confirmText="OK"
            fullscreen
            onCancel={closeFullScreenModal}
            onOk={closeFullScreenModal}
            theme="blue"
            title="Full screen modal"
          >
            I&apos;m full screen modal!
          </MessageBoxFunctionalLayout>
        </Modal>
      </Box>
    );
  }
}

const CustomModalExample = () => (
  <SingleComponentSideBySide
    name="9.2 Content"
    componentsNames={['<MessageBoxFunctionalLayout/>', '<Modal/>']}
  >
    <FullScreenModal />
  </SingleComponentSideBySide>
);

const MarketingExample = () => (
  <SingleComponentSideBySide
    name="9.3 Marketing"
    componentsNames={['<MessageBoxMarketerialLayout/>']}
  >
    <MessageBoxMarketerialLayout
      title="Nice! Your site is set up"
      content="Next, connect your business email, chat and more to look professional. Keep Going"
      confirmText="Show Me"
      imageUrl="https://static.wixstatic.com/media/25125b_fde50458cc6746c79267182c4b4592e0~mv2.gif"
      theme="white"
      primaryButtonLabel="Button"
      primaryButtonTheme="blue"
    />
  </SingleComponentSideBySide>
);

const PreviewExample = () => (
  <SingleComponentSideBySide name="9.4 Preview">
    <NotDeveloped />
  </SingleComponentSideBySide>
);

const ModalFamily = () => (
  <FamilyStructure title="9. Modal">
    <AlretExamples />
    <CustomModalExample />
    <MarketingExample />
    <PreviewExample />
  </FamilyStructure>
);

export default ModalFamily;
