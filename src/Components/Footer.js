import React from "react";
import { Link } from "react-router-dom"; // If you're using React Router for navigation

export default function Footer(props) {
    return (
        <div style={{ flexShrink: 0 }}>
            <div style={{
                backgroundColor: props.dark ? 'rgb(18, 18, 18)' : 'black',
                color: 'white', // Set text color to white
                padding: '10px', // Adjusted padding to make the footer smaller
                textAlign: 'center',
                width: '100vw',
            }}>
                <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                    <div>
                        <h3>Navigation</h3>
                        <ul style={{ listStyleType: 'none', padding: 0 }}>
                            <li><Link to="/" style={{ color: 'white' }}>Home</Link></li>
                            <li><Link to="/products" style={{ color: 'white' }}>Products</Link></li>
                            <li><Link to="/contact" style={{ color: 'white' }}>Contact</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3>Social Media</h3>
                        <ul style={{ listStyleType: 'none', padding: 0 }}>
                            <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={{ color: 'white' }}>TikTok</a></li>
                            <li><a href="https://www.instagram.com/luch_tech1?igsh=OGQ5ZDc2ODk2ZA%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" style={{ color: 'white' }}>Instagram</a></li>
                            <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" style={{ color: 'white' }}>X</a></li>
                        </ul>
                    </div>
                </div>
                <div style={{ marginTop: '10px' }}> {/* Adjusted margin to make the footer smaller */}
                    &copy; {new Date().getFullYear()} LUSH Accessories INC. All rights reserved.
                </div>
            </div>
        </div>
    );
}
