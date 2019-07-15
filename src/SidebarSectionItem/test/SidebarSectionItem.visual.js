import React from 'react';
import { storiesOf } from '@storybook/react';
import Sound from 'wix-ui-icons-common/Sound';

import SidebarSectionItem from '../SidebarSectionItem';
import Box from '../../Box';

const baseProps = {
  children: 'Some Text',
};

const SamplePrefix = () => (
  <Box width="8px" height="8px" borderRadius="50%" backgroundColor="G10"></Box>
);

const SampleSuffix = () => <Sound />;

const tests = [
  {
    describe: 'Basic',
    its: [
      {
        it: 'Should display with text',
        props: {
          ...baseProps,
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
  {
    describe: 'Selected',
    its: [
      {
        it: 'Should display as selected',
        props: {
          ...baseProps,
          selected: true,
        },
      },
    ],
  },
  {
    describe: 'Disabled',
    its: [
      {
        it: 'Should display as disabled',
        props: {
          ...baseProps,
          disabled: true,
        },
      },
      {
        it: `Should display as disabled even if it's selected`,
        props: {
          ...baseProps,
          disabled: true,
          selected: true,
        },
      },
    ],
  },
  {
    describe: 'Prefix',
    its: [
      {
        it: 'Should display prefix',
        props: {
          children: '17:45',
          prefix: <SamplePrefix />,
        },
      },
      {
        it: 'Should display prefix and ellipsis',
        props: {
          children:
            'This is a very long text which exceeds the maximum width of its container',
          prefix: <SamplePrefix />,
        },
      },
    ],
  },
  {
    describe: 'Suffix',
    its: [
      {
        it: 'Should display suffix',
        props: {
          ...baseProps,
          suffix: <SampleSuffix />,
        },
      },
      {
        it: 'Should display suffix and ellipsis',
        props: {
          children:
            'This is a very long text which exceeds the maximum width of its container',
          suffix: <SampleSuffix />,
        },
      },
      {
        it: 'Should display suffix with prefix and ellipsis',
        props: {
          children:
            'This is a very long text which exceeds the maximum width of its container',
          prefix: <SamplePrefix />,
          suffix: <SampleSuffix />,
        },
      },
    ],
  },
];

tests.forEach(({ describe, its }) =>
  storiesOf(`SidebarSectionItem`, module).add(describe, () => (
    <div>
      {its.map(({ it, props }) => (
        <Box direction="vertical" marginBottom={3}>
          <h3>{it}:</h3>
          <div style={{ width: '222px' }}>
            <SidebarSectionItem {...props} />
          </div>
        </Box>
      ))}
    </div>
  )),
);
