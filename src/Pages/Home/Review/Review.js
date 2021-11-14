import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const Review = (props) => {
    const { name, description, rating } = props.review;
    return (
        <Grid item xs={4} sm={4} md={4}>
            <Card sx={{ minWidth: 275 }}>
                <CardContent>
                    <Typography variant="h6" component="div">
                        {name}
                    </Typography>
                    <Typography sx={{ my: 1 }} variant="body2" color="text.secondary">
                        {description}
                    </Typography>
                    <Typography sx={{ my: 1 }} variant="body2" color="paragraph">
                        Rating: {rating}
                    </Typography>
                </CardContent>
            </Card>
        </Grid >
    );
};

export default Review;