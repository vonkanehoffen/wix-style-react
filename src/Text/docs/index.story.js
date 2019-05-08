import React from 'react';
import Text, { SIZES, SKINS, WEIGHTS } from '..';
import TypographyExampleRaw from '!raw-loader!./ExampleTextTypography';
import MultilineExampleRaw from '!raw-loader!./ExampleMultiline';
import EllipsisExampleRaw from '!raw-loader!./ExampleEllipsis';
import H1TagNameExampleRaw from '!raw-loader!./ExampleH1TagName';
import LinkExampleRaw from '!raw-loader!./ExampleLink';
import exampleStyles from './styles.scss';

import { storySettings } from './storySettings';
import { baseScope } from '../../../stories/utils/LiveCodeExample';

import {
  tab,
  code as baseCode,
  importExample,
  api,
  testkit,
  playground,
} from 'wix-storybook-utils/Sections';

const code = config =>
  baseCode({
    components: { ...baseScope, s: exampleStyles },
    autoRender: false,
    compact: true,
    ...config,
  });

export default {
  category: storySettings.category,
  storyName: storySettings.storyName,
  component: Text,
  componentPath: '../Text.js',

  componentProps: {
    children: 'Some text',
    light: false,
    dataHook: 'storybook-text',
    size: SIZES.medium,
    secondary: false,
    skin: SKINS.standard,
    weight: WEIGHTS.thin,
    tagName: 'span',
    ellipsis: false,
  },

  sections: [
    tab({
      title: 'Usage',
      sections: [
        importExample({
          source: "import Text from 'wix-style-react/Text';",
        }),
        code({
          title: 'Multiline',
          description: 'Break a line using \\n character',
          source: MultilineExampleRaw,
        }),
        code({
          title: 'Ellipsis',
          description:
            'When the ellipsis prop is passed and the Text component is rendered in a small container, the component will get an ellispis and a helper tooltip',
          source: EllipsisExampleRaw,
        }),
        code({
          title: 'Custom Tag Name',
          description:
            'Text component can render a custom tag name, for example h1',
          source: H1TagNameExampleRaw,
        }),
        code({
          title: 'Link Example',
          description:
            'When an anchor tag (a) is a direct child of the Text, it will get predefined styles',
          source: LinkExampleRaw,
        }),
        code({
          title: 'Typography mapping',
          description: 'Map prop names to actual definition',
          source: TypographyExampleRaw,
        }),
      ],
    }),

    ...[
      { title: 'API', sections: [api()] },
      { title: 'TestKit', sections: [testkit()] },
      { title: 'Playground', sections: [playground()] },
    ].map(tab),
  ],
};
