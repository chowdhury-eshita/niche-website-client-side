import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import Typography from '@mui/material/Typography';
import ExploreProduct from '../ExploreProduct/ExploreProduct';

const ExploreProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])
    return (
        <Box style={{ minHeight: '100vh' }} sx={{ flexGrow: 1 }}>
            <Container>
                <Typography sx={{ fontWeight: 'bold', color: 'info.main', my: 2 }} variant="h4" component="div">
                    Explore Products
                </Typography>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        products.map(product => <ExploreProduct
                            key={product._id}
                            product={product}
                        ></ExploreProduct>)
                    }
                </Grid>
            </Container>
        </Box>
    );
};

export default ExploreProducts;