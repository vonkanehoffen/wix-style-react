import React from 'react';
import {
  tab,
  api,
  title,
  code as baseCode,
  importExample,
  playground,
  testkit,
  description,
} from 'wix-storybook-utils/Sections';

import Carousel from '..';
import { storySettings } from './storySettings';
import testkitReadme from './README.TESTKIT.md';
import * as examples from './examples';
import { baseScope } from '../../../stories/utils/LiveCodeExample';

const code = config =>
  baseCode({
    components: baseScope,
    ...config,
  });

const imagesExamples = [
  {
    value: [
      {
        src:
          'https://a-static.besthdwallpaper.com/garfield-wallpaper-2800x2100-815_28.jpg',
      },
      {
        src:
          'https://m.media-amazon.com/images/M/MV5BZGMwOGIwZjUtOWQ1OS00YWRjLWJmZGMtN2Y1OWQ3ZDYwYTM3XkEyXkFqcGdeQXVyNzU1NzE3NTg@._V1_.jpg',
      },
      {
        src:
          'https://a-static.besthdwallpaper.com/cartoons-garfield-wallpaper-1440x1080-6773_22.jpg',
      },
    ],
    label: 'Three images',
  },
];
export default {
  category: storySettings.category,
  storyName: storySettings.storyName,

  component: Carousel,
  componentPath: '..',

  componentProps: () => ({
    images: imagesExamples[0].value,
    infinite: true,
    autoplay: false,
    dataHook: storySettings.dataHook,
  }),

  exampleProps: {
    images: imagesExamples,
  },

  sections: [
    tab({
      title: 'Usage',
      sections: [
        importExample({
          source: "import Carousel from 'wix-style-react/Carousel';",
        }),

        title('Examples'),

        ...[{ title: 'Autoplay', source: examples.autoplay }].map(code),
      ],
    }),

    ...[
      {
        title: 'API',
        sections: [api()],
      },

      {
        title: 'TestKit',
        sections: [testkit(), description(testkitReadme)],
      },

      {
        title: 'Playground',
        sections: [playground()],
      },
    ].map(tab),
  ],
};
