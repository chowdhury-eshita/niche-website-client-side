import React from 'react';
import { Box, Container } from '@mui/material';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';

const Article = () => {
    return (
        <Container>
            <Box style={{ marginTop: 60 }} sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <img src="https://3.img-dpreview.com/files/p/E~TS590x0~articles/3933146628/lens.jpeg" alt="" />
                    </Grid>
                    <Grid style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} item xs={12} md={6}>
                        <Box>
                            <Typography sx={{ color: 'info.main' }} variant="h4" gutterBottom component="div">
                                Buying Guide
                            </Typography>
                            <Typography variant="subtitle1" gutterBottom>
                                Choosing the best camera lenses becomes easier when you've been taking pictures for a while and you know what you're interested in, but if you're just starting out, the sheer number of different lenses, brands and types can be bewildering, so that's where this guide can help!
                            </Typography></Box>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
};

export default Article;