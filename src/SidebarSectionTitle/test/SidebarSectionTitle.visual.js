import React from 'react';
import { storiesOf } from '@storybook/react';

import SidebarSectionTitle from '../SidebarSectionTitle';
import Sidebar from '../../Sidebar';

const tests = [
  {
    describe: 'Basic',
    its: [
      {
        it: 'Should display with text',
        props: {
          children: 'Some Text',
        },
      },
      {
        it: 'Should display an ellipsis for long text',
        props: {
          children:
            'This is a very long text which exceeds the maximum width of its container',
        },
      },
    ],
  },
];

tests.forEach(({ describe, its }) => {
  its.forEach(({ it, props }) => {
    storiesOf(`SidebarSectionTitle/${describe}`, module).add(it, () => (
      <Sidebar>
        <SidebarSectionTitle {...props} />
      </Sidebar>
    ));
  });
});
