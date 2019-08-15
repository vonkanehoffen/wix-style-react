/* eslint-disable no-undef */
import React from 'react';
import StatisticsWidget from 'wix-style-react/StatisticsWidget';

render(
  <div style={{ background: '#fff' }}>
    <StatisticsWidget
      statistics={[
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
      ]}
    />
  </div>,
);
