import { baseUniDriverFactory } from 'wix-ui-test-utils/base-driver';
import { ReactBase } from '../../test/utils/unidriver/ReactBase';

export const getContent = base => base.$('.public-DraftEditor-content');

export default (base, body) => {
  return {
    ...baseUniDriverFactory(base, body),
    getContent: () => getContent(base).text(),
    enterText: async text => {
      const contentElement = await getContent(base).getNative(); // eslint-disable-line no-restricted-properties

      // TODO: implement for puppeteer. Throw error if type is not handled
      if (base.type === 'react') {
        ReactBase(base).enterText({ data: text });
      } else if (base.type === 'protractor') {
        contentElement.sendKeys(text);
      }
    },
  };
};
