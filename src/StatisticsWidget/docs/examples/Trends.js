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
        percentage: 0,
      },
      {
        title: '$2,500',
        percentage: -11,
      },
    ]}
  />,
);
