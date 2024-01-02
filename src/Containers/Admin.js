import React, { useEffect, useState } from "react";
import api from "../axios";
import { Card, Container, Grid, CardContent, Typography, Button, CardActions } from "@mui/material";
import Orders from "../Components/DataGrid";
import NavBar from "../Components/Navbar";

export default function Admin() {
    const token = localStorage.getItem('token');
    const [orders, setOrders] = useState([]);
    const [profits, setProfits] = useState(0);

    useEffect(() => {
        api.get('getAllOrders', {
            headers: {
                'authorization': `${token}`
            }
        }).then(res => {
            console.log(res.data);
            setOrders(res.data);
        }).catch(err => {
            console.log(err);
        });
    }, []);

    useEffect(() => {
        const revenue = orders.reduce((total, order) => total + (order.product_price * order.quantity), 0);
        setProfits(revenue.toLocaleString());
    }, [orders]);


    return (
        <div>

            <NavBar auth={token} />
            <Container maxWidth="xl" style={{ marginTop: '50px' }}>
                <Grid container spacing={2}>
                    <Grid item xs={9}>
                        prouct management
                    </Grid>
                    <Grid item xs={3}>
                        <Card sx={{ minWidth: 275, minHeight: 275 }}>
                            <CardContent>
                                <Typography variant="h6" style={{ fontWeight: 'bold' }} color="primary" gutterBottom>
                                    Total Revenue
                                </Typography>
                                <Typography variant="h4" component="div">
                                    ${profits}.00
                                </Typography>
                                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                    on {new Date().toLocaleDateString()}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small">Stripe Dashboard</Button>
                            </CardActions>
                        </Card>

                    </Grid>
                    <Grid item xs={12}>
                        <Orders data={orders} />
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}
