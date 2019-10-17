import * as React from 'react';
import Loader from '../../src/Loader';
import { loaderTestkitFactory } from '../../testkit';
import { loaderTestkitFactory as LoaderEnzymeTestkitFactory } from '../../testkit/enzyme';
import { mount } from 'enzyme';

function testkits() {
  const vanilla = loaderTestkitFactory({
    dataHook: 'hi',
    wrapper: document.createElement('div'),
  });

  vanilla.exists();
  vanilla.click();

  const enzyme = LoaderEnzymeTestkitFactory({
    dataHook: 'shbem',
    wrapper: mount(<div />),
  });
}

function LoaderWithMandatoryProps() {
  return <Loader />;
}

function LoaderWithAllProps() {
  return (
    <Loader
      size="large"
      color="white"
      text="text"
      status="error"
      statusMessage="error"
      shouldLoadAsync={true}
    />
  );
}
