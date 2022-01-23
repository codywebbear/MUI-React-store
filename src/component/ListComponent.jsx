import { 
    Container, 
    Grid,
    Box,
    IconButton
   } from '@mui/material';
import GridViewRoundedIcon from '@mui/icons-material/GridViewRounded';
import AutoAwesomeMosaicRoundedIcon from '@mui/icons-material/AutoAwesomeMosaicRounded';
import React, {useState, useEffect}from 'react';
import ProductComponent from './ProductComponent';   
import Masonry from '@mui/lab/Masonry';

function ListComponent() {


    const [products, setProducts] = useState([])
    const [isMasonry, setIsMasonry]= useState(true)

    useEffect(()=>{
        const fetchData = async()=>{
            const data = await fetch('https://fakestoreapi.com/products?limit=20')
            const getData = await data.json()
            setProducts(getData)
        }
        fetchData()
       
    },[])

    const handleClick = ()=>{
        setIsMasonry(!isMasonry)
    }

  return (
    <Container >
        <IconButton  sx={{position:'absolute',top:'80px', right:'2vw'}} onClick={handleClick}>
            {
                !isMasonry ? <GridViewRoundedIcon /> : <AutoAwesomeMosaicRoundedIcon />
            }
        </IconButton>
        {!isMasonry 
        ?(
        <Grid mt={10} container columns={12} spacing={2} wrap="wrap">
            {
               products.map((item,index)=>{
                    return <ProductComponent key={index} product={item} xs={12} md={4} />
                })
            }
        </Grid>)
        :(
            <Box mt={10} maxWidth={'90VW'} minHeight={10}>
                <Masonry
                columns={3}
                spacing={1}
                         
            >
                {
               products.map((item,index)=>{
                    return <ProductComponent key={index} product={item} xs={null} ms={null}/>
                })
            }
                </Masonry>
            </Box>
                
            
            
        )    
    }
    </Container>    
    );
}

export default ListComponent;
