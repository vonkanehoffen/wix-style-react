/* eslint-disable no-undef */ /* eslint-disable no-console */
import React from 'react';
import StatisticsWidget from 'wix-style-react/StatisticsWidget';

render(
  <StatisticsWidget
    statistics={[
      {
        title: '$500',
        subtitle: 'Monday',
        percentage: 21,
        onClick: () => console.log('Hello from 1st'),
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
        onClick: () => console.log('Hello from 4th'),
      },
      {
        title: '0',
        subtitle: 'Friday',
        percentage: 0,
        invertedPercentage: true,
        subtitleContentInfo: 'Sales on Friday',
        onClick: () => console.log('Hello from 5th'),
      },
    ]}
  />,
);
