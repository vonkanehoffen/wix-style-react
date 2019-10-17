import * as React from 'react';
import Breadcrumbs, {BreadcrumbsItem, BreadcrumbsSize, BreadcrumbsTheme} from '../../src/Breadcrumbs';
import { breadcrumbsTestkitFactory } from '../../testkit';
import { breadcrumbsTestkitFactory as BreadcrumbsEnzymeTestkitFactory } from '../../testkit/enzyme';
import { mount } from 'enzyme';

function testkits() {
  const vanilla = breadcrumbsTestkitFactory({
    dataHook: 'hi',
    wrapper: document.createElement('div'),
  });

  vanilla.exists();
  vanilla.click();

  const enzyme = BreadcrumbsEnzymeTestkitFactory({
    dataHook: 'shbem',
    wrapper: mount(<div />),
  });
}

function BreadcrumbsWithMandatoryProps() {
  const items = [
    { id: 1, value: 'first item' },
    { id: 2, value: 'second item' },
    { id: 3, value: 'third item' },
  ];
  return <Breadcrumbs items={items} />;
}

function BreadcrumbsWithAllProps() {
  const items = [
    {
      id: 1,
      value: 1234,
      link: '#',
      customElement: null,
      disabled: true,
    },
    {
      id: 2,
      value: 'hello',
      link: 'asd',
      customElement: <div />,
      disabled: false,
    },
    {
      id: '12334',
      value: <div />,
    },
  ];

  return (
    <Breadcrumbs
      items={items}
      onClick={(item: BreadcrumbsItem) => {}}
      activeId={1}
      size="large"
      theme="onGrayBackground"
    />
  );
}
