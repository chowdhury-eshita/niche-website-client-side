import React from 'react';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <>
            <Box style={{ marginTop: 'auto' }} sx={{ backgroundColor: 'black', py: 1, mt: 2, color: 'white' }}>
                <Box sx={{ mt: 2 }}>
                    <Typography variant="h5">Contact Us:</Typography>
                    <Typography sx={{ color: 'info.main' }} variant="h4">Lens Finder</Typography>
                    <Typography variant="subtitle2">KochuKhet, Dhaka</Typography>
                    <Typography variant="subtitle2">Call: 304032</Typography>
                    <Typography variant="subtitle2">Mail: lensfinder@gmail.com</Typography>
                </Box>
                <Box>
                    <NavLink style={{ textDecoration: 'none', color: 'royalblue', mx: 2 }} to="/home">Home</NavLink > <br />
                    <NavLink style={{ textDecoration: 'none', color: 'royalblue', mx: 2 }} to="/dashboard">Dashboard</NavLink > <br />
                    <NavLink style={{ textDecoration: 'none', color: 'royalblue', mx: 2 }} to="/login">Login</NavLink >
                </Box>
                <Typography sx={{ color: 'gray' }} variant="caption">Copy right version 3.4.1</Typography>
            </Box>


        </>
    );
};

export default Footer;