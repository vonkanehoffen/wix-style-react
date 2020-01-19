import imageViewerPrivateDriver from './test/ImageViewer.private.driver';

const { addItemDataHook, imageDataHook } = imageViewerPrivateDriver;

const imageViewerDriverFactory = component => ({
  click: () => component.click(),
  element: () => component,
  isImageVisible: () => component.$(imageDataHook).isPresent(),
  isAddItemVisible: () => component.$(addItemDataHook).isPresent(),
});

export default imageViewerDriverFactory;
