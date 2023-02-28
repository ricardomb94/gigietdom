import { AppBar, Grid, Tab, Tabs, Toolbar } from '@mui/material'
import { React, useState } from 'react'
import { Image } from 'mui-image';

import logo from '../assets/images/bague.png'

const Navbar = () => {
    const [value, setValue] = useState();

    return (

        <AppBar>
            <Toolbar>
                <Grid container >
                    <Grid item xs={0.7}>
                        <Image src={logo} alt='alliance' />
                    </Grid>
                    <Grid item xs={8}>
                        <Tabs indicatorColor='secondary'
                            textColor='inherit'
                            value={value}
                            onChange={(e, value) => {
                                setValue(value)
                            }}>
                            <Tab label="Accueil" />
                            <Tab label="Notre histoire" />
                            <Tab label="Ceremonie" />
                            <Tab label="Localisation" />
                        </Tabs>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>

    )
}

export default Navbar