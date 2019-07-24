import React, { PureComponent } from 'react';
import {
  FamilyStructure,
  SingleComponentSideBySide,
  NotDefined,
  singleComponentSizes,
} from '../sharedComponents';

import Text from 'wix-style-react/Text';
import Box from 'wix-style-react/Box';

//6. Navigation
import Sidebar from 'wix-style-react/Sidebar';
import Tabs from 'wix-style-react/Tabs';
import Stepper from 'wix-style-react/Stepper';

const SidebarExample = () => (
  <SingleComponentSideBySide
    name="6.1 Sidebar Menu"
    componentsNames={['<Sidebar/>']}
  >
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

      <Sidebar.Item itemKey="item1">
        <Box direction="vertical" padding="9px 30px">
          <Text size="small" light>
            Action
          </Text>
        </Box>
      </Sidebar.Item>
    </Sidebar>
  </SingleComponentSideBySide>
);

const TreeNavigationExample = () => (
  <SingleComponentSideBySide name="6.2 Tree Navigation">
    <NotDefined />
  </SingleComponentSideBySide>
);

class TextTabsExample extends PureComponent {
  state = { activeTab: 1 };

  onTabClick = ({ id }) => this.setState({ activeTab: id });

  render() {
    const tabItems = ['First', 'Second', 'Third'].map((tabText, i) => {
      return { title: `${tabText} Item`, id: i + 1 };
    });

    const { activeTab } = this.state;

    return (
      <SingleComponentSideBySide
        name="6.3 Text Tabs"
        componentsNames={['<Tabs/>']}
        size={singleComponentSizes.compact}
      >
        <Tabs onClick={this.onTabClick} activeId={activeTab} items={tabItems} />
      </SingleComponentSideBySide>
    );
  }
}

const TopBarExample = () => (
  <SingleComponentSideBySide name="6.5 Top Bar">
    <NotDefined />
  </SingleComponentSideBySide>
);

const StepperExample = () => (
  <SingleComponentSideBySide
    name="6.6 Stepper"
    componentsNames={['<Stepper/>']}
  >
    <Stepper
      activeStep={2}
      steps={[
        { text: 'Completed step', type: 'completed' },
        { text: 'Error step', type: 'error' },
        { text: 'Normal step' },
        { text: 'Disabled step', type: 'disabled' },
      ]}
    />
  </SingleComponentSideBySide>
);

const NavigationFamily = () => (
  <FamilyStructure title="6. Navigation">
    <SidebarExample />
    <TreeNavigationExample />
    <TextTabsExample />
    <TopBarExample />
    <StepperExample />
  </FamilyStructure>
);

export default NavigationFamily;
