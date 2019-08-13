/* eslint-disable no-undef */
import React from 'react';
import StatisticsWidget from 'wix-style-react/StatisticsWidget';

render(
  <StatisticsWidget
    statistics={[
      {
        title: '$500,000,000',
        subtitle: 'Monday',
      },
      {
        title: '$1,500',
        subtitle: 'Tuesday sales in average',
      },
      {
        title: '4,200,000',
        subtitle: 'Number of active customers',
      },
    ]}
  />,
);
