import React, { PureComponent } from 'react';
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
import TextButton from 'wix-style-react/TextButton';
import { Layout, Cell } from 'wix-style-react/Layout';

//icons
import Add from 'wix-style-react/new-icons/Add';
import Edit from 'wix-style-react/new-icons/Edit';
import Delete from 'wix-style-react/new-icons/Delete';
import DeleteSmall from 'wix-style-react/new-icons/DeleteSmall';
import AddSmall from 'wix-style-react/new-icons/AddSmall';
import EditSmall from 'wix-style-react/new-icons/EditSmall';
import ChevronDown from 'wix-style-react/new-icons/ChevronDown';
import Image from 'wix-ui-icons-common/Image';

const TooltipExample = () => (
  <SingleComponentSideBySide
    name="7.1 Tooltip"
    componentsNames={['<Tooltip/>']}
  >
    <Layout cols={2}>
      <Box>
        <Tooltip
          upgrade
          fixed
          size="small"
          appendTo="viewport"
          content="Small Tooltip"
        >
          <TextButton size="small">Hover Me</TextButton>
        </Tooltip>
      </Box>
      <Box>
        <Tooltip upgrade fixed appendTo="viewport" content="Medium Tooltip">
          <TextButton>Hover Me</TextButton>
        </Tooltip>
      </Box>
    </Layout>
  </SingleComponentSideBySide>
);

const PopoverExample = () => (
  <SingleComponentSideBySide
    name="7.2 Popover"
    componentsNames={['<Popover/>']}
  >
    <Popover animate appendTo="parent" placement="right" showArrow shown>
      <Popover.Element>
        <Box paddingRight="10px">
          <Text>Popover on the right</Text>
        </Box>
      </Popover.Element>
      <Popover.Content>
        <Box padding="12px 24px">
          <Text size="small">Popover</Text>
        </Box>
      </Popover.Content>
    </Popover>
  </SingleComponentSideBySide>
);

const PopoverMenuExample = () => (
  <SingleComponentSideBySide
    name="7.3 Popover Menu"
    componentsNames={['<PopoverMenu/>', '<PopoverMenu.MenuItem/>']}
  >
    <Layout cols={2}>
      <Box minHeight="100px">
        <PopoverMenu
          textSize="small"
          placement="bottom"
          triggerElement={
            <TextButton suffixIcon={<ChevronDown />}>Small Menu</TextButton>
          }
        >
          <PopoverMenu.MenuItem text="Add" prefixIcon={<AddSmall />} />
          <PopoverMenu.MenuItem text="Edit" prefixIcon={<EditSmall />} />
          <PopoverMenu.MenuItem
            text="Delete"
            prefixIcon={<DeleteSmall />}
            skin="destructive"
          />
        </PopoverMenu>
      </Box>
      <Box minHeight="150px">
        <PopoverMenu
          textSize="medium"
          placement="bottom"
          triggerElement={
            <TextButton suffixIcon={<ChevronDown />}>Medium Menu</TextButton>
          }
        >
          <PopoverMenu.MenuItem text="Add" prefixIcon={<Add />} />
          <PopoverMenu.MenuItem text="Edit" prefixIcon={<Edit />} />
          <PopoverMenu.MenuItem
            text="Delete"
            prefixIcon={<Delete />}
            skin="destructive"
          />
        </PopoverMenu>
      </Box>
    </Layout>
  </SingleComponentSideBySide>
);

class FloatingHelperExample extends PureComponent {
  state = { showFloatingHelper: true };

  toggle = () =>
    this.setState(({ showFloatingHelper }) => ({
      showFloatingHelper: !showFloatingHelper,
    }));

  render() {
    const { showFloatingHelper } = this.state;

    return (
      <SingleComponentSideBySide
        name="7.4 Floating Helper"
        componentsNames={['<FloatingHelper/>', '<FloatingHelper.Content/>']}
      >
        <Box verticalAlign="middle" height="200px">
          <Box paddingRight="10px">
            <TextButton onClick={this.toggle}>Click Me</TextButton>
          </Box>
          {showFloatingHelper && (
            <FloatingHelper
              target={<TextButton />}
              initiallyOpened
              placement="right"
              onClose={this.toggle}
              content={
                <FloatingHelper.Content
                  title="Don’t forget to setup payments"
                  body="In order to sell your music you need to choose a payment method."
                  actionText="Ok, Take Me There"
                  image={<Image width="102" height="102" viewBox="4 4 18 18" />}
                />
              }
            />
          )}
        </Box>
      </SingleComponentSideBySide>
    );
  }
}

const TooltipFamily = () => (
  <FamilyStructure title="7. Tooltips and Popovers">
    <TooltipExample />
    <PopoverExample />
    <PopoverMenuExample />
    <FloatingHelperExample />
  </FamilyStructure>
);

export default TooltipFamily;
