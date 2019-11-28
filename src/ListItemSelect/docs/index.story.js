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

import ListItemSelect from '..';
import Box from '../../Box';

const code = config =>
  baseCode({
    components: { ...allComponents, Star, Download, Hint },
    ...config,
  });

export default {
  category: storySettings.category,
  storyName: 'ListItemSelect',

  component: ListItemSelect,
  componentPath: '..',

  componentProps: {
    prefix: (
      <Box>
        <Star />
      </Box>
    ),
    title: 'List item title',
    subtitle: 'List item subtitle',
    suffix: 'List item suffix',
    checkbox: true,
  },

  exampleProps: {
    // Put here presets of props, for more info:
    // https://github.com/wix/wix-ui/blob/master/packages/wix-storybook-utils/docs/usage.md#using-list
  },

  sections: [
    header({
      sourceUrl:
        'https://github.com/wix/wix-style-react/tree/master/src/ListItemSelect/',
      component: (
        <Box
          width="500px"
          backgroundColor="#f0f4f7"
          padding="25px"
          border="1px solid #e5e5e5"
        >
          <ListItemSelect checkbox title="List Item Select" suffix="Suffix" />
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
                'ListItemSelect is an internal component which is used to build dropdown or menu like components. Usually this item should not be used by consumers, though custom options builder is exposed for usage with DropdownBase.',
            }),
          ]),

          importExample(
            `
// Use directly
import ListItemSelect from 'wix-style-react/ListItemSelect';
// Or use a builder
import { listItemSelectBuilder } from 'wix-style-react/ListItemSelect';
              `,
          ),

          divider(),

          title('Examples'),

          columns([
            description({
              title: 'Simple Usage',
              text:
                'ListItemSelect can have: `prefix`, `text`, `subtitle`, and `suffix`.',
            }),

            code({
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
                      listItemSelectBuilder({
                        id: 0,
                        prefix: <Avatar size="size24"/>,
                        title: 'Carmel Lloyd',
                        suffix: '31 Dec 2017',
                      }),
                      listItemSelectBuilder({
                        id: 1,
                        prefix: <Avatar size="size24"/>,
                        title: 'Gracie-May Marsden',
                        suffix: '20 Jan 2000',
                      }),
                      listItemSelectBuilder({
                        id: 2,
                        prefix: <Avatar size="size24"/>,
                        title: 'Keisha Decker',
                        suffix: '4 Nov 2010',
                      }),
                      listItemSelectBuilder({
                        id: 3,
                        prefix: <Avatar size="size24"/>,
                        title: 'Ruairidh Fitzgerald',
                        suffix: '7 Apr 2009',
                        disabled: true,
                      }),
                      listItemSelectBuilder({
                        id: 4,
                        prefix: <Avatar size="size24"/>,
                        title: 'Sheldon Chavez',
                        suffix: '2 Dec 2019',
                      }),
                      listItemSelectBuilder({
                        id: 5,
                        prefix: <Avatar size="size24"/>,
                        title: 'Brandan Gibbs',
                        suffix: '1 Feb 2003',
                      }),
                      listItemSelectBuilder({
                        id: 6,
                        prefix: <Avatar size="size24"/>,
                        title: 'Gordon Holmes',
                        suffix: '19 Aug 2016',
                      }),
                      listItemSelectBuilder({
                        id: 7,
                        prefix: <Avatar size="size24"/>,
                        title: 'Aaisha Rios',
                        suffix: '22 Jul 2018',
                      }),
                    ]}
                  />
                </div>
              `,
              compact: true,
            }),
          ]),

          columns([
            description({
              title: 'With checkbox and subtitle',
              text:
                'This is another use case of ListItemSelect with a `checkbox` and a `subtitle`',
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
                      listItemSelectBuilder({
                        id: 0,
                        checkbox: true,
                        prefix: <Avatar size="size30"/>,
                        title: 'Carmel Lloyd',
                        subtitle: 'Kaplan 41',
                        suffix: '31 Dec 2017',
                      }),
                      listItemSelectBuilder({
                        id: 1,
                        checkbox: true,
                        prefix: <Avatar size="size30"/>,
                        title: 'Gracie-May Marsden',
                        subtitle: 'Sderot Ben Gurion 75',
                        suffix: '20 Jan 2000',
                      }),
                      listItemSelectBuilder({
                        id: 2,
                        checkbox: true,
                        prefix: <Avatar size="size30"/>,
                        title: 'Keisha Decker',
                        subtitle: 'Aminadav 18',
                        suffix: '4 Nov 2010',
                      }),
                      listItemSelectBuilder({
                        id: 3,
                        checkbox: true,
                        prefix: <Avatar size="size30"/>,
                        title: 'Ruairidh Fitzgerald',
                        subtitle: 'HaYarkon 228',
                        suffix: '7 Apr 2009',
                        disabled: true,
                      }),
                      listItemSelectBuilder({
                        id: 4,
                        checkbox: true,
                        prefix: <Avatar size="size30"/>,
                        title: 'Sheldon Chavez',
                        subtitle: 'Pinkas 2',
                        suffix: '2 Dec 2019',
                      }),
                      listItemSelectBuilder({
                        id: 5,
                        checkbox: true,
                        prefix: <Avatar size="size30"/>,
                        title: 'Brandan Gibbs',
                        subtitle: 'Frishman 38',
                        suffix: '1 Feb 2003',
                      }),
                      listItemSelectBuilder({
                        id: 6,
                        checkbox: true,
                        prefix: <Avatar size="size30"/>,
                        title: 'Gordon Holmes',
                        subtitle: 'HaShalom road 66',
                        suffix: '19 Aug 2016',
                      }),
                      listItemSelectBuilder({
                        id: 7,
                        checkbox: true,
                        prefix: <Avatar size="size30"/>,
                        title: 'Aaisha Rios',
                        subtitle: 'Arlozorov 101',
                        suffix: '22 Jul 2018',
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
                    <ListItemSelect ellipsis prefix={<Box><Hint/></Box>} title="This is a very very very very long text that will be cropped by ellipsis at some point" suffix="Nice long long long long long Suffix"/>
                    <Divider/>
                    <ListItemSelect prefix={<Box><Hint/></Box>} title="This is a very very very very long text that will *not* be cropped by ellipsis at some point" suffix="Nice long long long long long Suffix"/>
                    <Divider/>
                    <ListItemSelect ellipsis checkbox prefix={<Box><Hint/></Box>} title="This is a very very very very long text that will be cropped by ellipsis at some point" suffix="Nice long long long long long Suffix"/>
                    <Divider/>
                    <ListItemSelect checkbox prefix={<Box><Hint/></Box>} title="This is a very very very very long text that will *not* be cropped by ellipsis at some point" suffix="Nice long long long long long Suffix"/>
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
