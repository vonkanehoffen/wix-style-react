import React from 'react';
import { GeneralStructure, SingleComponent } from '../sharedComponents';
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

const PrimarySkinsExamples = () => {
  const firstRowExamples = (
    <Layout cols={4} gap="10px" alignItems="center">
      <Button>standard</Button>
      <Box backgroundColor="D10" padding="3px">
        <Button skin="light" fullWidth>
          light
        </Button>
      </Box>
      <Button skin="destructive">destructive</Button>
      <Button skin="premium">premium</Button>
    </Layout>
  );

  const secondRowExamples = (
    <Layout cols={4} gap="10px" justifyItems="center">
      <Box backgroundColor="B20" padding="3px">
        <Button skin="transparent">transparent</Button>
      </Box>
      <Button skin="dark">dark</Button>
    </Layout>
  );

  return (
    <Layout>
      <Cell>{firstRowExamples}</Cell>
      <Cell>{secondRowExamples}</Cell>
    </Layout>
  );
};

const SecondarySkinsExamples = () => {
  const firstRowExamples = (
    <Layout cols={4} gap="10px" alignItems="center">
      <Button priority="secondary">default</Button>
      <Button skin="inverted">inverted</Button>
      <Box backgroundColor="D10" padding="3px">
        <Button priority="secondary" skin="light" fullWidth>
          light
        </Button>
      </Box>
      <Button priority="secondary" skin="premium">
        premium
      </Button>
    </Layout>
  );

  const secondRowExamples = (
    <Layout cols={4} gap="10px" justifyItems="center">
      <Box backgroundColor="D10" padding="3px">
        <Button priority="secondary" skin="premium-light" fullWidth>
          PremiumLight
        </Button>
      </Box>
      <Box backgroundColor="B20" padding="3px">
        <Button priority="secondary" skin="transparent">
          transparent
        </Button>
      </Box>
      <Box backgroundColor="Y30" padding="3px">
        <Button priority="secondary" skin="dark" fullWidth>
          dark
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
  <SingleComponent name="5.1 Button" componentsNames={['<Button/>']}>
    <Layout>
      <Cell>
        <PrimarySkinsExamples />
      </Cell>
      <Cell>
        <SecondarySkinsExamples />
      </Cell>
    </Layout>
  </SingleComponent>
);

const IconButtonExamples = () => (
  <SingleComponent name="5.2 Icon Button" componentsNames={['<IconButton/>']}>
    <Layout cols={5} gap={0} justifyItems="center" alignItems="center">
      <IconButton>
        <More />
      </IconButton>
      <IconButton skin="inverted">
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
      <Box padding={1} backgroundColor="D80">
        <IconButton skin="premium">
          <More />
        </IconButton>
      </Box>
    </Layout>
  </SingleComponent>
);

const TextButtonExamples = () => (
  <SingleComponent name="5.3 Text Button" componentsNames={['<TextButton/>']}>
    <Layout cols={4} justifyItems="center">
      <TextButton>standard</TextButton>
      <Box backgroundColor="D10">
        <TextButton skin="light">light</TextButton>
      </Box>
      <TextButton skin="premium">premium</TextButton>
      <Box backgroundColor="Y30">
        <TextButton skin="dark">dark</TextButton>
      </Box>
    </Layout>
  </SingleComponent>
);

const CloseButtonExamples = () => (
  <SingleComponent name="5.4 Close Button" componentsNames={['<CloseButton/>']}>
    <Layout cols={6} justifyItems="center" alignItems="center">
      <CloseButton />
      <Box backgroundColor="D10">
        <CloseButton skin="light" />
      </Box>
      <Box backgroundColor="Y30">
        <CloseButton skin="dark" />
      </Box>
      <CloseButton skin="standardFilled" />
      <Box backgroundColor="B20">
        <CloseButton skin="lightFilled" />
      </Box>
      <CloseButton skin="transparent" />
    </Layout>
  </SingleComponent>
);

const AddItemExample = () => (
  <SingleComponent name="5.5 Add Item" componentsNames={['<AddItem/>']}>
    <AddItem>Add New Item</AddItem>
  </SingleComponent>
);

const ButtonFamily = () => (
  <GeneralStructure title="5. Button">
    <ButtonsExamples />
    <IconButtonExamples />
    <TextButtonExamples />
    <CloseButtonExamples />
    <AddItemExample />
  </GeneralStructure>
);

export default ButtonFamily;
