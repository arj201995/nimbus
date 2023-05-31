import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Logo from '../assets/logo.png'
import classes from '../styles/header.module.css'
import { routes } from '../utils/routes';
import { Link, NavLink } from 'react-router-dom'
import { Menus } from './Menus';
import styled from '@emotion/styled';




export const StyledMenu = styled(Menu)({
    '& .MuiMenu-list': {
        color: 'white',
    },
    '& .MuiMenu-paper': {
        background: 'rgba(0,0,0,0.9)',
    }
})

export const Header = () => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event, routeName) => {
        if (routeName === 'Services') {
            setAnchorEl(event.currentTarget);
        }
    };

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    // const handleOpenUserMenu = (event) => {
    //     setAnchorElUser(event.currentTarget);
    // };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <AppBar position="static">
            <Container maxWidth="xl" >
                <Toolbar disableGutters  >
                    <img src={Logo} className={classes.logo} alt="Nimbus Superior" />

                    <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
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
                        <StyledMenu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'right',
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
                                '& .MuiList-root': {
                                    display: 'flex',
                                    flexDirection: 'column',
                                    width: '8rem',
                                    padding: '0rem',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }
                            }}
                        >
                            {routes.map((route) => {
                                return <MenuItem key={`${route.name}/${route.link}`} onClick={handleCloseUserMenu}>
                                    <Button size="small" sx={{ fontWeight: 'bold', color: '#ffffff' }} component={Link} to={route.link}>{route.name}</Button>
                                </MenuItem>

                            }
                            )}
                        </StyledMenu>
                    </Box>
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href=""
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {routes.map((route) => (
                            <Button
                                key={route.name}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                                component={NavLink}
                                to={route.link}
                                onMouseEnter={(event) => handleClick(event, route.name)}
                            >
                                {route.name}
                            </Button>
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