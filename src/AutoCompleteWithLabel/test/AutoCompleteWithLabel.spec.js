import React from 'react';
import { createRendererWithUniDriver, cleanup } from '../../../test/utils/unit';

import AutoCompleteWithLabel from '../AutoCompleteWithLabel';
import { autoCompleteWithLabelPrivateDriverFactory } from './AutoCompleteWithLabel.private.uni.driver';

describe('AutoCompleteWithLabel', () => {
  const render = createRendererWithUniDriver(
    autoCompleteWithLabelPrivateDriverFactory,
  );

  afterEach(() => {
    cleanup();
  });

  it('should render with value', async () => {
    const value = 'my value';
    const { driver } = render(
      <AutoCompleteWithLabel label="label" value={value} options={[]} />,
    );
    const currentValue = await driver.getValue();
    expect(currentValue).toEqual(value);
  });

  it('should render without value', async () => {
    const { driver } = render(
      <AutoCompleteWithLabel label="label" options={[]} />,
    );
    const currentValue = await driver.getValue();
    expect(currentValue).toBeFalsy();
  });

  it('should verify that label is rendered', async () => {
    const label = 'my label';
    const { driver } = render(<AutoCompleteWithLabel label={label} />);
    const currentLabel = await driver.getLabelText();
    expect(currentLabel).toEqual(label);
  });

  it('should filter options when typing characters', async () => {
    const options = [
      { id: 0, value: 'aaa' },
      { id: 1, value: 'abb' },
      { id: 2, value: 'bbb' },
      { id: 3, value: 'bcc' },
    ];
    const { driver } = render(
      <AutoCompleteWithLabel label="my autocomplete" options={options} />,
    );
    await driver.enterText('a');
    expect(await driver.optionsLength()).toEqual(2);
    await driver.enterText('aa');
    expect(await driver.optionsLength()).toEqual(1);
  });

  it('should trigger onChange if provided', async () => {
    const onChange = jest.fn();
    const options = [
      { id: 0, value: 'aaa' },
      { id: 1, value: 'abb' },
      { id: 2, value: 'bbb' },
      { id: 3, value: 'bcc' },
    ];
    const { driver } = render(
      <AutoCompleteWithLabel
        label="my autocomplete"
        options={options}
        onChange={onChange}
      />,
    );
    await driver.enterText('a');
    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveBeenCalledWith(
      expect.objectContaining({
        target: expect.objectContaining({ value: 'a' }),
      }),
    );
  });
});
