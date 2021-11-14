import React from 'react';
import { useState } from 'react';
import { Alert, Typography } from '@mui/material';
import { TextField, Button } from '@mui/material';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);

    const handleOnBlur = e => {
        setEmail(e.target.value);
    }
    const handleAdminSubmit = e => {
        e.preventDefault();

        const user = { email };
        fetch('http://localhost:5000/users', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    setSuccess(true);
                }
            })
    }
    return (
        <div style={{ minHeight: '100vh' }}>
            <Typography sx={{
                my: 2, color: 'info.main', fontWeight: 'bold'
            }} variant="h5">
                Make Admin
            </Typography>
            <form onSubmit={handleAdminSubmit}>
                <TextField
                    sx={{ width: '25%', m: 1 }}
                    label="Email"
                    type="email"
                    name="email-field"
                    onBlur={handleOnBlur}
                    variant="standard" />
                <Button sx={{ m: 1 }} type="submit" variant="contained">Make Admin</Button>
                {success && <Alert severity="success">Make Admin Successfully</Alert>}
            </form>
        </div>
    );
};

export default MakeAdmin;