import React from "react";
import NavBar from "../Components/Navbar";
import { Button, Typography, Grid } from "@mui/material";
import gameImage from "../imgs/placeholde.avif";
import { useNavigate } from "react-router-dom";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import Featured from "../Components/Featured";

export default function Home() {
    const nav = useNavigate()
    const containerStyle = {
        width: "100%",
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
        color: "white",
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
                    }}>Slogan here</Typography>
                    <Button variant="contained" onClick={() => { nav('/products') }}>Shop All</Button>
                </div>
            </div>
            <Featured />
            <Grid container style={{
                margin: '10px'
            }}>
                <Grid item xs={9}></Grid>
                <Grid item xs={1}><FacebookIcon style={{color: 'white'}}/></Grid>
                <Grid item xs={1}><InstagramIcon style={{color: 'white'}}/></Grid>
                <Grid item xs={1}><YouTubeIcon style={{color: 'white'}}/></Grid>
            </Grid>
        </div>
    )
}