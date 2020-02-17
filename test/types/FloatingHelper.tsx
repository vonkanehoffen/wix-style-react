import * as React from 'react';
import FloatingHelper, {Appearance} from '../../src/FloatingHelper';
import { floatingHelperTestkitFactory } from '../../dist/testkit';
import { floatingHelperTestkitFactory as floatingHelperEnzymeTestkitFactory } from '../../dist/testkit/enzyme';
import * as enzyme from 'enzyme';

function FloatingHelperWithMandatoryProps() {
  return <FloatingHelper
           target={<div/>}
           content={<div/>}
           placement={'auto'}/>;
}

function FloatingHelperWithAllProps() {
  return (
    <FloatingHelper
      width={12}
      target={<div/>}
      content={<div/>}
      onClose={()=>{}}
      placement={'auto'}
      appearance={Appearance.dark}
      initiallyOpened={false}
      opened={true}
      appendTo={"viewport"}
      onOpen={()=>{}}
    />
  );
}

async function testkits() {
  const testkit = floatingHelperTestkitFactory({
    dataHook: 'hook',
    wrapper: document.createElement('div')
  });

  const enzymeTestkit = floatingHelperEnzymeTestkitFactory({
    dataHook: 'hook',
    wrapper: enzyme.mount(<div />)
  });
}
