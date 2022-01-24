import { 
    Container, 
    Grid,
    Box,
    IconButton
   } from '@mui/material';
import GridViewRoundedIcon from '@mui/icons-material/GridViewRounded';
import AutoAwesomeMosaicRoundedIcon from '@mui/icons-material/AutoAwesomeMosaicRounded';
import React, {useState}from 'react';
import {useAllProductsContext} from '../context/allProducts'
import ProductComponent from './ProductComponent';   
import Masonry from '@mui/lab/Masonry';

function ListComponent() {

    const products = useAllProductsContext()  
    const [isMasonry, setIsMasonry]= useState(false)

   

    const handleClick = ()=>{
        setIsMasonry(!isMasonry)
    }
    console.log(products)
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
