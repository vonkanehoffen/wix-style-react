import * as React from 'react';
import DropdownLayout, {DropdownLayoutProps} from '../../src/DropdownLayout';
import {dropdownLayoutTestkitFactory} from '../../testkit';
import {dropdownLayoutTestkitFactory as DropdownLayoutEnzymeTestkitFactory} from '../../testkit/enzyme';
import {mount} from 'enzyme';

function testkits() {
  const vanilla = dropdownLayoutTestkitFactory({
    dataHook: 'hi',
    wrapper: document.createElement('div'),
  });

  vanilla.exists();
  vanilla.click();

  const enzyme = DropdownLayoutEnzymeTestkitFactory({
    dataHook: 'shbem',
    wrapper: mount(<div/>),
  });
}

function DropdownLayoutWithMandatoryProps() {
  return <DropdownLayout/>;
}

function DropdownLayoutWithAllProps() {
  return (
    <DropdownLayout
      dropDirectionUp={false}
      focusOnSelectedOption={false}
      onClose={() => console.log('hello')}
      onSelect={() => console.log('hello')}
      onOptionMarked={() => console.log('hello')}
      overflow="qwert"
      visible={false}
      options={[
        {
          id: 0,
          value: <span style={{color: 'red'}}>Option 1</span>
        },
        {
          id: 1,
          value: 'one',
          disabled: false,
          title: true,
          overrideStyle: false,
          linkTo: "qwert"
        },
        {
          id: 2,
          value: 'two',
          disabled: false,
          title: true,
          overrideStyle: false,
          linkTo: "#"
        },
        {
          id: 3,
          value: 'three',
          disabled: false,
          title: true,
          overrideStyle: false,
          linkTo: "#"
        },
        {id: 'first title', value: 'title', title: true},
        {id: 'title', value: 'this is a title', title: true},
        {id: 'disabled', value: 'Disabled', disabled: true},
        {
          id: 'footer',
          overrideStyle: true,
          value: (
            <div
              style={{
                height: '240px',
                padding: '20px',
                fontSize: '20px',
                backgroundColor: '#F0F',
              }}
            >
              Click <a href="http://www.wix.com">here</a> to go to wix.
            </div>
          ),
        },
      ]}
      tabIndex={4}
      theme="qwert"
      onClickOutside={() => console.log('hello')}
      fixedHeader={<span>Hello</span>}
      fixedFooter={<span>Hello</span>}
      maxHeightPixels={400}
      minWidthPixels={400}
      withArrow={false}
      closeOnSelect={false}
      onMouseEnter={() => console.log('hello')}
      onMouseLeave={() => console.log('hello')}
      itemHeight="small"
      selectedHighlight={false}
      inContainer={false}
      infiniteScroll={false}
      loadMore={() => console.log('hello')}
      hasMore={false}
      markedOption={false}
      selectedId={2}
    />
  );
}
