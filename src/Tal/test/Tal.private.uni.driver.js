import { talDriverFactory as publicDriverFactory } from '../Tal.uni.driver';

export const talPrivateDriverFactory = base => {
  return {
    ...publicDriverFactory(base),

    // Add here driver methods that considered "private"
  };
};
