import React from 'react';
import { storiesOf } from '@storybook/react';
import Slider from '../Slider';
import Box from '../../Box';

const commonProps = {
  min: 0,
  max: 10,
  value: 4,
  displayMarks: false,
};

const tests = [
  {
    describe: '',
    its: [
      {
        it: 'default',
        props: {},
      },
      {
        it: 'disabled',
        props: {
          disabled: true,
        },
      },
      {
        it: 'displayMarks',
        props: {
          displayMarks: true,
        },
      },
      {
        it: 'step = 2',
        props: {
          step: 2,
          displayMarks: true,
        },
      },
    ],
  },
];

tests.forEach(({ describe, its }) => {
  its.forEach(({ it, props }) => {
    storiesOf(`Slider/${describe}`, module).add(it, () => (
      <Box width="330px">
        {[0, 4, 10].map(value => (
          <Slider {...commonProps} {...props} value={value} />
        ))}
      </Box>
    ));
  });
});
