import { Container, Grid, Typography, TextField, Button, CircularProgress, Alert } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';


const Register = () => {
    const [loginData, setLoginData] = useState({});
    const { user, registerUser, isLoading, authError } = useAuth();
    const history = useHistory();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        // console.log(field, value);

        //if there is multiple object property in a state following steps...
        //get the other field data
        const newLoginData = { ...loginData };
        //update the data from recent changed field
        newLoginData[field] = value;
        console.log(newLoginData);
        //set the data
        setLoginData(newLoginData);
    }

    const handleLoginSubmit = e => {
        if (loginData.password !== loginData.password2) {
            alert('Password did not matched');
            return;
        }
        registerUser(loginData.email, loginData.password, loginData.name, history);

        e.preventDefault();
    }
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item sx={{ mt: 8 }} xs={12} md={6}>
                    <Typography variant="body1" gutterBottom>Register</Typography>
                    {!isLoading && <form onSubmit={handleLoginSubmit}>
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your Name"
                            name="name"
                            onBlur={handleOnBlur}
                            variant="standard" />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your Email"
                            type="email"
                            name="email"
                            onBlur={handleOnBlur}
                            variant="standard" />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your Password"
                            type="password"
                            name="password"
                            onBlur={handleOnBlur}
                            variant="standard" />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Re-Enter Your Password"
                            type="password"
                            name="password2"
                            onBlur={handleOnBlur}
                            variant="standard" />
                        <Button sx={{ width: '75%', m: 1 }} type="submit" variant="contained">Register</Button>

                        <NavLink style={{ textDecoration: 'none' }} to="/login">
                            <Button variant='text' >Already Registered? Please Login</Button>
                        </NavLink>
                    </form>}
                    {isLoading && <CircularProgress />}
                    {user?.email && <Alert severity="success">User Created Successfully</Alert>}
                    {authError && <Alert severity="error">something wrong</Alert>}
                </Grid>
            </Grid>
        </Container>
    );
};

export default Register;