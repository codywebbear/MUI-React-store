import React,{useState,useContext} from 'react';

export const CartContext = React.createContext()
export const useCartContext = ()=>useContext(CartContext)

export const ShowCartContext = React.createContext()
export const useShowCartContext = ()=>useContext(ShowCartContext)

export default function Cart(props){ 
  
  const [cart,setCart] = useState([])
  const [showCart,setShowCart] = useState(false)

  return <CartContext.Provider value={{cart,setCart}}>
          <ShowCartContext.Provider value={{showCart,setShowCart}}>
    {props.children}
        </ShowCartContext.Provider>
  </CartContext.Provider>
}


