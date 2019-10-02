import { ToggleSwitch as ToggleSwitchComponent } from './ToggleSwitch';
import { createHOC } from 'wix-ui-core/dist/src/createHOC';

const ToggleSwitch = createHOC(ToggleSwitchComponent);
ToggleSwitch.displayName = ToggleSwitchComponent.displayName;

export default ToggleSwitch;
