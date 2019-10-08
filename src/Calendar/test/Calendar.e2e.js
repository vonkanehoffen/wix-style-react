import {
  calendarTestkitFactory,
  waitForVisibilityOf,
} from '../../../testkit/protractor';
import { createStoryUrl } from '../../../test/utils/storybook-helpers';
import { TESTS_PREFIX } from '../../../stories/storiesHierarchy';

describe('Calendar', () => {
  const storyUrl = ({ selectedDays, numOfMonths }) => {
    const baseUrl = createStoryUrl({
      kind: `${TESTS_PREFIX}/3. Inputs/3.13 Calendar`,
      story: '1. selectedDays',
    });
    return `${baseUrl}&selectedDays=${global.encodeURIComponent(
      JSON.stringify(selectedDays),
    )}&numOfMonths=${numOfMonths || 1}`;
  };
  const dataHook = 'calendar';
  const driver = calendarTestkitFactory({ dataHook });

  it('should navigate to previous month', async () => {
    await browser.get(
      storyUrl({
        selectedDays: new Date('2017/06/01'),
      }),
    );
    await waitForVisibilityOf(driver.getElement(), 'Cannot find Calendar');
    await driver.prevMonth(); // May
    expect(await driver.getMonthCaption()).toBe('May');
  });
});
