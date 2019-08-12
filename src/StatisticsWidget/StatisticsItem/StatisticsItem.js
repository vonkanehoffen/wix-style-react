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
    // add focusable hooks only when item is clickable
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
    if (event.defaultPrevented) {
      return;
    }

    const { key, keyCode } = event;
    const pressed = key || keyCode;
    const isEnter = pressed === 'Enter' || pressed === 13;
    const isSpace = pressed === ' ' || pressed === 32;

    if (isEnter || isSpace) {
      handler(event);
      event.preventDefault();
    }
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
      subtitle,
      subtitleContentInfo,
      percentage,
      invertedPercentage,
      onClick,
    } = this.props;

    return (
      <div
        data-hook={DataHooks.stat}
        onClick={onClick}
        onKeyDown={onClick ? this._getSpaceOrEnterHandler(onClick) : undefined}
        {...this._getFocusableProps()}
        {...styles('item', { clickable: !!onClick }, this.props)}
        ref={element => (this._element = element)}
      >
        <Heading ellipsis data-hook={DataHooks.title} appearance="H1">
          {title}
        </Heading>
        {this._renderSubtitle(subtitle, subtitleContentInfo)}
        {this._renderPercents(percentage, invertedPercentage)}
      </div>
    );
  }
}

export default withFocusable(StatisticsItem);
