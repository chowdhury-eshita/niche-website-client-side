import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

const Guide = () => {
    const [guides, setGuides] = useState([]);
    useEffect(() => {
        fetch('https://limitless-beyond-81209.herokuapp.com/guides')
            .then(res => res.json())
            .then(data => setGuides(data));
    }, [])
    return (
        <Box style={{ marginTop: 60 }} sx={{ flexGrow: 1 }}>
            <Container>
                <Grid item xs={12} md={12}>
                    <Typography style={{ marginBottom: 30 }} sx={{ fontWeight: 'bold', color: 'info.main', my: 2, py: 2 }} variant="h5" component="div">
                        Things you need to know before buying lens!
                    </Typography>
                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                        {
                            guides.map(guide => <Box
                                key={guide._id}

                            >
                                <Grid item xs={12} sm={12} md={8}>
                                    <Card sx={{}}>
                                        <Typography variant="h5" component="div">
                                            {guide.title}
                                        </Typography>
                                        <CardMedia
                                            component="img"
                                            style={{ width: '400', hieght: '400', margin: '0 auto' }}
                                            image={guide.img}
                                            alt="green iguana"
                                        />
                                        <CardContent>
                                            <Typography sx={{ my: 1 }} variant="body2" color="text.secondary">
                                                {guide.description}
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Grid >
                            </Box>)
                        }
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Guide;