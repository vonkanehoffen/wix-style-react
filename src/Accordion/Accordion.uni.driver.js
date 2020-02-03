import { baseUniDriverFactory } from 'wix-ui-test-utils/base-driver';
import { getItemAt } from './utils';
import { dataHooks } from './constants';

const accordionDriverFactory = base => ({
  ...baseUniDriverFactory(base),

  getItemTitleAt: idx =>
    getItemAt(idx, base)
      .$(`[data-hook=${dataHooks.title}]`)
      .text(),

  isIconExistsAt: idx =>
    getItemAt(idx, base)
      .$(`[data-hook=${dataHooks.icon}]`)
      .exists(),

  isItemExpandedAt: idx =>
    getItemAt(idx, base)
      .$(`[data-hook=${dataHooks.children}]`)
      .exists(),

  clickToggleButtonAt: idx =>
    getItemAt(idx, base)
      .$(`[data-hook=${dataHooks.toggleAccordionWrapper}]`)
      .click(),

  clickHeaderAt: idx =>
    getItemAt(idx, base)
      .$(`[data-hook=${dataHooks.header}]`)
      .click(),

  getToggleButtonLabelAt: idx =>
    getItemAt(idx, base)
      .$(
        `[data-hook=${dataHooks.toggleAccordionWrapper}] [data-hook="${dataHooks.toggleButton}"]`,
      )
      .text(),
});

export default accordionDriverFactory;
