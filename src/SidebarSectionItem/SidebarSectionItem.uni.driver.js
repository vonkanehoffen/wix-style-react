import { baseUniDriverFactory } from 'wix-ui-test-utils/base-driver';

import styles from './SidebarSectionItem.st.css';

export const getPrefix = base => base.$(`.${styles.prefix}`);
export const getSuffix = base => base.$(`.${styles.suffix}`);

export default base => {
  return {
    ...baseUniDriverFactory(base),

    getText: () => base.text(),
    getPrefix: () => getPrefix(base),
    getSuffix: () => getSuffix(base),

    hover: () => base.hover(),
  };
};
