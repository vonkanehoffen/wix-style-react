import * as React from 'react';
import ImageViewer from '../../src/ImageViewer';
import { imageViewerTestkitFactory } from '../../testkit';
import { imageViewerTestkitFactory as ImageViewerEnzymeTestkitFactory } from '../../testkit/enzyme';
import { mount } from 'enzyme';

function testkits() {
  const vanilla = imageViewerTestkitFactory({
    dataHook: 'hi',
    wrapper: document.createElement('div'),
  });

  vanilla.exists();
  vanilla.click();

  const enzyme = ImageViewerEnzymeTestkitFactory({
    dataHook: 'shbem',
    wrapper: mount(<div />),
  });
}

function ImageViewerWithMandatoryProps() {
  return <ImageViewer />;
}

function ImageViewerWithAllProps() {
  return (
    <ImageViewer
      imageUrl="some-random-image"
      error={false}
      errorMessage=""
      tooltipPlacement="top"
      tooltipProps={{}}
      showUpdateButton={true}
      showRemoveButton={true}
      onAddImage={() => {}}
      onUpdateImage={() => {}}
      onRemoveImage={() => {}}
      onImageLoad={() => {}}
      addImageInfo="some-string"
      updateImageInfo="some-string"
      removeImageInfo="some-string"
      removeRoundedBorders={false}
      width={400}
      height={500}
      disabled={false}
    />
  );
}
