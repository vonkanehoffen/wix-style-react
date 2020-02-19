import React from 'react';
import { storiesOf } from '@storybook/react';
import ListItemAction from '..';
import Edit from 'wix-ui-icons-common/Edit';

const commonProps = {
  title: 'The Title',
};

const tests = [
  {
    describe: 'sanity',
    its: [
      {
        it: 'default',
      },
      {
        it: 'hovered',
        props: { hovered: true },
      },
    ],
  },
  {
    describe: 'prefixIcon',
    its: [
      {
        it: 'with icon',
        props: {
          prefixIcon: <Edit />,
        },
      },
      {
        it: 'without icon',
      },
    ],
  },
  {
    describe: 'skin',
    its: [
      {
        it: 'standard',
        props: {
          skin: 'standard',
          prefixIcon: <Edit />,
        },
      },
      {
        it: 'dark',
        props: {
          skin: 'dark',
          prefixIcon: <Edit />,
        },
      },
      {
        it: 'dark hovered',
        props: {
          skin: 'dark',
          hovered: true,
          prefixIcon: <Edit />,
        },
      },
      {
        it: 'destructive',
        props: {
          skin: 'destructive',
          prefixIcon: <Edit />,
        },
      },
    ],
  },
  {
    describe: 'disabled',
    its: [
      {
        it: 'disabled',
        props: {
          disabled: true,
          prefixIcon: <Edit />,
        },
      },
    ],
  },
  {
    describe: 'size',
    its: [
      {
        it: 'small',
        props: {
          size: 'small',
          prefixIcon: <Edit />,
        },
      },
      {
        it: 'medium',
        props: {
          size: 'medium',
          prefixIcon: <Edit />,
        },
      },
    ],
  },
  {
    describe: 'as',
    its: [
      {
        it: 'div',
        props: {
          as: 'div',
          prefixIcon: <Edit />,
        },
      },
      {
        it: 'button',
        props: {
          as: 'button',
          prefixIcon: <Edit />,
        },
      },
    ],
  },
];

tests.forEach(({ describe, its }) => {
  its.forEach(({ it, props }) => {
    storiesOf(`ListItemAction${describe ? '/' + describe : ''}`, module).add(
      it,
      () => <ListItemAction {...commonProps} {...props} />,
    );
  });
});

const rtl = [
  {
    describe: 'rtl',
    its: [
      {
        it: 'div',
        props: {
          as: 'button',
          prefixIcon: <Edit />,
        },
      },
    ],
  },
];

rtl.forEach(({ describe, its }) => {
  its.forEach(({ it, props }) => {
    storiesOf(`ListItemAction${describe ? '/' + describe : ''}`, module).add(
      it,
      () => (
        <div dir="rtl">
          <ListItemAction {...commonProps} {...props} />
        </div>
      ),
    );
  });
});
