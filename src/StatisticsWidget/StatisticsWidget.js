import React from 'react';
import PropTypes from 'prop-types';

import Tooltip from '../Tooltip';
import SortByArrowUp from '../new-icons/system/SortByArrowUp';
import SortByArrowDown from '../new-icons/system/SortByArrowDown';
import InfoCircleSmall from '../new-icons/InfoCircleSmall';
import Badge from '../Badge';
import Heading from '../Heading';

import DataHooks from './dataHooks';
import DataAttrs from './dataAttrs';

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
     *  * `subtitle` - Second row. Subtitle of stat
     *  * `percentage` - Change in percents. Positive number - arrow up, negative - arrow down
     *  * `invertedPercentage` - Without flag will render positive percentage green and negative red. With flag - vice versa
     *  * `subtitleContentInfo` - Shows info icon with this text inside a tooltip
     */
    statistics: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        subtitle: PropTypes.string,
        percentage: PropTypes.number,
        invertedPercentage: PropTypes.bool,
        subtitleContentInfo: PropTypes.string,
      }),
    ),
  };

  _renderSubtitle = (subtitle, subtitleContentInfo) => {
    if (!subtitle) {
      return null;
    }

    return (
      <div className={styles.subtitle}>
        <Heading ellipsis data-hook={DataHooks.subtitle} appearance="H5">
          {subtitle}
        </Heading>
        {subtitleContentInfo && (
          <Tooltip
            upgrade
            dataHook={DataHooks.tooltip}
            content={subtitleContentInfo}
          >
            <InfoCircleSmall
              className={styles.info}
              data-hook={DataHooks.info}
            />
          </Tooltip>
        )}
      </div>
    );
  };

  _renderPercents = (percentage, invertedPercentage = false) => {
    if (isNaN(Number(percentage))) {
      return null;
    }

    let skin = 'neutral';
    let trendIcon = null;

    if (percentage > 0) {
      trendIcon = <SortByArrowUp data-hook={DataHooks.trendUp} />;
      skin = !invertedPercentage ? 'success' : 'danger';
    } else if (percentage < 0) {
      trendIcon = <SortByArrowDown data-hook={DataHooks.trendDown} />;
      skin = !invertedPercentage ? 'danger' : 'success';
    }

    const badgeProps = {
      type: 'transparent',
      dataHook: DataHooks.percentage,
      [DataAttrs.invertedPercentage]: invertedPercentage,
      skin,
    };

    return (
      <Badge {...badgeProps} className={styles.percentage}>
        <div className={styles.percentageInner}>
          {!!percentage && (
            <span
              className={styles.trendIndicator}
              data-hook={DataHooks.trendIndicator}
            >
              {trendIcon}
            </span>
          )}
          {Math.abs(percentage)}%
        </div>
      </Badge>
    );
  };

  _renderStat = (
    { title, subtitle, percentage, subtitleContentInfo, invertedPercentage },
    key,
  ) => (
    <div key={key} data-hook={DataHooks.stat} className={styles.item}>
      <Heading ellipsis data-hook={DataHooks.title} appearance="H1">
        {title}
      </Heading>
      {this._renderSubtitle(subtitle, subtitleContentInfo)}
      {this._renderPercents(percentage, invertedPercentage)}
    </div>
  );

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
