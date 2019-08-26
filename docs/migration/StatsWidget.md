# Deprecating `<StatsWidget/>` component

[`<StatisticsWidget/>`](https://wix-wix-style-react.surge.sh/?selectedKind=WIP&selectedStory=StatisticsWidget&full=0&addons=0&stories=1&panelRight=0) is the new replacement.

Below you have full detailed examples on how to migrate your components.

## Differences:

1. In contrast to the old `<StatsWidget/>`, the new `<StatisticsWidget/>` does not render the statistics inside a card. Due to that, also the next props do not exist.
2. `emptyState` prop
3. `suffix` prop which also inclues filters logic.

## New features
1. Keyboard and mouse accesibility features
2. Hover state and click functionality
3. Description tooltip
4. Customized text instead of elipssis 
    
Examples for all features can be viewed [here](https://wix-wix-style-react.surge.sh/?selectedKind=WIP&selectedStory=StatisticsWidget&full=0&addons=0&stories=1&panelRight=0) 

## Migration

### Migrating a Stats widget example with percents:

Old code using `<StatsWidget/>`
```
import React from 'react';
import StatsWidget from '..';
import styles from './ExampleStatsWidget.scss';
import { Container } from '../../Grid';
import { storySettings } from './storySettings';

export default () => (
  <Container>
    <div>
      <StatsWidget
        title="Let's see what's going on with your store"
        statistics={[
           {
             title: '$10',
             subtitle: 'Revenue',
             percent: -15,
           },
           {
             title: '2',
             subtitle: 'Products',
             percent: -15,
           },
           {
             title: '1',
             subtitle: 'Transactions',
             percent: 0,
           },
           {
             title: '$5',
             subtitle: 'Profit',
             percent: 10,
           },
           {
             title: '456',
             subtitle: 'Music',
             percent: 15,
           },
         ]}
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

### Migrating a StatsWidget example with Multiple filters:
Old code using `<StatsWidget/>`
```
import React from 'react';
import StatsWidget from '..';

import { Container } from '../../Grid';

const dropdownOption = [
  { id: 0, value: 'This month' },
  { id: 1, value: 'This week' },
];

const onFilterChange = () => {
  alert('hi');
};

export default () => (
   <StatsWidget
     title="Let's see what's going on with your store"
     statistics={[
     {
       title: '$10',
       subtitle: 'Revenue',
     },
     {
       title: '2',
       subtitle: 'Products',
     },
     {
       title: '1',
       subtitle: 'Transactions',
     },
     {
       title: '$5',
       subtitle: 'Profit',
     },
   ]}
   >
     <StatsWidget.FilterButton
       dataHook="StatsWidgetFilter"
       initialSelectedId={1}
       options={dropdownOption}
       onSelect={onFilterChange}
     />

     <StatsWidget.FilterButton
       dataHook="StatsWidgetFilter"
       initialSelectedId={1}
       options={dropdownOption}
       onSelect={onFilterChange}
     />
   </StatsWidget>
);
```

New code using `<StatisticsWidget/>`
```
import React from 'react';
import StatisticsWidget from 'wix-style-react/StatisticsWidget';
import Card from 'wix-style-react/Card';
import DropdownBase from 'wix-style-react/DropdownBase';
import Icons from 'wix-style-react/Icons';
import TextButton from 'wix-style-react/TextButton';

class StatsWrapper extends React.Component {
  constructor() {
    super();

    this.state = { date: '7d', filter: 'All' };
  }

  _getSuffix() {
    return [
      <DropdownBase
        onSelect={({ id }) => this.setState({ date: id })}
        options={[
          { id: '7d', value: 'Last 7 days' },
          { id: '14d', value: 'Last 14 days' },
        ]}
      >
        {({ toggle, selectedOption = { id: '7d', value: 'Last 7 days' } }) => {
          return (
            <TextButton
              upgrade
              skin="dark"
              suffixIcon={<Icons.ChevronDown />}
              onClick={toggle}
            >
              {selectedOption.value}
            </TextButton>
          );
        }}
      </DropdownBase>,
      <DropdownBase
        onSelect={({ id }) => this.setState({ filter: id })}
        options={[
          { id: 'US', value: 'Only from US' },
          { id: 'All', value: 'All' },
        ]}
      >
        {({ toggle, selectedOption = { id: 'All', value: 'All' } }) => {
          return (
            <TextButton
              upgrade
              skin="dark"
              suffixIcon={<Icons.ChevronDown />}
              onClick={toggle}
            >
              {selectedOption.value}
            </TextButton>
          );
        }}
      </DropdownBase>,
    ];
  }

  render() {
    const { date, filter } = this.state;
    return (
      <Card>
        <Card.Header title={'Article performance'} suffix={this._getSuffix()} />
        <Card.Content>
          <StatisticsWidget statistics={getData(date, filter)} />
        </Card.Content>
      </Card>
    );
  }
}

const weekUS = [
  {
    value: '500',
    description: 'Views',
    percentage: 21,
    onClick: () => {},
  },
  {
    value: '350',
    description: 'Uniq visits',
    percentage: 21,
  },
  {
    value: '3.9',
    description: 'Pages per visitor',
    percentage: -11,
  },
  {
    value: '$3,500',
    description: 'Revenue',
    percentage: -11,
    descriptionInfo: 'Revenue in 7 days',
    onClick: () => {},
  },
  {
    value: '0',
    description: 'Shares',
    percentage: 0,
    descriptionInfo: 'Shares in 7 days',
    onClick: () => {},
  },
];

const twoWeeksUS = [
  {
    value: '700',
    description: 'Views',
    percentage: 19,
    onClick: () => {},
  },
  {
    value: '500',
    description: 'Uniq visits',
    percentage: 21,
  },
  {
    value: '3.2',
    description: 'Pages per visitor',
    percentage: -11,
  },
  {
    value: '$5,700',
    description: 'Revenue',
    percentage: -11,
    descriptionInfo: 'Revenue in 14 days',
    onClick: () => {},
  },
  {
    value: '0',
    description: 'Shares',
    percentage: 0,
    descriptionInfo: 'Shares in 14 days',
    onClick: () => () => {},
  },
];

const weekAll = [
  {
    value: '1200',
    description: 'Views',
    percentage: 21,
    onClick: () => {},
  },
  {
    value: '900',
    description: 'Uniq visits',
    percentage: 21,
  },
  {
    value: '4.1',
    description: 'Pages per visitor',
    percentage: 2,
  },
  {
    value: '$5,200',
    description: 'Revenue',
    percentage: 7,
    descriptionInfo: 'Revenue in 7 days',
    onClick: () => {},
  },
  {
    value: '3',
    description: 'Shares',
    percentage: 100,
    descriptionInfo: 'Shares in 7 days',
    onClick: () => {},
  },
];

const twoWeeksAll = [
  {
    value: '1300',
    description: 'Views',
    percentage: 29,
    onClick: () => {},
  },
  {
    value: '1100',
    description: 'Uniq visits',
    percentage: 14,
  },
  {
    value: '3.2',
    description: 'Pages per visitor',
    percentage: -1,
  },
  {
    value: '$6,400',
    description: 'Revenue',
    percentage: 11,
    descriptionInfo: 'Revenue in 14 days',
    onClick: () => {},
  },
  {
    value: '8',
    description: 'Shares',
    percentage: 95,
    descriptionInfo: 'Shares in 14 days',
    onClick: () => {},
  },
];

const data = {
  '7d': {
    US: weekUS,
    All: weekAll,
  },
  '14d': {
    US: twoWeeksUS,
    All: twoWeeksAll,
  },
};

const getData = (date, filter) => data[date][filter];
```
