import { baseUniDriverFactory } from 'wix-ui-test-utils/base-driver';

import styles from './SidebarSectionDivider.st.css';

export const sidebarSectionDividerDriverFactory = base => {
  return {
    ...baseUniDriverFactory(base),

    isFullWidth: () => base.hasClass(`${styles.fullWidth}`),
  };
};
