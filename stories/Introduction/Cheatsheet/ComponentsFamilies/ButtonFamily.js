import React from 'react';
import {
  FamilyStructure,
  SingleComponentSideBySide,
  singleComponentSizes,
} from '../sharedComponents';
//Assets
import More from 'wix-style-react/new-icons/More';

import { Layout, Cell } from 'wix-style-react/Layout';
import Box from 'wix-style-react/Box';

//5. Button
import Button from 'wix-style-react/Button';
import IconButton from 'wix-style-react/IconButton';
import TextButton from 'wix-style-react/TextButton';
import CloseButton from 'wix-style-react/CloseButton';
import AddItem from 'wix-style-react/AddItem';

const PrimarySkinsExamples = () => (
  <Layout cols={6} gap="10px" alignItems="center">
    <Button>Standard</Button>
    <Button skin="premium">Premium</Button>
    <Box backgroundColor="D10" padding="3px">
      <Button skin="light" fullWidth>
        Light
      </Button>
    </Box>
    <Box backgroundColor="B20" padding="3px">
      <Button skin="transparent">Transparent</Button>
    </Box>
    <Button skin="dark">Dark</Button>
    <Button skin="destructive">Destructive</Button>
  </Layout>
);

const SecondarySkinsExamples = () => {
  const firstRowExamples = (
    <Layout cols={6} gap="10px" alignItems="center">
      <Button priority="secondary">Standard</Button>
      <Button priority="secondary" skin="premium">
        Premium
      </Button>
      <Box backgroundColor="D10" padding="3px">
        <Button priority="secondary" skin="light" fullWidth>
          Light
        </Button>
      </Box>
      <Box backgroundColor="B20" padding="3px">
        <Button priority="secondary" skin="transparent">
          Transparent
        </Button>
      </Box>
      <Box backgroundColor="Y30" padding="3px">
        <Button priority="secondary" skin="dark" fullWidth>
          Dark
        </Button>
      </Box>
      <Button priority="secondary" skin="destructive">
        Destructive
      </Button>
    </Layout>
  );

  const secondRowExamples = (
    <Layout cols={6} gap="10px" justifyItems="center">
      <Button skin="inverted">Inverted</Button>
      <Box backgroundColor="D10" padding="3px">
        <Button priority="secondary" skin="premium-light" fullWidth>
          PremiumLight
        </Button>
      </Box>
    </Layout>
  );

  return (
    <Layout>
      <Cell>{firstRowExamples}</Cell>
      <Cell>{secondRowExamples}</Cell>
    </Layout>
  );
};

const ButtonsExamples = () => (
  <SingleComponentSideBySide name="5.1 Button" componentsNames={['<Button/>']}>
    <Layout>
      <Cell>
        <PrimarySkinsExamples />
      </Cell>
      <Cell>
        <SecondarySkinsExamples />
      </Cell>
    </Layout>
  </SingleComponentSideBySide>
);

const IconButtonExamples = () => (
  <SingleComponentSideBySide
    name="5.2 Icon Button"
    componentsNames={['<IconButton/>']}
  >
    <Layout cols={6} gap={0} justifyItems="center" alignItems="center">
      <IconButton>
        <More />
      </IconButton>
      <IconButton skin="premium">
        <More />
      </IconButton>
      <Box padding={1} backgroundColor="D10">
        <IconButton skin="light">
          <More />
        </IconButton>
      </Box>
      <IconButton skin="transparent">
        <More />
      </IconButton>
      <IconButton skin="inverted">
        <More />
      </IconButton>
    </Layout>
  </SingleComponentSideBySide>
);

const TextButtonExamples = () => (
  <SingleComponentSideBySide
    name="5.3 Text Button"
    componentsNames={['<TextButton/>']}
  >
    <Layout cols={6} justifyItems="center">
      <TextButton>Standard</TextButton>
      <TextButton skin="premium">Premium</TextButton>
      <Box backgroundColor="D10">
        <TextButton skin="light">Light</TextButton>
      </Box>
      <Box backgroundColor="Y30">
        <TextButton skin="dark">Dark</TextButton>
      </Box>
    </Layout>
  </SingleComponentSideBySide>
);

const CloseButtonExamples = () => (
  <SingleComponentSideBySide
    name="5.4 Close Button"
    componentsNames={['<CloseButton/>']}
  >
    <Layout cols={6} justifyItems="center" alignItems="center">
      <CloseButton />
      <CloseButton skin="standardFilled" />
      <Box backgroundColor="D10">
        <CloseButton skin="light" />
      </Box>
      <CloseButton skin="transparent" />
      <Box backgroundColor="Y30">
        <CloseButton skin="dark" />
      </Box>
      <Box backgroundColor="B20">
        <CloseButton skin="lightFilled" />
      </Box>
    </Layout>
  </SingleComponentSideBySide>
);

const AddItemExample = () => (
  <SingleComponentSideBySide
    name="5.5 Add Item"
    componentsNames={['<AddItem/>']}
    size={singleComponentSizes.compact}
  >
    <AddItem>Add New Item</AddItem>
  </SingleComponentSideBySide>
);

const ButtonFamily = () => (
  <FamilyStructure title="5. Button">
    <ButtonsExamples />
    <IconButtonExamples />
    <TextButtonExamples />
    <CloseButtonExamples />
    <AddItemExample />
  </FamilyStructure>
);

export default ButtonFamily;
