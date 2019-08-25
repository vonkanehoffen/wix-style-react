# Deprecating `<StatsWidget/>` component

`<StatisticsWidget/>` is the new replacement.
1. In contrast to the old `<StatsWidget/>`, the new `<StatisticsWidget/>` does not render the statistics inside a card. If needed it should be composed inside one.
2. In addition to the existing features, it adds the following:
    * keyboard and mouse accesibility features
    * hover state and click functionality
    * description tooltip
    * customized text instead of elipssis
    
Examples for all features can be viewed [here](https://wix-wix-style-react.surge.sh/?selectedKind=WIP&selectedStory=StatisticsWidget&full=0&addons=0&stories=1&panelRight=0) 

#### How to easily migrate?
Old code using `<StatsWidget/>`
```
import React from 'react';
import StatsWidget from '..';
import styles from './ExampleStatsWidget.scss';
import { Container } from '../../Grid';
import { storySettings } from './storySettings';

const statistics = [
  {
    title: '$10',
    subtitle: 'Revenue',
  },
  {
    title: '2',
    subtitle: 'Products',
  },
  {
    title: '$1',
    subtitle: 'Transactions',
  },
];

export default () => (
  <Container>
    <div data-hook="card-example" className={styles.statsWidgetWrapper}>
      <StatsWidget
        title="Let's see what's going on with your store"
        statistics={statistics}
        dataHook={storySettings.dataHook}
      />
    </div>
  </Container>
);
```

New code using `<StatisticsWidget/>`:
```
import React from 'react';
import StatisticsWidget from 'wix-style-react/StatisticsWidget';
import Card from 'wix-style-react/Card';

render(
  <Card>
    <Card.Header title={"Let's see what's going on with your store"} />
    <Card.Content>
      <StatisticsWidget
        statistics={[
          {
            value: '$10',
            description: 'Revenue',
            percentage: -15,
          },
          {
            value: '2',
            description: 'Products',
            percentage: -15,
          },
          {
            value: '1',
            description: 'Transactions',
            percentage: 0,
          },
          {
            value: '$5',
            description: 'Profit',
            percentage: 10,
          },
          {
            value: '456',
            description: 'Music',
            percentage: 15,
          },
        ]}
      />
    </Card.Content>
  </Card>,
);
```
