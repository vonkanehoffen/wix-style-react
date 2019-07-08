import React from 'react';
import {
  GeneralStructure,
  SingleComponent,
  NotDefined,
} from '../sharedComponents';

import Text from 'wix-style-react/Text';
import Box from 'wix-style-react/Box';

//6. Sidebar
import Sidebar from 'wix-style-react/Sidebar';
import Tabs from 'wix-style-react/Tabs';

const NavigationFamily = () => {
  const tabItems = [
    {
      id: 1,
      title: 'First Item',
    },
    {
      id: 2,
      title: 'Second Item',
    },
    {
      id: 3,
      title: 'Third Item',
    },
  ];

  return (
    <GeneralStructure title="6. Navigation">
      <SingleComponent name="6.1 Sidebar Menu" componentsNames={['<Sidebar/>']}>
        <Sidebar selectedKey="item1">
          <Sidebar.PersistentHeader>
            <Box direction="vertical" padding="30px">
              <Text light weight="bold">
                Site Name
              </Text>
              <Text light size="tiny">
                Role: Owner
              </Text>
            </Box>
          </Sidebar.PersistentHeader>

          <Sidebar.Item itemKey={'item1'}>
            <Box direction="vertical" padding="9px 30px">
              <Text size="small" light>
                Action
              </Text>
            </Box>
          </Sidebar.Item>
        </Sidebar>
      </SingleComponent>
      <SingleComponent name="6.2 Tree Navigation">
        <NotDefined />
      </SingleComponent>
      <SingleComponent name="6.3 Text Tabs" componentsNames={['<Tabs/>']}>
        <Tabs activeId={1} items={tabItems} />
      </SingleComponent>
    </GeneralStructure>
  );
};
export default NavigationFamily;
