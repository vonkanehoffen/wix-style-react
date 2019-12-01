import React from 'react';
import ToggleSwitch from '../ToggleSwitch';
import toggleSwitchDriverFactory from '../ToggleSwitch.driver';
import { createDriverFactory } from 'wix-ui-test-utils/driver-factory';

describe('ToggleSwitch', () => {
  const createDriver = createDriverFactory(toggleSwitchDriverFactory);

  describe('block props', () => {
    it('should not pass inline styles prop', () => {
      const styles = { root: { color: 'green' } };
      const wrapper = createDriver(
        <ToggleSwitch styles={styles} size="small" />,
      );
      expect(wrapper.getRootStyles().color).not.toBe('green');
    });
  });
});
