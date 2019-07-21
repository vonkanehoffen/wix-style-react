import { sidebarSectionDividerDriverFactory as publicDriverFactory } from '../SidebarSectionDivider.uni.driver';

export const sidebarSectionDividerPrivateDriverFactory = base => {
  return {
    ...publicDriverFactory(base),

    // Add here driver methods that considered "private"
  };
};
