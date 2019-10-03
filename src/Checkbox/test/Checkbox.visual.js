import React from 'react';
import { storiesOf } from '@storybook/react';
import Checkbox from '../Checkbox';
import FormField from 'wix-style-react/FormField';

import { uniTestkitFactoryCreator } from 'wix-ui-test-utils/vanilla';
import { checkboxUniDriverFactory } from '../Checkbox.uni.driver';
import Box from '../../Box';

const dataHook = 'storybook-checkbox';
const checkboxId = 'checkboxId';

const checkboxUniTestkitFactory = uniTestkitFactoryCreator(
  checkboxUniDriverFactory,
);
const createDriver = dataHook =>
  checkboxUniTestkitFactory({
    wrapper: document.body,
    dataHook,
  });

class InteractiveEyeTest extends React.Component {
  componentDidMount() {
    this.props.componentDidMount();
  }

  render() {
    const { ...restProps } = this.props;
    return (
      <div style={{ padding: '40px' }}>
        <Checkbox dataHook={dataHook} {...restProps}>
          Hello World!
        </Checkbox>
      </div>
    );
  }
}

const defaultProps = {
  onChange: e => e.stopPropagation(),
  size: 'medium',
};

const tests = [
  {
    describe: '',
    its: [
      {
        it: 'basic',
        props: {},
      },
      {
        it: 'error',
        props: { hasError: true },
      },
    ],
  },
];

const interactiveTests = [
  {
    describe: 'tooltip',
    its: [
      {
        it: 'displayed on checkbox hover when error exists',
        props: { hasError: true, errorMessage: 'error' },
        componentDidMount: async () => {
          const driver = createDriver(dataHook);
          await driver.getErrorMessage();
        },
      },
    ],
  },
];

tests.forEach(({ describe, its }) => {
  let _describe = '';
  if (describe) {
    _describe += `/${describe}`;
  }

  its.forEach(({ it, props }) => {
    storiesOf(`Checkbox${_describe}`, module).add(it, () => (
      <Box direction="vertical">
        <Box margin={2}>
          <Checkbox {...defaultProps} {...props}>
            Hello World!
          </Checkbox>
        </Box>
        <Box margin={2}>
          <Checkbox checked {...defaultProps} {...props}>
            Hello World!
          </Checkbox>
        </Box>
        <Box margin={2}>
          <Checkbox indeterminate {...defaultProps} {...props}>
            Hello World!
          </Checkbox>
        </Box>
        <Box margin={2}>
          <Checkbox disabled {...defaultProps} {...props}>
            Hello World!
          </Checkbox>
        </Box>
        <Box margin={2}>
          <Checkbox checked disabled {...defaultProps} {...props}>
            Hello World!
          </Checkbox>
        </Box>
        <Box margin={2}>
          <Checkbox indeterminate disabled {...defaultProps} {...props}>
            Hello World!
          </Checkbox>
        </Box>
      </Box>
    ));
  });
});

/* issue with the interactive test: https://github.com/wix/wix-style-react/issues/3647 */

// interactiveTests.forEach(({ describe, its }) => {
//   its.forEach(({ it, props, componentDidMount }) => {
//     storiesOf(`Checkbox/${describe}`, module).add(it, () => (
//       <InteractiveEyeTest {...props} componentDidMount={componentDidMount} />
//     ));
//   });
// });

storiesOf('Checkbox/FormField', module).add('FormField', () => (
  <div style={{ padding: '40px' }}>
    <FormField
      dataHook={`${dataHook}-formfield`}
      id={checkboxId}
      infoContent="I help you to fill info"
      label="Checkbox"
      labelPlacement="right"
      stretchContent={false}
      required
    >
      <Checkbox id={checkboxId} />
    </FormField>
  </div>
));
