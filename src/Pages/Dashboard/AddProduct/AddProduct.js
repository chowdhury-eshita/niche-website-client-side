import axios from 'axios';
import React from 'react';
import { Container, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';
import './AddProducts.css';

const AddProduct = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = (data) => {
        console.log(data)
        axios.post('http://localhost:5000/products', data)
            .then(res => {
                // console.log(res);
                if (res.data.insertedId) {
                    alert('added successfully');
                    reset();
                }
            })
    };
    return (
        <Container className="add-product">
            <Typography variant="h5">
                Add Products
            </Typography>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register('name')} placeholder="Name" />
                <textarea {...register('description', { required: true })} placeholder="Description" />
                <input {...register('price')} placeholder="Price" />
                <input {...register('img')} placeholder="img URL" />
                <input className="btn btn-primary" type="submit" value="Add Product" />
            </form>
        </Container>
    );
};

export default AddProduct;