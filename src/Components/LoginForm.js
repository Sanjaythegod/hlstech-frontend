import React, { useState } from 'react';
import { Alert, Collapse, IconButton } from "@mui/material"
import CloseIcon from '@mui/icons-material/Close';
import api from '../axios'

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [open, setopen] = useState(false);
    const [err, setErr] = useState(false);
    const [message, setMessage] = useState('');

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
        api.post('login',{
            email: email,
            pass_hash: password
        }).then(res => {
            console.log(res.data)
            localStorage.setItem('token',res.data.accessToken)
            setopen(true)
        }).catch(err => {
            console.log(err.data)
            setErr(true)
            setMessage(err.response.data.error)
        })
        
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
                        severity='success'
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
                <Collapse in={err} style={{marginTop: '10px'}}>
                    <Alert
                        severity='error'
                        action={
                            <IconButton
                                aria-label="close"
                                color="inherit"
                                size="small"
                                onClick={() => {
                                    setErr(false);
                                }}
                            >
                                <CloseIcon fontSize="inherit" />
                            </IconButton>
                        }
                        sx={{ mb: 2 }}
                    >
                        {message}
                    </Alert>
                </Collapse>

            </form>
        </div>
    );
};

export default LoginForm;
