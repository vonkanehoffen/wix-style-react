import { Simulate } from 'react-dom/test-utils';
import { reactUniDriver } from 'wix-ui-test-utils/vanilla';
/**
 *Temporary workaround for implementing missing Unidriver methods in React/DOM only.
 *
 * @param {UniDriver} base
 */
export function ReactBase(base) {
  const htmlElement = () => {
    if (base.type !== 'react') {
      throw new Error('Supported only in React/DOM.');
    }
    return base.getNative();
  };

  const pendingUnidriverFeatures = {
    isFocus: async () => {
      return document.activeElement === (await htmlElement());
    },
    paste: async () => Simulate.paste(await htmlElement()),
    select: async selectedIndex =>
      Simulate.change(await htmlElement(), {
        target: { selectedIndex, value: '' },
      }),
  };

  const unidriverRejected = {
    // Event Simulation
    focus: async () => {
      const elm = await htmlElement();
      elm.focus();
      Simulate.focus(elm); // TODO: Is this redundant?
    },
    blur: async () => {
      const elm = await htmlElement();
      elm.blur();
      Simulate.blur(elm); // TODO: Is this redundant?
    },
  };

  // These could be BAD implementations. We should have a deprecation log and provide a better alternative.
  const shouldBeDeprecated = {
    getClassList: async () => (await htmlElement()).classList,
    /** @returns {array} array of children unidrivers */
    children: async () => {
      const ch = (await htmlElement()).children;
      const uniChildren = [];
      for (let i = 0; i < ch.length; i++) {
        uniChildren.push(reactUniDriver(ch[i]));
      }
      return uniChildren;
    },
  };

  const shouldBePrivate = {
    /* Event Simulation */
    // TODO: replace methods that use Simulate with a single `simulate`/`eventTrigger` method
    compositionStart: async () =>
      Simulate.compositionStart(await htmlElement()),
    compositionEnd: async () => Simulate.compositionEnd(await htmlElement()),
    keyUp: async eventData => Simulate.keyUp(await htmlElement(), eventData),
    keyDown: async eventData =>
      Simulate.keyDown(await htmlElement(), eventData),
    mouseEnter: async eventData =>
      Simulate.mouseEnter(await htmlElement(), eventData),
    mouseLeave: async eventData =>
      Simulate.mouseLeave(await htmlElement(), eventData),
    mouseDown: async eventData =>
      Simulate.mouseDown(await htmlElement(), eventData),
    mouseOver: async eventData =>
      Simulate.mouseOver(await htmlElement(), eventData),
    mouseOut: async eventData =>
      Simulate.mouseOut(await htmlElement(), eventData),
  };

  return {
    ...pendingUnidriverFeatures,
    ...unidriverRejected,
    ...shouldBeDeprecated,
    ...shouldBePrivate,
  };
}

ReactBase.clickBody = () =>
  document.body.dispatchEvent(new Event('mouseup', { cancelable: true }));
// TODO: Find out why some tests need clickOutSide to be on document and some on body
ReactBase.clickDocument = () =>
  document.dispatchEvent(new Event('mousedown', { cancelable: true }));
