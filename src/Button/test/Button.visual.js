import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from '../Button';

import AddChannel from '../../new-icons/AddChannel';
import { SIZES, SKINS } from '../constants';
import Box from '../../Box';
import { Layout, Cell } from '../../Layout';

const defaultProps = {
  children: 'Button',
};

const skins = [
  {
    value: 'standard',
    background: '',
  },
  {
    value: 'inverted',
    background: '',
  },
  {
    value: 'destructive',
    background: '',
  },
  {
    value: 'premium',
    background: '',
  },
  {
    value: 'light',
    background: '#162d3d',
  },
  {
    value: 'transparent',
    background: '#4eb7f5',
  },
  {
    value: 'dark',
    background: '#fef0ba',
  },
  {
    value: 'premium-light',
    background: '#162d3d',
  },
];

const sizes = Object.values(SIZES);

const test = (it, props) => ({ it, props });

const TestContainer = ({ children }) => (
  <div
    style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: '#f0f4f7',
    }}
  >
    {children}
  </div>
);

const ButtonBlock = props => {
  return (
    <Box width="400px">
      <Layout>
        <Cell span={6}>
          {skins.map(({ value, background }, index) => (
            <div
              key={index}
              style={{ background: background, margin: '5px 0' }}
            >
              <Button {...props} fullWidth skin={value}>
                {value}
              </Button>
            </div>
          ))}
        </Cell>
        <Cell span={6}>
          {skins.map(({ value, background }, index) => (
            <div
              key={index}
              style={{ background: background, margin: '5px 0' }}
            >
              <Button {...props} fullWidth skin={value} disabled>
                {value}
              </Button>
            </div>
          ))}
        </Cell>
      </Layout>
    </Box>
  );
};

const tests = [
  {
    describe: 'Sizes',
    its: sizes.map(size => test(size, { size })),
  },
  {
    describe: 'Affixes',
    its: sizes.map(size =>
      test(size, {
        size,
        prefixIcon: <AddChannel />,
        suffixIcon: <AddChannel />,
      }),
    ),
  },
];

const blockOfTests = [
  {
    describe: 'Button',
    its: [
      {
        it: 'Primary Skins',
        story: () => (
          <TestContainer>
            <ButtonBlock />
          </TestContainer>
        ),
      },
      {
        it: 'Secondary Skins',
        story: () => (
          <TestContainer>
            <ButtonBlock priority="secondary" />
          </TestContainer>
        ),
      },
      {
        it: 'Anchor',
        story: () => (
          <TestContainer>
            <ButtonBlock as="a" />
          </TestContainer>
        ),
      },
    ],
  },
];

tests.forEach(({ describe, its }) => {
  its.forEach(({ it, props }) => {
    storiesOf(`Button/${describe}`, module).add(it, () => (
      <Button {...defaultProps} {...props} />
    ));
  });
});

blockOfTests.forEach(({ describe, its }) => {
  its.forEach(({ it, story }) => {
    storiesOf(describe, module).add(it, story);
  });
});
