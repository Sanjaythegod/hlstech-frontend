import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Typography, Button, Container } from '@mui/material';
import Footer from "../Components/Footer";

const CancelPage = () => {
    const nav = useNavigate();
    return (
        <div>

            <Container maxWidth="sm" style={{ textAlign: 'center', marginTop: '50px' }}>
                <Typography variant="h4" gutterBottom>
                    Order Cancelled
                </Typography>
                <Typography variant="body1" paragraph>
                    We appreciate your request. Your order has been successfully cancelled.
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

            </Container>
            <Footer dark={true} />
        </div>
    );
};

export default CancelPage;
