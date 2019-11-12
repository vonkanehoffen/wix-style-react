import React from 'react';
import {
  node,
  instanceOf,
  bool,
  string,
  number,
  func,
  oneOfType,
} from 'prop-types';

// import Text from '../Text';
import Card from '../Card';
import TextButton from '../TextButton';
// import styles from './VerticalTabs.st.css';

/** Vertical tabs navigation panel. */

const Prefix = ({ children }) => children;
Prefix.propTypes = {
  children: node, // Icons
};

const Suffix = ({ children }) => children;
Suffix.propTypes = {
  children: node, // <PopoverMenu/>, <Icon/>, <IconButton/>
};

const Footer = ({ children }) => children;
Footer.propTypes = {
  children: instanceOf(TextButton),
};

const TabText = ({ children }) => <TextButton>{children}</TextButton>;

const Tab = ({ id }) => {
  return null;
};
Tab.propTypes = {
  id: number,
  disabled: bool,
  children: oneOfType([
    instanceOf(Suffix),
    instanceOf(TabText),
    instanceOf(Prefix),
  ]),
};

const TabsGroup = ({ title }) => <Card.Header title={title} />;
TabsGroup.propTypes = {
  category: string,
  children: instanceOf(Tab),
};

class VerticalTabs extends React.Component {
  render() {
    return <div data-hook={this.props.dataHook}>{this.props.children}</div>;
  }
}

VerticalTabs.propTypes = {
  size: string,
  activeTabId: number,
  onChange: func,
  dataHook: string,
  children: node, // <VerticalTabs.TabsGroup/>, <VerticalTabs.Footer/>
};

VerticalTabs.TabsGroup = TabsGroup;
VerticalTabs.Tab = Tab;
VerticalTabs.Footer = Footer;
VerticalTabs.TabPrefix = Prefix;
VerticalTabs.TabSuffix = Suffix;
VerticalTabs.TabText = TabText;

export default VerticalTabs;
