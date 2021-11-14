import React from 'react';
import Box from '@mui/material/Box';
import bg from '../../../images/banner/bg.jpg';
import { Button, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';

const banner = {
    background: `url(${bg})`,
    height: 500,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
}
const Banner = () => {
    return (
        <Box style={banner} sx={{ flexGrow: 1 }}>
            <Box>
                <Typography sx={{ color: 'white', fontWeight: 'bold' }} variant="h2" component="div">
                    Shop your product
                </Typography>
                <br />
                <NavLink style={{ textDecoration: 'none' }} to="/explore">
                    <Button variant="contained" color="secondary"> Explore Product </Button>
                </NavLink>
            </Box>
        </Box>
    );
};

export default Banner;
