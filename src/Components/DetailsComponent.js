import React, { useState, useEffect } from "react";
import { Grid, Rating, TextField, Typography, Button } from "@mui/material";
import api from '../axios'
import Product from "../Components/Product";
import { useNavigate } from "react-router-dom";

export default function DetailsComponent({ id }) {
    const [productData, setProductData] = useState(null)
    const [allproducts, setAllProducts] = useState(null)
    const [quantity, setQuantity] = useState(1)
    const nav = useNavigate();
    const authToken = localStorage.getItem('token')

    useEffect(() => {
        api.get(`products/${id}/`).then(res => {
            setProductData(res.data)
            console.log(res.data)
        }).catch(err => {
            console.log(err)
        })

        api.get('getAllProducts').then(res => {
            setAllProducts(res.data);
        });
    }, [])

    const handleBuyNow = () => {
        api.post('checkout', {
            items: [
                { id: id, "quantity": quantity },
            ]
        }, {
            headers: {
                'authorization': `${authToken}`
            }
        }).then(res => {
            console.log(res.data)
            window.location = res.data.url
        }).catch(e => {
            nav('/login')
        })
    }

    const handleQuantityChange = (event) => {
        const newQuantity = parseInt(event.target.value, 10) || 0; // Parse value to integer or set to 0 if not a valid number
        setQuantity(newQuantity);
    };

    const styles = {
        featuredContainer: {
            marginLeft: '300px',
            marginRight: '300px',
            marginTop: '50px',
        },
        productList: {
            display: 'flex',
            flexWrap: 'wrap',
            gap: '15px', // Adjust the margin between products
        },
        productItem: {
            flex: '1 1 300px', // Adjust the width of each product
            padding: '10px', // Add padding to maintain size
        },
    };

    return (
        <div>
            <Grid container style={{
                paddingLeft: '20vw',
                paddingTop: '20px', // Adjusted padding for spacing
            }}>
                <Grid item xs={7}>
                    {/* Content for the left side (you can add content here) */}
                    insert image here
                </Grid>
                <Grid item xs={5} style={{ padding: '16px' }}>
                    {productData ? (
                        <div>
                            <Typography variant="h4" style={{ marginBottom: '16px' }}>{productData.name}</Typography>
                            <Rating defaultValue={productData.rating} precision={1.0} style={{ color: 'black' }} size="medium" readOnly />
                            <Typography variant="h6" style={{ color: 'rgb(217 42 14)', marginBottom: '16px' }}>$ {productData.price}</Typography>
                            <Grid container alignItems="center" marginBottom="16px">
                                Quantity:
                                <TextField
                                    style={{ marginLeft: '8px' }}
                                    defaultValue={quantity.toString()} // Display the current quantity from the state
                                    onChange={handleQuantityChange} // Call the function when the value changes
                                />
                            </Grid>
                            <Button
                                variant="contained"
                                color="primary"
                                style={{
                                    width: '100%',
                                    backgroundColor: 'black',
                                    color: 'white', // Adjusted text color for better contrast
                                }}
                            >
                                Add to Cart
                            </Button>
                            <Button
                                variant="outlined"
                                color="primary"
                                style={{
                                    width: '100%',
                                    color: 'black', // Adjusted text color for better contrast
                                    borderColor: 'black', // Set the border color to black
                                    marginTop: '10px',
                                }}
                                onClick={handleBuyNow}
                            >
                                Buy now
                            </Button>

                        </div>
                    ) : (
                        <p>loading...</p>
                    )}
                </Grid>
            </Grid>
            <div style={{ paddingLeft: '10%' }}>
                <Typography variant="h5" style={{ marginTop: '50px' }}>You may also like...</Typography>
                <div style={styles.productList}>
                    {allproducts ?
                        allproducts.map(pdata => (
                            <div key={pdata.id} style={styles.productItem}>
                                <Product dark={false} data={pdata} />
                            </div>
                        )) : <p>Loading...</p>
                    }
                </div>

            </div>
        </div>
    )
}
