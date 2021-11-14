import * as React from 'react';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';

const Review = (props) => {
    const { name, description, rating } = props.review;
    return (
        <Grid sx={{ my: 2 }} item xs={4} sm={4} md={4}>
            <Card sx={{ minWidth: 275 }}>
                <CardContent>
                    <Typography variant="h6" component="div">
                        {name}
                    </Typography>
                    <Typography sx={{ my: 1 }} variant="body2" color="text.secondary">
                        {description}
                    </Typography>
                    <Box style={{ display: 'flex', justifyContent: 'center' }} >
                        <Stack sx={{ mt: 2 }} spacing={1}>
                            <Rating name="read-only" readOnly defaultValue={rating} precision={1} />
                        </Stack>
                    </Box>
                </CardContent>
            </Card>
        </Grid >
    );
};

export default Review;