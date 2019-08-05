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
} from 'wix-storybook-utils/Sections';

import LinkTo from '@storybook/addon-links/react';

import { storySettings } from '../test/storySettings';

import ModalPreviewLayout from '..';
import { ScrollableContentPreviewModal } from './examples/ScrollableContent';

export default {
  category: storySettings.category,
  storyName: 'ModalPreviewLayout',

  component: ModalPreviewLayout,
  componentPath: '..',

  sections: [
    header({
      issueUrl: 'https://github.com/wix/wix-style-react/issues/new',
      sourceUrl:
        'https://github.com/wix/wix-style-react/tree/master/src/ModalPreviewLayout/',
      component: <ScrollableContentPreviewModal />,
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
      ].map(tab),
    ]),
  ],
};
