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
    Tooltip,
    TextField} from '@mui/material';
import ExpandMore from '@mui/icons-material/ExpandMore';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ShoppingCartCheckoutRoundedIcon from '@mui/icons-material/ShoppingCartCheckoutRounded';
import DoNotDisturbIcon from '@mui/icons-material/DoNotDisturb';
import { useCartContext } from '../context/cart'
import {useLoginContext} from '../context/login'

function ProductComponent({product,xs,md}) {

    const [showInfo, setShowInfo] = useState(false)
    const [showQuantity, setShowQuantity] = useState(false)
    const [quantity, setQuantity] = useState(0)
    
    const {cart,setCart} = useCartContext()
    const {isLogged} = useLoginContext()

    const handleMoreInfoClick = ()=>{
        setShowInfo(!showInfo)
    }

    const handleAddCart = (ev)=>{
        ev.preventDefault()
       quantity > 0 && setCart([...cart,{prod:product,quantity:quantity}])
       quantity > 0 && setShowQuantity(false)
    }

    const handleAction = () => {
        isLogged ?setShowQuantity(!showQuantity)
                : alert('Login first')
    }

    const handleChange =(ev)=>{
        typeof parseInt(ev.target.value) === Number 
        && setQuantity(parseInt(ev.target.value))
        
        
    }
    const handleClick = (dir)=>{
        dir === 'left' ? quantity > 0 && setQuantity(quantity - 1) 
                       : quantity < 100 && setQuantity(quantity + 1)
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
                                                alignItems:'center',
                                                width:'100%',                                               
                                                }}
                                        >
                                            <Typography
                                                    ml={2}
                                                    mr={6}
                                                    color={'#5c6b63'}
                                                    textAlign={'center'}
                                                >{`$${product.price}`}
                                            </Typography>
                                            {!showQuantity
                                            ?(<Tooltip title={'Add to Cart'}>
                                            
                                            <IconButton
                                            color={'primary'}
                                            onClick={handleAction}
                                            sx={{
                                                position:'relative',
                                                top:'5px'
                                            }}
                                            >
                                                <AddShoppingCartIcon />
                                            </IconButton>
                                        
                                            </Tooltip>)
                                            :<Box
                                                component="form"
                                                sx={{
                                                    width:'5rem',
                                                    display:'flex',justifyContent:'center',alignItems:'center'                                                    
                                                }}                                            
                                                noValidate
                                                autoComplete="off"
                                                onSubmit={(ev)=>handleAddCart(ev)}
                                            >   
                                                <IconButton
                                                    size='small'
                                                    onClick={()=>handleClick('left')}
                                                >
                                                <ArrowLeftIcon/></IconButton>
                                                <input
                                                    style={{width:'3rem',textAlign:'center'}}                                                                                                       
                                                    value={quantity}
                                                    onChange={handleChange}
                                                    />
                                                <IconButton
                                                    size='small'
                                                    onClick={()=>handleClick('right')}
                                                >
                                                <ArrowRightIcon/></IconButton>
                                                <IconButton
                                                    type='submit'
                                                    size='small'                                                    
                                                ><ShoppingCartCheckoutRoundedIcon
                                                    color={quantity > 0 ? 'primary' : 'disabled'}
                                                /></IconButton>
                                                <IconButton                                                    
                                                    size='small'
                                                    onClick={handleAction}                                                   
                                                ><DoNotDisturbIcon
                                                    sx={{color:'red'}}
                                                /></IconButton>
                                            </Box>
                                                
                                        }
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
