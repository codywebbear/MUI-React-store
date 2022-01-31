import React,{useState} from 'react';
import { 
    Grid, 
    Card,
    Box,
    Typography, 
    CardHeader, 
    CardMedia, 
    CardContent, 
    IconButton,
    Tooltip} from '@mui/material';
import ExpandMore from '@mui/icons-material/ExpandMore';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useCartContext } from '../context/cart'


function ProductComponent({product,xs,md}) {

    const [showInfo, setShowInfo] = useState(false)
    
    const {cart,setCart} = useCartContext()

    const handleMoreInfoClick = ()=>{
        setShowInfo(!showInfo)
    }

    const handleAddCart = ()=>{
        setCart([
            ...cart,
            product
        ])
        console.log(cart)
    }


  return (
                        <Grid item
                                xs={xs} 
                                md={md}                                         
                                >
                                <Card 
                                    sx={{
                                        display:'flex', 
                                        flexDirection:'column', 
                                        justifyContent: 'center',
                                        alignItems:'center',
                                        }}>
                                    <CardHeader 
                                        titleTypographyProps={{variant:'h6'}}                                    
                                        title={
                                            <Typography
                                                variant='h6'
                                            >
                                                {product.title}
                                            </Typography>
                                        }                                                                            
                                        sx={{width:'100%'}}
                                        />
                                        <Box
                                            sx={{
                                                display: 'flex',
                                                flexDirection:'row',
                                                justifyContent:'left',
                                                alignItems:'baseline',
                                                width:'100%',
                                                }}
                                        >
                                            <Typography
                                                    ml={2}
                                                    mr={2}
                                                    mt={2}
                                                    color={'#5c6b63'}
                                                    textAlign={'center'}
                                                >{`$${product.price}`}
                                            </Typography>
                                            <Tooltip title={'Add to Cart'}>
                                            <IconButton
                                            color={'primary'}
                                            onClick={handleAddCart}
                                            sx={{
                                                position:'relative',
                                                top:'5px'
                                            }}
                                            >
                                                <AddShoppingCartIcon />
                                            </IconButton>
                                            </Tooltip>
                                        </Box>                                                                     
                                    <CardContent
                                        sx={{
                                            height: '50vh'
                                        }}
                                    >
                                    <CardMedia 
                                        component="img"
                                        image={product.image}
                                        sx={{
                                            maxWidth:'100%',
                                            maxHeight:'90%'                                             
                                        }}
                                    />
                                    </CardContent>
                                    
                                    {
                                        showInfo && <CardContent >
                                                        <Typography component='p' variant='body2'>
                                                            {product.description}
                                                        </Typography>
                                                    </CardContent>
                                    }
                                   
                                    <IconButton
                                        expand={'expanded'}
                                        onClick={handleMoreInfoClick}
                                        sx={{
                                            transform: !showInfo ? 'rotate(0deg)' : 'rotate(180deg)',
                                        }}
                                    >
                                        <ExpandMore />
                                    </IconButton>
                                    
                                </Card>
                            </Grid>)
}

export default ProductComponent;
