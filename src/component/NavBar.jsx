import { 
    AppBar, 
    Box, 
    IconButton, 
    Toolbar, 
    Typography,
    Button, 
    InputBase, 
    Drawer, 
    List, 
    ListItem, 
    ListItemText, 
    Divider } from '@mui/material';
import ShoppingCartTwoToneIcon from '@mui/icons-material/ShoppingCartTwoTone';
import LogoutTwoToneIcon from '@mui/icons-material/LogoutTwoTone';
import { DensitySmall, Search } from '@mui/icons-material';
import React,{useState} from 'react';
import {useFilterContext} from '../context/allProducts'
import {useLoginContext} from '../context/login'

function NavBar() {

    const [drawer, setDrawer] = useState(false) 

    const setFilter = useFilterContext()
    const {isLogged, setIsLogged} =useLoginContext()

    const toggleDrawer =(bool)=>{
        setDrawer(bool)
    }

    const handleFilter = (bool, ev)=>{
        setFilter(ev.target.innerText)
        toggleDrawer(bool)
    }

    const handleLoginClick=()=>{
        setIsLogged(!isLogged)
    }

  return (
      <Box sx={{flexGrow:1}}>
          <AppBar 
            sx={{background:'white'}}
            position="fixed"
            >
                <Toolbar sx={{display:'inlineFlex', justifyContent:'space-between'}}>
                    <Box sx={{
                                display:'flex',
                                justifyContent:'start',
                                alignItems:'center',
                                flexGrow:'3',
                                zIndex:'1200'
                            }}>
                        <IconButton sx={{mr:3}} onClick={()=>toggleDrawer(true)}>
                        <DensitySmall />
                        </IconButton>
                        <Typography color={'black'}>
                            hello world
                        </Typography>
                    </Box>
                    
                    <Box sx={{display:'flex', background:'lightGrey', borderRadius:'10px', }} mr={5}>
                        <Box
                            sx={{
                                display:'flex',
                                justifyContent:'center',
                                alignItems:'center'
                            }}
                            mr={1}
                        >
                            <Search ></Search>
                        </Box>
                        <InputBase placeholder='Search...'></InputBase>
                    </Box>
                    {
                        !isLogged ?(
                            <Button 
                                onClick={handleLoginClick}
                            >Login</Button>
                        ):(
                            <Box>
                                <IconButton
                                    color={'primary'}
                                >
                                    <ShoppingCartTwoToneIcon />
                                </IconButton>
                                <IconButton
                                    color={'primary'}
                                    onClick={handleLoginClick}
                                >
                                    <LogoutTwoToneIcon/>
                                </IconButton>
                            </Box>
                        )
                    }
                    
                </Toolbar>
           
          </AppBar>
          <Drawer
            anchor={'left'}
            open={drawer}
            onClose={(ev)=>toggleDrawer(false,ev)}
          >
            <Box
                onClick={(ev)=>handleFilter(false,ev)}
            >
            <List
                
                >
                <ListItem sx={{width:'20vw'}}>
                    <ListItemText primary={'Categories'} sx={{textAlign:'right',paddingRight:'15%'}}  />
                </ListItem>
            
            <Divider />
            
                <ListItem button sx={{width:'20vw'}}>
                    <ListItemText primary={'Electronics'} sx={{textAlign:'right',paddingRight:'15%'}}  />
                </ListItem>
            
            <Divider />
            
                <ListItem button sx={{width:'20vw'}}>
                    <ListItemText primary={'Jewelery'} sx={{textAlign:'right',paddingRight:'15%'}}  />
                </ListItem>
                <Divider />

                <ListItem button sx={{width:'20vw'}}>
                    <ListItemText primary={"Men's Clothing"} sx={{textAlign:'right',paddingRight:'15%'}}  />
                </ListItem>
                <Divider />

                <ListItem button sx={{width:'20vw'}}>
                    <ListItemText primary={"Women's Clothing"} sx={{textAlign:'right',paddingRight:'15%'}}  />
                </ListItem>
                <Divider />

                <ListItem button sx={{width:'20vw'}}>
                    <ListItemText primary={"Show All"} sx={{textAlign:'right',paddingRight:'15%'}}  />
                </ListItem>
                <Divider />
            </List>
            </Box>
              
              
          </Drawer>
      </Box>
      
  );
}

export default NavBar;


