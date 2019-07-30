import React from 'react';
import {
  createRendererWithDriver,
  createRendererWithUniDriver,
  cleanup,
} from '../../test/utils/react';
import Popover from './Popover';
import popoverDriverFactory from './Popover.driver';
import popoverUniDriverFactory from './Popover.uni.driver';

describe('Popover', () => {
  describe('[sync]', () => {
    runTests(createRendererWithDriver(popoverDriverFactory));
  });

  describe('[async]', () => {
    runTests(createRendererWithUniDriver(popoverUniDriverFactory));
  });

  function runTests(render) {
    afterEach(() => cleanup());
    it("should inherit core's driver methods", async () => {
      const onClickFn = jest.fn();

      const { driver } = render(
        <Popover shown onClick={onClickFn}>
          <Popover.Element>I am the trigger!</Popover.Element>
          <Popover.Content>I am the content!</Popover.Content>
        </Popover>,
      );

      expect(await driver.isTargetElementExists()).toBe(true);
      expect(await driver.isContentElementExists()).toBe(true);

      await driver.click();
      expect(onClickFn).toHaveBeenCalledTimes(1);
    });

    describe('propTypes validation', () => {
      let consoleErrorSpy;

      beforeEach(() => {
        consoleErrorSpy = jest
          .spyOn(global.console, 'error')
          .mockImplementation(jest.fn());
      });

      it('should throw a PropType error when not provided with Popover.Element', async () => {
        render(
          <Popover>
            <Popover.Content>I am the content!</Popover.Content>
          </Popover>,
        );

        expect(consoleErrorSpy).toHaveBeenCalledWith(
          expect.stringContaining(
            'Warning: Failed prop type: Invalid children provided, <Popover.Element/> must be provided',
          ),
        );
      });

      it('should throw a PropType error when not provided with Popover.Content', async () => {
        render(
          <Popover>
            <Popover.Element>I am the Element!</Popover.Element>
          </Popover>,
        );

        expect(consoleErrorSpy).toHaveBeenCalledWith(
          expect.stringContaining(
            'Warning: Failed prop type: Invalid children provided, <Popover.Content/> must be provided',
          ),
        );
      });

      it('should throw a PropType error when provided with unknown child', async () => {
        render(
          <Popover>
            <Popover.Element>I am the Element!</Popover.Element>
            <Popover.Content>I am the content!</Popover.Content>
            <div>Who am I? What am I?</div>
          </Popover>,
        );

        expect(consoleErrorSpy).toHaveBeenCalledWith(
          expect.stringContaining(
            'Warning: Failed prop type: Invalid children provided, unknown child <div/> supplied',
          ),
        );
      });
    });
  }
});
