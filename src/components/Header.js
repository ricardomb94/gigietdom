import React from 'react'
import { Grid, Typography } from '@mui/material';
// import { Image } from 'mui-image';
import imageUrl from '../assets/images/mariage-style.jpg';
import { Zoom } from "react-awesome-reveal";
// import Lottie from "lottie-react";
// import groovyWalkAnimation from "./groovyWalk.json";
import Timer from "./Timer"

const styles = {
    heroContainer: {
        height: 1000,
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        width: `calc(100vw + 48px)`,
        margin: -24,
        padding: 24,
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
            {/* <Slide cascade> */}
            <Grid item
                sx={{
                    width: '50%',
                    height: '80vh',
                    margin: '0 auto',
                    borderRadius: '0.3em',
                    border: 'thick double rgb(255 19 123)',
                    position: 'relative',
                    top: '10rem',
                    backgroundColor: '#FFF',
                    opacity: '0.8',
                    padding: '7rem',
                }}
            >
                <Zoom >
                    <Typography variant="h3" sx={{ padding: '0.2rem' }}>Ogilvy et Dominique  </Typography>
                    <hr />
                    <Typography variant="h5">
                        Le 16 Septembre 2023
                        <Timer />
                    </Typography>
                </Zoom>
                {/* <Lottie animationData={groovyWalkAnimation} loop={true} style={{ width: '100%', height: '6rem' }} /> */}
            </Grid>
        </Grid>
    )
}

export default Header