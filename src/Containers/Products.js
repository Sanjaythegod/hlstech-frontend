import NavBar from "../Components/Navbar";
import React from "react";
import ProductsComponents from "../Components/ProductsComponent";

export default function Products() {
    const token = localStorage.getItem('token')

    return(
        <div style={{
            height: '100%',
            backgroundColor:'rgb(245 245 245)'
        }}>
            <NavBar auth={token}/>
            <ProductsComponents />
        </div>
    )
}