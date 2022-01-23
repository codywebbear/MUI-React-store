import React,{useState,useEffect,useContext} from 'react';

export const AllProductsContext = React.createContext();

export function useAllProductsContext(){
    return useContext(AllProductsContext)
}

const FetchAllData = (props)=>{
    const [products,setProducts] = useState([])
    useEffect(()=>{
        const fetchData = async()=>{
            const data = await fetch('https://fakestoreapi.com/products?limit=20')
            const getData = await data.json()
            setProducts(getData)
        }
        fetchData()
    },[])
    
    return <AllProductsContext.Provider value={products}>
                {props.children}
            </AllProductsContext.Provider> 
}

export default FetchAllData