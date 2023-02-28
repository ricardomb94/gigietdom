import React from 'react'
import { Grid, Typography } from '@mui/material';
import { Image } from 'mui-image';
import imageUrl from '../assets/images/mariage-large.jpg';
import { Slide } from "react-awesome-reveal";


const Header = () => {
    return (

        <Grid sx={{ position: 'relative', textAlign: 'center' }} >
            <Image src={imageUrl} alt="unis pour la vie" sx={{ width: '100%', height: '50vh' }} />
            <Slide cascade damping={0.1}>
                <Typography variant="h3" sx={{ padding: '0.5rem' }}>Ogilvy et Dominique  </Typography>
                <hr />
                <Typography variant="h5">
                    16 Septembre 2023
                </Typography>
            </Slide>
        </Grid>
    )
}

export default Header