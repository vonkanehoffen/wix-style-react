import React from 'react';
import { storiesOf } from '@storybook/react';
import Tag from '../Tag';

const commonProps = {
  children: 'tag',
};

const tests = [
  {
    describe: 'size',
    its: [
      {
        it: 'tiny',
        props: {
          size: 'tiny',
        },
      },
      {
        it: 'small',
        props: {
          size: 'small',
        },
      },
      {
        it: 'medium',
        props: {
          size: 'medium',
        },
      },
      {
        it: 'large',
        props: {
          size: 'large',
        },
      },
    ],
  },
  {
    describe: 'theme',
    its: [
      {
        it: 'error',
        props: {
          theme: 'error',
        },
      },
      {
        it: 'warning',
        props: {
          theme: 'warning',
        },
      },
      {
        it: 'dark',
        props: {
          theme: 'dark',
        },
      },
      {
        it: 'neutral',
        props: {
          theme: 'neutral',
        },
      },
      {
        it: 'light',
        props: {
          theme: 'light',
        },
      },
    ],
  },
  {
    describe: 'removable',
    its: [
      {
        it: 'removable',
        props: {},
      },
      {
        it: 'non-removable',
        props: {
          removable: false,
        },
      },
    ],
  },
  {
    describe: 'States',
    its: [
      {
        it: 'disabled',
        props: {
          disabled: true,
        },
      },
    ],
  },
  {
    describe: 'Thumb',
    its: [
      {
        it: 'Thumb',
        props: {
          thumb: (
            <div
              style={{
                backgroundColor: 'green',
                height: '100%',
                width: '100%',
              }}
            />
          ),
        },
      },
    ],
  },
  {
    describe: 'ellipsis',
    its: [
      {
        it: 'enabled',
        props: { maxWidth: 55, wrap: true },
      },
    ],
  },
];

tests.forEach(({ describe, its }) => {
  its.forEach(({ it, props, container }) => {
    storiesOf(`Tag/${describe}`, module).add(it, () => (
      <div {...container}>
        <Tag {...commonProps} {...props} />
      </div>
    ));
  });
});
