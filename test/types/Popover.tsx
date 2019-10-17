import * as React from 'react';
import Popover from '../../src/Popover';
import { popoverTestkitFactory } from '../../testkit';
import { popoverTestkitFactory as PopoverEnzymeTestkitFactory } from '../../testkit/enzyme';
import { mount } from 'enzyme';

function testkits() {
  const vanilla = popoverTestkitFactory({
    dataHook: 'hi',
    wrapper: document.createElement('div'),
  });

  vanilla.exists();
  vanilla.click();

  const enzyme = PopoverEnzymeTestkitFactory({
    dataHook: 'shbem',
    wrapper: mount(<div />),
  });
}

function PopoverWithMandatoryProps() {
  return <Popover placement="top" shown={true} />;
}

function PopoverFromExampleProps() {
  return <Popover
    animate
    appendTo="window"
    flip
    onClick={() => {}}
    placement="top"
    shown={true}
    showArrow
  >
    <Popover.Element>
      This is the Popover.Element
    </Popover.Element>
    <Popover.Content>
      <div
        style={{
          padding: '12px 24px',
          textAlign: 'center'
        }}
      >
        Content with padding
      </div>
    </Popover.Content>
  </Popover>;
}

function PopoverWithAllProps() {
  return (
    <Popover
      placement="left"
      shown={true}
      dataHook="adata-hook"
      animate={true}
      theme="dark"
      children={null}
      data-hook="qwert"
      className="qwert"
      onClick={(e) =>{}}
      onClickOutside={() =>{}}
      onMouseEnter={(e) =>{}}
      onMouseLeave={(e) =>{}}
      onKeyDown={(e) =>{}}
      showArrow={true}
      flip={true}
      fixed={true}
      moveBy={{
          x: 1,
          y: 2,
      }}
      hideDelay={100}
      showDelay={100}
      moveArrowTo={100}
      appendTo="window"
      timeout={500}
      style={{a: 'b'}}
      id="qwert"
      customArrow={() => <div>A</div>}
      role="qwert"
      zIndex={100}
      dynamicWidth={true}
      minWidth={100}
      maxWidth={100}
      width={100}
    />
  );
}
