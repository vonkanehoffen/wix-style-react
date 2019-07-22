export const trigger = `
<Layout  cols={2} gap={0} justifyItems="center">
<PopoverMenu 
    triggerElement={<IconButton priority="secondary"><Icons.More /></IconButton>}> 
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
    triggerElement={<TextButton priority="secondary">Actions</TextButton>}> 
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

export const divider = `
<Layout cols={1} gap={0} justifyItems="center">
<PopoverMenu 
    triggerElement={<IconButton priority="secondary"><Icons.More /></IconButton>}> 
  <PopoverMenu.MenuItem 
    text="Add" 
    onClick={e => console.log(e)} 
    prefixIcon={<Icons.Add/>}
  /> 
  <PopoverMenu.MenuItem 
    text="Edit" 
    onClick={e => console.log(e)}
    prefixIcon={<Icons.Edit/>}           
  />
  <PopoverMenu.MenuItem 
    text="Delete" 
    onClick={e => console.log(e)}
    prefixIcon={<Icons.Delete/>}           
  />
  <PopoverMenu.Divider/>
  <PopoverMenu.MenuItem 
    text="Add" 
    onClick={e => console.log(e)} 
    prefixIcon={<Icons.Add/>}
  /> 
  <PopoverMenu.MenuItem 
  text="Delete" 
  onClick={e => console.log(e)}
  prefixIcon={<Icons.Delete/>}           
  />
  <PopoverMenu.MenuItem 
    text="Delete" 
    onClick={e => console.log(e)}
    prefixIcon={<Icons.Delete/>}           
  />                         
</PopoverMenu>    
</Layout>
`;

export const menuItemStyling = `
<Layout cols={3} gap={0} justifyItems="center">
      <PopoverMenu 
          triggerElement={<IconButton priority="secondary"><Icons.More /></IconButton>}> 
        <PopoverMenu.MenuItem 
          text="Add" 
          onClick={e => console.log(e)} 
          prefixIcon={<Icons.Add/>}
        /> 
        <PopoverMenu.MenuItem 
          text="Edit" 
          onClick={e => console.log(e)}
          prefixIcon={<Icons.Edit/>}           
        />
        <PopoverMenu.MenuItem 
          text="Delete" 
          onClick={e => console.log(e)}
          prefixIcon={<Icons.Delete/>}           
        />
    </PopoverMenu>
    <PopoverMenu 
        triggerElement={<IconButton priority="secondary"><Icons.More /></IconButton>}> 
        <PopoverMenu.MenuItem 
          text="default dark skin" 
          onClick={e => console.log(e)} 
        />     
        <PopoverMenu.MenuItem 
          text="destructive skin" 
          onClick={e => console.log(e)} 
          skin="destructive"
        /> 
        <PopoverMenu.MenuItem 
          text="disabled option" 
          disabled
        />         
    </PopoverMenu>  
    <PopoverMenu 
        textSize="small"
        triggerElement={<IconButton priority="secondary"><Icons.More /></IconButton>}> 
        <PopoverMenu.MenuItem 
          text="option1"
          onClick={e => console.log(e)} 
        />     
        <PopoverMenu.MenuItem 
          text="option2"
          onClick={e => console.log(e)} 
        /> 
        <PopoverMenu.MenuItem 
          text="option3" 
          onClick={e => console.log(e)}
        /> 
        <PopoverMenu.MenuItem 
          text="option4" 
          onClick={e => console.log(e)}
        />                     
    </PopoverMenu>      
  </Layout>`;

export const wrap = `
<Layout cols={2} gap={0} justifyItems="center">
  <PopoverMenu 
    ellipsis
    triggerElement={<IconButton priority="secondary"><Icons.More /></IconButton>}
  > 
    <PopoverMenu.MenuItem 
    text="very long message very long" 
    /> 
    <PopoverMenu.MenuItem 
    text="very long message very long" 
    />
    <PopoverMenu.MenuItem 
    text="very long message very long" 
    />
  </PopoverMenu>
  <PopoverMenu 
    triggerElement={<IconButton priority="secondary"><Icons.More /></IconButton>}
  > 
    <PopoverMenu.MenuItem 
    text="very long message very long" 
    /> 
    <PopoverMenu.MenuItem 
    text="very long message very long" 
    />
    <PopoverMenu.MenuItem 
    text="very long message very long" 
    />
  </PopoverMenu>
</Layout>
`;
