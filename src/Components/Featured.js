import React from "react";
import { Typography } from "@mui/material";
import Product from "../Components/Product";
import productData from '../data/productdata.json';

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

export default function Featured() {
    return (
        <div style={styles.featuredContainer}>
            <Typography variant="h4" style={{ color: 'white', marginBottom: '30px' }}>
                Featured Products:
            </Typography>
            <div style={styles.productList}>
                {productData.length > 0 && productData ?
                    productData.map(data => (
                        <div key={data.id} style={styles.productItem}>
                            <Product dark={true} data={data} />
                        </div>
                    )) : <p>Loading...</p>
                }
            </div>
        </div>
    );
}
