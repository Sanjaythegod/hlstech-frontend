import React, { useEffect, useState } from "react";
import { useShoppingCart } from "../shoppingCartContext";
import NavBar from "../Components/Navbar";
import api from '../axios';
import Product from '../Components/Product';
import { Button, Grid, Typography, TextField, useMediaQuery } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import Footer from "../Components/Footer";


export default function Cart() {
    const { cartState, clearItems } = useShoppingCart();
    const token = localStorage.getItem('token');
    const nav = useNavigate();
    const [productData, setProductData] = useState([]);
    const [loading, setLoading] = useState(false);
    const theme = useTheme();
    const desktop = useMediaQuery(theme.breakpoints.up("md"));
    const [urlLoading, setUrlLoading] = useState(false);

    const [shippingInfo, setShippingInfo] = useState({
        line_1: "",
        line_2: "",
        city: "",
        state: "",
        country: ""
    });




    const handleInputChange = (field) => (event) => {
        setShippingInfo({
            ...shippingInfo,
            [field]: event.target.value
        });
    };

    useEffect(() => {
        const fetchProductData = async (productId) => {
            try {
                setLoading(true);
                const response = await api.get(`products/${productId}`);
                setProductData((prevData) => {
                    if (!prevData.some((product) => product.id === response.data.id)) {
                        return [...prevData, response.data];
                    }
                    return prevData;
                });
                setLoading(false);
            } catch (error) {
                console.error('Error fetching product data:', error);
            }
        };

        cartState.forEach((item) => {
            fetchProductData(item.id);
        });
    }, [cartState]);

    const handleCheckOut = () => {
        const payload = {
            items: cartState,
            shippingInfo: { ...shippingInfo }
        };

        setUrlLoading(true);
        api.post('checkout', payload, {
            headers: {
                'authorization': `${token}`
            }
        }).then(res => {
            console.log(res.data);
            window.location = res.data.url;
            setUrlLoading(false);
        }).catch(e => {
            nav('/login');
        });
        //creating orders in db

        cartState.map((item) => {
            api.post('createOrder', {
                product_id: item.id,
                quantity: item.quantity,
                line_1: shippingInfo.line_1,
                line_2: shippingInfo.line_2,
                city: shippingInfo.city,
                state: shippingInfo.state,
                country: shippingInfo.country,
                is_fulfilled: 'false'
            }, {
                headers: {
                    'authorization': `${token}`
                }
            }).then(res => {
                console.log(res.data)
            }).catch(err => {
                console.log(err)
            })
        })

    };

    const styles = {
        featuredContainer: {
            marginLeft: desktop ? '200px' : '0px',
            marginRight: desktop ? '200px' : '0px',
            marginTop: '50px',
        },
        productList: {
            display: 'flex',
            flexWrap: 'wrap',
            gap: '5px', // Adjust the margin between products
        },
        productItem: {
            flex: '1 1 300px', // Adjust the width of each product
            padding: '10px', // Add padding to maintain size
        },
    };

    return (
        <div style={{
            backgroundColor: 'rgb(245 245 245)',
            minHeight: '100vh'
        }}>
            <NavBar auth={token} />
            {
                cartState.length > 0 ?
                    <div style={styles.featuredContainer}>

                        <Grid container spacing={3} style={{
                            marginBottom: '10px'
                        }}>
                            <Grid item xs={12}>
                                <Typography variant="h4" style={{ color: 'black', marginBottom: '30px' }}>
                                    Cart:
                                </Typography>
                                <div style={styles.productList}>
                                    {

                                        loading ? <div>Loading...</div> :
                                            productData.map((product) => {
                                                const cartItem = cartState.find(item => item.id === product.id);
                                                const quantity = cartItem ? cartItem.quantity : 0;

                                                return (
                                                    <div key={product.id} style={styles.productItem}>
                                                        <Product dark={false} data={product} cart={true} quantity={quantity} />
                                                    </div>
                                                );
                                            })
                                    }
                                </div>

                                <Button variant="contained" onClick={handleCheckOut} disabled={
                                    Object.values(shippingInfo).some(value => value === "")
                                } style={{ backgroundColor: Object.values(shippingInfo).some(value => value === "") ? 'rgb(219 218 218)' : 'black', width: '100%' }}>
                                    {urlLoading ? "Redirecting..." : "Checkout"}
                                </Button>
                                <Button variant="outlined" onClick={() => {
                                    clearItems()
                                }} style={{
                                    width: '100%', marginTop: '10px', color: 'black',
                                    borderColor: 'black', // Set the border color to black

                                }}>
                                    Clear Items
                                </Button>
                            </Grid>
                            <Grid item xs={6}>
                                <TextField
                                    label="Address Line 1"
                                    variant="outlined"
                                    fullWidth
                                    value={shippingInfo.line_1}
                                    onChange={handleInputChange("line_1")}
                                    InputProps={{
                                        classes: {
                                            focused: "borderFocused",
                                        },
                                    }}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField
                                    label="Address Line 2"
                                    variant="outlined"
                                    fullWidth
                                    value={shippingInfo.line_2}
                                    onChange={handleInputChange("line_2")}
                                    InputProps={{
                                        classes: {
                                            focused: "borderFocused",

                                        },
                                    }}
                                />
                            </Grid>
                            <Grid item xs={4}>
                                <TextField
                                    label="City"
                                    variant="outlined"
                                    fullWidth
                                    value={shippingInfo.city}
                                    onChange={handleInputChange("city")}
                                    InputProps={{
                                        classes: {
                                            focused: "borderFocused",
                                        },
                                    }}
                                />
                            </Grid>
                            <Grid item xs={4}>
                                <TextField
                                    label="State"
                                    variant="outlined"
                                    fullWidth
                                    value={shippingInfo.state}
                                    onChange={handleInputChange("state")}
                                    InputProps={{
                                        classes: {
                                            focused: "borderFocused",
                                        },
                                    }}
                                />
                            </Grid>
                            <Grid item xs={4}>
                                <TextField
                                    label="Country"
                                    variant="outlined"
                                    fullWidth
                                    value={shippingInfo.country}
                                    onChange={handleInputChange("country")}
                                    InputProps={{
                                        classes: {
                                            focused: "borderFocused",
                                        },
                                    }}
                                />
                            </Grid>
                        </Grid>


                    </div> :
                    <div style={{
                        textAlign: 'center',
                        margin: '10px'
                    }}>
                        <p>Your cart is currently empty.</p>
                        <p>Continue shopping to discover amazing products!</p>
                        <Button variant="contained" color="primary" onClick={() => {
                            nav('/products')
                        }} style={{
                            backgroundColor: 'black'
                        }}>
                            Continue Shopping
                        </Button>
                    </div>
            }



        </div>
    );
}
