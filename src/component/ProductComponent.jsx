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
                                        title={product.title}
                                        subheader={`$${product.price}`} />   
                                    <CardContent
                                        sx={{
                                            height: '40vh'
                                        }}
                                    >
                                    <CardMedia 
                                        component="img"
                                        image={product.image}
                                        sx={{
                                            height:'35vh',
                                            width:'auto',
                                            maxwidth:'100%'                                              
                                        }}
                                    />
                                    </CardContent>
                                    
                                    {
                                        showInfo && <CardContent>
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
