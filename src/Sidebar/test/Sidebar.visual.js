import React from 'react';
import { storiesOf } from '@storybook/react';

import Sidebar, { SidebarSectionTitle, SidebarSectionDivider } from '..';

// TODO: Remove after "Visual" is finished with all supported functionality
storiesOf('Sidebar', module).add('sanity', () => (
  <div style={{ height: '500px', color: 'white' }}>
    <Sidebar selectedKey={'item1'}>
      <Sidebar.PersistentHeader>
        <div style={{ textAlign: 'center', fontSize: '20px', margin: '10px' }}>
          Simple Sidebar
        </div>
      </Sidebar.PersistentHeader>

      <Sidebar.Item
        itemKey={'item1'}
        innerMenu={[
          <Sidebar.BackButton>
            <div>Back</div>
          </Sidebar.BackButton>,
          <Sidebar.Item itemKey={'item4'}>
            <div>Inner Item 1</div>
          </Sidebar.Item>,
          <Sidebar.Item itemKey={'item5'}>
            <div>Inner Item 2</div>
          </Sidebar.Item>,
        ]}
      >
        <div>Item with internal navigation</div>
      </Sidebar.Item>
      <Sidebar.Item itemKey={'item2'} disable="true">
        <div disable="true">Disabled item</div>
      </Sidebar.Item>
      <Sidebar.Item itemKey={'item3'}>
        <div>A simple clickable item</div>
      </Sidebar.Item>

      <Sidebar.PersistentFooter>
        <div style={{ textAlign: 'center', fontSize: '20px', margin: '10px' }}>
          Sidebar Footer
        </div>
      </Sidebar.PersistentFooter>
    </Sidebar>
  </div>
));

storiesOf('Sidebar', module).add('Visual', () => (
  <div style={{ height: '500px', color: 'white' }}>
    <Sidebar selectedKey={'dashboard'}>
      <Sidebar.PersistentHeader>
        <div>Header</div>
      </Sidebar.PersistentHeader>

      <SidebarSectionDivider />

      <SidebarSectionTitle>Ascend By Wix</SidebarSectionTitle>

      <Sidebar.PersistentFooter>
        <div>Footer</div>
      </Sidebar.PersistentFooter>
    </Sidebar>
  </div>
));
