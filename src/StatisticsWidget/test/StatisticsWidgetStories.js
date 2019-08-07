import React from 'react';
import { storiesOf } from '@storybook/react';
import { getTestStoryKind } from '../../../stories/storiesHierarchy';
import { storySettings } from './storySettings';

import StatisticsWidget from '..';

const TestStories = storiesOf(getTestStoryKind(storySettings), module);
const { testStoryNames, dataHook } = storySettings;

TestStories.add(testStoryNames.DEFAULT, () => (
  <StatisticsWidget
    statistics={[
      {
        title: '$500',
        subtitle: 'Monday',
      },
      {
        title: '$1,500',
        subtitle: 'Tuesday',
        subtitleContentInfo: 'Sales on Tuesday',
      },
      {
        title: '$2,500',
        subtitle: 'Wednesday',
      },
    ]}
    dataHook={dataHook}
  />
));
