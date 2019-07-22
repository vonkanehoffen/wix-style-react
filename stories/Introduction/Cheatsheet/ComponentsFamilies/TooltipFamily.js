import React from 'react';
import {
  FamilyStructure,
  SingleComponentSideBySide,
} from '../sharedComponents';

//7. Tooltip
import Tooltip from 'wix-style-react/Tooltip';
import Popover from 'wix-style-react/Popover';
import PopoverMenu from 'wix-style-react/beta/PopoverMenu';
import FloatingHelper from 'wix-style-react/FloatingHelper';

//Assets
import Text from 'wix-style-react/Text';
import Box from 'wix-style-react/Box';
import IconButton from 'wix-style-react/IconButton';
import MoreIcon from 'wix-style-react/new-icons/More';

const TooltipFamily = () => (
  <FamilyStructure title="7. Tooltips and Popovers">
    <SingleComponentSideBySide
      name="7.1 Tooltip"
      componentsNames={['<Tooltip/>']}
    >
      <Tooltip upgrade content="Tooltip">
        <Text>Hover me</Text>
      </Tooltip>
    </SingleComponentSideBySide>
    <SingleComponentSideBySide
      name="7.2 Popover"
      componentsNames={['<Popover/>']}
    >
      <Popover showArrow shown placement="right">
        <Popover.Element>
          <div />
        </Popover.Element>
        <Popover.Content>
          <Box padding="12px 24px">
            <Text size="small">Popover</Text>
          </Box>
        </Popover.Content>
      </Popover>
    </SingleComponentSideBySide>
    <SingleComponentSideBySide
      name="7.3 Popover Menu"
      componentsNames={['<PopoverMenu/>']}
    >
      <PopoverMenu
        triggerElement={({ onClick }) => (
          <IconButton onClick={onClick} priority="secondary">
            <MoreIcon />
          </IconButton>
        )}
      >
        <PopoverMenu.MenuItem text="option 1" />
        <PopoverMenu.MenuItem text="option 2" />
        <PopoverMenu.MenuItem text="option 3" />
      </PopoverMenu>
    </SingleComponentSideBySide>
    <SingleComponentSideBySide
      name="7.4 Floating Helper"
      componentsNames={['<FloatingHelper/>']}
    >
      <FloatingHelper
        content={
          <Box>
            <Box direction="vertical">
              <Box marginBottom={1}>
                <Text light weight="normal">
                  Don’t forget to setup payments
                </Text>
              </Box>
              <Text light weight="light">
                In order to sell your music you need to choose a payment method.
              </Text>
            </Box>
          </Box>
        }
        initiallyOpened
        placement="right"
        target={<Box height="150px" />}
      />
    </SingleComponentSideBySide>
  </FamilyStructure>
);

export default TooltipFamily;
