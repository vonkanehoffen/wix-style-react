import React, { Component } from 'react';
import Button from 'wix-style-react/Button';
import Box from 'wix-style-react/Box';
import Modal from 'wix-style-react/Modal';
import Text from 'wix-style-react/Text';
import IconButton from 'wix-style-react/IconButton';
import Print from 'wix-style-react/new-icons/Print';
import More from 'wix-style-react/new-icons/More';
import ModalPreviewLayout from '../..';
import ascendInvoice from '../../../../test/assets/ascend-invoice.jpg';

export class ScrollableContentPreviewModal extends Component {
  constructor() {
    super();
    this.state = {
      isOpenFullScreenModal: false,
    };
  }

  render() {
    const setState = state => () => this.setState(state);
    const closePreviewModal = setState({ isOpenFullScreenModal: false });
    const openPreviewModal = setState({ isOpenFullScreenModal: true });
    return (
      <div>
        <Button dataHook="open-preview-modal-button" onClick={openPreviewModal}>
          Open Preview Modal
        </Button>
        <Modal
          isOpen={this.state.isOpenFullScreenModal}
          onRequestClose={closePreviewModal}
          contentLabel="Preview modal example"
          scrollable={false}
          scrollableContent={false}
        >
          <ModalPreviewLayout
            dataHook="preview-modal"
            onClose={closePreviewModal}
            shouldCloseOnOverlayClick
            title={
              <Text light ellipsis>
                Basic Website Design
              </Text>
            }
            actions={
              <Box align="space-between" width={276}>
                <Button prefixIcon={<Print />} skin="dark">
                  Print
                </Button>
                <Button priority="secondary" skin="light">
                  Send
                </Button>
                <IconButton skin="light">
                  <More />
                </IconButton>
              </Box>
            }
          >
            <Box>
              <img height="1167" width="870" src={ascendInvoice} />
            </Box>
          </ModalPreviewLayout>
        </Modal>
      </div>
    );
  }
}
