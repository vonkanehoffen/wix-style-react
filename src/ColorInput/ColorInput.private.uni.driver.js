import { StylableUnidriverUtil } from 'wix-ui-test-utils/unidriver';
import { colorInputDriverFactory as publicDriverFactory } from './ColorInput.uni.driver';
import hashStyles from './components/Hash.st.css';
import viewerStyles from './components/ColorViewer.st.css';
import { swatchesPrivateDriverFactory } from '../Swatches/test/Swatches.private.uni.driver';
import DATA_HOOKS from './DataHooks';

export const colorInputPrivateDriverFactory = (base, body) => {
  const viewerStylableUtil = new StylableUnidriverUtil(viewerStyles);
  const hashStylableUtil = new StylableUnidriverUtil(hashStyles);
  const swatchesHook = `[data-hook="${DATA_HOOKS.COLOR_PICKER_SWATCHES}"]`;
  const swatchesDriver = swatchesPrivateDriverFactory(base.$(swatchesHook));

  const isHashDisabled = async () =>
    (await hashStylableUtil.getStyleState(
      base.$(`[data-hook="${DATA_HOOKS.COLOR_INPUT_HASH}"]`),
      'disabled',
    )) === 'true';

  const getViewerSize = async () =>
    await viewerStylableUtil.getStyleState(
      base.$(`[data-hook="${DATA_HOOKS.COLOR_INPUT_VIEWER}"]`),
      'size',
    );
  return {
    ...publicDriverFactory(base, body),
    isHashDisabled,
    isViewerNull: async () =>
      await base
        .$(`[data-hook="${DATA_HOOKS.COLOR_INPUT_VIEWER_LINE}"]`)
        .exists(),
    getViewerSize,
    getSwatch: async index => swatchesDriver.getSwatch(index),
    getSwatchCount: async () => swatchesDriver.getSwatchCount(),
    /** Private Swatches driver function to test if swatch is transparent at given index */
    isSwatchTransparentAt: async index =>
      swatchesDriver.isSwatchTransparentAt(index),
  };
};
