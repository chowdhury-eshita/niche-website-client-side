import axios from 'axios';
import React from 'react';
import { Container, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';
import './AddProduct.css';

const AddProduct = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = (data) => {
        console.log(data)
        axios.post('https://limitless-beyond-81209.herokuapp.com/products', data)
            .then(res => {
                // console.log(res);
                if (res.data.insertedId) {
                    alert('added successfully');
                    reset();
                }
            })
    };
    return (
        <Container style={{ minHeight: '100vh' }} className="add-product">
            <Typography sx={{
                my: 2, color: 'info.main', fontWeight: 'bold'
            }} variant="h5">
                Add Product
            </Typography>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register('name')} placeholder="Name" />
                <textarea {...register('description', { required: true })} placeholder="Description" />
                <input {...register('cost')} placeholder="Price" />
                <input {...register('img')} placeholder="img URL" />
                <input type="submit" value="Add Product" />
            </form>
        </Container>
    );
};

export default AddProduct;