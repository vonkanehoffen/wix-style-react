import React, { Component } from 'react';
import { SingleComponentStacked, Preview } from '../../../sharedComponents';

import Table from 'wix-style-react/Table';
import TableActionCell from 'wix-style-react/TableActionCell';
import Card from 'wix-style-react/Card';
import Search from 'wix-style-react/Search';
import Star from 'wix-style-react/new-icons/Star';
import Avatar from 'wix-style-react/Avatar';

import {
  TableToolbar,
  ItemGroup,
  Item,
  Label,
  Title,
} from 'wix-style-react/TableToolbar';

class TablePageExample extends Component {
  state = {
    data: [
      {
        name: 'Red Slippers',
        SKU: '111222',
        price: '$14.00',
        inventory: 'In stock',
      },
      {
        name: 'Blue Slippers',
        SKU: '222333',
        price: '$14.00',
        inventory: 'Out of stock',
      },
      {
        name: 'Grey Slippers',
        SKU: '333444',
        price: '$14.00',
        inventory: 'In stock',
      },
      {
        name: 'Green Slippers',
        SKU: '444555',
        price: '$14.00',
        inventory: 'Out of stock',
      },
    ],
  };

  render() {
    return (
      <Table
        data={this.state.data}
        columns={[
          {
            title: '',
            width: '10%',
            minWidth: '50px',
            render: () => <Avatar size="size60" imgProps />,
          },
          { title: 'Name', render: row => row.name },
          { title: 'SKU', render: row => row.SKU },
          { title: 'Price', render: row => row.price },
          { title: 'Inventory', render: row => row.inventory },
          {
            title: '',
            render: rowData => (
              <TableActionCell
                primaryAction={{
                  text: 'Edit',
                  theme: 'fullblue',
                  onActionTrigger: rowData =>
                    window.alert(`Editing ${rowData.name}`),
                }}
                secondaryActions={[
                  {
                    text: 'Star',
                    icon: <Star />,
                    onClick: () => window.alert(`Starring ${rowData.name}`),
                  },
                ]}
                numOfVisibleSecondaryActions={0}
                alwaysShowSecondaryActions={false}
              />
            ),
          },
        ]}
        showSelection
      >
        <Table.ToolbarContainer>
          {() => <TableToolbarExample />}
        </Table.ToolbarContainer>
        <Table.Content />
      </Table>
    );
  }
}

const TableToolbarExample = () => (
  <Card>
    <TableToolbar>
      <ItemGroup position="start">
        <Item>
          <Title>Table title</Title>
        </Item>
      </ItemGroup>
      <ItemGroup position="end">
        <Item>
          <Search placeholder="Search..." />
        </Item>
      </ItemGroup>
    </TableToolbar>
  </Card>
);

const TableExamples = () => (
  <SingleComponentStacked
    name="2.3 Table Layout"
    componentsNames={['<Table/>']}
  >
    <Preview>
      <TablePageExample />
    </Preview>
  </SingleComponentStacked>
);

export default TableExamples;
