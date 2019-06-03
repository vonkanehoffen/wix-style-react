export default `
    <Layout cols={3} gap={0} justifyItems="center">
      <PopoverMenu 
          triggerElement={({onClick}) => (
              <IconButton onClick={onClick} priority="secondary"><Icons.More /></IconButton>
        )}> 
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
        triggerElement={({onClick}) => 
            <IconButton onClick={onClick} priority="secondary"><Icons.More /></IconButton>
    }> 
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
        triggerElement={({onClick}) =>
            <IconButton onClick={onClick} priority="secondary"><Icons.More /></IconButton>
    }> 
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
  </Layout>
`;
