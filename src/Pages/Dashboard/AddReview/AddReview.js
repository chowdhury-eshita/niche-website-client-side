import axios from 'axios';
import React from 'react';
import { Container, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';
import './AddReview.css';

const AddReview = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = (data) => {
        console.log(data)
        axios.post('http://localhost:5000/reviews', data)
            .then(res => {
                // console.log(res);
                if (res.data.insertedId) {
                    alert('added successfully');
                    reset();
                }
            })
    };
    return (
        <Container style={{ minHeight: '100vh' }} className="add-review">
            <Typography sx={{
                my: 2, color: 'info.main', fontWeight: 'bold'
            }} variant="h5">
                Add Review
            </Typography>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register('name')} placeholder="Name" />
                <textarea {...register('description', { required: true })} placeholder="Description" />
                <input {...register('rating')} placeholder="Rating" />
                <input type="submit" value="Add Review" />
            </form>
        </Container>
    );
};

export default AddReview;