import React from 'react';
import {IconButton, ListItem, ListItemText} from '@mui/material'
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';
import {useCartContext} from '../context/cart'


function CartItem({item}) {
    
    const {cart,setCart} = useCartContext()
    

    const deleteItem =()=>{
         
        const index = cart.findIndex(product=>product===item)
        item.quantity === 1 ? setCart([...cart].splice(0,index).concat([...cart].splice(index+1,cart.length)))
                            :setCart([...cart].splice(0,index)
                                .concat({...cart[index],quantity:parseInt(item.quantity-1)})
                                .concat([...cart].splice(index+1,cart.length)))
    }

  return <ListItem sx={{display:'flex', justifyContent:'center', alignItems:'center'}} >
                <ListItemText sx={{width:'30%'}}>{`${item.prod.title} x ${item.quantity}`}</ListItemText>
                <ListItemText sx={{width:'30%',textAlign:'left'}}>{`$${item.prod.price*item.quantity}`}</ListItemText>
                <IconButton
                    onClick={deleteItem}
                    sx={{marginRight:'10%'}}
                >
                    <DeleteForeverRoundedIcon sx={{color:'red'}} />
                </IconButton>
            </ListItem>
}

export default CartItem;
