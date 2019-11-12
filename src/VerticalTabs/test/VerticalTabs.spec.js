import React from 'react';
import { createRendererWithUniDriver, cleanup } from '../../../test/utils/unit';

import VerticalTabs from '../VerticalTabs';
import { verticalTabsPrivateDriverFactory } from './VerticalTabs.private.uni.driver';

describe('VerticalTabs', () => {
  const render = createRendererWithUniDriver(verticalTabsPrivateDriverFactory);

  afterEach(() => {
    cleanup();
  });

  it('should render', async () => {
    const { driver } = render(<VerticalTabs>Vertical Tabs</VerticalTabs>);

    expect(await driver.exists()).toBeTruthy();
  });
});
