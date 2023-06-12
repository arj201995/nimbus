import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Logo from '../assets/logo.webp'
import classes from '../styles/header.module.css'
import { routes } from '../utils/routes';
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { Menus } from './Menus';
import styled from '@emotion/styled';
import { Dialog, Slide } from '@mui/material';

import CloseIcon from '@mui/icons-material/Close';
import { motion } from 'framer-motion';


export const StyledMenu = styled(Menu)({
    '& .MuiMenu-list': {
        color: 'white',
    },
    '& .MuiMenu-paper': {
        background: 'rgba(0,0,0,0.9)',
    }
})

const ImgVariants = {
    hidden: {
        opacity: 0,
        scale: 2
    },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 1
        }
    }
}

const variantButton = {
    hover: {
        scale: 1.1,
        transition: {
            duration: 0.3,
            yoyo: Infinity
        }
    }
};

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export const Header = () => {
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [open, setOpen] = React.useState(false);

    const navigate = useNavigate();

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleClick = (event, routeName) => {
        if (routeName === 'Services') {
            setAnchorEl(event.currentTarget);
        }
    };



    const handleCloseUserMenu = () => {
        setAnchorEl(null)
        setAnchorElUser(null);
    };

    const navigateToHome = () => {
        navigate('/')
    }

    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <motion.div variants={ImgVariants} initial="hidden" animate="visible" onClick={navigateToHome} style={{ cursor: 'pointer', borderRadius: "50%" }} >
                        <img src={Logo} className={classes.logo} alt="MindSuperior Consult" />
                    </motion.div>
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, justifyContent: 'flex-end' }}>
                        {!open && <IconButton
                            size="large"
                            aria-label="menu-icon"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleClickOpen}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>}


                        <Dialog
                            open={open}
                            TransitionComponent={Transition}
                            keepMounted
                            onClose={handleClose}
                            aria-describedby="alert-dialog-slide-description"
                            fullScreen
                            sx={{
                                '& .MuiDialog-paper': {
                                    display: 'flex',
                                    background: 'rgba(0,0,0,0.8)',
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                }
                            }}
                        >
                            <IconButton sx={{ position: 'fixed', top: '1rem', right: '1rem' }} onClick={handleClose}>
                                <CloseIcon sx={{ fontWeight: 'bold', color: 'white', fontSize: "2rem" }} />
                            </IconButton>
                            {routes.map((route) => {
                                return <MenuItem key={`${route.name}/${route.link}`} onClick={handleClose} >
                                    <Button fullWidth size="small" sx={{ fontWeight: 'bold', color: '#ffffff', fontSize: '1.3rem' }} component={Link} to={route.link}>{route.name}</Button>
                                </MenuItem>

                            }
                            )}

                        </Dialog>
                    </Box>

                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-end', marginRight: '3rem' }}>
                        {routes.map((route) => (
                            <motion.div key={route.name} variants={variantButton}
                                whileHover="hover"
                            >
                                <Button
                                    sx={{ my: 2, color: 'white', display: 'block' }}
                                    component={NavLink}
                                    to={route.link}
                                    onMouseEnter={(event) => handleClick(event, route.name)}
                                >
                                    {route.name}
                                </Button>
                            </motion.div>
                        ))}
                        <Menus anchorEl={anchorEl} setAnchorEl={setAnchorEl} />
                    </Box>

                    <Box sx={{ flexGrow: 0 }}>
                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {routes.map((route) => (
                                <MenuItem key={`${route.name}-${route.link}`} onClick={handleCloseUserMenu}>
                                    <Button size="small" component={Link} to={route.link}>{route.name}</Button>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar >
    );
}