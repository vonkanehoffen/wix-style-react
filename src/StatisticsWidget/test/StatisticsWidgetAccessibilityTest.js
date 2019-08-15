import React from 'react';
import { storiesOf } from '@storybook/react';

import StatisticsWidget from '../StatisticsWidget';
import { TESTS_PREFIX } from '../../../stories/storiesHierarchy';
import { storySettings } from './storySettings';

const statistics = [
  {
    title: '$500',
    subtitle: 'Monday',
    percentage: 21,
    onClick: () => {},
  },
  {
    title: '$1,500',
    subtitle: 'Tuesday',
    percentage: 21,
    invertedPercentage: true,
  },
  {
    title: '$2,500',
    percentage: -11,
  },
  {
    title: '$3,500',
    subtitle: 'Thursday',
    percentage: -11,
    invertedPercentage: true,
    subtitleContentInfo: 'Sales on Thursday',
    onClick: () => {},
  },
  {
    title: '0',
    subtitle: 'Friday',
    percentage: 0,
    invertedPercentage: true,
    subtitleContentInfo: 'Sales on Friday',
    onClick: () => {},
  },
];

const kind = `${TESTS_PREFIX}/${storySettings.category}/${storySettings.storyName}`;

class TestComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      messages: [],
      statistics: [],
    };
  }

  componentDidMount() {
    this.setState({
      statistics: statistics.slice(0, 4).concat({
        ...statistics[4],
        onClick: () =>
          this.setState({
            messages: this.state.messages.concat('Item is clicked'),
          }),
      }),
    });
  }

  render() {
    return (
      <div style={{ marginLeft: 100, marginTop: 100 }}>
        <StatisticsWidget
          dataHook={storySettings.dataHook}
          statistics={this.state.statistics}
        />
        <ul>
          {this.state.messages.map(text => (
            <li>{text}</li>
          ))}
        </ul>
      </div>
    );
  }
}

storiesOf(kind, module).add(storySettings.testStoryNames.ACCESSIBILITY, () => (
  <TestComponent />
));
