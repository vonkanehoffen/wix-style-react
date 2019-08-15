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
          descriptionInfo: 'Sales on Thursday',
        },
        {
          value: '$1,500',
          descriptionInfo: 'I am not visible because there is no description',
        },
        {
          value: '$2,500',
          description: 'Wednesday',
          descriptionInfo: 'Sales on Wednesday',
        },
      ]}
    />
  </div>,
);
