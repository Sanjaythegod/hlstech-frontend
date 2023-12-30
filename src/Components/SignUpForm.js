import { Alert, Collapse, IconButton } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import React, { useState } from 'react';
import api from '../axios'

const SignupForm = () => {
    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        pass_hash: '',
    });
    const [open, setOpen] = React.useState(false);
    const [erropen, setErrOpen] = React.useState(false);
    const [errmessage, setErrMessage] = React.useState('');


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
        api.post('createUser', formData).then(res => {
            console.log(res.data)
            setOpen(true)
        }).catch(err => {
            console.log(err)
            setErrOpen(true)
            setErrMessage(err.response.data.error)
        })
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
                        name="pass_hash"
                        value={formData.pass_hash}
                        onChange={handleInputChange}
                        required
                        style={inputStyle}
                    />
                </label>
                <button type="submit" style={buttonStyle}>
                    Signup
                </button>
            </form>
            <Collapse in={open} style={{ marginTop: '10px' }}>
                <Alert
                severity="success"
                    action={
                        <IconButton
                            aria-label="close"
                            color="inherit"
                            size="small"
                            onClick={() => {
                                setOpen(false);
                            }}
                        >
                            <CloseIcon fontSize="inherit" />
                        </IconButton>
                    }
                    sx={{ mb: 2 }}
                >
                    Account Created!
                </Alert>
            </Collapse>
            <Collapse in={erropen} style={{ marginTop: '10px' }}>
                <Alert
                    severity="error"
                    action={
                        <IconButton
                            aria-label="close"
                            size="small"
                            onClick={() => {
                                setErrOpen(false);
                            }}
                        >
                            <CloseIcon fontSize="inherit" />
                        </IconButton>
                    }
                    sx={{ mb: 2 }}
                >
                    {errmessage}
                </Alert>
            </Collapse>
        </div>
    );
};

export default SignupForm;
