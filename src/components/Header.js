import React from 'react'
import { Grid, Typography } from '@mui/material';
// import { Image } from 'mui-image';
import imageUrl from '../assets/images/mariage-style.jpg';
import { Fade, Slide } from "react-awesome-reveal";
import Lottie from "lottie-react";
import groovyWalkAnimation from "./groovyWalk.json";

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
            <Slide cascade>
                <Grid item
                    sx={{
                        width: '80%',
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
                    <Fade cascade>
                        <Typography variant="h3" sx={{ padding: '0.3rem' }}>Ogilvy et Dominique  </Typography>
                        <Slide cascade>
                            <hr />
                            <Typography variant="h5">
                                Le 16 Septembre 2023
                            </Typography>
                            <Lottie animationData={groovyWalkAnimation} loop={true} style={{ width: '100%', height: '6rem' }} />
                        </Slide>
                    </Fade>
                </Grid>
            </Slide>
        </Grid>
    )
}

export default Header