import React from 'react';
import { createRendererWithUniDriver, cleanup } from '../../../test/utils/unit';

import Tal from '../Tal';
import { talPrivateDriverFactory } from './Tal.private.uni.driver';

describe('Tal', () => {
  const render = createRendererWithUniDriver(talPrivateDriverFactory);

  afterEach(() => {
    cleanup();
  });

  it('should render', async () => {
    const { driver } = render(<Tal />);

    expect(await driver.exists()).toBe(true);
    expect(await driver.getButtonText()).toEqual('Click me!');
  });

  it('should increment', async () => {
    const { driver } = render(<Tal />);

    await driver.clickButton();
    await driver.clickButton();

    expect(await driver.getCountText()).toEqual(
      'You clicked this button even number (2) of times',
    );
  });

  it('should allow changing the button text', async () => {
    const { driver } = render(<Tal buttonText="Press me" />);

    expect(await driver.getButtonText()).toEqual('Press me');
  });
});
