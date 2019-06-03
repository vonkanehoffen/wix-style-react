export default `
    <Layout  cols={2} gap={0} justifyItems="center">
      <PopoverMenu 
          triggerElement={ ({onClick}) => <IconButton onClick={onClick} priority="secondary"><Icons.More /></IconButton>}> 
        <PopoverMenu.MenuItem 
          text="option 1" 
          onClick={e => console.log(e)} 
        /> 
        <PopoverMenu.MenuItem 
          text="option 2" 
          onClick={e => console.log(e)} 
        />
        <PopoverMenu.MenuItem 
          text="option 3" 
          onClick={e => console.log(e)} 
        />

    </PopoverMenu>
    <PopoverMenu 
          triggerElement={({onClick}) => 
              <TextButton onClick={onClick} priority="secondary">Actions</TextButton>
      }> 
        <PopoverMenu.MenuItem 
          text="option 1" 
          onClick={e => console.log(e)} 
        /> 
        <PopoverMenu.MenuItem 
          text="option 2" 
          onClick={e => console.log(e)} 
        />
        <PopoverMenu.MenuItem 
          text="option 3" 
          onClick={e => console.log(e)} 
        />
    </PopoverMenu>  
  </Layout>
`;
