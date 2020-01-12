import { modalPreviewLayoutDriverFactory as publicDriverFactory } from '../ModalPreviewLayout.uni.driver';
import { dataHooks } from '../constants';
import { tooltipDriverFactory } from '../../Tooltip/TooltipNext/Tooltip.uni.driver';

export const modalPreviewLayoutPrivateDriverFactory = (base, body) => {
  const rightArrow = base.$(
    `[data-hook="${dataHooks.modalPreviewRightArrow}"]`,
  );
  const leftArrow = base.$(`[data-hook="${dataHooks.modalPreviewLeftArrow}"]`);

  const createTooltipDriver = dataHook => {
    const element = base.$(`[data-hook="${dataHook}"]`);
    return tooltipDriverFactory(element, body);
  };

  const nextTooltipDriver = createTooltipDriver(
    dataHooks.nextNavigationButtonTooltip,
  );
  const prevTooltipDriver = createTooltipDriver(
    dataHooks.prevNavigationButtonTooltip,
  );
  const closeButtonTooltipDriver = createTooltipDriver(
    dataHooks.closeButtonTooltip,
  );

  return {
    ...publicDriverFactory(base),
    clickRightNavigationButton: async () => {
      await rightArrow.click();
      await nextTooltipDriver.mouseLeave();
    },
    clickLeftNavigationButton: async () => {
      await leftArrow.click();
      await prevTooltipDriver.mouseLeave();
    },
    hoverCloseButton: () => closeButtonTooltipDriver.mouseEnter(),

    hoverRightNavigationButton: () => nextTooltipDriver.mouseEnter(),

    hoverLeftNavigationButton: () => prevTooltipDriver.mouseEnter(),
  };
};
