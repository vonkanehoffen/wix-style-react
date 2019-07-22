/* eslint-disable no-console */
import React from 'react';
import LinkTo from '@storybook/addon-links/react';

import {
  api,
  code as baseLiveCode,
  columns,
  description,
  divider,
  header,
  importExample,
  playground,
  tab,
  tabs,
  title,
} from 'wix-storybook-utils/Sections';

import { storySettings } from '../test/storySettings';
import allComponents from '../../../../stories/utils/allComponents';

import PopoverMenu from '..';
import IconButton from '../../../IconButton';
import More from '../../../new-icons/More';
import Add from '../../../new-icons/Add';
import Edit from '../../../new-icons/Edit';
import Delete from '../../../new-icons/Delete';

import { placements } from '../../../Popover';
import testkitDesc from './testkit.md';
import usage from './usage.md';

import * as examples from './examples';

const liveCode = config =>
  baseLiveCode({ components: { ...allComponents, PopoverMenu }, ...config });
const example = ({ source, ...rest }) =>
  columns({
    items: [description(rest), liveCode({ compact: true, source })],
  });

const commonProps = {
  appendTo: 'window',
  triggerElement: (
    <IconButton priority="secondary">
      <More />
    </IconButton>
  ),
};

const menuItems = [
  <PopoverMenu.MenuItem
    text="Add"
    onClick={e => console.log(e)}
    prefixIcon={<Add />}
  />,
  <PopoverMenu.MenuItem
    text="Edit"
    onClick={e => console.log(e)}
    prefixIcon={<Edit />}
  />,
  <PopoverMenu.MenuItem
    text="Delete"
    onClick={e => console.log(e)}
    prefixIcon={<Delete />}
  />,
];
export default {
  category: storySettings.category,
  storyName: 'PopoverMenu',

  component: PopoverMenu,
  componentPath: '..',
  componentProps: {
    ...commonProps,
    children: [...menuItems],
  },

  exampleProps: {
    placement: placements.map(placement => ({
      label: placement,
      value: placement,
    })),
  },

  sections: [
    header({
      issueUrl: 'https://github.com/wix/wix-style-react/issues/new',
      sourceUrl:
        'https://github.com/wix/wix-style-react/tree/master/src/PopoverMenu/',
      component: <PopoverMenu {...commonProps}>{menuItems}</PopoverMenu>,
    }),

    tabs([
      tab({
        title: 'Description',
        sections: [
          columns([
            description({
              title: 'Description',
              text:
                'PopoverMenu renders a trigger element that when the user click on it, a popup box with menu options appear.',
            }),
          ]),

          columns([
            importExample(
              "import PopoverMenu from 'wix-style-react/beta/PopoverMenu';",
            ),
          ]),

          divider(),

          columns([
            description({
              title: 'Usage',
              text: usage,
            }),
          ]),

          divider(),

          title('Examples'),

          ...[
            {
              title: 'Trigger',
              text: 'Trigger element can be an icon button or a text button.',
              source: examples.trigger,
            },
            {
              title: 'Menu item styling',
              text:
                'Each menu item can be styled differently with the following props - skin, prefixIcon, text size, disabled.',
              source: examples.menuItemStyling,
            },
            {
              title: 'Divider',
              text: 'Menu can have a divider between items.',
              source: examples.divider,
            },
            {
              title: 'Text Wrap',
              text:
                'By default all menu items text gets ellipsed when reaches boundaries limit. Passing `textWrap` disables ellipsis and wrap text to new line.',
              source: examples.wrap,
            },
          ].map(example),
        ],
      }),

      ...[
        { title: 'API', sections: [api()] },
        { title: 'Testkit', sections: [description(testkitDesc)] },
        { title: 'Playground', sections: [playground()] },
      ].map(tab),
    ]),
  ],
};
