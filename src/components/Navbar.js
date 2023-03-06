import { AppBar, Grid, IconButton, Tab, Tabs, Toolbar } from '@mui/material'
import { React, useState } from 'react'
import { Image } from 'mui-image';
import { Zoom } from "react-awesome-reveal";
import logo from '../assets/images/bague.png'
import styled from '@emotion/styled';
import { Favorite } from '@mui/icons-material';
import { pink } from '@mui/material/colors';


const StyledTabs = styled(Tabs)(({ theme }) => ({
    [theme.breakpoints.down("sm")]: {
        display: 'none',
        backgroundColor: 'white'
    }
}))


const Navbar = ({ links }) => {
    const [value, setValue] = useState(0);
    const handleChange = ((e, newValue) => {
        setValue(newValue)
    })
    return (
        // <AppBar style={{ background: '#2F4858' }}>
        <AppBar style={{ background: '#fff' }}>
            <Zoom>
                <Toolbar >
                    <Grid container >
                        <Grid item xs={1} >
                            <IconButton>
                                <Image src={logo} alt='alliance'
                                    style={{
                                        backgroundColor: 'rgb(255 19 123)',
                                        width: '50px',
                                        height: '50px',
                                    }} />
                            </IconButton>
                        </Grid>
                        <Grid item xs={9} ml={5} style={{ display: 'flex', alignItems: 'center' }}>
                            <StyledTabs
                                indicatorColor='secondary'
                                textColor='primary'
                                value={value}
                                onChange={handleChange}>
                                {links.map((link, i) =>
                                    <Tab key={i} label={link} />
                                )}
                            </StyledTabs>
                        </Grid>
                        <Grid item xs={3}></Grid>
                    </Grid>
                </Toolbar>
            </Zoom>
        </AppBar>
    )
}

export default Navbar