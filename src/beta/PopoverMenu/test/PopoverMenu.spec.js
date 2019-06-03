import React from 'react';
import {
  cleanup,
  createRendererWithUniDriver,
} from '../../../../test/utils/unit';

import PopoverMenu from '../PopoverMenu';
import { PopoverMenuPrivateDriver } from './PopoverMenu.private.uni.driver';
import IconButton from '../../../IconButton';
import { iconButtonDriverFactory } from '../../../IconButton/IconButton.uni.driver';
import More from '../../../new-icons/More';

describe('PopoverMenu', () => {
  const render = createRendererWithUniDriver(PopoverMenuPrivateDriver);

  afterEach(() => {
    cleanup();
  });

  const renderPopoverMenu = (props = {}) => (
    <PopoverMenu
      dataHook="random"
      triggerElement={({ onClick }) => (
        <IconButton dataHook="iconbutton" onClick={onClick}>
          <More />
        </IconButton>
      )}
      children={<PopoverMenu.MenuItem text="dark option" skin="dark" />}
      {...props}
    />
  );

  const renderPopoverMenuItem = (props = {}) => (
    <PopoverMenu.MenuItem text="dark option" skin="dark" {...props} />
  );

  const renderPopoverDivider = (props = {}) => (
    <PopoverMenu.Divider {...props} />
  );

  describe('`triggerElement` prop', () => {
    it('should open menu [when] direct React element is passed', async () => {
      const { driver } = render(
        renderPopoverMenu({
          triggerElement: <IconButton dataHook="iconbutton-custom" />,
        }),
      );

      const iconButton = await driver.getTriggerElement('iconbutton-custom');
      const iconButtonTestkit = iconButtonDriverFactory(iconButton);
      await iconButtonTestkit.click();

      expect(await driver.isMenuOpen()).toBe(true);
    });

    it('should open menu [when] render props function is used', async () => {
      const { driver } = render(
        renderPopoverMenu({
          triggerElement: ({ onClick }) => (
            <IconButton onClick={onClick} dataHook="iconbutton-custom" />
          ),
        }),
      );

      const iconButton = await driver.getTriggerElement('iconbutton-custom');
      const iconButtonTestkit = iconButtonDriverFactory(iconButton);
      await iconButtonTestkit.click();

      expect(await driver.isMenuOpen()).toBe(true);
    });
  });

  describe('`children` prop', () => {
    describe('PopoverMenu.Item', () => {
      describe('`onClick` prop', () => {
        it('should be called [when] clicked inside PopoverMenu', async () => {
          const onClick = jest.fn();
          const { driver } = render(
            renderPopoverMenu({
              children: renderPopoverMenuItem({ onClick }),
            }),
          );

          const iconButton = await driver.getTriggerElement('iconbutton');
          const iconButtonTestkit = iconButtonDriverFactory(iconButton);
          await iconButtonTestkit.click();

          expect(await driver.isMenuOpen()).toBe(true);
          await driver.clickAtChild(0);
          expect(onClick).toHaveBeenCalled();
        });
      });
    });

    describe('PopoverMenu.Divider', () => {
      it('should not throw errors [when] clicked', async () => {
        const onClick = jest.fn();
        const { driver } = render(
          renderPopoverMenu({
            children: renderPopoverDivider({ onClick }),
          }),
        );

        const iconButton = await driver.getTriggerElement('iconbutton');
        const iconButtonTestkit = iconButtonDriverFactory(iconButton);
        await iconButtonTestkit.click();

        expect(await driver.isMenuOpen()).toBe(true);
        await driver.clickAtChild(0);
        expect(onClick).not.toHaveBeenCalled();
      });
    });

    describe('String', () => {
      it('should be filtered out from rendering', async () => {
        const { driver } = render(
          renderPopoverMenu({
            children: [
              renderPopoverMenuItem(),
              renderPopoverMenuItem(),
              'string',
            ],
          }),
        );

        const iconButton = await driver.getTriggerElement('iconbutton');
        const iconButtonTestkit = iconButtonDriverFactory(iconButton);
        await iconButtonTestkit.click();

        expect(await driver.isMenuOpen()).toBe(true);
        expect(await driver.childrenCount()).toBe(2);
      });
    });

    describe('React element', () => {
      it('should render node based items', async () => {
        const { driver } = render(
          renderPopoverMenu({
            children: [
              renderPopoverMenuItem(),
              renderPopoverMenuItem(),
              <div>custom</div>,
            ],
          }),
        );

        const iconButton = await driver.getTriggerElement('iconbutton');
        const iconButtonTestkit = iconButtonDriverFactory(iconButton);
        await iconButtonTestkit.click();

        expect(await driver.isMenuOpen()).toBe(true);
        expect(await driver.childrenCount()).toBe(3);
      });
    });
  });
});
