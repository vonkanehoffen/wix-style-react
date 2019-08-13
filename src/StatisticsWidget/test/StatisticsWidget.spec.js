import React from 'react';

import { cleanup, createRendererWithUniDriver } from '../../../test/utils/unit';

import StatisticsWidget from '../StatisticsWidget';
import { statisticsWidgetPrivateDriverFactory } from './StatisticsWidget.private.uni.driver';

describe('StatisticsWidget', () => {
  const render = createRendererWithUniDriver(
    statisticsWidgetPrivateDriverFactory,
  );

  afterEach(() => {
    cleanup();
  });

  it('should render', async () => {
    const { driver } = render(<StatisticsWidget />);

    expect(await driver.exists()).toBeTruthy();
  });

  describe('With one item', () => {
    let data;

    beforeEach(() => {
      data = {
        statistics: [
          {
            title: 'First title',
            subtitle: 'First subtitle',
            percentage: 12,
          },
        ],
      };
    });

    it('should render title', async () => {
      const { driver } = render(<StatisticsWidget {...data} />);
      const count = await driver.getItemsCount();

      expect(count).toBe(1);
    });

    it('should render title based on props', async () => {
      data.statistics[0].title = 'Changed title';

      const { driver } = render(<StatisticsWidget {...data} />);
      const title = await driver.getTitle(0);

      expect(title).toBe('Changed title');
    });

    describe('Subtitle', () => {
      it('should not exist by default', async () => {
        data.statistics[0].subtitle = undefined;

        const { driver } = render(<StatisticsWidget {...data} />);
        const subtitle = await driver.getSubtitle(0);

        expect(subtitle).toBeNull();
      });

      it('should render based on props', async () => {
        data.statistics[0].subtitle = 'Changed subtitle';

        const { driver } = render(<StatisticsWidget {...data} />);
        const subtitle = await driver.getSubtitle(0);

        expect(subtitle).toBe('Changed subtitle');
      });
    });

    describe('Info icon', () => {
      it('should not exist by default', async () => {
        const { driver } = render(<StatisticsWidget {...data} />);
        const info = await driver.isInfoExists(0);

        expect(info).toBeFalsy();
      });

      it('should exist when description is set', async () => {
        data.statistics[0].subtitleContentInfo = 'This is a description';

        const { driver } = render(<StatisticsWidget {...data} />);
        const info = await driver.isInfoExists(0);

        expect(info).toBeTruthy();
      });

      it('should contain passed text', async () => {
        const description = 'This is a description';
        data.statistics[0].subtitleContentInfo = description;

        const { driver } = render(<StatisticsWidget {...data} />);

        expect(await driver.getInfo(0)).toBe(description);
      });

      it('should be null, when there is no description', async () => {
        data.statistics[0].subtitleContentInfo = undefined;

        const { driver } = render(<StatisticsWidget {...data} />);

        expect(await driver.getInfo(0)).toBeNull();
      });
    });

    describe('Percents', () => {
      it('should not exist by default', async () => {
        data.statistics[0].percentage = undefined;

        const { driver } = render(<StatisticsWidget {...data} />);
        const percentage = await driver.getPercentage(0);

        expect(percentage).toBeNull();
      });

      it('should exist when is set', async () => {
        const { driver } = render(<StatisticsWidget {...data} />);
        const percentage = await driver.getPercentage(0);

        expect(percentage).toBe(12);
      });

      describe('Reverted percentage', () => {
        it('should be false when unset', async () => {
          const { driver } = render(<StatisticsWidget {...data} />);
          const isInverted = await driver.isPercentageInverted(0);

          expect(isInverted).toBe(false);
        });

        it('should be false when set to false', async () => {
          data.statistics[0].invertedPercentage = false;

          const { driver } = render(<StatisticsWidget {...data} />);
          const isInverted = await driver.isPercentageInverted(0);

          expect(isInverted).toBe(false);
        });

        it('should be true when set to true', async () => {
          data.statistics[0].invertedPercentage = true;

          const { driver } = render(<StatisticsWidget {...data} />);
          const isInverted = await driver.isPercentageInverted(0);

          expect(isInverted).toBe(true);
        });
      });
    });
  });

  describe('With more then 5 items', () => {
    let data;

    beforeEach(() => {
      global.console.warn = jest.fn();
    });

    beforeEach(() => {
      data = {
        statistics: [
          {
            title: '1k',
          },
          {
            title: '2k',
          },
          {
            title: '3k',
          },
          {
            title: '4k',
          },
          {
            title: '5k',
          },
          {
            title: '6k',
          },
          {
            title: '7k',
          },
        ],
      };
    });

    it('should print warning in a console', async () => {
      render(<StatisticsWidget {...data} />);

      expect(global.console.warn).toBeCalled();
    });

    it('should render first 5 items', async () => {
      const { driver } = render(<StatisticsWidget {...data} />);
      const titleFirst = await driver.getTitle(0);
      const titleLast = await driver.getTitle(4);

      const count = await driver.getItemsCount();

      expect(count).toBe(5);
      expect(titleFirst).toBe('1k');
      expect(titleLast).toBe('5k');
    });
  });

  describe('Mouse and keyboard actions', () => {
    let data;
    const onClick1 = jest.fn();
    const onClick2 = jest.fn();
    const onClick3 = jest.fn();

    beforeEach(() => {
      data = {
        statistics: [
          {
            title: '1st title',
            subtitle: '1st subtitle',
            percentage: 12,
            onClick: onClick1,
          },
          {
            title: '2nd title',
            subtitle: '2nd subtitle',
            percentage: 12,
          },
          {
            title: '3rd title',
            subtitle: '3rd subtitle',
            percentage: 12,
            onClick: onClick2,
          },
          {
            title: '4th title',
            subtitle: '4th subtitle',
            percentage: 12,
            onClick: onClick3,
          },
        ],
      };
    });

    afterEach(() => {
      onClick1.mockReset();
      onClick2.mockReset();
      onClick3.mockReset();
    });

    it('should not receive focus, when prop not passed', async () => {
      const { driver } = render(<StatisticsWidget {...data} />);

      expect(await driver.hasTabIndex(1)).toBe(false);
    });

    it('should receive focus, when prop is passed', async () => {
      const { driver } = render(<StatisticsWidget {...data} />);

      expect(await driver.hasTabIndex(0)).toBe(true);
      expect(await driver.hasTabIndex(2)).toBe(true);
      expect(await driver.hasTabIndex(3)).toBe(true);
    });

    it('should not call onclick, when prop not passed', async () => {
      const { driver } = render(<StatisticsWidget {...data} />);
      await driver.clickStatistics(1);

      expect(onClick1).toBeCalledTimes(0);
    });

    it('should call onClick', async () => {
      const { driver } = render(<StatisticsWidget {...data} />);
      await driver.clickStatistics(0);

      expect(onClick1).toBeCalledTimes(1);
    });

    it('should call a callback on Space key press', async () => {
      const { driver } = render(<StatisticsWidget {...data} />);
      await driver.pressSpaceKey(0);
      await driver.pressSpaceKey(2);
      await driver.pressSpaceKey(3);

      expect(onClick1).toBeCalledTimes(1);
      expect(onClick2).toBeCalledTimes(1);
      expect(onClick3).toBeCalledTimes(1);
    });

    it('should call a callback on Enter key press', async () => {
      const { driver } = render(<StatisticsWidget {...data} />);
      await driver.pressEnterKey(0);
      await driver.pressEnterKey(2);
      await driver.pressEnterKey(3);

      expect(onClick1).toBeCalledTimes(1);
      expect(onClick2).toBeCalledTimes(1);
      expect(onClick3).toBeCalledTimes(1);
    });

    it('should not call a callback on an item without onClick', async () => {
      const { driver } = render(<StatisticsWidget {...data} />);
      await driver.pressSpaceKey(1);
      await driver.pressEnterKey(1);

      expect(onClick1).toBeCalledTimes(0);
    });
  });
});
