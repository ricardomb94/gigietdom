import React from 'react'
import { Grid, Typography } from '@mui/material';
// import { Image } from 'mui-image';
import imageUrl from '../assets/images/mariage-large.jpg';
import { Slide, Fade } from "react-awesome-reveal";

const styles = {
    heroContainer: {
        height: 700,
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: 'cover',
        // backgroundPosition: 'center',
        // width: `calc(100vw + 48px)`,
        // margin: -24,
        // padding: 24,
        textAlign: 'center',
    }
};

const Header = () => {
    return (

        <Grid container
            justifyContent="center"
            alignItems="right"
            style={styles.heroContainer}
            sx={{ textAlign: 'center' }}
        >
            {/* <Image src={imageUrl} alt="unis pour la vie" sx={{ width: '100%', height: '50vh' }} /> */}
            <Slide left>
                <Grid item
                    sx={{
                        width: '80%',
                        margin: '0 auto',
                        border: 'thick double green',
                        position: 'relative',
                        top: '10rem',
                        backgroundColor: '#FFF',
                        opacity: '0.8',
                        padding: '6rem',
                    }}
                >
                    <Slide >
                        <Typography variant="h3" sx={{ padding: '0.5rem' }}>Ogilvy et Dominique  </Typography>
                        <hr />
                        <Typography variant="h5">
                            Le 16 Septembre 2023
                        </Typography>
                    </Slide>
                </Grid>
            </Slide>
        </Grid>
    )
}

export default Header