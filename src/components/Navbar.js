import { AppBar, Box, Button, Grid, IconButton, Tab, Tabs, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { React, useState } from 'react';
import { Image } from 'mui-image';
import { Zoom, Slide } from "react-awesome-reveal";
import logo from '../assets/images/bague.png'
import styled from '@emotion/styled';
import { Favorite } from '@mui/icons-material';
import { pink } from '@mui/material/colors';
import { Link } from 'react-router-dom';


// const StyledTabs = styled(Tabs)(({ theme }) => ({
//     [theme.breakpoints.down("sm")]: {
//         display: 'none',
//         backgroundColor: 'white'
//     }
// }))

const navItems = [{path:"/", label:"Accueil"}, {path:"/About", label:"Notre histoire"}, {path:"/Ceremony", label:"Cérémonie"}]

const Navbar = ({ links }) => {
    return (
        <AppBar style={{ background: '#fff' }}>
            <Slide cascade>
                <Toolbar >
                    <IconButton edge="start" color="inherit" aria-label="menu" >
                        <MenuIcon sx={{backgroundColor: '#f50057', display:{sm:'none'}}}/>
                    </IconButton>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' }, color: '#000000' }}
                    >
                    
                    <IconButton edge="start" color="inherit" aria-label="menu" >
                    Gigi<FavoriteIcon sx={{color: '#f50057'}}/>Dom
                    </IconButton>
                      
                    </Typography>
                    <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                        {navItems.map((navItem) => (
                        <Link to={navItem.path}
                            key={navItem.path} 
                            underline="none"
                            style={{ 
                                marginLeft:20,
                                color: '#f50057',
                                textDecoration:"none",
                                textTransform: "uppercase"
                            }}
                          >
                            {navItem.label}
                        </Link>
                     ))
                    }
                    </Box>  
                </Toolbar>
            </Slide>
        </AppBar>
    )
}

export default Navbar