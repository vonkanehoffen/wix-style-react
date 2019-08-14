import React from 'react';
import ReactTestUtils from 'react-dom/test-utils';
import autoCompleteDriverFactory from '../AutoComplete.driver';
import { autoCompleteUniDriverFactory } from '../AutoComplete.uni.driver';
import AutoComplete from '../AutoComplete';
import { autoCompleteTestkitFactory } from '../../../testkit';
import { autoCompleteTestkitFactory as enzymeAutoCompleteTestkitFactory } from '../../../testkit/enzyme';
import { mount } from 'enzyme';
import {
  createRendererWithDriver,
  createRendererWithUniDriver,
} from '../../../test/utils/unit';

const asciiA = '97';

describe('Autocomplete', () => {
  describe('[sync]', () => {
    runTests(createRendererWithDriver(autoCompleteDriverFactory));
  });

  describe('[async]', () => {
    runTests(createRendererWithUniDriver(autoCompleteUniDriverFactory));
  });

  function runTests(render) {
    const createDriver = jsx => render(jsx).driver;

    const options = [
      { id: 0, value: 'aaa' },
      { id: 1, value: 'abb' },
      { id: 2, value: 'bbb', disabled: true },
      { id: 3, value: 'bcc' },
      { id: 'divider1', value: '-' },
      { id: 'element1', value: <span style={{ color: 'brown' }}>ccc</span> },
    ];

    const predicate = option =>
      option.value
        .toString()
        .toLowerCase()
        .indexOf('a') !== -1;

    it('should not filter anything without predicate function', async () => {
      const { dropdownLayoutDriver } = createDriver(
        <AutoComplete options={options} />,
      );
      expect(await dropdownLayoutDriver.optionsLength()).toBe(options.length);
    });

    ['ArrowUp', 'ArrowDown'].forEach(key => {
      it(`should not filter items according to predicate function when pressing ${key}`, async () => {
        const { inputDriver, dropdownLayoutDriver } = createDriver(
          <AutoComplete options={options} predicate={predicate} />,
        );
        await inputDriver.trigger('keyDown', { key });
        expect(await dropdownLayoutDriver.optionsLength()).toBe(options.length);
      });
    });

    it('should filter items according to predicate function when typing characters', async () => {
      const { inputDriver, dropdownLayoutDriver } = createDriver(
        <AutoComplete options={options} predicate={predicate} />,
      );
      await inputDriver.trigger('keyDown', { key: asciiA });
      expect(await dropdownLayoutDriver.optionsLength()).toBe(2);
    });

    it('should not display dropdown layout in case all options are filtered', async () => {
      const { inputDriver, dropdownLayoutDriver } = createDriver(
        <AutoComplete options={options} predicate={() => false} />,
      );
      await inputDriver.click();
      await inputDriver.trigger('keyDown', { key: asciiA });
      // expect(dropdownLayoutDriver.isShown()).toBeFalsy();
      expect(await dropdownLayoutDriver.optionsLength()).toBe(0);
    });

    it('should display empty state message in case all options are filtered', async () => {
      const emptyStateMessage = 'Empty state';
      const { inputDriver, dropdownLayoutDriver } = createDriver(
        <AutoComplete
          options={options}
          predicate={() => false}
          emptyStateMessage={emptyStateMessage}
        />,
      );

      await inputDriver.click();
      await inputDriver.trigger('keyDown', { key: asciiA });

      expect(await dropdownLayoutDriver.isShown()).toBeTruthy();
      expect(await dropdownLayoutDriver.optionsLength()).toBe(1);
      const option = (await dropdownLayoutDriver.options())[0];
      expect(await option.content()).toBe(emptyStateMessage);
      expect(await option.isDisabled()).toBeTruthy();
    });

    it('should show all items when focusing even if some text exist', async () => {
      const { dropdownLayoutDriver, inputDriver } = createDriver(
        <AutoComplete options={options} predicate={predicate} />,
      );
      await inputDriver.enterText('aaa');
      await inputDriver.focus();
      expect(await dropdownLayoutDriver.optionsLength()).toBe(options.length);
    });

    describe('testkit', () => {
      it('should exist', async () => {
        const div = document.createElement('div');
        const dataHook = 'myDataHook';
        const wrapper = div.appendChild(
          ReactTestUtils.renderIntoDocument(
            <div>
              <AutoComplete dataHook={dataHook} />
            </div>,
          ),
        );
        const autoCompleteTestkit = autoCompleteTestkitFactory({
          wrapper,
          dataHook,
        });
        expect(autoCompleteTestkit.driver.exists()).toBeTruthy();
        expect(autoCompleteTestkit.inputDriver.exists()).toBeTruthy();
        expect(autoCompleteTestkit.dropdownLayoutDriver.exists()).toBeTruthy();
      });
    });

    describe('enzyme testkit', () => {
      it('should exist', async () => {
        const dataHook = 'myDataHook';
        const wrapper = mount(<AutoComplete dataHook={dataHook} />);
        const autoCompleteTestkit = enzymeAutoCompleteTestkitFactory({
          wrapper,
          dataHook,
        });
        expect(autoCompleteTestkit.driver.exists()).toBeTruthy();
        expect(autoCompleteTestkit.inputDriver.exists()).toBeTruthy();
        expect(autoCompleteTestkit.dropdownLayoutDriver.exists()).toBeTruthy();
      });
    });
  }
});
