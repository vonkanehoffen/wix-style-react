import React from 'react';
import Edit from 'wix-style-react/new-icons/Edit';
import Delete from 'wix-style-react/new-icons/Delete';
import Email from 'wix-style-react/new-icons/Email';
import More from 'wix-style-react/new-icons/More';
import Badge from 'wix-style-react/Badge';
import IconButton from 'wix-style-react/IconButton';

import { storySettings } from './storySettings';
import PopoverMenu from '../../beta/PopoverMenu';

const backgroundImageUrl =
  'https://static.wixstatic.com/media/89ea07a19c3d415e99a8a8a3c0ab1de8.jpg/v1/fill/w_343,h_343,al_c,q_80,usm_0.66_1.00_0.01/89ea07a19c3d415e99a8a8a3c0ab1de8.jpg';

const getPrimaryActionProps = label => ({
  label,
  onClick: () => {
    alert('Primary action clicked');
  },
});
const getSecondaryActionProps = label => ({
  label,
  onClick: () => {
    alert('Secondary action clicked');
  },
});

const commonProps = {
  badge: (
    <Badge size="medium" skin="standard" type="solid" uppercase>
      sale
    </Badge>
  ),
  title: 'Card Title',
  subtitle: 'Card subtitle',
  backgroundImageUrl: backgroundImageUrl,
};

export default {
  ...commonProps,
  dataHook: storySettings.dataHook,
  primaryActionProps: getPrimaryActionProps('Button'),
  secondaryActionProps: getSecondaryActionProps('Text Link'),
  settingsMenu: (
    <PopoverMenu
      triggerElement={({ onClick }) => (
        <IconButton
          onClick={e => {
            onClick(e);
            e.stopPropogation();
          }}
          skin="light"
          priority="secondary"
        >
          <More />
        </IconButton>
      )}
    >
      <PopoverMenu.MenuItem text="Edit" prefixIcon={<Edit />} />
      <PopoverMenu.MenuItem text="Delete" prefixIcon={<Delete />} />
      <PopoverMenu.MenuItem text="Delete" prefixIcon={<Email />} />
      <PopoverMenu.MenuItem text="Something" disabled />
    </PopoverMenu>
  ),
};