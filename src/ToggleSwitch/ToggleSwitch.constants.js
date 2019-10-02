import React from 'react';
import {
  ToggleOff,
  ToggleOn,
  ToggleOffSmall,
  ToggleOnSmall,
} from 'wix-ui-icons-common/system';

export const SKINS = {
  standard: 'standard',
  success: 'success',
  error: 'error',
};

export const SIZES = {
  small: 'small',
  medium: 'medium',
  large: 'large',
};

export const checkedIconMap = {
  [SIZES.small]: undefined,
  [SIZES.medium]: <ToggleOnSmall />,
  [SIZES.large]: <ToggleOn />,
};

export const uncheckedIconMap = {
  [SIZES.small]: undefined,
  [SIZES.medium]: <ToggleOffSmall />,
  [SIZES.large]: <ToggleOff />,
};
