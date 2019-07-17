import React from 'react';

import SidebarSectionDivider from '../SidebarSectionDivider';
import { createRendererWithUniDriver, cleanup } from '../../../test/utils/unit';
import { sidebarSectionDividerPrivateDriverFactory } from './SidebarSectionDivider.private.uni.driver';

describe('SidebarSectionDivider', () => {
  const render = createRendererWithUniDriver(
    sidebarSectionDividerPrivateDriverFactory,
  );

  afterEach(() => {
    cleanup();
  });

  it('should render', async () => {
    const { driver } = render(<SidebarSectionDivider />);

    expect(await driver.exists()).toBeTruthy();
  });

  it('should render as full width', async () => {
    const { driver } = render(<SidebarSectionDivider fullWidth />);

    expect(await driver.isFullWidth()).toBeTruthy();
  });
});
