import { baseUniDriverFactory } from 'wix-ui-test-utils/base-driver';
import DATAHOOKS from './DataHooks';

const byDataHook = dataHook => `[data-hook="${dataHook}"]`;

export const listItemSelectDriverFactory = base => {
  return {
    ...baseUniDriverFactory(base),

    /** Check whether the checkbox appears */
    hasCheckbox: base.$(byDataHook(DATAHOOKS.CHECKBOX)).exists,

    /** Get prefix */
    getPrefix: () => base.$(byDataHook(DATAHOOKS.PREFIX)),

    /** Get title Text */
    getTitle: base.$(byDataHook(DATAHOOKS.TITLE)).text,

    /** Get subtitle Text */
    getSubtitle: async () => {
      const subtitleElement = await base.$(byDataHook(DATAHOOKS.SUBTITLE));
      if (await subtitleElement.exists()) {
        return subtitleElement.text();
      }
    },

    /** Get suffix */
    getSuffix: () => base.$(byDataHook(DATAHOOKS.SUFFIX)),
  };
};
