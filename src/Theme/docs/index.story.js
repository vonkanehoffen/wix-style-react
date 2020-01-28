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
import { themedExample, customExample } from './example';

import Theme from '..';
import GallerySidepanel from '../GallerySidepanel';
import calc_theme from '../calc_theme';

const code = config =>
  baseCode({
    components: { ...allComponents, GallerySidepanel, calc_theme },
    ...config,
  });

export default {
  category: storySettings.category,
  storyName: 'Theme',

  component: Theme,
  componentPath: '..',

  componentProps: {
    buttonText: 'Hello World!',
  },

  exampleProps: {
    // Put here presets of props, for more info:
    // https://github.com/wix/wix-ui/blob/master/packages/wix-storybook-utils/docs/usage.md#using-list
  },

  sections: [
    header({
      sourceUrl:
        'https://github.com/wix/wix-style-react/tree/master/src/Theme/',
      component: <Theme buttonText="Click me!" />,
    }),

    tabs([
      tab({
        title: 'Description',
        sections: [
          columns([
            description({
              title: 'Description',
              text:
                'This line here should briefly describe component in just a sentence or two. It should be short and easy to read.',
            }),
          ]),

          columns([
            importExample("import Theme from 'wix-style-react/Theme';"),
          ]),

          divider(),

          title('Examples'),

          columns([
            description({
              title: 'Use a prepared theme',
            }),

            code({
              compact: true,
              source: themedExample,
            }),
          ]),

          columns([
            description({
              title: 'Create a custom theme',
            }),

            code({
              compact: true,
              source: customExample,
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
