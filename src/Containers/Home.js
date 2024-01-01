import React from "react";
import NavBar from "../Components/Navbar";
import { Button, Typography, Divider } from "@mui/material";
import gameImage from "../imgs/placeholde.avif";
import { useNavigate } from "react-router-dom";
import Featured from "../Components/Featured";
import Footer from "../Components/Footer";


export default function Home() {
    const nav = useNavigate()
    const containerStyle = {
        height: "300px",
        background: `url(${gameImage})`, // Set the image as background
        backgroundSize: "cover",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
        position: "relative",
    };

    const textStyle = {
        color: "black",
        fontSize: "24px",
        textAlign: "center",
        zIndex: 1,
    };
    const token = localStorage.getItem('token')

    return (
        <div style={{
            height: '100%',
            backgroundColor: 'rgb(18,18,18)'
        }}>
            <NavBar auth={token}/>
            <div style={containerStyle}>
                <div style={textStyle}>
                    <Typography variant="h4" style={{
                        margin: '10px'
                    }}>Lush Accessories: Style Elevated.</Typography>
                    <Button variant="contained" onClick={() => { nav('/products') }} style={{backgroundColor: 'black'}}>Shop All</Button>
                </div>
            </div>
            <Featured />
            <Divider style={{
                backgroundColor: 'white'
            }}/>
            <Footer dark={true} />
        </div>
    )
}