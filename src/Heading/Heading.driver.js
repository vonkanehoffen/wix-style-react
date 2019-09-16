import { StylableDOMUtilCompat } from '@stylable/dom-test-kit';
import style from './Heading.st.css';

const headingDriverFactory = factoryParams => {
  const stylableDOMUtil = new StylableDOMUtilCompat(style);
  const { element } = factoryParams;

  return {
    exists: () => !!element,
    getText: () => element.innerHTML,
    getAppearance: () => stylableDOMUtil.getStyleState(element, 'appearance'),
    isLight: () => stylableDOMUtil.hasStyleState(element, 'light'),
  };
};

export default headingDriverFactory;
