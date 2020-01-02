import { baseUniDriverFactory } from 'wix-ui-test-utils/base-driver';
import DATAHOOKS from './DataHooks';

const byDataHook = dataHook => `[data-hook="${dataHook}"]`;

export const listItemSectionDriverFactory = base => {
  return {
    ...baseUniDriverFactory(base),

    /** Get title Text */
    getTitle: base.$(byDataHook(DATAHOOKS.TITLE)).text,

    /** Get suffix */
    getSuffix: () => base.$(byDataHook(DATAHOOKS.SUFFIX)),
  };
};
