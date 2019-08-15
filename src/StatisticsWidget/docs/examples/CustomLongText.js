/* eslint-disable no-undef */
import React from 'react';
import StatisticsWidget from 'wix-style-react/StatisticsWidget';

render(
  <div style={{ background: '#fff' }}>
    <StatisticsWidget
      statistics={[
        {
          title: '$500,000,000',
          titleInShort: '$500M',
          subtitle: 'Monday',
        },
        {
          title: '$1,500',
          titleInShort: '1,5K',
          subtitle: 'Tuesday sales in average',
        },
        {
          title: '4,200,000',
          titleInShort: '4,2M',
          subtitle: 'Number of active customers',
          subtitleContentInfo: 'Customers have 10 and more order',
        },
      ]}
    />
  </div>,
);
