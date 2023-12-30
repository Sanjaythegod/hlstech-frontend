import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Alert, Collapse, IconButton } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';

export default function ContactForm() {
    const form = useRef();
    const [open, setOpen] = React.useState(false);

    const containerStyle = {
        maxWidth: '300px',
        margin: 'auto',
        padding: '20px',
        border: '1px solid #000',
        borderRadius: '5px',
        backgroundColor: '#fff',
        color: '#000',
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

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_oahjzng', 'template_h5l7j9x', form.current, 'ifgPRbktchuFx47I1')
            .then((result) => {
                console.log(result.text);
                setOpen(true);
            })
            .catch((error) => {
                console.log(error.text);
            });
    };

    return (
        <div style={containerStyle}>
            <h2 style={{
                textAlign: 'center'
            }}>Contact Us</h2>
            <form ref={form} onSubmit={sendEmail}>
                <label style={labelStyle}>Name</label>
                <input type="text" name="user_name" style={inputStyle} />
                <label style={labelStyle}>Email</label>
                <input type="email" name="user_email" style={inputStyle} />
                <label style={labelStyle}>Message</label>
                <textarea name="message" style={inputStyle} />
                <button type="submit" style={buttonStyle}>
                    Send
                </button>
                <Collapse in={open} style={{ marginTop: '10px' }}>
                    <Alert
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
                        Email sent successfully
                    </Alert>
                </Collapse>
            </form>
        </div>
    );
}
