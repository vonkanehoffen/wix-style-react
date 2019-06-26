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

        it('should be called only once', async () => {
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
          const option = await driver.getMenuItem(0);
          await option.click(); // Imitates real user click; Using driver.clickAtChild(0) does not simulate real click
          expect(onClick).toHaveBeenCalledTimes(1);
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

    describe('Accessibility', () => {
      describe('First focused item', () => {
        it('should focus first item in menu [when] when trigger element is invoked with a key', async () => {
          const { driver } = render(
            renderPopoverMenu({ children: renderPopoverMenuItem() }),
          );

          await driver.keyDownTrigger('Enter');
          expect(await driver.isMenuOpen()).toBe(true);

          expect(await driver.getMenuItem(0)).toBe(document.activeElement);
        });
        it('should focus first available item in menu [when] when first element of menu is disabled', async () => {
          const { driver } = render(
            renderPopoverMenu({
              children: [
                renderPopoverMenuItem({ disabled: true }),
                renderPopoverMenuItem(),
              ],
            }),
          );

          await driver.keyDownTrigger('Enter');
          expect(await driver.isMenuOpen()).toBe(true);

          expect(await driver.getMenuItem(1)).toBe(document.activeElement);
        });
      });

      describe('Menu', () => {
        it('should open [when]  when triggered with key Enter', async () => {
          const dataHook = 'iconbutton-custom';
          const { driver } = render(
            renderPopoverMenu({
              triggerElement: <IconButton dataHook={dataHook} />,
            }),
          );
          await driver.keyDownTrigger('Enter');
          expect(await driver.isMenuOpen()).toBe(true);
        });

        it('should be openen [when] when triggered with key Space', async () => {
          const dataHook = 'iconbutton-custom';
          const { driver } = render(
            renderPopoverMenu({
              triggerElement: <IconButton dataHook={dataHook} />,
            }),
          );
          await driver.keyDownTrigger(' ');
          expect(await driver.isMenuOpen()).toBe(true);
        });

        it('should be closed [when] one of the menu items triggered with key Escape', async () => {
          const dataHook = 'iconbutton-custom';
          const { driver } = render(
            renderPopoverMenu({
              triggerElement: <IconButton dataHook={dataHook} />,
            }),
          );
          await driver.keyDownTrigger('Enter');
          expect(await driver.isMenuOpen()).toBe(true);

          await driver.keyDownTrigger('Escape');
          expect(await driver.isMenuOpen()).toBe(false);
        });
      });

      describe('Roving TabIndex', () => {
        it('focused item should have tabIndex set to 0', async () => {
          const { driver } = render(
            renderPopoverMenu({ children: renderPopoverMenuItem() }),
          );

          await driver.keyDownTrigger('Enter');
          expect(await driver.isMenuOpen()).toBe(true);

          expect((await driver.getMenuItem(0)).tabIndex).toBe(0);
        });

        it('not focused items should have tabIndex -1', async () => {
          const { driver } = render(
            renderPopoverMenu({
              children: [renderPopoverMenuItem(), renderPopoverMenuItem()],
            }),
          );

          await driver.keyDownTrigger('Enter');
          expect(await driver.isMenuOpen()).toBe(true);

          expect((await driver.getMenuItem(1)).tabIndex).toBe(-1);
        });

        it('navigating to next item should set next item with tabIndex to 0', async () => {
          const { driver } = render(
            renderPopoverMenu({
              children: [renderPopoverMenuItem(), renderPopoverMenuItem()],
            }),
          );

          await driver.keyDownTrigger('Enter');
          expect(await driver.isMenuOpen()).toBe(true);
          await driver.keyDownOption(0, 'ArrowDown');

          expect((await driver.getMenuItem(0)).tabIndex).toBe(-1);
          expect((await driver.getMenuItem(1)).tabIndex).toBe(0);
        });

        it('navigating to next item [when] item in front is divider should ignore it and and jump to next item ', async () => {
          const { driver } = render(
            renderPopoverMenu({
              children: [
                renderPopoverMenuItem(),
                renderPopoverDivider(),
                renderPopoverMenuItem(),
              ],
            }),
          );

          await driver.keyDownTrigger('Enter');
          expect(await driver.isMenuOpen()).toBe(true);
          await driver.keyDownOption(0, 'ArrowDown');

          expect((await driver.getMenuItem(0)).tabIndex).toBe(-1);
          expect((await driver.getMenuItem(2)).tabIndex).toBe(0);
        });

        it('navigating to next item [when] item in front is disabled should ignore it and jump to next item', async () => {
          const { driver } = render(
            renderPopoverMenu({
              children: [
                renderPopoverMenuItem(),
                renderPopoverMenuItem({ disabled: true }),
                renderPopoverMenuItem(),
              ],
            }),
          );

          await driver.keyDownTrigger('Enter');
          expect(await driver.isMenuOpen()).toBe(true);
          await driver.keyDownOption(0, 'ArrowDown');

          expect((await driver.getMenuItem(0)).tabIndex).toBe(-1);
          expect((await driver.getMenuItem(1)).tabIndex).toBe(-1);
          expect((await driver.getMenuItem(2)).tabIndex).toBe(0);
        });

        it('navigating to next item [when] there is no options left should go back to first ', async () => {
          const { driver } = render(
            renderPopoverMenu({
              children: [
                renderPopoverMenuItem(),
                renderPopoverMenuItem(),
                renderPopoverMenuItem(),
              ],
            }),
          );

          await driver.keyDownTrigger('Enter');
          expect(await driver.isMenuOpen()).toBe(true);
          await driver.keyDownOption(0, 'ArrowDown');

          expect((await driver.getMenuItem(0)).tabIndex).toBe(-1);
          expect((await driver.getMenuItem(1)).tabIndex).toBe(0);

          await driver.keyDownOption(1, 'ArrowDown');
          expect((await driver.getMenuItem(0)).tabIndex).toBe(-1);
          expect((await driver.getMenuItem(1)).tabIndex).toBe(-1);
          expect((await driver.getMenuItem(2)).tabIndex).toBe(0);

          await driver.keyDownOption(2, 'ArrowDown');

          expect((await driver.getMenuItem(0)).tabIndex).toBe(0);
          expect((await driver.getMenuItem(1)).tabIndex).toBe(-1);
          expect((await driver.getMenuItem(2)).tabIndex).toBe(-1);
        });

        it('navigating to previous item [when] there is no options in front should jumpt to last item', async () => {
          const { driver } = render(
            renderPopoverMenu({
              children: [
                renderPopoverMenuItem(),
                renderPopoverMenuItem(),
                renderPopoverMenuItem(),
              ],
            }),
          );

          await driver.keyDownTrigger('Enter');
          expect(await driver.isMenuOpen()).toBe(true);
          await driver.keyDownOption(0, 'ArrowUp');

          expect((await driver.getMenuItem(0)).tabIndex).toBe(-1);
          expect((await driver.getMenuItem(1)).tabIndex).toBe(-1);
          expect((await driver.getMenuItem(2)).tabIndex).toBe(0);
        });
      });
    });
  });
});
