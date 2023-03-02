import { AppBar, Grid, Tab, Tabs, Toolbar } from '@mui/material'
import { React, useState } from 'react'
import { Image } from 'mui-image';
import { Slide, Zoom } from "react-awesome-reveal";


import logo from '../assets/images/bague.png'

const Navbar = ({ links }) => {
    const [value, setValue] = useState(0);
    const handleChange = ((e, newValue) => {
        setValue(newValue)
    })
    return (
        <AppBar style={{ background: 'rgb(11 45 61)' }}>
            <Slide>
                <Toolbar >
                    <Grid container >
                        <Grid item xs={0.6} >
                            <Image src={logo} alt='alliance' style={{ backgroundColor: 'rgb(255 19 123)' }} />
                        </Grid>
                        <Grid item xs={7} ml={5}>
                            <Tabs
                                indicatorColor='secondary'
                                textColor='inherit'
                                value={value}
                                onChange={handleChange}>
                                {links.map((link, i) =>
                                    <Tab key={i} label={link} />
                                )}
                            </Tabs>
                        </Grid>
                        <Grid item xs={3}></Grid>
                    </Grid>
                </Toolbar>
            </Slide>
        </AppBar>
    )
}

export default Navbar