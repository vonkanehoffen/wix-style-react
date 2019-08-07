import { baseUniDriverFactory } from 'wix-ui-test-utils/base-driver';
import { findBaseByHook } from '../../test/utils';
import { tooltipDriverFactory } from '../Tooltip/TooltipNext/Tooltip.uni.driver';

import DataHooks from './dataHooks';
import DataAttrs from './dataAttrs';

export const statisticsWidgetDriverFactory = (base, body) => {
  const getHookSelector = hook => `[data-hook="${hook}"]`;
  const getStatsItem = async index =>
    base.$$(getHookSelector(DataHooks.stat)).get(index);

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

    /** Get title of the stat with index */
    getStatisticTitle: async index => getStatsPartText(index, DataHooks.title),

    /** Get subtitle of the stat with index */
    getStatisticSubtitle: async index =>
      getStatsPartText(index, DataHooks.subtitle),

    /** Get info icon of the stat with index */
    getStatisticInfoTooltip: async index => {
      const item = await getStatsItem(index);
      const tooltip = await item.$(getHookSelector(DataHooks.tooltip));

      return tooltipDriverFactory(tooltip, body);
    },

    /** Get percentage of the stat with index */
    getStatisticPercentage: async index => {
      const percents = await getStatsPartText(index, DataHooks.percentage);

      return percents ? Number(percents.split('%')[0]) : percents;
    },

    /** Returns true if invertedPercentage set to true */
    isStatisticPercentageInverted: async index => {
      const item = await getStatsItem(index);
      const percentage = await item
        .$(getHookSelector(DataHooks.percentage))
        .attr(DataAttrs.invertedPercentage);

      // Quick way to parse text to boolean
      return JSON.parse(percentage);
    },
  };
};
