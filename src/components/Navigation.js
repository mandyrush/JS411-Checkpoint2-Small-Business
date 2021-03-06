import React from "react";
import { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import styles from './Navigation.module.css';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Alert from '@mui/material/Alert';

const Navigation = ({
    user,
    removeUser
}) => {
    const navigate = useNavigate();

    const [anchorElNav, setAnchorElNav] = useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleLogout = () => {
        handleCloseNavMenu();

        document.cookie = `isLoggedIn=`;
        document.cookie = "username=";

        removeUser({
            isLoggedIn: false,
            username: null
        });

        navigate('/');
    }

    return (
        <AppBar position="static" sx={{ backgroundColor: '#3CB471' }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
                    {/* Title - Desktop */}
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
                    >
                        Business Listings
                    </Typography>

                    <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                        {/* Hamburger Icon */}
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        {/* Hamburger Menu */}
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            <MenuItem onClick={handleCloseNavMenu}><Link to="/" >Listings</Link></MenuItem>
                            {user.isLoggedIn && <MenuItem onClick={handleCloseNavMenu}><Link to="/listing/create" >Add</Link></MenuItem>}
                            {!user.isLoggedIn && <MenuItem onClick={handleCloseNavMenu}><Link to="/login" >Login</Link></MenuItem>}
                            {user.isLoggedIn && <MenuItem onClick={handleLogout}><Link to="/logout" >Logout</Link></MenuItem>}
                        </Menu>
                    </Box>
                    {/* Title - Mobile */}
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
                    >
                        Business Listings
                    </Typography>
                    {/* Menu - Desktop */}
                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                        <ul className={styles.navList}>
                            <li className={styles.navListItem}><Link to="/" >Listings</Link></li>
                            {user.isLoggedIn && <li className={styles.navListItem}><Link to="/listing/create" >Add</Link></li>}
                            {!user.isLoggedIn && <li className={styles.navListItem}><Link to="/login" >Login</Link></li>}
                            {user.isLoggedIn && <li className={styles.navListItem} onClick={handleLogout}><Link to="/logout" >Logout</Link></li>}
                        </ul>
                    </Box>
                </Toolbar>
            </Container>
            {user.isLoggedIn && <Alert icon={false} severity="info" sx={{ backgroundColor: '#ccc' }}>Logged in as {user.username}</Alert>}
        </AppBar>
    );
}

export default Navigation;