import React from 'react';
import { ExternalLink } from 'wix-style-react/new-icons';

import { Table } from '..';
import { TableToolbar } from '../../TableToolbar';
import Dropdown from '../../Dropdown';
import Search from '../../Search';
import TextButton from '../../TextButton';
import ImagePlaceholder from '../../../stories/utils/ImagePlaceholder';

export const ToolbarExample = () => {
  const collectionOptions = [
    { id: 0, value: 'All Products' },
    { id: 1, value: 'Towels' },
    { id: 2, value: 'Slippers' },
  ];
  const filterOptions = [
    { id: 0, value: 'All' },
    { id: 1, value: 'Red' },
    { id: 2, value: 'Cyan' },
  ];

  return (
    <TableToolbar>
      <TableToolbar.ItemGroup position="start">
        <TableToolbar.Item>
          <TableToolbar.Title>My Table</TableToolbar.Title>
        </TableToolbar.Item>
        <TableToolbar.Item>
          <TableToolbar.Label>
            Collection
            <span style={{ width: '150px' }}>
              <Dropdown options={collectionOptions} selectedId={0} roundInput />
            </span>
          </TableToolbar.Label>
        </TableToolbar.Item>
        <TableToolbar.Item>
          <TableToolbar.Label>
            Filter By
            <span style={{ width: '86px' }}>
              <Dropdown options={filterOptions} selectedId={0} roundInput />
            </span>
          </TableToolbar.Label>
        </TableToolbar.Item>
      </TableToolbar.ItemGroup>
      <TableToolbar.ItemGroup position="end">
        <TableToolbar.Item>
          <Search />
        </TableToolbar.Item>
      </TableToolbar.ItemGroup>
    </TableToolbar>
  );
};

export const EmptyStateExample = () => (
  <Table.EmptyState
    title="You haven't added any items yet"
    subtitle="Add items to your website so people can buy them"
    image={<ImagePlaceholder />}
  >
    <TextButton suffixIcon={<ExternalLink />}>
      Learn how to add items
    </TextButton>
  </Table.EmptyState>
);
