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
import { Star, Download, Hint } from 'wix-style-react/new-icons';

import ListItemSection from '..';
import Box from '../../Box';

const code = config =>
  baseCode({
    components: { ...allComponents, Star, Download, Hint },
    ...config,
  });

export default {
  category: storySettings.category,
  storyName: 'ListItemSection',

  component: ListItemSection,
  componentPath: '..',

  componentProps: {
    title: 'List item Section title',
    suffix: 'Suffix',
  },

  exampleProps: {
    // Put here presets of props, for more info:
    // https://github.com/wix/wix-ui/blob/master/packages/wix-storybook-utils/docs/usage.md#using-list
  },

  sections: [
    header({
      sourceUrl:
        'https://github.com/wix/wix-style-react/tree/master/src/ListItemSection/',

      component: (
        <Box
          width="500px"
          backgroundColor="#f0f4f7"
          padding="25px"
          border="1px solid #e5e5e5"
        >
          <ListItemSection title="List Item Section" suffix="Suffix" />
        </Box>
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
                'ListItemSection is an internal component which is used to build dropdown or menu like components. Usually this item should not be used by consumers, though custom options builder is exposed for usage with DropdownBase.',
            }),
          ]),

          importExample(`
// Use directly
import ListItemSection, { ListItemSectionTypes } from 'wix-style-react/ListItemSection';
// Or use a builder
import { listItemSectionBuilder, ListItemSectionTypes } from 'wix-style-react/ListItemSection';
`),

          divider(),

          title('Examples'),

          columns([
            description({
              title: 'Simple Usage',
              text: 'ListItemSection can be a title with a possible `suffix`.',
            }),

            code({
              compact: true,
              source: `
                <div
                  style={{
                    height: '230px',
                  }}
                >
                  <DropdownLayout
                    visible
                    selectedId={2}
                    options={[
                      listItemSectionBuilder({
                        title: 'Candy Bars',
                        suffix: 'Delicious!',
                      }),
                      listItemActionBuilder({
                        id: 0,
                        title: 'Tuv Taam',
                      }),
                      listItemActionBuilder({
                        id: 1,
                        title: 'Kif Kef',
                      }),
                      listItemActionBuilder({
                        id: 2,
                        title: 'Egozi',
                      }),
                      listItemSectionBuilder({
                        title: 'Snacks',
                        suffix: 'Love them!',
                      }),
                      listItemActionBuilder({
                        id: 3,
                        title: 'Bamba',
                      }),
                      listItemActionBuilder({
                        id: 4,
                        title: 'Bissli',
                      }),
                      listItemActionBuilder({
                        id: 5,
                        title: 'Tapuchips',
                      }),
                    ]}
                  />
                </div>
              `,
            }),
          ]),

          columns([
            description({
              title: 'Whitespace and Divider',
              text: 'ListItemSection can be a `whitespace` or a `divider`.',
            }),

            code({
              compact: true,
              source: `
                <div
                  style={{
                    height: '230px',
                  }}
                >
                  <DropdownLayout
                    visible
                    selectedId={2}
                    options={[
                      listItemSectionBuilder({
                        title: 'Candy Bars',
                        suffix: 'Delicious!',
                      }),
                      listItemActionBuilder({
                        id: 0,
                        title: 'Tuv Taam',
                      }),
                      listItemSectionBuilder({
                        type: ListItemSectionTypes.WHITESPACE,
                      }),
                      listItemActionBuilder({
                        id: 1,
                        title: 'Kif Kef',
                      }),
                      listItemSectionBuilder({
                        type: ListItemSectionTypes.WHITESPACE,
                      }),
                      listItemActionBuilder({
                        id: 2,
                        title: 'Egozi',
                      }),
                      listItemSectionBuilder({
                        type: ListItemSectionTypes.DIVIDER,
                      }),
                      listItemSectionBuilder({
                        title: 'Snacks',
                        suffix: 'Love them!',
                      }),
                      listItemActionBuilder({
                        id: 3,
                        title: 'Bamba',
                      }),
                      listItemSectionBuilder({
                        type: ListItemSectionTypes.WHITESPACE,
                      }),
                      listItemActionBuilder({
                        id: 4,
                        title: 'Bissli',
                      }),
                      listItemSectionBuilder({
                        type: ListItemSectionTypes.WHITESPACE,
                      }),
                      listItemActionBuilder({
                        id: 5,
                        title: 'Tapuchips',
                      }),
                    ]}
                  />
                </div>
              `,
            }),
          ]),

          columns([
            description({
              title: 'Subheader',
              text:
                'ListItemSection can be a `subheader` with a possible `suffix`.',
            }),

            code({
              compact: true,
              source: `
                <div
                  style={{
                    height: '230px',
                  }}
                >
                  <DropdownLayout
                    visible
                    selectedId={2}
                    options={[
                      listItemSectionBuilder({
                        title: 'Sweet',
                        type: ListItemSectionTypes.SUBHEADER,
                      }),
                      listItemActionBuilder({
                        id: 1,
                        title: 'Lollipop',
                      }),
                      listItemActionBuilder({
                        id: 2,
                        title: 'Gummy bears',
                      }),
                      listItemSectionBuilder({
                        title: 'Sour',
                        type: ListItemSectionTypes.SUBHEADER,
                      }),
                      listItemActionBuilder({
                        id: 3,
                        title: 'Sugar gummy worms',
                      }),
                      listItemActionBuilder({
                        id: 4,
                        title: 'Lemon drops',
                      }),
                      listItemSectionBuilder({
                        title: 'Salty',
                        type: ListItemSectionTypes.SUBHEADER,
                      }),
                      listItemActionBuilder({
                        id: 5,
                        title: 'Salty caramel',
                      }),
                      listItemActionBuilder({
                        id: 6,
                        title: 'Salt water taffy',
                      }),
                    ]}
                  />
                </div>
              `,
            }),
          ]),

          columns([
            description({
              title: 'Text cropping',
              text: 'An example for List items with long text',
            }),

            code({
              compact: true,
              source: `
                <div dir="ltr">
                    <ListItemSection ellipsis title="This is a very very very very long text that will be cropped by ellipsis at some point"/>
                    <Divider/>
                    <ListItemSection title="This is a very very very very long text that will *not* be cropped by ellipsis at some point"/>
                    <Divider/>
                    <ListItemSection ellipsis title="This is a very very very very long text that will be cropped by ellipsis at some point" suffix="Nice long long long long long Suffix"/>
                    <Divider/>
                    <ListItemSection  title="This is a very very very very long text that will *not* be cropped by ellipsis at some point" suffix="Nice long long long long long Suffix"/>
                </div>
                `,
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
