import { baseUniDriverFactory } from 'wix-ui-test-utils/base-driver';
//import { StylableDOMUtil } from '@stylable/dom-test-kit';
//import style from '../ToggleSwitch.st.css';

const toggleSwitchDriver = base => {
  //const stylableDOMUtil = new StylableDOMUtil(style, base.getElement());
  return {
    ...baseUniDriverFactory(base),
    getSize: () => {}, //stylableDOMUtil.getStyleState(element, 'size'),
    getSkin: () => {}, //stylableDOMUtil.getStyleState(element, 'skin'),
  };
};

export default toggleSwitchDriver;
