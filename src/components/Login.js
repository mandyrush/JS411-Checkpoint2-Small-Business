import React from "react";

import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const Login = () => {
    return (
        <Container maxWidth="sm" sx={{ my: '3rem' }}>
            <TextField
                fullWidth
                hiddenLabel
                required
                id="username"
                label="Username"
                defaultValue=""
                variant="standard"
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
            <Button variant="contained" sx={{
                mt: 3, backgroundColor: '#E0E0E0', color: '#000', '&:hover': {
                    backgroundColor: '#CCC',
                }
            }} fullWidth>Login</Button>
        </Container >
    );
}

export default Login;