import { toggleSwitchDriverFactory as publicDriverFactory } from '../ToggleSwitch.uni.driver';

export const toggleSwitchPrivateDriverFactory = base => {
  return {
    ...publicDriverFactory(base),

    // Add here driver methods that considered "private"
  };
};
