import React from "react";
import NavBar from "../Components/Navbar";
import LoginForm from "../Components/LoginForm";
import Footer from "../Components/Footer";

export default function Login() {
    const token = localStorage.getItem('token')

    return(
        <div>
            <NavBar auth={token}/>
            <LoginForm />
            <Footer dark={true} />

        </div>
    )
}