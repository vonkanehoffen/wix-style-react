import React from 'react';
import {
  header,
  tabs,
  tab,
  description,
  importExample,
  columns,
  divider,
  api,
  testkit,
  playground,
} from 'wix-storybook-utils/Sections';
import LinkTo from '@storybook/addon-links/react';
import Box from 'wix-style-react/Box';

import ModalPreviewLayout from '..';
import { storySettings } from '../test/storySettings';
import { ModalWrapperExample } from './examples/ModalWrapper';
import { ScrollableContentExample } from './examples/ScrollableContent';

export default {
  category: storySettings.category,
  storyName: 'ModalPreviewLayout',

  component: ModalPreviewLayout,
  componentPath: '..',
  componentWrapper: ({ component }) => (
    <ModalWrapperExample>
      {({ onClose }) => React.cloneElement(component, { onClose })}
    </ModalWrapperExample>
  ),
  componentProps: {
    title: 'Basic Website Design',
    children: (
      <Box
        width="95vw"
        height="95vh"
        align="center"
        verticalAlign="middle"
        backgroundColor="D80"
      >
        This is the content!
      </Box>
    ),
    shouldCloseOnOverlayClick: true,
  },

  sections: [
    header({
      component: (
        <ModalWrapperExample>
          {({ onClose }) => <ScrollableContentExample onClose={onClose} />}
        </ModalWrapperExample>
      ),
    }),

    tabs([
      tab({
        title: 'Description',
        sections: [
          columns([
            description({
              title: 'Description',
              text: [
                'Use this component together with ',
                <LinkTo kind="Components" story="Modal">{`<Modal />`}</LinkTo>,
                ' to display content in preview mode. In the header strip you may place a title and/or a button strip with actions relevant to the displayed content.',
              ],
            }),
          ]),

          columns([
            importExample(
              "import ModalPreviewLayout from 'wix-style-react/ModalPreviewLayout';",
            ),
          ]),

          divider(),
        ],
      }),

      ...[
        { title: 'API', sections: [api()] },
        { title: 'Testkit', sections: [testkit()] },
        { title: 'Playground', sections: [playground()] },
      ].map(tab),
    ]),
  ],
};
