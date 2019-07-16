import eyes from 'eyes.it';
import autoExampleDriver from 'wix-storybook-utils/AutoExampleDriver';
import {
  createStoryUrl,
  waitForVisibilityOf,
} from 'wix-ui-test-utils/protractor';
import { tooltipTestkitFactory } from 'wix-ui-core/dist/standalone/src/testkit/protractor';
import { textTestkitFactory } from '../../../testkit/protractor';
import { storySettings } from './storySettings';

describe('Text', () => {
  const storyUrl = createStoryUrl({
    kind: storySettings.category,
    story: storySettings.storyName,
    withExamples: false,
  });
  const storyUrlWithExamples = createStoryUrl({
    kind: storySettings.category,
    story: storySettings.storyName,
    withExamples: true,
  });

  const init = async ({ url, dataHook }) => {
    await browser.get(url);
    const driver = textTestkitFactory({ dataHook });
    await waitForVisibilityOf(driver.element(), 'Cannot find Text');
    return driver;
  };

  describe('AutoExample', () => {
    let driver;
    beforeAll(async () => {
      driver = await init({ url: storyUrl, dataHook: 'storybook-text' });
    });
    afterEach(() => autoExampleDriver.reset());

    eyes.it('should display correct content', async () => {
      expect(await driver.getText()).toBe('Some text');
    });
  });

  describe('with tooltip', () => {
    eyes.it(
      'should not show tooltip on hover when text is not truncated with ellipses',
      async () => {
        const dataHook = 'storybook-text';
        const driver = await init({ url: storyUrl, dataHook });
        const tooltipDriver = tooltipTestkitFactory({ dataHook });
        await waitForVisibilityOf(driver.element(), 'Cannot find Text');
        expect(await tooltipDriver.isContentElementExists()).toBeFalsy();
        await tooltipDriver.mouseEnter();
        expect(await tooltipDriver.isContentElementExists()).toBeFalsy();
      },
    );

    eyes.it(
      'should show tooltip on hover when text is truncated with ellipses',
      async () => {
        const dataHook = 'text-with-ellipses';
        const driver = await init({ url: storyUrlWithExamples, dataHook });
        const tooltipDriver = tooltipTestkitFactory({ dataHook });
        await waitForVisibilityOf(driver.element(), 'Cannot find Text');
        expect(await tooltipDriver.isContentElementExists()).toBeFalsy();
        await tooltipDriver.mouseEnter();
        expect(await tooltipDriver.isContentElementExists()).toBeTruthy();
      },
    );
  });
});
