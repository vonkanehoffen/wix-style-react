import React from 'react';
import { storiesOf } from '@storybook/react';

import SidebarSectionDivider from '../SidebarSectionDivider';
import Box from '../../Box';

const tests = [
  {
    describe: 'Basic',
    its: [
      {
        it: 'Should display as inner',
        props: {},
      },
      {
        it: 'Should display as full width',
        props: {
          fullWidth: true,
        },
      },
    ],
  },
];

tests.forEach(({ describe, its }) =>
  storiesOf(`SidebarSectionDivider`, module).add(describe, () => (
    <div>
      {its.map(({ it, props }) => (
        <Box direction="vertical" marginBottom={3}>
          <h3>{it}:</h3>
          <div style={{ width: '222px', backgroundColor: '#23263c' }}>
            <SidebarSectionDivider {...props} />
          </div>
        </Box>
      ))}
    </div>
  )),
);
