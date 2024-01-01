import React from "react";
import NavBar from "../Components/Navbar";
import SignupForm from "../Components/SignUpForm";
import Footer from "../Components/Footer";

export default function Signup() {
    const token = localStorage.getItem('token')

    return(
        <div>
            <NavBar auth={token}/>
            <SignupForm />
            <Footer dark={true} />

        </div>
    )
}