import React, { PureComponent } from 'react';
import {
  FamilyStructure,
  SingleComponentSideBySide,
  NotDefined,
  NotDeveloped,
  singleComponentSizes,
} from '../sharedComponents';

import { navigationSymbolsToComponents } from '../../../symbolsComponentsMapping/families/NavigationFamily';

import {
  createLinkedSymbolName,
  createLinkedComponentsNames,
} from '../sharedComponents/utils';

import {
  navigationSymbols,
  symbolsGroup,
} from '../../../symbolsComponentsMapping/symbols';

//Assets
import Text from 'wix-style-react/Text';
import Box from 'wix-style-react/Box';

//6. Navigation
import Sidebar from 'wix-style-react/Sidebar';
import Tabs from 'wix-style-react/Tabs';
import Stepper from 'wix-style-react/Stepper';

const groupSymbol = symbolsGroup.navigation;

const SidebarExample = () => {
  const symbol = navigationSymbols.sidebarMenu;
  const components = navigationSymbolsToComponents[symbol];

  const singleComponentProps = {
    name: createLinkedSymbolName({ groupSymbol, symbol }),
    componentsNames: createLinkedComponentsNames(components),
  };

  return (
    <SingleComponentSideBySide {...singleComponentProps}>
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
};

const TreeNavigationExample = () => {
  const symbol = navigationSymbols.treeNavigation;
  const components = navigationSymbolsToComponents[symbol];

  const singleComponentProps = {
    name: symbol,
    componentsNames: components,
  };

  return (
    <SingleComponentSideBySide {...singleComponentProps}>
      <NotDefined />
    </SingleComponentSideBySide>
  );
};

class TextTabsExample extends PureComponent {
  state = { activeTab: 1 };

  onTabClick = ({ id }) => this.setState({ activeTab: id });

  render() {
    const tabItems = ['First', 'Second', 'Third'].map((tabText, i) => {
      return { title: `${tabText} Item`, id: i + 1 };
    });

    const { activeTab } = this.state;

    const symbol = navigationSymbols.textTabs;
    const components = navigationSymbolsToComponents[symbol];

    const singleComponentProps = {
      name: symbol,
      componentsNames: createLinkedComponentsNames(components),
      size: singleComponentSizes.compact,
    };

    return (
      <SingleComponentSideBySide {...singleComponentProps}>
        <Tabs onClick={this.onTabClick} activeId={activeTab} items={tabItems} />
      </SingleComponentSideBySide>
    );
  }
}

const VerticalTabsExample = () => {
  const symbol = navigationSymbols.verticalTabs;
  const components = navigationSymbolsToComponents[symbol];

  const singleComponentProps = {
    name: symbol,
    componentsNames: components,
  };

  return (
    <SingleComponentSideBySide {...singleComponentProps}>
      <NotDeveloped />
    </SingleComponentSideBySide>
  );
};

const TopBarExample = () => {
  const symbol = navigationSymbols.topBar;
  const components = navigationSymbolsToComponents[symbol];

  const singleComponentProps = {
    name: symbol,
    componentsNames: components,
  };

  return (
    <SingleComponentSideBySide {...singleComponentProps}>
      <NotDefined />
    </SingleComponentSideBySide>
  );
};

const StepperExample = () => {
  const symbol = navigationSymbols.stepper;
  const components = navigationSymbolsToComponents[symbol];

  const singleComponentProps = {
    name: symbol,
    componentsNames: createLinkedComponentsNames(components),
  };

  return (
    <SingleComponentSideBySide {...singleComponentProps}>
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
};

const NavigationFamily = () => (
  <FamilyStructure title={groupSymbol}>
    <SidebarExample />
    <TreeNavigationExample />
    <TextTabsExample />
    <VerticalTabsExample />
    <TopBarExample />
    <StepperExample />
  </FamilyStructure>
);

export default NavigationFamily;
