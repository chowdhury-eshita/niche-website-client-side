import React, { useEffect } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';
import { Container, Typography } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import './Booking.css';

const Booking = () => {
    const { user } = useAuth();
    const { bookingId } = useParams();
    const [product, setProduct] = useState({});
    const { register, handleSubmit, reset } = useForm();

    useEffect(() => {
        fetch(`https://limitless-beyond-81209.herokuapp.com/products/${bookingId}`)
            .then(res => res.json())
            .then(data => setProduct(data));
    }, []);

    const onSubmit = (data) => {
        console.log(data)
        axios.post(`https://limitless-beyond-81209.herokuapp.com/orders`, data)
            .then(res => {
                // console.log(res);
                if (res.data.insertedId) {
                    alert('added successfully');
                    reset();
                }
            })
    };
    return (
        <Container sx={{ my: 2 }}>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <Card sx={{ minWidth: 275, hieght: '100%' }}>
                            <CardMedia
                                component="img"
                                style={{ width: 'auto', hieght: '80px', margin: '0 auto' }}
                                image={product.img}
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography variant="h6" component="div">
                                    {product.name}
                                </Typography>
                                <Typography sx={{ fontWeight: 'bold' }} variant="h5" component="div">
                                    Price: {product.cost}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {product.description}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid className="product" item xs={12} md={6}>
                        <Typography variant="h4" component="div">
                            Please Place Order
                        </Typography>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input {...register('product', { required: true })} placeholder="Product" />
                            <input {...register('cost', { required: true })} placeholder="Cost" />
                            <input {...register('name', { required: true })} value={user.displayName} />
                            <input {...register('email', { required: true })} value={user.email} />
                            <input {...register('phone', { required: true })} placeholder="Phone" />
                            <textarea {...register('address', { required: true })} placeholder="Address" />
                            {/* <input {...register('status')} value="Pending" /> */}
                            <input className="btn btn-primary" type="submit" />
                        </form>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
};

export default Booking;