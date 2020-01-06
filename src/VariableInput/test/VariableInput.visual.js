import React from 'react';
import { storiesOf } from '@storybook/react';
import VariableInput from '../VariableInput';

const commonProps = {
  variableParser: variable => (variable === 'page.name' ? 'Page name' : false),
};

const tests = [
  {
    describe: 'sanity',
    its: [
      {
        it: 'text only',
        props: {
          initialValue: 'hello',
        },
      },
      {
        it: 'One variable',
        props: {
          initialValue: 'Welcome to my {{page.name}} ',
        },
      },
    ],
  },
];

tests.forEach(({ describe, its }) => {
  its.forEach(({ it, props }) => {
    storiesOf(`VariableInput/${describe}`, module).add(it, () => (
      <VariableInput {...commonProps} {...props} />
    ));
  });
});
