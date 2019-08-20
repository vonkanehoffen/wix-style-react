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

import Swatches from '..';

const code = config => baseCode({ components: allComponents, ...config });
const colors3 = ['cyan', 'yellow', 'pink'];
const colors6 = ['cyan', 'yellow', 'pink', '#fff', 'rgb(0, 0, 0)', '#aeaeae'];

export default {
  category: storySettings.category,
  storyName: 'Swatches',

  component: Swatches,
  componentPath: '..',

  componentProps: setProps => ({
    onClick: value => setProps({ selected: value }),
    colors: colors3,
  }),

  hiddenProps: ['size'],

  exampleProps: {
    // Put here presets of props, for more info:
    // https://github.com/wix/wix-ui/blob/master/packages/wix-storybook-utils/docs/usage.md#using-list
    colors: [
      { label: colors3.toString(), value: colors3 },
      { label: colors6.toString(), value: colors6 },
    ],
    size: [
      { label: 'small', value: 'small' },
      { label: 'medium', value: 'medium' },
    ],
    showClear: [
      { label: 'true', value: true },
      { label: 'false', value: false },
    ],
  },

  sections: [
    header({
      issueUrl: 'https://github.com/wix/wix-style-react/issues/new',
      sourceUrl:
        'https://github.com/wix/wix-style-react/tree/master/src/Swatches/',
      component: (
        <div style={{ width: '204px' }}>
          <Swatches colors={colors6} />
        </div>
      ),
    }),

    tabs([
      tab({
        title: 'Description',
        sections: [
          columns([
            description({
              title: 'Description',
              text: 'Displays given colors with clickable swatches.',
            }),
          ]),

          importExample("import Swatches from 'wix-style-react/Swatches';"),

          divider(),

          title('Examples'),

          columns([
            description({
              title: 'Simple Usage',
              text: 'Pass color string array in `colors` prop.',
            }),

            code({
              compact: true,
              source:
                "<div style={{width: '204px'}}><Swatches colors={['red', '#fff', 'magenta']}/></div>",
            }),
          ]),

          columns([
            description({
              title: 'No color support',
              text: 'Pass `showClear` prop to get no color option.',
            }),

            code({
              compact: true,
              source:
                "<div style={{width: '204px'}}><Swatches showClear colors={['#fff', 'magenta']}/></div>",
            }),
          ]),

          columns([
            description({
              title: 'Columns and gap',
              text:
                "Swatches uses `grid` layout with default `12px` gap. Each swatch preserves square proportion and adjust based on the number of columns, grid gap and container's width. " +
                'Takes all available space. Here the container is `144px` width, `columns` prop set to 4, `gap` prop set to 10. Minimum swatch width is `12px`, minimum gap value is `6px`.',
            }),

            code({
              compact: true,
              source:
                "<div style={{width: '144px'}}><Swatches colors={['#000', '#fff', 'magenta', 'turquoise', 'beige', 'yellow', '#f9f9f9']} showAddButton showClear columns={4} gap={10}/></div>",
            }),
          ]),

          columns([
            description({
              title: 'Add button',
              text:
                'Pass `showAddButton` prop to get the Add Color button. In addition pass `onAdd` to handle newly selected color and `addButtonMessage` to control tooltip of the Add button. ' +
                '`addIconSize` prop controls the size of the Plus icon rendered inside Add button. Possible values are: `normal`, `small`. Default value is `small`.',
            }),

            code({
              compact: true,
              source: `<div style={{width: '300px'}}><Swatches colors={['#000', '#fff', 'magenta', 'turquoise', 'beige']} addIconSize="normal" showAddButton addButtonMessage="New Color"/></div>`,
            }),
          ]),

          code({
            title: 'Full Interactive Preview',
            description: 'Here you have all available props',
            source: `
              class SwatchesExamples extends React.Component {
                state = {
                  selectedColor: null,
                  colors: ['red', 'cyan', '#f9f9f9'],
                }
                render() {
                  const { selectedColor, colors } = this.state;
                  return (
                    <Swatches
                      showClear
                      showAddButton
                      showClearMessage="Clear Color"
                      addButtonMessage="New Color"
                      addIconSize="normal"
                      selected={selectedColor}
                      onAdd={color => this.setState({colors: [color, ...this.state.colors]})}
                      onClick={selectedColor => this.setState({ selectedColor })}
                      colors={colors} />
                  );
                }
              }`,
          }),
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
