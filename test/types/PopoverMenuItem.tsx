import * as React from 'react';
import PopoverMenuItem from '../../src/PopoverMenuItem';

function PopoverMenuItemWithMandatoryProps() {
  return <PopoverMenuItem />;
}

function PopoverMenuItemWithAllProps() {
  return (
    <PopoverMenuItem
      icon={<span />}
      text={<span />}
      onClick={() => {}}
      size="large"
      disabled={false}
      divider={true}
    />
  );
}
