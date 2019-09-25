import { fireEvent } from '@testing-library/react';
import { dataHooks } from './ImageViewer.constants';

const imageViewerPrivateDriver = ({ element }) => {
  const byHook = dataHook => element.querySelector(`[data-hook="${dataHook}"]`);

  return {
    simulateImageLoad: () => {
      const imageElement = byHook(dataHooks.image);
      fireEvent.load(imageElement);
    },
  };
};

export default imageViewerPrivateDriver;
