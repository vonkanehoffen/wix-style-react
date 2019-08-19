import React from 'react';
import { createRendererWithUniDriver, cleanup } from '../../../test/utils/unit';
import eventually from 'wix-eventually';

import Swatches from '../Swatches';
import { swatchesPrivateDriverFactory } from './Swatches.private.uni.driver';
import SideMenu from '../../Deprecated/SideMenu';

describe('Swatches', () => {
  let onClick;
  const render = createRendererWithUniDriver(swatchesPrivateDriverFactory);

  beforeEach(() => {
    onClick = jest.fn();
  });

  afterEach(() => {
    cleanup();
  });

  it('should render swatches', async () => {
    const { driver } = render(<Swatches colors={['#fff', '#000']} />);

    expect(await driver.exists()).toBe(true);
    expect(await driver.getSwatchCount()).toEqual(2);
  });

  it('should call callback with color', async () => {
    const { driver } = render(
      <Swatches onClick={onClick} colors={['#ffffff', '#000000']} />,
    );
    const swatch = await driver.getSwatch(1);
    await swatch.click();

    expect(onClick).toBeCalledWith('#000000');
  });

  it('should indicate selected color', async () => {
    const { driver } = render(
      <Swatches selected={'#000000'} colors={['#ffffff', '#000000']} />,
    );

    expect(await driver.isSwatchSelectedAt(0)).toBe(false);
    expect(await driver.isSwatchSelectedAt(1)).toBe(true);
  });

  it('should remove duplicate colors', async () => {
    const { driver } = render(
      <Swatches colors={['red', '#FF0000', 'rgb(255, 0, 0)']} />,
    );

    expect(await driver.getSwatchCount()).toEqual(1);
  });

  describe('No Color', () => {
    it('should add no color option if prop given', async () => {
      const { driver } = render(<Swatches showClear colors={['#000000']} />);

      expect(await driver.getSwatchCount()).toBe(2);
      expect(await driver.isSwatchTransparentAt(0)).toBe(true);
    });

    it('should return empty string if clicked', async () => {
      const { driver } = render(
        <Swatches showClear onClick={onClick} colors={['#000000']} />,
      );
      const swatch = await driver.getSwatch(0);
      await swatch.click();

      expect(onClick).toBeCalledWith('');
    });

    it('should be selected if selected prop is not passed', async () => {
      const { driver } = render(<Swatches showClear colors={['#000000']} />);

      expect(await driver.isSwatchSelectedAt(0)).toBe(true);
    });

    it('should not add tooltip if showClearMessage is not given', async () => {
      const { driver } = render(<Swatches showClear colors={['#000000']} />);

      expect(await driver.hasTooltip()).toBe(false);
    });

    it('should accept showClearMessage and show in tooltip', async () => {
      const message = 'no color selected';
      const { driver } = render(
        <Swatches showClear showClearMessage={message} colors={['#000000']} />,
      );

      expect(await driver.getTooltipText()).toBe(message);
    });

    describe('Add color button', () => {
      it('should be rendered when showAddButton props is true', async () => {
        const { driver } = render(
          <Swatches colors={['#000000']} showAddButton />,
        );

        expect(await driver.addButtonExists()).toBe(false);
      });

      it('should not show color picker initially', async () => {
        const { driver } = render(
          <Swatches colors={['#000000']} showAddButton />,
        );

        expect(await driver.isColorPickerShown()).toBe(false);
      });

      it('should show color picker on add button click', async () => {
        const { driver } = render(
          <Swatches colors={['#000000']} showAddButton />,
        );

        await driver.clickAddColorButton();
        await eventually(async () => {
          expect(await driver.isColorPickerShown()).toBe(true);
        });
      });

      it('should call onAdd callback when selecting a color in color picker', async () => {
        const addSpy = jest.fn();
        const { driver } = render(
          <Swatches colors={['#000000']} showAddButton onAdd={addSpy} />,
        );

        await driver.clickAddColorButton();
        await driver.confirmSelectedColor();

        expect(addSpy).toHaveBeenCalledTimes(1);
        expect(addSpy).toBeCalledWith('#3899EB');
      });

      it('should close color picker when clicking cancel button', async () => {
        const addSpy = jest.fn();
        const { driver } = render(
          <Swatches colors={['#000000']} showAddButton onAdd={addSpy} />,
        );

        await driver.clickAddColorButton();
        await eventually(async () => {
          expect(await driver.isColorPickerShown()).toBe(true);
        });
        await driver.cancelColorPicker();

        expect(addSpy).not.toBeCalled();

        await eventually(async () => {
          expect(await driver.isColorPickerShown()).toBe(false);
        });
      });

      it('should not add tooltip if addButtonTooltip is not given', async () => {
        const { driver } = render(
          <Swatches colors={['#000000']} showAddButton />,
        );

        expect(await driver.hasAddButtonTooltip()).toBe(false);
      });

      it('should accept showClearMessage and show in tooltip', async () => {
        const message = 'no color selected';
        const { driver } = render(
          <Swatches
            colors={['#000000']}
            showAddButton
            addButtonTooltip={message}
          />,
        );

        expect(await driver.getAddButtonTooltipText()).toBe(message);
      });
    });
  });
});
