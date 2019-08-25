/* eslint-disable no-console */
import React, { PureComponent } from 'react';
import {
  FamilyStructure,
  SingleComponentSideBySide,
  NotDeveloped,
} from '../sharedComponents';

import { modalsSymbolsToComponents } from '../../../symbolsComponentsMapping/families/ModalsFamily';

import {
  createLinkedSymbolName,
  createLinkedComponentsNames,
} from '../sharedComponents/utils';

import {
  modalsSymbols,
  symbolsGroup,
} from '../../../symbolsComponentsMapping/symbols';

//9. Modals
import {
  MessageBoxFunctionalLayout,
  MessageBoxMarketerialLayout,
} from 'wix-style-react/MessageBox';
import Modal from 'wix-style-react/Modal';

//Assets
import Button from 'wix-style-react/Button';
import Box from 'wix-style-react/Box';
import Text from 'wix-style-react/Text';
import FormField from 'wix-style-react/FormField';
import Checkbox from 'wix-style-react/Checkbox';
import TextButton from 'wix-style-react/TextButton';
import { Layout, Cell } from 'wix-style-react/Layout';

const groupSymbol = symbolsGroup.modals;

const AlertExamples = () => {
  const symbol = modalsSymbols.alert;
  const components = modalsSymbolsToComponents[symbol];

  const singleComponentProps = {
    name: createLinkedSymbolName({ groupSymbol, symbol }),
    componentsNames: createLinkedComponentsNames(components),
  };

  const renderMessageBoxFunctionalLayout = props => {
    const {
      title,
      confirmText,
      cancelText,
      theme,
      image,
      maxHeight,
      sideActions,
      footerBottomChildren,
      children,
    } = props;

    return (
      <MessageBoxFunctionalLayout
        title={title}
        confirmText={confirmText}
        cancelText={cancelText}
        theme={theme}
        image={image}
        maxHeight={maxHeight}
        footerBottomChildren={footerBottomChildren}
        sideActions={sideActions}
      >
        {children}
      </MessageBoxFunctionalLayout>
    );
  };

  return (
    <SingleComponentSideBySide {...singleComponentProps}>
      <Layout>
        <Cell>
          {renderMessageBoxFunctionalLayout({
            title: 'More Info',
            confirmText: 'Main',
            cancelText: 'Cancel',
            theme: 'blue',
            sideActions: (
              <FormField
                label="Please don't show me this again"
                labelPlacement="right"
              >
                <Checkbox />
              </FormField>
            ),
            children:
              'This is a generic message. No harm done, but really needed to interrupt you.',
          })}
        </Cell>
        <Cell>
          {renderMessageBoxFunctionalLayout({
            title: 'System Crashed!',
            confirmText: 'Action',
            theme: 'red',
            cancelText: 'Secondary',
            image: (
              <Box
                height="120px"
                width="120px"
                backgroundColor="D60"
                borderRadius="50%"
              />
            ),
            children: 'Something terribly bad happened, that cannot be undone.',
          })}
        </Cell>
        <Cell>
          {renderMessageBoxFunctionalLayout({
            title: 'Premium modal',
            confirmText: 'Upgrade',
            cancelText: 'Cancel',
            theme: 'purple',
            children: 'I am a premium modal!',
            footerBottomChildren: (
              <div>
                <Text size="small">By upgrading, you agree to the </Text>
                <TextButton size="small">Wix Terms of Use.</TextButton>
              </div>
            ),
          })}
        </Cell>
        <Cell>
          {renderMessageBoxFunctionalLayout({
            title: 'Green modal',
            confirmText: 'Success',
            cancelText: 'Cancel',
            theme: 'green',
            maxHeight: '100px',
            children:
              'some long text some long text some long text some long text some long text\n' +
              '  some long text some long text some long text some long text some long text\n' +
              '  some long text some long text',
          })}
        </Cell>
      </Layout>
    </SingleComponentSideBySide>
  );
};

class FullScreenModal extends PureComponent {
  state = {
    isOpenFullScreenModal: false,
  };

  render() {
    const { isOpenFullScreenModal } = this.state;
    const toggleModalFullScreenDisplay = () =>
      this.setState({ isOpenFullScreenModal: !isOpenFullScreenModal });

    return (
      <Box>
        <Button onClick={toggleModalFullScreenDisplay}>
          Open Full Screen Modal
        </Button>
        <Modal
          isOpen={isOpenFullScreenModal}
          onRequestClose={toggleModalFullScreenDisplay}
          contentLabel="Full screen modal example"
        >
          <MessageBoxFunctionalLayout
            cancelText="Cancel"
            confirmText="OK"
            fullscreen
            onCancel={toggleModalFullScreenDisplay}
            onOk={toggleModalFullScreenDisplay}
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

const CustomModalExample = () => {
  const symbol = modalsSymbols.content;
  const components = modalsSymbolsToComponents[symbol];

  const singleComponentProps = {
    name: createLinkedSymbolName({ groupSymbol, symbol }),
    componentsNames: createLinkedComponentsNames(components),
  };

  return (
    <SingleComponentSideBySide {...singleComponentProps}>
      <FullScreenModal />
    </SingleComponentSideBySide>
  );
};

const MarketingExample = () => {
  const symbol = modalsSymbols.marketing;
  const components = modalsSymbolsToComponents[symbol];

  const singleComponentProps = {
    name: createLinkedSymbolName({ groupSymbol, symbol }),
    componentsNames: createLinkedComponentsNames(components),
  };

  return (
    <SingleComponentSideBySide {...singleComponentProps}>
      <MessageBoxMarketerialLayout
        onClose={() => console.log('onClose')}
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
};

const PreviewExample = () => {
  const symbol = modalsSymbols.preview;
  const components = modalsSymbolsToComponents[symbol];

  const singleComponentProps = {
    name: symbol,
    componentsNames: components,
  };

  return (
    <SingleComponentSideBySide {...singleComponentProps}>
      <NotDeveloped />
    </SingleComponentSideBySide>
  );
};

const ModalFamily = () => (
  <FamilyStructure title={groupSymbol}>
    <AlertExamples />
    <CustomModalExample />
    <MarketingExample />
    <PreviewExample />
  </FamilyStructure>
);

export default ModalFamily;
