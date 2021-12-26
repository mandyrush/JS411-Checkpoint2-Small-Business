import React from "react";
import { useNavigate } from 'react-router-dom';
import cookie from "cookie";

import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const Login = ({
    setIsLoggedIn,
    username,
    setUsername
}) => {
    const navigate = useNavigate();

    const handleChange = (event) => {
        setUsername(event.target.value);
    }

    const handleClick = () => {
        document.cookie = `isLoggedIn=true;max-age=60*100;`;
        document.cookie = `username=${username}`;

        const cookies = cookie.parse(document.cookie);
        setIsLoggedIn(cookies['isLoggedIn']);

        navigate('/');
    }

    return (
        <Container maxWidth="sm" sx={{ my: '3rem' }}>
            <form>
                <TextField
                    fullWidth
                    hiddenLabel
                    required
                    id="username"
                    label="Username"
                    defaultValue=""
                    variant="standard"
                    onChange={(event) => handleChange(event)}
                />
                <TextField
                    fullWidth
                    hiddenLabel
                    id="password"
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                    variant="standard"
                />
                <Button
                    variant="contained" sx={{
                        mt: 3, backgroundColor: '#E0E0E0', color: '#000', '&:hover': {
                            backgroundColor: '#CCC',
                        }
                    }}
                    fullWidth
                    onClick={handleClick}>
                    Login
                </Button>
            </form>
        </Container >
    );
}

export default Login;