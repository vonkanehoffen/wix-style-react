/* eslint-disable no-undef */
import React from 'react';
import StatisticsWidget from 'wix-style-react/StatisticsWidget';

render(
  <div style={{ background: '#fff' }}>
    <StatisticsWidget
      statistics={[
        {
          title: '$500',
          subtitle: 'Monday',
          subtitleContentInfo: 'Sales on Thursday',
        },
        {
          title: '$1,500',
          subtitleContentInfo: 'I am not visible because there is no subtitle',
        },
        {
          title: '$2,500',
          subtitle: 'Wednesday',
          subtitleContentInfo: 'Sales on Wednesday',
        },
      ]}
    />
  </div>,
);
