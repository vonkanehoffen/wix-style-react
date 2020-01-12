import React from 'react';
import Box from '../../Box';
import Button from '../../Button';
import IconButton from '../../IconButton';
import Print from 'wix-ui-icons-common/Print';
import More from 'wix-ui-icons-common/More';
import ascendInvoice from '../../../test/assets/ascend-invoice.jpg';
import ModalPreviewLayout from '..';
import Modal from '../../Modal';
import { modalPreviewLayoutPrivateDriverFactory } from './ModalPreviewLayout.private.uni.driver';
import { uniTestkitFactoryCreator } from 'wix-ui-test-utils/vanilla';
import { snap, visualize, story } from 'storybook-snapper';

const dataHook = 'storybook-modal-preview-layout';

const modalPreviewLayoutUniTestkitFactory = uniTestkitFactoryCreator(
  modalPreviewLayoutPrivateDriverFactory,
);

const createDriver = () =>
  modalPreviewLayoutUniTestkitFactory({
    wrapper: document.body,
    dataHook,
  });

const commonProps = {
  title: 'Basic Website Design',
  onClose: () => null,
  actions: (
    <Box align="space-between" width={'276px'}>
      <Button prefixIcon={<Print />} skin="dark">
        Print
      </Button>
      <Button priority="secondary" skin="light">
        Send
      </Button>
      <IconButton priority="secondary" size="small" skin="light">
        <More />
      </IconButton>
    </Box>
  ),
};

const multipleChildren = ['first', 'second', 'third'].map(ordinalNum => (
  <Box
    width="90vw"
    height="95vh"
    align="center"
    verticalAlign="middle"
    backgroundColor="D80"
  >
    {`${ordinalNum} content page`}
  </Box>
));

const tests = [
  {
    describe: 'sanity',
    its: [
      {
        it: 'scrollable',
        props: {
          children: (
            <Box>
              <img src={ascendInvoice} />
            </Box>
          ),
        },
      },
    ],
  },
  {
    describe: 'Navigation Buttons',
    its: [
      {
        it: 'Right Arrow button on initial render',
        props: { children: multipleChildren },
      },
      {
        it: 'Right & Left Arrow buttons of middle child node',
        props: { children: multipleChildren },
        componentDidMount: async () => {
          const driver = createDriver();
          await driver.clickRightNavigationButton();
        },
      },
      {
        it: 'Left Arrow button of last child node',
        props: { children: multipleChildren },
        componentDidMount: async () => {
          const driver = createDriver();
          await driver.clickRightNavigationButton();
          await driver.clickRightNavigationButton();
        },
      },
    ],
  },
  {
    describe: 'Tooltip',
    its: [
      {
        it: 'right navigation button',
        props: { children: multipleChildren },
        componentDidMount: async () => {
          const driver = createDriver();
          await driver.hoverRightNavigationButton();
        },
      },
      {
        it: 'left navigation button',
        props: { children: multipleChildren },
        componentDidMount: async () => {
          const driver = createDriver();
          await driver.clickRightNavigationButton();
          await driver.clickRightNavigationButton();
          await driver.hoverLeftNavigationButton();
        },
      },
      {
        it: 'close button',
        props: { children: multipleChildren },
        componentDidMount: async () => {
          const driver = createDriver();
          await driver.hoverCloseButton();
        },
      },
    ],
  },
];

const InteractiveModalPreviewLayout = ({
  componentDidMount,
  onDone,
  ...props
}) => {
  const afterModalOpenCallback = () => {
    componentDidMount && componentDidMount();
    /* waiting to tooltip animation to finish executing */
    setTimeout(onDone, 500);
  };

  return (
    <Modal onAfterOpen={afterModalOpenCallback} isOpen>
      <ModalPreviewLayout {...commonProps} {...props} />
    </Modal>
  );
};

visualize('ModalPreviewLayout', () => {
  tests.forEach(({ describe, its }) => {
    story(describe, () => {
      its.forEach(({ it, props, componentDidMount }) => {
        snap(it, done => (
          <InteractiveModalPreviewLayout
            {...commonProps}
            {...props}
            dataHook={dataHook}
            componentDidMount={componentDidMount}
            onDone={done}
          />
        ));
      });
    });
  });
});
