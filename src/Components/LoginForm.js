import React, { useState } from 'react';
import { Alert, Collapse, IconButton } from "@mui/material"
import CloseIcon from '@mui/icons-material/Close';


const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [open, setopen] = useState(false);

    const containerStyle = {
        maxWidth: '300px',
        margin: 'auto',
        padding: '20px',
        border: '1px solid #000',
        borderRadius: '5px',
        backgroundColor: '#fff',
        color: '#000',
        marginTop: '50px'
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

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        console.log('Email:', email);
        console.log('Password:', password);
    };

    return (
        <div style={containerStyle}>
            <h2 style={{
                textAlign: 'center'
            }}>Login</h2>
            <form onSubmit={handleSubmit}>
                <label style={labelStyle}>
                    Email:
                    <input type="email" value={email} onChange={handleEmailChange} required style={inputStyle} />
                </label>
                <label style={labelStyle}>
                    Password:
                    <input
                        type="password"
                        value={password}
                        onChange={handlePasswordChange}
                        required
                        style={inputStyle}
                    />
                </label>
                <button type="submit" style={buttonStyle}>
                    Login
                </button>
                <Collapse in={open} style={{marginTop: '10px'}}>
                    <Alert
                        action={
                            <IconButton
                                aria-label="close"
                                color="inherit"
                                size="small"
                                onClick={() => {
                                    setopen(false);
                                }}
                            >
                                <CloseIcon fontSize="inherit" />
                            </IconButton>
                        }
                        sx={{ mb: 2 }}
                    >
                        Login success
                    </Alert>
                </Collapse>

            </form>
        </div>
    );
};

export default LoginForm;
