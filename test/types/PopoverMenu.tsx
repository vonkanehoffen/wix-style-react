import * as React from 'react';
import { mount } from 'enzyme';
import PopoverMenu from '../../src/PopoverMenu';

import { popoverMenuTestkitFactory } from '../../testkit';
import { popoverMenuTestkitFactory as PopoverMenuEnzymeTestkit } from '../../testkit/enzyme';

async function testkits() {
  const vanilla = popoverMenuTestkitFactory({
    dataHook: 'hi',
    wrapper: document.createElement('div'),
  });

  await vanilla.exists();
  await vanilla.isMenuOpen();

  const enzyme = PopoverMenuEnzymeTestkit({
    dataHook: 'shbem',
    wrapper: mount(<div />),
  });

  await enzyme.exists();
  await enzyme.isMenuOpen();
}

function PopoverMenuWithMandatoryProps() {
  return <PopoverMenu />;
}

function PopoverMenuWithAllProps() {
  return (
    <PopoverMenu
      dataHook="data-hook-string"
      size="normal"
      placement="right"
      buttonTheme="icon-greybackground"
      buttonHeight="medium"
      maxWidth={400}
      appendToParent={true}
      appendTo="window"
      zIndex={400}
      showArrow={false}
      onShow={() => {}}
      onHide={() => {}}
      moveBy={{
        x: 10,
        y: 20,
      }}
    />
  );
}
