import React from 'react';
import { storiesOf } from '@storybook/react';
import StatisticsWidget from '../StatisticsWidget';

const commonProps = {
  //use for repeated props across the tests (e.g. {buttonText: 'example'})
};

const tests = [
  {
    describe: 'sanity', // prop name (e.g. size)
    its: [
      {
        it: '3 items',
        props: {
          statistics: [
            {
              title: '$7,500',
              subtitle: 'Monday',
              percentage: 21,
              invertedPercentage: true,
            },
            {
              title: '1 200 000',
              subtitle: 'Tuesday',
              subtitleContentInfo: 'Sales on Tuesday',
              percentage: 11,
            },
            {
              title: '21k',
              subtitle: 'Wednesday',
            },
          ],
        },
      },
      {
        it: '5 items',
        props: {
          statistics: [
            {
              title: '$500',
              subtitle: 'Monday',
              percentage: 21,
            },
            {
              title: '$1,500',
              subtitle: 'Tuesday',
              percentage: 21,
              invertedPercentage: true,
            },
            {
              title: '$2,500',
              percentage: -11,
            },
            {
              title: '$3,500',
              subtitle: 'Thursday',
              percentage: -11,
              invertedPercentage: true,
              subtitleContentInfo: 'Sales on Thursday',
            },
            {
              title: '0',
              subtitle: 'Friday',
              percentage: 0,
              invertedPercentage: true,
              subtitleContentInfo: 'Sales on Friday',
            },
          ],
        },
      },
      {
        it: '> 5 items',
        props: {
          statistics: [
            {
              title: '$500',
              subtitle: 'Monday',
            },
            {
              title: '$1,500',
              subtitle: 'Tuesday',
              percentage: 21,
              invertedPercentage: true,
            },
            {
              title: '$2,500',
              percentage: 11,
            },
            {
              title: '$3,500',
              subtitle: 'Thursday',
              percentage: 0,
              invertedPercentage: true,
              subtitleContentInfo: 'Sales on Thursday',
            },
            {
              title: '$4,500',
              subtitle: 'Friday',
              subtitleContentInfo: 'Sales on Friday',
            },
            {
              title: '$5,500',
              subtitle: 'Saturday',
              percentage: 0,
            },
          ],
        },
      },
    ],
  },
  {
    describe: 'short text', // prop name (e.g. size)
    its: [
      {
        it: 'without short text in title',
        props: {
          statistics: [
            {
              title: '$7,500,000,000',
            },
            {
              title: '$1,200,000',
            },
            {
              title: '$1,872',
            },
            {
              title: 'Testing very very long text',
            },
          ],
        },
      },
      {
        it: 'with short text on title',
        props: {
          statistics: [
            {
              title: '$7,500,000,000',
              titleInShort: '$7,5B',
            },
            {
              title: '$1,200,000',
              titleInShort: '$1,2M',
            },
            {
              title: '$1,872',
              titleInShort: '$1,8K',
            },
            {
              title: 'Testing very very long text',
              titleInShort: 'Text',
            },
          ],
        },
      },
      {
        it: 'without short text in subtitle',
        props: {
          statistics: [
            {
              title: '$7,500,000,000',
              subtitle: 'Average orders on Monday, US dollars',
            },
            {
              title: '$1,500',
              subtitle: 'Average orders on Tuesday, US dollars',
            },
            {
              title: '$1,200,000',
              subtitle: 'Average orders on Wednesday, US dollars',
            },
            {
              title: '$1,872',
              subtitle: 'Average orders on Thursday, US dollars',
            },
            {
              title: 'Testing very very long text',
              subtitle: 'Average orders on Friday, US dollars',
            },
          ],
        },
      },
      {
        it: 'with short text in subtitle',
        props: {
          statistics: [
            {
              title: '$7,500,000,000',
              subtitle: 'Average orders on Monday, US dollars',
              subtitleShort: 'Monday',
            },
            {
              title: '$1,500',
              subtitle: 'Average orders on Tuesday, US dollars',
              subtitleShort: 'Tuesday',
            },
            {
              title: '$1,200,000',
              subtitle: 'Average orders on Wednesday, US dollars',
              subtitleShort: 'Wednesday',
            },
            {
              title: '$1,872',
              subtitle: 'Average orders on Thursday, US dollars',
              subtitleShort: 'Thursday',
            },
            {
              title: 'Testing very very long text',
              subtitle: 'Average orders on Friday, US dollars',
              subtitleShort: 'Friday',
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
      <StatisticsWidget {...commonProps} {...props} />
    ));
  });
});
