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
];

tests.forEach(({ describe, its }) => {
  its.forEach(({ it, props }) => {
    storiesOf(`StatisticsWidget/${describe}`, module).add(it, () => (
      <StatisticsWidget {...commonProps} {...props} />
    ));
  });
});
