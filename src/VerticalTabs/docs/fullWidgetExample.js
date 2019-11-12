import React from 'react';
import VerticalTabs from '../VerticalTabs';
import Card from '../../Card';

const s = {};
const VerticalDivider = () => <div className={s.verticalDivider}></div>;

/* eslint-disable no-undef  */
class FullWidgetExample extends React.Component {
  state = {
    selectedTab: 0,
  };

  render() {
    return (
      <Card>
        <VerticalTabs
          size="small"
          activeTabId={2}
          onChange={id => this.setState(id)}
        >
          <VerticalTabs.TabsGroup title="Current Benefits">
            <VerticalTabs.Tab id={0}>
              <VerticalTabs.TabPrefix />
              <VerticalTabs.TabText>Experts Dashboard</VerticalTabs.TabText>
            </VerticalTabs.Tab>
            <VerticalTabs.Tab id={1}>
              <VerticalTabs.TabPrefix />
              <VerticalTabs.TabText>Product Betas</VerticalTabs.TabText>
            </VerticalTabs.Tab>
            <VerticalTabs.Tab id={2}>
              <VerticalTabs.TabPrefix />
              <VerticalTabs.TabText>Wix Arena Exposure</VerticalTabs.TabText>
            </VerticalTabs.Tab>
          </VerticalTabs.TabsGroup>
          <VerticalTabs.TabsGroup title="Next Level Benefits">
            <VerticalTabs.Tab id={3}>
              <VerticalTabs.TabPrefix />
              <VerticalTabs.TabText>Loyalty Program</VerticalTabs.TabText>
            </VerticalTabs.Tab>
            <VerticalTabs.Tab id={4}>
              <VerticalTabs.TabPrefix />
              <VerticalTabs.TabText>20% Revenue Share</VerticalTabs.TabText>
            </VerticalTabs.Tab>
            <VerticalTabs.Tab id={5}>
              <VerticalTabs.TabPrefix />
              <VerticalTabs.TabText>
                Dedicated Account Manager
              </VerticalTabs.TabText>
            </VerticalTabs.Tab>
          </VerticalTabs.TabsGroup>
        </VerticalTabs>
        <VerticalDivider />
        <Card.Content>{`Current Tab is ${this.state.selectedTab}`}</Card.Content>
      </Card>
    );
  }
}

render(<FullWidgetExample />);
