import NavBar from "../Components/Navbar";
import React from "react";
import ProductsComponents from "../Components/ProductsComponent";
import Footer from "../Components/Footer";


export default function Products() {
    const token = localStorage.getItem('token')

    return(
        <div style={{
            height: '100vh',
            backgroundColor:'rgb(245 245 245)'
        }}>
            <NavBar auth={token}/>
            <ProductsComponents />
            <Footer dark={true} />

        </div>
    )
}