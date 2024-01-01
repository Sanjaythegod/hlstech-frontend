import React, { useState, useEffect } from "react";
import { Typography, LinearProgress, useMediaQuery } from "@mui/material";
import Product from "../Components/Product";
import api from '../axios'
import { useTheme } from "@mui/material/styles";




export default function Featured() {
    const [data, setData] = useState(null)
    const theme = useTheme();
    const desktop = useMediaQuery(theme.breakpoints.up("md"))

    const styles = {
        featuredContainer: {
            marginLeft: desktop ? '300px' : '0',
            marginRight: desktop ? '300px' : '0',
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
                    )) : <p style={{
                        color: 'white'
                    }}>Loading...</p>
                }
            </div>
        </div>
    );
}
