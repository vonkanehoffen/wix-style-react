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
        },
        {
          value: '$1,500',
        },
        {
          value: '$2,500',
          description: 'Wednesday',
        },
      ]}
    />
  </div>,
);
