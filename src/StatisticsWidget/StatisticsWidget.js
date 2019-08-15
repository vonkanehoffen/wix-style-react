import React from 'react';
import PropTypes from 'prop-types';

import StatisticsItem from './StatisticsItem';
import styles from './StatisticsWidget.st.css';

/** StatsWidget: TODO: write description */
class StatisticsWidget extends React.PureComponent {
  static displayName = 'StatisticsWidget';

  static propTypes = {
    /** Applied as data-hook HTML attribute that can be used to create driver in testing */
    dataHook: PropTypes.string,
    /**
     * Array of statistic items
     *  * `title` - Big text in a first row. Value of stat itself.
     *  * `titleInShort` - Short version of title. Will be applied when there is no space for long title. If not specified, part of the title will be hidden with ellipsis
     *  * `subtitle` - Second row. Subtitle of stat
     *  * `percentage` - Change in percents. Positive number - arrow up, negative - arrow down
     *  * `invertedPercentage` - Without flag will render positive percentage green and negative red. With flag - vice versa
     *  * `subtitleContentInfo` - Shows info icon with this text inside a tooltip
     *  * `onClick` - handler for click (also works on enter or space press)
     */
    statistics: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        titleInShort: PropTypes.string,
        subtitle: PropTypes.string,
        percentage: PropTypes.number,
        invertedPercentage: PropTypes.bool,
        subtitleContentInfo: PropTypes.string,
        onClick: PropTypes.func,
      }),
    ),
  };

  _renderStat = (stat, key) => <StatisticsItem {...stat} key={key} />;

  render() {
    const { dataHook, statistics = [] } = this.props;

    if (statistics.length > 5) {
      // eslint-disable-next-line
      console.warn(
        `${statistics.length} stats items were passed in statistics array. StatisticsWidget will display only first 5.`,
      );
    }
    const firstFive = statistics.slice(0, 5);

    return (
      <div className={styles.root} data-hook={dataHook}>
        {firstFive.map(this._renderStat)}
      </div>
    );
  }
}

export default StatisticsWidget;
