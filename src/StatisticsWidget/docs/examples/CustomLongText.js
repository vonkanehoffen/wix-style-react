/* eslint-disable no-undef */
import React from 'react';
import StatisticsWidget from 'wix-style-react/StatisticsWidget';

render(
  <div style={{ background: '#fff' }}>
    <StatisticsWidget
      statistics={[
        {
          value: '$500,000,000',
          valueInShort: '$500M',
          description: 'Monday',
        },
        {
          value: '$1,500',
          valueInShort: '1,5K',
          description: 'Tuesday sales in average',
        },
        {
          value: '4,200,000',
          valueInShort: '4,2M',
          description: 'Number of active customers',
          descriptionInfo: 'Customers have 10 and more order',
        },
      ]}
    />
  </div>,
);
