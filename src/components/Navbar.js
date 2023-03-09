import { AppBar, Grid, IconButton, Tab, Tabs, Toolbar } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { React, useState } from 'react';
import { Image } from 'mui-image';
import { Zoom, Slide } from "react-awesome-reveal";
import logo from '../assets/images/bague.png'
import styled from '@emotion/styled';
import { Favorite } from '@mui/icons-material';
import { pink } from '@mui/material/colors';


// const StyledTabs = styled(Tabs)(({ theme }) => ({
//     [theme.breakpoints.down("sm")]: {
//         display: 'none',
//         backgroundColor: 'white'
//     }
// }))


const Navbar = ({ links }) => {
    return (
        <AppBar style={{ background: '#fff' }}>
            <Slide cascade>
                <Toolbar >
                    <IconButton edge="start" color="inherit" aria-label="menu" >
                        <MenuIcon sx={{backgroundColor: 'black', display:{sm:'none'}}}/>
                    </IconButton>
                   
                </Toolbar>
            </Slide>
        </AppBar>
    )
}

export default Navbar