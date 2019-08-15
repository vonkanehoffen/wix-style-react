import { baseUniDriverFactory } from 'wix-ui-test-utils/base-driver';
import { findBaseByHook } from '../../test/utils';
import { tooltipDriverFactory } from '../Tooltip/TooltipNext/Tooltip.uni.driver';

import DataHooks from './dataHooks';
import DataAttrs from './dataAttrs';

export const statisticsWidgetDriverFactory = (base, body) => {
  const getHookSelector = hook => `[data-hook="${hook}"]`;
  const getStatsItem = async index =>
    base.$$(getHookSelector(DataHooks.stat)).get(index);

  const getTooltipDriver = async index => {
    const item = await getStatsItem(index);
    const tooltip = await item.$(getHookSelector(DataHooks.tooltip));

    return tooltipDriverFactory(tooltip, body);
  };

  const getStatsPartText = async (index, hook) => {
    const node = findBaseByHook(await getStatsItem(index), hook);

    if (!(await node.exists())) {
      return null;
    }

    return await node.text();
  };

  return {
    ...baseUniDriverFactory(base),
    /** Get number of items */
    getItemsCount: async () =>
      await base.$$(getHookSelector(DataHooks.stat)).count(),

    /** Click on the statistic with index */
    clickStatistics: async index => {
      const statistics = await getStatsItem(index);

      return statistics.click();
    },

    /** Get title of the statistic with index */
    getTitle: async index => getStatsPartText(index, DataHooks.title),

    /** Get short title of the stat with index */
    getTitleInShort: async index =>
      getStatsPartText(index, DataHooks.shortTitle),

    /** Get subtitle of the statistic with index */
    getSubtitle: async index => getStatsPartText(index, DataHooks.subtitle),

    /** Get the text of the info tooltip */
    getInfo: async index => {
      const tooltip = await getTooltipDriver(index);

      if (!(await tooltip.exists())) {
        return null;
      }

      await tooltip.mouseEnter();

      const text = await tooltip.getTooltipText();

      await tooltip.mouseLeave();

      return text;
    },

    /** Get percentage of the statistic with index */
    getPercentage: async index => {
      const percents = await getStatsPartText(index, DataHooks.percentage);

      return percents ? Number(percents.split('%')[0]) : percents;
    },

    /** Returns true if invertedPercentage set to true */
    isPercentageInverted: async index => {
      const item = await getStatsItem(index);
      const percentage = await item
        .$(getHookSelector(DataHooks.percentage))
        .attr(DataAttrs.invertedPercentage);

      // Quick way to parse text to boolean
      return JSON.parse(percentage);
    },
  };
};
