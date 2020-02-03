import React from 'react';
import { storiesOf } from '@storybook/react';
import MarketingLayout from '../MarketingLayout';
import Button from '../../Button';
import Box from '../../Box';

const customImage = <Box backgroundColor="R00" width="100%" height="200px" />;

const commonProps = {
  title: 'Marketing Card Title',
  description:
    'Connect to Google and get indexed in seconds so people can easily find your site.',
  actions: <Button size="small">Go for it</Button>,
};

const tests = [
  {
    describe: 'Sanity',
    its: [
      {
        it: 'Default props',
        props: {},
      },
    ],
  },
  {
    describe: 'Size',
    its: [
      {
        it: 'Small',
        props: {
          size: 'small',
        },
      },
      {
        it: 'Medium',
        props: {
          size: 'medium',
        },
      },
      {
        it: 'Large',
        props: {
          size: 'large',
        },
      },
    ],
  },
  {
    describe: 'Image',
    its: [
      {
        it: 'Small',
        props: {
          size: 'small',
          image: customImage,
        },
      },
      {
        it: 'Medium',
        props: {
          size: 'medium',
          image: customImage,
        },
      },
      {
        it: 'Large',
        props: {
          size: 'large',
          image: customImage,
        },
      },
    ],
  },
  {
    describe: 'Inverted Layout',
    its: [
      {
        it: 'Small',
        props: {
          inverted: true,
          size: 'small',
        },
      },
      {
        it: 'Medium',
        props: {
          inverted: true,
          size: 'medium',
        },
      },
      {
        it: 'Large',
        props: {
          inverted: true,
          size: 'large',
        },
      },
    ],
  },
  {
    describe: 'No actions',
    its: [
      {
        it: 'Small',
        props: {
          size: 'small',
          actions: null,
        },
      },
      {
        it: 'Medium',
        props: {
          size: 'medium',
          actions: null,
        },
      },
      {
        it: 'Large',
        props: {
          size: 'large',
          actions: null,
        },
      },
    ],
  },
  {
    describe: 'Image Background Color',
    its: [
      {
        it: 'Custom Color',
        props: {
          imageBackgroundColor: '#D6453D',
        },
      },
      {
        it: 'Palette Color',
        props: {
          imageBackgroundColor: 'R00',
        },
      },
      {
        it: 'Inverted Layout',
        props: {
          inverted: true,
          imageBackgroundColor: 'R00',
        },
      },
    ],
  },
];

tests.forEach(({ describe, its }) => {
  its.forEach(({ it, props }) => {
    storiesOf(
      `MarketingLayout${describe ? '/' + describe : ''}`,
      module,
    ).add(it, () => <MarketingLayout {...commonProps} {...props} />);
  });
});
