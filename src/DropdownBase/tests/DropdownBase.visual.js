import React from 'react';
import { storiesOf } from '@storybook/react';
import DropdownBase from '..';

const tests = [
  {
    describe: 'alignItems',
    its: [
      {
        it: 'center',
        props: {
          options: [
            { id: 0, value: 'First option' },
            { id: 1, value: 'Second option' },
            { id: 2, value: 'Third option' },
            { id: 3, value: 'Fourth option' },
            { id: 4, value: 'Fifth option' },
            { id: 5, value: 'Sixth option' },
          ],
        },
      },
      {
        it: 'right',
        props: {
          alignItems: 'right',
        },
      },
      {
        it: 'left',
        props: {
          alignItems: 'left',
        },
      },
    ],
  },
];

tests.forEach(({ describe, its }) => {
  its.forEach(({ it, props }) => {
    storiesOf(`DropdownBase/${describe}`, module).add(it, () => (
      <DropdownBase {...props} />
    ));
  });
});
