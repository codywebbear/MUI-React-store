import React from 'react';
import {IconButton, ListItem, ListItemText} from '@mui/material'
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';
import {useCartContext} from '../context/cart'


function CartItem({item}) {
    
    const {cart,setCart} = useCartContext()

    const deleteItem =()=>{
        const index = cart.findIndex(product=>product===item)
        const newCart = [...cart].splice(0,index).concat([...cart].splice(index+1,cart.length))
        setCart(newCart)
    }

  return <ListItem sx={{display:'flex', justifyContent:'center', alignItems:'center'}} >
                <ListItemText sx={{width:'30%'}}>{item.title}</ListItemText>
                <ListItemText sx={{width:'30%',textAlign:'left'}}>{`$${item.price}`}</ListItemText>
                <IconButton
                    onClick={deleteItem}
                    sx={{marginRight:'10%'}}
                >
                    <DeleteForeverRoundedIcon sx={{color:'red'}} />
                </IconButton>
            </ListItem>
}

export default CartItem;
