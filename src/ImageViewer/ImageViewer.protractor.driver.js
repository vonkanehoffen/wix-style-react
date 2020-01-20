import { dataHooks } from './constants';

const imageViewerDriverFactory = component => ({
  click: () => component.click(),
  element: () => component,
  isImageVisible: () => component.$(dataHooks.image).isPresent(),
  isAddItemVisible: () => component.$(dataHooks.addItem).isPresent(),
});

export default imageViewerDriverFactory;
