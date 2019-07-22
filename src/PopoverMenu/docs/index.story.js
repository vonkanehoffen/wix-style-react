import React from 'react';

import { header } from 'wix-storybook-utils/Sections';
import LinkTo from '@storybook/addon-links/react';

import { default as PopoverMenu } from '..';
import { default as PopoverMenuItem } from '../../PopoverMenuItem';
import { storySettings } from './storySettings';
import { Category } from '../../../stories/storiesHierarchy';

import SectionHelper from '../../SectionHelper';
import { Layout, Cell } from '../../Layout';

import { createAutoExampleWrapper } from '../../../stories/utils/AutoExampleWrapper';

const exampleItems = [
  <PopoverMenuItem
    dataHook={storySettings.itemDataHook}
    text="Edit"
    onClick={() => {}}
  />,
  <PopoverMenuItem
    dataHook={storySettings.itemDataHook}
    text="Hide"
    onClick={() => {}}
  />,
  <PopoverMenuItem
    dataHook={storySettings.itemDataHook}
    text="Delete"
    onClick={() => {}}
  />,
];

const exampleChildren = [
  {
    label: 'One item',
    value: exampleItems.slice(0, 1),
  },
  {
    label: 'Two items',
    value: exampleItems.slice(0, 2),
  },
  {
    label: 'Three items',
    value: exampleItems,
  },
];

export default {
  category: storySettings.category,
  storyName: storySettings.storyName,
  component: createAutoExampleWrapper(PopoverMenu),
  componentPath: '..',

  componentProps: {
    dataHook: storySettings.dataHook,
    size: 'normal',
    placement: 'right',
    buttonTheme: 'icon-greybackground',
    children: exampleChildren[0].value,
  },

  exampleProps: {
    children: exampleChildren,
  },

  sections: [
    header({
      issueUrl: 'https://github.com/wix/wix-style-react/issues/new',
      sourceUrl:
        'https://github.com/wix/wix-style-react/tree/master/src/PopoverMenu/',
      component: (
        <Layout gap={10}>
          <Cell span={6}>
            <SectionHelper
              title="This Component is Deprecated"
              appearance="danger"
            >
              Read more about new implementation in UX story
              <LinkTo
                kind={Category.TOOLTIP}
                story="7.3 PopoverMenu"
              >{` UX story `}</LinkTo>
              or{' '}
              <LinkTo kind="BETA" story="PopoverMenu">{` API story.`}</LinkTo>
            </SectionHelper>
          </Cell>
        </Layout>
      ),
    }),
  ],
};
