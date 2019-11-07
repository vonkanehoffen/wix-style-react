import React, { useEffect } from 'react';
import { storiesOf } from '@storybook/react';

import { storySettings } from './storySettings';
import InfoIcon from '../InfoIcon';
import { infoIconTestkitFactory } from '../../../testkit';
import FillPreview from '../../FillPreview';
import Box from '../../Box';
import Text from '../../Text';

const createDriver = () =>
  infoIconTestkitFactory({
    wrapper: document.body,
    dataHook: storySettings.dataHook,
  });

const hover = async () => await createDriver().hover();

const commonProps = {
  dataHook: storySettings.dataHook,
  content: 'Lorem ipsum? Dolor sit!',
};

const tests = [
  {
    describe: 'size',
    its: [
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
    ],
  },
  {
    describe: 'content',
    its: [
      {
        it: 'basic',
        componentDidMount: hover,
      },
      {
        it: 'custom node',
        props: {
          content: (
            <div>
              Custom node content!
              <Box height="24px" align="center" marginTop="tiny">
                <FillPreview fill="#ffd06c" />
              </Box>
            </div>
          ),
        },
        componentDidMount: hover,
      },
    ],
  },
  {
    describe: 'tooltipProps',
    its: [
      {
        it: 'placement',
        props: {
          tooltipProps: {
            placement: 'right',
          },
        },
        componentDidMount: hover,
      },
    ],
  },
];

const InfoIconWrapper = ({ componentDidMount, ...props }) => {
  useEffect(() => {
    componentDidMount && componentDidMount();
  });

  return <InfoIcon {...props} />;
};

tests.forEach(({ describe, its }) => {
  its.forEach(({ it, props, componentDidMount }) => {
    storiesOf(`InfoIcon/${describe}`, module).add(it, () => (
      <InfoIconWrapper
        {...commonProps}
        {...props}
        componentDidMount={componentDidMount}
      />
    ));
  });
});

storiesOf('InfoIcon', module).add('Inline Text', () => (
  <Box maxWidth="150px">
    <Text>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      <InfoIcon {...commonProps} />
    </Text>
  </Box>
));
