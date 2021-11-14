import * as React from 'react';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import { Box } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { NavLink } from 'react-router-dom';
import { Button } from '@mui/material';

const Product = (props) => {
    const { _id, name, cost, description, rating, img } = props.product;
    return (
        <Grid item xs={4} sm={4} md={4}>
            <Card sx={{ minWidth: 275 }}>
                <CardMedia
                    component="img"
                    style={{ width: 'auto', hieght: 'auto', margin: '0 auto' }}
                    image={img}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography variant="h6" component="div">
                        {name}
                    </Typography>
                    <Typography sx={{ fontWeight: 'bold' }} variant="h5" component="div">
                        Price: {cost}
                    </Typography>
                    <Box style={{ display: 'flex', justifyContent: 'center' }} >
                        <Stack sx={{ mt: 2 }} spacing={1}>
                            <Rating name="read-only" readOnly defaultValue={rating} precision={1} />
                        </Stack>
                    </Box>
                    <Typography sx={{ my: 1 }} variant="body2" color="text.secondary">
                        {description}
                    </Typography>
                    <NavLink style={{ textDecoration: 'none' }} to={`/booking/${_id}`}>
                        <Button color="secondary" variant="contained">Buy Now</Button>
                    </NavLink>
                </CardContent>
            </Card>
        </Grid >
    );
};

export default Product;