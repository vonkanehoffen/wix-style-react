import * as React from 'react';
import EmptyState from '../../src/EmptyState';
import { emptyStateTestkitFactory } from '../../testkit';
import { emptyStateTestkitFactory as EmptyStateEnzymeTestkitFactory } from '../../testkit/enzyme';
import { mount } from 'enzyme';

function testkits() {
  const vanilla = emptyStateTestkitFactory({
    dataHook: 'hi',
    wrapper: document.createElement('div'),
  });

  vanilla.exists();
  vanilla.click();

  const enzyme = EmptyStateEnzymeTestkitFactory({
    dataHook: 'shbem',
    wrapper: mount(<div />),
  });
}

function EmptyStateWithMandatoryProps() {
  return <EmptyState />;
}

function EmptyStateWithAllProps() {
  return (
    <EmptyState
      theme="page-no-border"
      title={<span>asd</span>}
      subtitle={<span>asd</span>}
      image={<span>asd</span>}
      classNames={{imageContainer: 'asd'}}
      children={<span>asd</span>}
      dataHook="data-hook-string"
    />
  );
}

function EmptyStateWithImageString() {
  return (
    <EmptyState
      theme="page-no-border"
      title={<span>asd</span>}
      subtitle={<span>asd</span>}
      image="image"
      classNames={{imageContainer: 'asd'}}
      children={<span>asd</span>}
      dataHook="data-hook-string"
    />
  );
}
