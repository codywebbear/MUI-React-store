import React from 'react';
import {Box,Divider,Drawer, IconButton, List,Typography} from '@mui/material'
import ShoppingCartCheckoutRoundedIcon from '@mui/icons-material/ShoppingCartCheckoutRounded';
import {useCartContext} from '../context/cart'
import {useShowCartContext} from '../context/cart'
import CartItem from './CartItem';

function CartComponent() {

    const {cart,setCart} = useCartContext()
    const {showCart,setShowCart} = useShowCartContext()

    const handleClose = ()=>{
        setShowCart(false)
    }

    let total = 0
    const totalCart = ()=>{
        cart.forEach(item=>total+=parseInt(item.price))
    }
    totalCart() 
    
  return <Box
        >
            <Drawer
            anchor={'bottom'}
            open={showCart}
            onClose={handleClose}
            sx={{minHeight:'25vh'}}
            >
            
                    
                    <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'} ml={2} mr={2} mt={1}>
                        <Typography variant={"h4"} color={"primary"}>Cart</Typography>
                        <Box display={'flex'} justifyContent={'space-around'} alignItems={'center'} width={'40%'}>
                            <Typography variant={"h6"} color={"primary"} mr={5}>{`Total: $${total}`}</Typography>
                            <IconButton  fontSize='large' onClick={handleClose}>
                                <ShoppingCartCheckoutRoundedIcon color='primary' fontSize='large'/>
                            </IconButton>
                        </Box>
                    </Box>
                    <Divider/>
                <Box 
                    minHeight={'25vh'}
                    sx={cart.length >0 
                        ?{ 
                            display:'flex',
                            flexDirection:'column',
                            alignItems:'space-between'
                        }
                        :{
                            display:'flex',
                            flexDirection:'column',
                            justifyContent:'center',
                            alignItems:'center'
                        }
                        }
                    >
                    <List>
                        {
                            cart.length > 0 ?
                            cart.map((item,index)=><CartItem item={item} setCart={setCart} cart={cart} key={index}/>)
                            : <Typography variant='h5'>Empty</Typography>
                        }
                    </List>
                </Box>
                
           
            </Drawer>
        </Box>;
}

export default CartComponent;
