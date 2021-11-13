import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const Review = (props) => {
    const { name, description, rating } = props.review;
    return (
        <Grid item xs={4} sm={4} md={4}>
            <Card sx={{ minWidth: 275 }}>
                {/* <CardMedia
                    component="img"
                    style={{ width: 'auto', hieght: '50px', }}
                    image={img}
                    alt=""
                /> */}
                <CardContent>
                    <Typography variant="h6" component="div">
                        {name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {description}
                    </Typography>
                    <Typography variant="paragraph" component="div">
                        Rating: {rating}
                    </Typography>
                </CardContent>
            </Card>
        </Grid >
    );
};

export default Review;