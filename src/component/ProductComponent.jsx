import React,{useState} from 'react';
import { 
    Grid, 
    Card, 
    Typography, 
    CardHeader, 
    CardMedia, 
    CardContent, 
    IconButton} from '@mui/material';
import { ExpandMore, } from '@mui/icons-material';




function ProductComponent({product,xs,md}) {

    const [showInfo, setShowInfo] = useState(false)
    
    const handleMoreInfoClick = ()=>{
        setShowInfo(!showInfo)
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
                                        subheader={
                                            <Typography
                                                mt={2}
                                                color={'#5c6b63'}
                                            >{`$${product.price}`}</Typography>} 
                                        
                                        sx={{width:'100%'}}
                                        />   
                                        
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
