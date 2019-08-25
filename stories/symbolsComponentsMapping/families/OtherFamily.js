import { otherSymbols } from '../symbols';
import {
  otherComponentsNames as componentsNames,
  sharedComponents,
} from '../components';

export const otherSymbolsToComponents = {
  [otherSymbols.avatar]: [componentsNames.Avatar],

  [otherSymbols.badge]: [componentsNames.Badge, sharedComponents.Icon],

  [otherSymbols.badgeSelect]: [componentsNames.BadgeSelect],

  [otherSymbols.counterBadge]: [
    componentsNames.CounterBadge,
    sharedComponents.Icon,
  ],

  [otherSymbols.tag]: [sharedComponents.Tag],

  [otherSymbols.loader]: [componentsNames.Loader],

  [otherSymbols.linearProgressBar]: [componentsNames.LinearProgressBar],

  [otherSymbols.circularProgressBar]: [componentsNames.CircularProgressBar],
};
