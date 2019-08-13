/* eslint-disable no-undef */
import React from 'react';
import StatisticsWidget from 'wix-style-react/StatisticsWidget';

render(
  <StatisticsWidget
    statistics={[
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
    ]}
  />,
);
