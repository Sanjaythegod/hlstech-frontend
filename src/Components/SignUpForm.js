import React, { useState } from 'react';

const SignupForm = () => {
    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        line_1: '',
        line_2: '',
        city: '',
        state: '',
        country: '',
        zipcode: '',
    });

    const containerStyle = {
        maxWidth: '300px',
        margin: 'auto',
        padding: '20px',
        border: '1px solid #000',
        borderRadius: '5px',
        backgroundColor: '#fff',
        color: '#000',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        marginTop: '50px',
    };

    const labelStyle = {
        display: 'block',
        margin: '10px 0',
    };

    const inputStyle = {
        width: '100%',
        padding: '8px',
        marginTop: '5px',
        marginBottom: '10px',
        boxSizing: 'border-box',
    };

    const buttonStyle = {
        width: '100%',
        padding: '10px',
        backgroundColor: '#000',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data:', formData);
    };

    return (
        <div style={containerStyle}>
            <h2 style={{
                textAlign: 'center'
            }}>Sign Up</h2>
            <form onSubmit={handleSubmit}>
                <label style={labelStyle}>
                    First Name:
                    <input
                        type="text"
                        name="first_name"
                        value={formData.first_name}
                        onChange={handleInputChange}
                        required
                        style={inputStyle}
                    />
                </label>
                <label style={labelStyle}>
                    Last Name:
                    <input
                        type="text"
                        name="last_name"
                        value={formData.last_name}
                        onChange={handleInputChange}
                        required
                        style={inputStyle}
                    />
                </label>
                <label style={labelStyle}>
                    Email:
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        style={inputStyle}
                    />
                </label>
                <label style={labelStyle}>
                    Password:
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                        required
                        style={inputStyle}
                    />
                </label>
                <label style={labelStyle}>
                    Address Line 1:
                    <input
                        type="text"
                        name="line_1"
                        value={formData.line_1}
                        onChange={handleInputChange}
                        required
                        style={inputStyle}
                    />
                </label>
                <label style={labelStyle}>
                    Address Line 2:
                    <input
                        type="text"
                        name="line_2"
                        value={formData.line_2}
                        onChange={handleInputChange}
                        style={inputStyle}
                    />
                </label>
                <label style={labelStyle}>
                    City:
                    <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        required
                        style={inputStyle}
                    />
                </label>
                <label style={labelStyle}>
                    State:
                    <input
                        type="text"
                        name="state"
                        value={formData.state}
                        onChange={handleInputChange}
                        required
                        style={inputStyle}
                    />
                </label>
                <label style={labelStyle}>
                    Country:
                    <input
                        type="text"
                        name="country"
                        value={formData.country}
                        onChange={handleInputChange}
                        required
                        style={inputStyle}
                    />
                </label>
                <label style={labelStyle}>
                    Zipcode:
                    <input
                        type="text"
                        name="zipcode"
                        value={formData.zipcode}
                        onChange={handleInputChange}
                        required
                        style={inputStyle}
                    />
                </label>
                <button type="submit" style={buttonStyle}>
                    Signup
                </button>
            </form>
        </div>
    );
};

export default SignupForm;
