import { eyesItInstance } from '../../../test/utils/eyes-it';
import {
  waitForVisibilityOf,
  scrollToElement,
} from 'wix-ui-test-utils/protractor';
import { createTestStoryUrl } from '../../../test/utils/storybook-helpers';
import { stepperTestkitFactory } from '../../../testkit/protractor';
import { storySettings } from './storySettings';

const createStoryUrl = testName =>
  createTestStoryUrl({ ...storySettings, testName });
const testStoryNames = storySettings.testStoryNames;
describe('Stepper', () => {
  const eyes = eyesItInstance();
  let driver;

  const createDriver = async (dataHook = storySettings.dataHook) => {
    driver = stepperTestkitFactory({ dataHook });

    await waitForVisibilityOf(await driver.element(), 'Cannot find Stepper');
    await scrollToElement(await driver.element());

    return driver;
  };

  beforeEach(async () => {
    await browser.get(createStoryUrl(testStoryNames.WINDOW_RESIZE));
    await createDriver();
  });

  describe('on window resize', () => {
    eyes.it('should be rerender with step sizes adapted', async () => {
      await browser.driver
        .manage()
        .window()
        .setSize(800, 800);
    });
  });
});
