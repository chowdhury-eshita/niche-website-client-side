import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import bg from '../../../images/banner/bg.jpg';
import { Button, Typography } from '@mui/material';

const banner = {
    background: `url(${bg})`
}
const Banner = () => {
    return (
        <Box style={banner} sx={{ flexGrow: 1, my: 3 }}>
            <Grid container spacing={2}>
                <Grid item xs={6} md={8}>
                    <Button variant="contained">Explore</Button>
                </Grid>
                <Grid item xs={6} md={4}>
                    <Typography variant="h6" component="div">
                        Shop your product
                    </Typography>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Banner;
