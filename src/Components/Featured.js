import React, { useState, useEffect } from "react";
import { Typography,LinearProgress } from "@mui/material";
import Product from "../Components/Product";
import api from '../axios'
// import productData from '../data/productdata.json';

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
    const [data, setData] = useState(null)

    useEffect(() => {
        api.get('getAllProducts').then(res => {
            setData(res.data)
        })
    }, [])
    return (
        <div style={styles.featuredContainer}>
            <Typography variant="h4" style={{ color: 'white', marginBottom: '30px' }}>
                Featured Products:
            </Typography>
            <div style={styles.productList}>
                {data ?
                    data.map(pdata => (
                        <div key={pdata.id} style={styles.productItem}>
                            <Product dark={true} data={pdata} />
                        </div>
                    )) : <p>Loading...</p>
                }
            </div>
        </div>
    );
}
