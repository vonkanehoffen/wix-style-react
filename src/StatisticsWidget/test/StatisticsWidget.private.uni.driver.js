import { statisticsWidgetDriverFactory as publicDriverFactory } from '../StatisticsWidget.uni.driver';
import { findBaseByHook } from '../../../test/utils';
import DataHooks from '../dataHooks';

export const statisticsWidgetPrivateDriverFactory = (base, body) => {
  const getHookSelector = hook => `[data-hook="${hook}"]`;

  return {
    ...publicDriverFactory(base, body),

    /** Get info icon of the stat with index */
    isInfoExists: async index =>
      await findBaseByHook(
        await base.$$(getHookSelector(DataHooks.stat)).get(index),
        DataHooks.info,
      ).exists(),
  };
};
