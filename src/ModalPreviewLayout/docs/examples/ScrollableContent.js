import React, { Component } from 'react';
import ModalPreviewLayout from '../..';
import Button from 'wix-style-react/Button';
import Box from 'wix-style-react/Box';
import Text from 'wix-style-react/Text';
import IconButton from 'wix-style-react/IconButton';
import Print from 'wix-style-react/new-icons/Print';
import More from 'wix-style-react/new-icons/More';

import ascendInvoice from '../../../../test/assets/ascend-invoice.jpg';

export class ScrollableContentExample extends Component {
  render() {
    const { onClose } = this.props;

    return (
      <ModalPreviewLayout
        onClose={onClose}
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
    );
  }
}
