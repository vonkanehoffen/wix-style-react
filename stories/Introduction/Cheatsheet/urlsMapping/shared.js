import { linkTo } from '@storybook/addon-links';

export const familyNames = {
  foundation: '1. Foundation',
  layout: '2. Layout',
  inputs: '3. Inputs',
  selection: '4. Selection',
  buttons: '5. Buttons',
  navigation: '6. Navigation',
  tooltipPopovers: '7. Tooltips & Popovers',
  notificationBars: '8. Notification Bars',
  modals: '9. Modals',
  //no links from the sidebar
  pickers: '10. Pickers',
  other: '11. Other',
  contentWidgets: '12. Content Widgets',
};

const createUxUrl = ({ familyName, UxStory }) => linkTo(familyName, UxStory);

const createComponentUrl = ({ componentName }) =>
  linkTo('Components', componentName);

export const linkedComponentUxName = ({ UxStory, familyName }) => ({
  text: UxStory,
  url: createUxUrl({ familyName, UxStory }),
});

export const linkedComponentsNames = componentsArr =>
  componentsArr.map(componentName => ({
    text: `<${componentName}/>`,
    url: createComponentUrl({ componentName }),
  }));
