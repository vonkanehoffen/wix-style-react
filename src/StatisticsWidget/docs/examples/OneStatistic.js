/* eslint-disable no-undef */
import React from 'react';
import StatisticsWidget from 'wix-style-react/StatisticsWidget';

render(
  <StatisticsWidget
    statistics={[
      {
        title: '$3,500',
        subtitle: 'Thursday',
        percentage: -11,
        invertedPercentage: true,
        subtitleContentInfo: 'Sales on Thursday',
      },
    ]}
  />,
);
