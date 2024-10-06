import * as React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { NavLink, useNavigate } from 'react-router-dom';
import KW from '../assets/react.svg'
import { useEffect } from 'react';
import { useState } from 'react';

const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function ResponsiveAppBar() {

    const StyledInputBase = styled(InputBase)(({ theme }) => ({
        color: 'inherit',
        '& .MuiInputBase-input': {
            padding: theme.spacing(1, 1, 1, 0),
            // vertical padding + font size from searchIcon
            paddingLeft: `calc(1em + ${theme.spacing(4)})`,
            transition: theme.transitions.create('width'),
            width: '100%',
            [theme.breakpoints.up('md')]: {
                width: '20ch',
            },
        },
    }));

    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <AppBar position="sticky" sx={{ background: '#2d384a' }} className='py-0 nanum'>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    {/* <Avatar src={KW} sx={{ display: { xs: 'none', md: 'flex' }, mr: 0, height: 'auto', width: '5rem' }} /> */}
                    <Typography
                        variant="h6"
                        noWrap
                        sx={{
                            mr: 1,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            // fontWeight: 700,
                            letterSpacing: '.1rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        <NavLink to={'/'} className='text-2xl font-extrabold'>KIN<span className='text-slate-500 uppercase'>Folk</span></NavLink>
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
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
                            <div className='flex flex-col justify-start pr-2'>
                                <NavLink to={'/'}>
                                    <MenuItem>
                                        <Typography>
                                            Home
                                        </Typography>
                                    </MenuItem>
                                </NavLink>
                                <NavLink to={'/about'}>
                                    <MenuItem>
                                        <Typography>
                                            About Us
                                        </Typography>
                                    </MenuItem>
                                </NavLink>
                                <NavLink to={'/contact-us'}>
                                    <MenuItem>
                                        <Typography>
                                            Contact Us
                                        </Typography>
                                    </MenuItem>
                                </NavLink>
                                <NavLink to={'/programs'}>
                                    <MenuItem>
                                        <Typography>
                                            Programs
                                        </Typography>
                                    </MenuItem>
                                </NavLink>
                                <NavLink to={'/donate'}>
                                    <MenuItem>
                                        <Typography>
                                            Donate
                                        </Typography>
                                    </MenuItem>
                                </NavLink>
                                <NavLink to={'/events'}>
                                    <MenuItem>
                                        <Typography>
                                            Events
                                        </Typography>
                                    </MenuItem>
                                </NavLink>
                            </div>
                        </Menu>
                    </Box>
                    {/* <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> */}
                    <Typography
                        variant="h5"
                        noWrap
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.1rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        <NavLink to={'/'}>Devpix<span className='text-gray-400'>Genesis</span></NavLink>
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-end' }}>
                        <div className='flex gap-6 mx-20 text-white font-medium items-center'>
                            <NavLink to={'/'} className='hover:bg-gray-800 px-4 py-3 hover:rounded-lg'>
                                Home
                            </NavLink>
                            <NavLink to={'/about'} className='hover:bg-gray-800 px-4 py-3 hover:rounded-lg'>
                                About Us
                            </NavLink>
                            <NavLink to={'/contact-us'} className='hover:bg-gray-800 px-4 py-3 hover:rounded-lg'>
                                Contact
                            </NavLink>
                            <NavLink to={'/programs'} className='hover:bg-gray-800 px-4 py-3 hover:rounded-lg'>
                                Programs
                            </NavLink>
                            <NavLink to={'/events'} className='hover:bg-gray-800 px-4 py-3 hover:rounded-lg'>
                                Events
                            </NavLink>
                            <NavLink to={'/donate'} className='hover:bg-gray-800 px-4 py-3 hover:rounded-lg'>
                                Donate
                            </NavLink>
                        </div>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default ResponsiveAppBar;
