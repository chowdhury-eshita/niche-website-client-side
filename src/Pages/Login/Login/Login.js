import { Alert, CircularProgress } from '@mui/material';
import { Container, Grid, Typography, TextField, Button } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';


const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { user, loginUser, isLoading, authError } = useAuth();

    const location = useLocation();
    const history = useHistory();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        // console.log(field, value);

        //if there is multiple object property in a state following steps...
        //get the other field data
        const newLoginData = { ...loginData };
        //get the data from recent changed field
        newLoginData[field] = value;
        //set the data
        setLoginData(newLoginData);
    }

    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history);
        e.preventDefault();
    }

    return (
        <Container>
            <Grid style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center' }} container spacing={2}>
                <Grid item sx={{ mt: 8 }} xs={12} md={6}>
                    <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'info.main' }} gutterBottom>Login</Typography>
                    <form onSubmit={handleLoginSubmit}>
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
                            name="password"
                            onBlur={handleOnBlur}
                            variant="standard" />
                        <Button sx={{ width: '75%', m: 1 }} type="submit" variant="contained">Login</Button>

                        <NavLink style={{ textDecoration: 'none' }} to="/register">
                            <Button variant='text' >New User? Please Register</Button>
                        </NavLink>

                        {isLoading && <CircularProgress />}
                        {user?.email && <Alert severity="success">User loggedin Successfully</Alert>}
                        {authError && <Alert severity="error">Something wrong</Alert>}
                    </form>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Login;