import React from 'react';
import CardGalleryItem from '../CardGalleryItem';

const backgroundImageUrl =
  'https://static.wixstatic.com/media/89ea07a19c3d415e99a8a8a3c0ab1de8.jpg/v1/fill/w_343,h_343,al_c,q_80,usm_0.66_1.00_0.01/89ea07a19c3d415e99a8a8a3c0ab1de8.jpg';

export default (
  <CardGalleryItem
    uxpId="cardGalleryItem1"
    badge="<Badge size='medium' skin='standard' type='solid' uppercase>sale</Badge>"
    primaryActionProps={{
      label: 'Button',
    }}
    secondaryActionProps={{
      label: 'Text link',
    }}
    backgroundImageUrl={backgroundImageUrl}
  />
);
