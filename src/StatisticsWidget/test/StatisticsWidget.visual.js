import React from 'react';
import { storiesOf } from '@storybook/react';
import StatisticsWidget from '../StatisticsWidget';

const tests = [
  {
    describe: 'sanity',
    its: [
      {
        it: '3 items',
        props: {
          statistics: [
            {
              value: '$7,500',
              description: 'Monday',
              percentage: 21,
              invertedPercentage: true,
            },
            {
              value: '1 200 000',
              description: 'Tuesday',
              descriptionInfo: 'Sales on Tuesday',
              percentage: 11,
            },
            {
              value: '21k',
              description: 'Wednesday',
            },
          ],
        },
      },
      {
        it: '5 items',
        props: {
          statistics: [
            {
              value: '$500',
              description: 'Monday',
              percentage: 21,
            },
            {
              value: '$1,500',
              description: 'Tuesday',
              percentage: 21,
              invertedPercentage: true,
            },
            {
              value: '$2,500',
              percentage: -11,
            },
            {
              value: '$3,500',
              description: 'Thursday',
              percentage: -11,
              invertedPercentage: true,
              descriptionInfo: 'Sales on Thursday',
            },
            {
              value: '0',
              description: 'Friday',
              percentage: 0,
              invertedPercentage: true,
              descriptionInfo: 'Sales on Friday',
            },
          ],
        },
      },
      {
        it: '> 5 items',
        props: {
          statistics: [
            {
              value: '$500',
              description: 'Monday',
            },
            {
              value: '$1,500',
              description: 'Tuesday',
              percentage: 21,
              invertedPercentage: true,
            },
            {
              value: '$2,500',
              percentage: 11,
            },
            {
              value: '$3,500',
              description: 'Thursday',
              percentage: 0,
              invertedPercentage: true,
              descriptionInfo: 'Sales on Thursday',
            },
            {
              value: '$4,500',
              description: 'Friday',
              descriptionInfo: 'Sales on Friday',
            },
            {
              value: '$5,500',
              description: 'Saturday',
              percentage: 0,
            },
          ],
        },
      },
    ],
  },
  {
    describe: 'short text',
    its: [
      {
        it: 'without short text in value',
        props: {
          statistics: [
            {
              value: '$7,500,000,000',
            },
            {
              value: '$1,200,000',
            },
            {
              value: '$1,872',
            },
            {
              value: 'Testing very very long text',
            },
          ],
        },
      },
      {
        it: 'with short text on value',
        props: {
          statistics: [
            {
              value: '$7,500,000,000',
              valueInShort: '$7,5B',
            },
            {
              value: '$1,200,000',
              valueInShort: '$1,2M',
            },
            {
              value: '$1,872',
              valueInShort: '$1,8K',
            },
            {
              value: 'Testing very very long text',
              valueInShort: 'Text',
            },
          ],
        },
      },
    ],
  },
];

tests.forEach(({ describe, its }) => {
  its.forEach(({ it, props }) => {
    storiesOf(`StatisticsWidget/${describe}`, module).add(it, () => (
      <div style={{ marginLeft: 100, marginTop: 100 }}>
        <StatisticsWidget {...props} />
      </div>
    ));
  });
});
