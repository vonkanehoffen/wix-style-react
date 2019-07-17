import React from 'react';
import {
  header,
  tabs,
  tab,
  description,
  importExample,
  title,
  columns,
  divider,
  code as baseCode,
  playground,
  api,
  testkit,
} from 'wix-storybook-utils/Sections';

import { storySettings } from '../test/storySettings';
import allComponents from '../../../stories/utils/allComponents';

import SidebarSectionDivider from '..';

const code = config => baseCode({ components: allComponents, ...config });

export default {
  category: storySettings.category,
  storyName: 'SidebarSectionDivider',

  component: SidebarSectionDivider,
  componentPath: '..',

  sections: [
    header({
      issueUrl: 'https://github.com/wix/wix-style-react/issues/new',
      sourceUrl:
        'https://github.com/wix/wix-style-react/tree/master/src/SidebarSectionDivider/',
    }),

    tabs([
      tab({
        title: 'Description',
        sections: [
          columns([
            description({
              title: 'Description',
              text: 'An item for the section within the sidebar.',
            }),
          ]),

          columns([
            importExample(
              "import SidebarSectionItem from 'wix-style-react/SidebarSectionItem';",
            ),
          ]),

          divider(),

          title('Examples'),

          columns([
            description({
              title: 'Plain Example',
              text: 'A simple example for an inner sidebar divider',
            }),

            code({
              compact: true,
              source: `<SidebarSectionDivider />`,
            }),
          ]),

          columns([
            description({
              title: 'Full-Width Divider',
              text: 'An example that demonstrates a divider with full width',
            }),

            code({
              compact: true,
              source: `<SidebarSectionDivider fullWidth />`,
            }),
          ]),
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
