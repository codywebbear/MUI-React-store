import React,{useState,useEffect,useContext} from 'react';

export const AllProductsContext = React.createContext();

export function useAllProductsContext(){
    return useContext(AllProductsContext)
}

export const FilterContext = React.createContext();

export function useFilterContext(){
    return useContext(FilterContext)
}

const FetchAllData = (props)=>{
    const [products,setProducts] = useState([])
    const [filter,setFilter] = useState('')

const plus = ()=>{
    switch(filter){
        case 'Jewelery':
            return 'category/jewelery'
        case 'Electronics':
            return 'category/electronics'
        case "Men's Clothing":
            return "category/men's clothing"
        case "Women's Clothing":
            return "category/women's clothing"
        default:
            return ''
    }
}



    useEffect(()=>{
        const fetchData = async()=>{
            const url = `https://fakestoreapi.com/products/${plus()}`
            console.log(url)
            const data = await fetch(url)
            const getData = await data.json()
            setProducts(getData)
        }
        console.log(filter)
        fetchData()
    },[filter])
    
    return  <FilterContext.Provider value={setFilter}>
                <AllProductsContext.Provider value={products}>
                    {props.children}
                </AllProductsContext.Provider>
            </FilterContext.Provider> 
}

export default FetchAllData