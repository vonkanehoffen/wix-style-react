import * as React from 'react';
import {
  ToggleSwitchProps as CoreToggleSwitchProps
} from 'wix-ui-core/dist/src/components/toggle-switch';
import { ToggleSwitchProps as BoToggleSwitchProps } from 'wix-ui-backoffice/dist/src/components/ToggleSwitch/ToggleSwitch';
import { WixComponentProps } from 'wix-ui-core/dist/src/createHOC';

export interface ToggleSwitchProps extends BoToggleSwitchProps, CoreToggleSwitchProps, WixComponentProps {}

declare const ToggleSwitch: React.FunctionComponent<ToggleSwitchProps>;

export default ToggleSwitch;