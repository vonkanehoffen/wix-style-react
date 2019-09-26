import React from 'react';
import { storiesOf } from '@storybook/react';
import DatePicker from './DatePicker';
import Box from '../Box';

const testGroups = [
  {
    describe: 'Basic Usage',
    tests: [
      {
        describe: 'Date should not be selected',
        its: [
          {
            placeholderText: 'Select Date',
          },
          {
            placeholderText: 'Select Date',
            disabled: true,
          },
          {
            placeholderText: 'Select Date',
            error: true,
          },
        ],
      },
      {
        describe: 'Date should be selected',
        its: [
          {
            placeholderText: 'Select Date',
            value: new Date('08-07-1986'),
          },
          {
            placeholderText: 'Select Date',
            value: new Date('08-07-1986'),
            disabled: true,
          },
          {
            placeholderText: 'Select Date',
            value: new Date('08-07-1986'),
            error: true,
          },
          {
            placeholderText: 'Select Date',
            value: new Date('08-07-1986'),
            initialOpen: true,
          },
          {
            placeholderText: 'Select Date',
            value: new Date('08-07-1986'),
            initialOpen: true,
            disabled: true,
          },
          {
            placeholderText: 'Select Date',
            value: new Date('08-07-1986'),
            initialOpen: true,
            error: true,
          },
        ],
      },
    ],
  },
];

testGroups.forEach(group => {
  group.tests.forEach(test => {
    storiesOf(`DatePicker/${group.describe}`, module).add(test.describe, () => (
      <Box width="1024px" height="768px" flexWrap={'wrap'}>
        {test.its.map(props => (
          <Box paddingRight="65px" direction={'vertical'}>
            <Box margin={2}>
              <DatePicker width={'auto'} onChange={() => {}} {...props} />
            </Box>
          </Box>
        ))}
      </Box>
    ));
  });
});
