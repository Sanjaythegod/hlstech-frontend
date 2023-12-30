import React from "react";
import { useParams } from 'react-router-dom';
import DetailsComponent from "../Components/DetailsComponent";
import NavBar from "../Components/Navbar";

export default function ProductDetails() {
    const token = localStorage.getItem('token')
    const {productId} = useParams();
    return(
        <div>
            <NavBar auth={token}/>
            <DetailsComponent id={productId} />
        </div>
    )
}