import React from 'react';
import { withFocusable } from 'wix-ui-core/dist/src/hocs/Focusable/FocusableHOC';

import Heading from '../../Heading';
import Tooltip from '../../Tooltip';
import Badge from '../../Badge';
import SortByArrowUp from '../../new-icons/system/SortByArrowUp';
import SortByArrowDown from '../../new-icons/system/SortByArrowDown';
import InfoCircleSmall from '../../new-icons/InfoCircleSmall';

import DataHooks from '../dataHooks';
import DataAttrs from '../dataAttrs';

import styles from './StatisticsItem.st.css';

class StatisticsItem extends React.PureComponent {
  static displayName = 'StatisticsItem';

  _getFocusableProps = () => {
    const { onClick, focusableOnFocus, focusableOnBlur } = this.props;

    return onClick
      ? {
          onFocus: focusableOnFocus,
          onBlur: focusableOnBlur,
          tabIndex: 0,
        }
      : {};
  };

  _getSpaceOrEnterHandler = handler => event => {
    const { key } = event;
    const isEnter = key === 'Enter';
    const isSpace = key === ' ';

    if (isEnter || isSpace) {
      handler(event);
      event.preventDefault();
    }
  };

  _renderTitle = (title, titleInShort) => {
    if (!titleInShort) {
      return (
        <Heading ellipsis appearance="H1" dataHook={DataHooks.title}>
          {title}
        </Heading>
      );
    }

    return (
      <Heading appearance="H1" className={styles.headerWrapper}>
        <div className={styles.headerShort}>
          <Tooltip upgrade content={title} theme="dark">
            <span
              data-hook={DataHooks.shortTitle}
              aria-hidden="true"
              title={title}
            >
              {titleInShort}
            </span>
          </Tooltip>
        </div>
        <span data-hook={DataHooks.title} className={styles.headerFull}>
          {title}
        </span>
      </Heading>
    );
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

  render() {
    const {
      title,
      titleInShort,
      subtitle,
      subtitleContentInfo,
      percentage,
      invertedPercentage,
      onClick,
    } = this.props;

    const attrs = {
      ...this._getFocusableProps(),
      ...styles('item', { clickable: !!onClick }, this.props),
      'data-hook': DataHooks.stat,
      onKeyDown: onClick ? this._getSpaceOrEnterHandler(onClick) : undefined,
      onClick,
    };

    return (
      <div {...attrs}>
        {this._renderTitle(title, titleInShort)}
        {this._renderSubtitle(subtitle, subtitleContentInfo)}
        {this._renderPercents(percentage, invertedPercentage)}
      </div>
    );
  }
}

export default withFocusable(StatisticsItem);
