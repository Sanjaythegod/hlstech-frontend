import React from "react";
import NavBar from "../Components/Navbar";
import LoginForm from "../Components/LoginForm";

export default function Login() {
    const token = localStorage.getItem('token')

    return(
        <div>
            <NavBar auth={token}/>
            <LoginForm />
        </div>
    )
}