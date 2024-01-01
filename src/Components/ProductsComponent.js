import React, { useState, useEffect } from "react";
import { Typography, Grid, Select, MenuItem, FormControl, TextField, InputLabel,LinearProgress, useMediaQuery } from "@mui/material";
import Product from "./Product";
import api from '../axios'
import { useTheme } from "@mui/material/styles";

export default function ProductsComponents() {
    const [product, setProduct] = useState(null)
    const theme = useTheme();
    const desktop = useMediaQuery(theme.breakpoints.up("md"))
    const styles = {
        featuredContainer: {
            marginLeft: desktop ? '200px' : '0',
            marginRight: desktop ? '200px' : '0',
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

    useEffect(() => {
        api.get('getAllProducts').then(res => {
            setProduct(res.data);
        });
    }, []);
    


    const [filterValue, setFilterValue] = useState('');
    const [sortOption, setSortOption] = useState(''); // State to track the selected sorting option

    const handleSortChange = (event) => {
        setSortOption(event.target.value);
    };

    const sortedProducts = product ? [...product] : null;

    // Apply sorting based on the selected option
    if (sortOption === 'L2H') {
        sortedProducts.sort((a, b) => a.price - b.price);
    } else if (sortOption === 'H2L') {
        sortedProducts.sort((a, b) => b.price - a.price);
    }

    const filteredProducts = sortedProducts ? sortedProducts.filter(product =>
        product.name.toLowerCase().includes(filterValue.toLowerCase())
    ) : null

    return (
        <div style={styles.featuredContainer}>
            <Grid container>
                <Grid item xs={desktop ? 3: 12}>
                    <Typography variant="h4" style={{ color: 'black', marginBottom: '30px', textAlign: desktop ? "left" : 'center' }}>
                        All Products:
                    </Typography>
                </Grid>
                <Grid item xs={desktop ? 6: 12} style={{textAlign: 'center'}}>
                    <TextField
                        variant="standard"
                        placeholder="Search"
                        style={{ height: '10px', minWidth: '70%' }}
                        onChange={(e) => setFilterValue(e.target.value)}
                    />
                </Grid>
                <Grid item xs={desktop ? 3: 12} style={{ textAlign: desktop ? 'right': 'center'}}>
                    <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                        <InputLabel>Sort By</InputLabel>
                        <Select value={sortOption} onChange={handleSortChange}>
                            <MenuItem value="Featured">Featured</MenuItem>
                            <MenuItem value='L2H'>Low to High</MenuItem>
                            <MenuItem value='H2L'>High to Low</MenuItem>
                            <MenuItem value='Best Sellers'>Best Sellers</MenuItem>
                            <MenuItem value='Newest'>Newest</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
            </Grid>
            <div style={styles.productList}>
                {filteredProducts && filteredProducts.length > 0 ? (
                    filteredProducts.map(data => (
                        <div key={data.id} style={styles.productItem}>
                            <Product dark={false} data={data} />
                        </div>
                    ))
                ) : (
                    <p style={{
                        color: 'black'
                    }}>Loading...</p>
                )}
            </div>
        </div>
    )
}
