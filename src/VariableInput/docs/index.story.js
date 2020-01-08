import React from 'react';
import {
  header,
  tabs,
  tab,
  description,
  importExample,
  title,
  columns,
  divider,
  code as baseCode,
  playground,
  api,
  testkit,
} from 'wix-storybook-utils/Sections';

import { storySettings } from '../test/storySettings';
import allComponents from '../../../stories/utils/allComponents';

import VariableInput from '..';

const code = config => baseCode({ components: allComponents, ...config });

export default {
  category: storySettings.category,
  storyName: 'VariableInput',

  component: VariableInput,
  componentPath: '..',

  componentProps: {
    initialValue: 'Hello World!',
    size: 'small',
    variableParser: value => (value === 'page.name' ? 'Page name' : false),
  },

  exampleProps: {
    // Put here presets of props, for more info:
    // https://github.com/wix/wix-ui/blob/master/packages/wix-storybook-utils/docs/usage.md#using-list
  },

  sections: [
    header({
      sourceUrl:
        'https://github.com/wix/wix-style-react/tree/master/src/VariableInput/',
      component: (
        <VariableInput
          initialValue="Example {{page.name}}"
          variableParser={value => {
            return value === 'page.name' ? 'Page name' : false;
          }}
        />
      ),
    }),

    tabs([
      tab({
        title: 'Description',
        sections: [
          columns([
            description({
              title: 'Description',
              text:
                'Input tags component, allowing to show known variables as [`<Tag/>`](/?path=/story/components-api-components--tag) components',
            }),
          ]),

          columns([
            importExample(
              "import VariableInput from 'wix-style-react/VariableInput';",
            ),
          ]),

          divider(),

          title('Examples'),

          columns([
            description({
              title: 'Simple Usage',
              text:
                'This example shows a value that contains plain text and known variable',
            }),

            code({
              compact: true,
              source: `<VariableInput
              initialValue="Example {{page.name}}"
              variableParser={value => {
                return value === 'page.name' ? 'Page name' : false;
              }}
            />`,
            }),
          ]),
          columns([
            description({
              title: 'Placeholder',
              text:
                'Use the `placeholder` prop to show a message to the user when component is empty',
            }),
            code({
              compact: true,
              source: `<VariableInput placeholder="This is a placeholder" />`,
            }),
          ]),
          columns([
            description({
              title: 'Disabled',
              text: 'Use `disabled` attribute to disable the component',
            }),
            code({
              compact: true,
              source: `<VariableInput
              disabled
              initialValue="Example {{page.name}}"
              variableParser={value => {
                return value === 'page.name' ? 'Page name' : false;
              }}
            />`,
            }),
          ]),
        ],
      }),

      ...[
        { title: 'API', sections: [api()] },
        { title: 'Testkit', sections: [testkit()] },
        { title: 'Playground', sections: [playground()] },
      ].map(tab),
    ]),
  ],
};
