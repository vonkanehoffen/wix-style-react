import React from 'react';
import { GeneralStructure, SingleComponent } from '../sharedComponents';
//Assets
import MoreIcon from 'wix-style-react/new-icons/More';

//5. Button
import Button from 'wix-style-react/Button';
import IconButton from 'wix-style-react/IconButton';
import TextButton from 'wix-style-react/TextButton';
import CloseButton from 'wix-style-react/CloseButton';
import AddItem from 'wix-style-react/AddItem';

const ButtonFamily = () => (
  <GeneralStructure title="5. Button">
    <SingleComponent name="5.1 Button" componentsNames={['<Button/>']}>
      <Button>Button</Button>
    </SingleComponent>
    <SingleComponent name="5.2 Icon Button" componentsNames={['<IconButton/>']}>
      <IconButton>
        <MoreIcon />
      </IconButton>
    </SingleComponent>
    <SingleComponent name="5.3 Text Button" componentsNames={['<TextButton/>']}>
      <TextButton>Text Button</TextButton>
    </SingleComponent>
    <SingleComponent
      name="5.4 Close Button"
      componentsNames={['<CloseButton/>']}
    >
      <CloseButton />
    </SingleComponent>
    <SingleComponent name="5.5 Add Item" componentsNames={['<AddItem/>']}>
      <AddItem>Add New Item</AddItem>
    </SingleComponent>
  </GeneralStructure>
);

export default ButtonFamily;
