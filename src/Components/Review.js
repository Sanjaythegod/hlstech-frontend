import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';

const Review = ({ review }) => {
    return (
        <Card variant="outlined" style={{ marginBottom: 16 }}>
            <CardContent>
                {/* User Information (Username) */}
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: 8 }}>
                    <Typography variant="subtitle2" color="textSecondary">
                        {review.user.username}
                    </Typography>
                </div>

                {/* Rating */}
                <Typography variant="h6" component="div">
                    Rating: <Rating value={review.rating} readOnly />
                </Typography>

                {/* Title */}
                <Typography variant="h6" gutterBottom>
                    {review.title}
                </Typography>

                {/* Review Text/Comment */}
                <Typography variant="body2" color="textSecondary">
                    {review.comment}
                </Typography>

                {/* Date */}
                <Typography variant="caption" color="textSecondary">
                    {review.date}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default Review;
