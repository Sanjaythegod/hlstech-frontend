import ContactForm from "../Components/ContactForm";
import NavBar from "../Components/Navbar";
import React from "react";

export default function Contact() {
    const token = localStorage.getItem('token')
    return(
        <div>
            <NavBar auth={token}/>
            <ContactForm />
        </div>
    )
}