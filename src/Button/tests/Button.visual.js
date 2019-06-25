import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from '../Button';
import Box from 'wix-style-react/Box';
import AddChannel from '../../new-icons/AddChannel';

const defaultProps = {
  children: 'Button',
};

const skins = [
  'standard',
  'inverted',
  'destructive',
  'premium',
  'dark',
  'light',
  'transparent',
];

const sizes = ['large', 'medium', 'small', 'tiny'];

const test = (it, props) => ({ it, props });

const tests = [
  {
    describe: 'Primary Skins',
    its: skins.map(skin => test(skin, { skin, priority: 'primary' })),
  },
  {
    describe: 'Secondary Skins',
    its: skins
      .filter(skin => skin !== 'transparent')
      .map(skin => test(skin, { skin, priority: 'secondary' })),
  },
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
  {
    describe: 'Render As',
    its: [
      {
        it: 'as anchor',
        props: { as: 'a' },
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

storiesOf(`Button/Secondary Skins`, module).add('transparent', () => (
  <Box backgroundColor="B20" width={100} padding="3px">
    <Button {...defaultProps} priority="secondary" skin="transparent" />
  </Box>
));
