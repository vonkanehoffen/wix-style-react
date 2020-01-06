import React from 'react';
import { createUniDriverFactory } from 'wix-ui-test-utils/uni-driver-factory';
import publicDriverFactory from '../VariableInput.uni.driver';
import VariableInput from '../VariableInput';

describe('VariableInput', () => {
  const createDriver = createUniDriverFactory(publicDriverFactory);
  const variableEntity = {
    text: 'Page name',
    value: 'page.name',
  };
  const variableParser = value =>
    value === variableEntity.value ? variableEntity.text : false;

  describe('initialValue', () => {
    it('should render the text when `initialValue` prop is plain text', async () => {
      const text = 'Some text';
      const driver = createDriver(
        <VariableInput initialValue={text} variableParser={variableParser} />,
      );
      expect(await driver.exists()).toBe(true);
      expect(await driver.getContent()).toBe(text);
    });
  });
  describe('variableParser', () => {
    it('should render the text when `initialValue` prop contains valid variables', async () => {
      const driver = createDriver(
        <VariableInput
          initialValue={`hello world {{page.name}}`}
          variableParser={variableParser}
        />,
      );
      expect(await driver.getContent()).toBe('hello world  Page name ');
    });
    it('should keep text as is if variable not valid in the parser', async () => {
      const driver = createDriver(
        <VariableInput
          initialValue={`hello world {{test.val}}`}
          variableParser={variableParser}
        />,
      );
      expect(await driver.getContent()).toBe('hello world {{test.val}}');
    });
  });
  describe('insertVariable', () => {
    it('should invoke `onSubmit` with variable after insert variable', async () => {
      const text = 'Some text';
      let myRef = null;
      const driver = createDriver(
        <VariableInput
          ref={ref => {
            myRef = ref;
          }}
        />,
      );
      expect(await driver.getContent()).toBe('');
      myRef.insertVariable(text);
      expect(await driver.getContent()).toBe(` ${text}  `);
    });
  });
  describe('setValue', () => {
    it('should update text while using `setValue`', async () => {
      const text = 'Some text';
      let myRef = null;
      const driver = createDriver(
        <VariableInput
          ref={ref => {
            myRef = ref;
          }}
        />,
      );
      expect(await driver.getContent()).toBe('');
      myRef.setValue(text);
      expect(await driver.getContent()).toBe(`${text}`);
    });
  });
  describe('onSubmit', () => {
    it('should invoke `onSubmit` with variable after `insertVariable`', async () => {
      const callback = jest.fn();
      const text = 'Some text';
      const expectedHtmlValue = `{{${text}}} `;
      let myRef = null;
      const driver = createDriver(
        <VariableInput
          onSubmit={callback}
          ref={ref => {
            myRef = ref;
          }}
        />,
      );
      expect(await driver.getContent()).toBe('');
      myRef.insertVariable(text);
      expect(await driver.getContent()).toBe(` ${text}  `);
      expect(callback).toHaveBeenCalledWith(expectedHtmlValue);
    });
    it('should invoke `onSubmit` with variable after `setValue`', async () => {
      const callback = jest.fn();
      const text = 'Some text {{page.name}}';
      const expectedHtmlValue = `Some text  Page name `;
      let myRef = null;
      const driver = createDriver(
        <VariableInput
          onSubmit={callback}
          variableParser={variableParser}
          ref={ref => {
            myRef = ref;
          }}
        />,
      );
      expect(await driver.getContent()).toBe('');
      myRef.setValue(text);
      expect(await driver.getContent()).toBe(expectedHtmlValue);
      expect(callback).toHaveBeenCalledWith(text);
    });
    it('should not invoke `onSubmit` while typing', async () => {
      const callback = jest.fn();
      const text = 'Some text {{page.name}}';

      const driver = createDriver(
        <VariableInput onSubmit={callback} variableParser={variableParser} />,
      );
      driver.enterText(text);

      expect(callback).not.toHaveBeenCalled();
    });
  });
  describe('variableTemplate', () => {
    it('should render the text when `initialValue` prop is plain text', async () => {
      const callback = jest.fn();
      const text = 'Some text $(page.name)';
      const expectedHtmlValue = `Some text  Page name `;
      let myRef = null;
      const driver = createDriver(
        <VariableInput
          onSubmit={callback}
          variableParser={variableParser}
          variableTemplate={{ prefix: '$(', suffix: ')' }}
          ref={ref => {
            myRef = ref;
          }}
        />,
      );
      expect(await driver.getContent()).toBe('');
      myRef.setValue(text);
      expect(await driver.getContent()).toBe(expectedHtmlValue);
      expect(callback).toHaveBeenCalledWith(text);
    });
  });
});
