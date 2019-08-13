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

import StatisticsWidget from '..';

import OneStatistic from '!raw-loader!./examples/OneStatistic';
import OnlyTitles from '!raw-loader!./examples/OnlyTitles';
import Subtitles from '!raw-loader!./examples/Subtitles';
import InfoIcons from '!raw-loader!./examples/InfoIcons';
import LongText from '!raw-loader!./examples/LongText';
import Trends from '!raw-loader!./examples/Trends';
import InvertedTrends from '!raw-loader!./examples/InvertedTrends';

const code = config => baseCode({ components: allComponents, ...config });

export default {
  category: storySettings.category,
  storyName: 'StatisticsWidget',

  component: StatisticsWidget,
  componentPath: '..',

  sections: [
    header({
      issueUrl: 'https://github.com/wix/wix-style-react/issues/new',
      sourceUrl:
        'https://github.com/wix/wix-style-react/tree/master/src/StatisticsWidget/',
    }),

    tabs([
      tab({
        title: 'Description',
        sections: [
          columns([
            description({
              title: 'Description',
              text:
                'StatisticsWidget displays various statistics with a short explanation. Can display up to 5 items with value, subtitle, and change in percents.',
            }),
          ]),

          columns([
            importExample(
              "import StatisticsWidget from 'wix-style-react/StatisticsWidget';",
            ),
          ]),

          divider(),

          title('Examples'),

          columns([
            description({
              title: 'One statistic',
            }),

            code({
              compact: true,
              autoRender: false,
              source: OneStatistic,
            }),
          ]),

          code({
            compact: true,
            autoRender: false,
            title: 'Only titles',
            description:
              'The title is the only required property in statistics.',
            source: OnlyTitles,
          }),

          code({
            compact: true,
            autoRender: false,
            title: 'Subtitles',
            description:
              'Should be short, contains an explanation of the current stat.',
            source: Subtitles,
          }),

          columns([
            description({
              title: 'Info icon',
              description:
                "Since subtitle is small by design, there is a possibility to clarify the meaning of each statistic by specifying 'subtitleContentInfo' property.  It this case widget will render an info icon with a text inside a tooltip.",
            }),
            code({
              compact: true,
              autoRender: false,
              source: InfoIcons,
            }),
          ]),

          columns([
            description({
              title: 'Long text',
              description:
                'When there is not enough space, part of the title or description will be hidden with an ellipsis. Hover it to see full text.',
            }),
            code({
              compact: true,
              autoRender: false,
              source: LongText,
            }),
          ]),

          columns([
            description({
              title: 'Trends',
              description:
                'Shows a change since the last period. Positive change displays with an arrow up, negative - with an arrow down.',
            }),
            code({
              compact: true,
              autoRender: false,
              source: Trends,
            }),
          ]),

          code({
            compact: true,
            autoRender: false,
            title: 'Inverted trends',
            description:
              'By default, positive numbers are displayed in green, negative - with red. This could be changed with `invertedPercentage` property.',
            source: InvertedTrends,
          }),
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
