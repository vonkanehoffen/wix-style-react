/* eslint-disable no-undef */
import React from 'react';
import StatisticsWidget from 'wix-style-react/StatisticsWidget';

render(
  <div style={{ background: '#fff' }}>
    <StatisticsWidget
      statistics={[
        {
          title: '$500',
        },
        {
          title: '$1,500',
        },
        {
          title: '$2,500',
        },
        {
          title: '$3,500',
        },
      ]}
    />
  </div>,
);
