import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import Typography from '@mui/material/Typography';
import Product from '../Product/Product';

const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://limitless-beyond-81209.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data.slice(0, 6)));
    }, [])
    return (
        <Box style={{ marginTop: 60 }} sx={{ flexGrow: 1 }}>
            <Container>
                <Typography sx={{ fontWeight: 'bold', color: 'info.main', my: 2, py: 2 }} variant="h4" component="div">
                    Feature Products
                </Typography>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        products.map(product => <Product
                            key={product._id}
                            product={product}
                        ></Product>)
                    }
                </Grid>
            </Container>
        </Box>
    );
};

export default Products;