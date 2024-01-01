import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Typography, Button, Container } from '@mui/material';
import Footer from "../Components/Footer";

const SuccessPage = () => {
    const nav = useNavigate();
    return (
        <Container maxWidth="sm" style={{ textAlign: 'center', marginTop: '50px' }}>
            <Typography variant="h4" gutterBottom>
                Thanks for your purchase!
            </Typography>
            <Typography variant="body1" paragraph>
                We appreciate your purchase. Your order has been successfully processed.
            </Typography>
            <Button
                variant="contained"
                color="primary"
                onClick={() => {
                    nav('/products')
                }}
                style={{ marginTop: '20px' }}
            >
                Continue Shopping
            </Button>
            <Footer dark={true} />

        </Container>
    );
};

export default SuccessPage;
