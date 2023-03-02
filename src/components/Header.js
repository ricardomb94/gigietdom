import React from 'react'
import { Grid, Typography } from '@mui/material';
import imageUrl from '../assets/images/mariage-style.jpg';
import { Slide, Zoom } from "react-awesome-reveal";
// import Lottie from "lottie-react";
// import groovyWalkAnimation from "./groovyWalk.json";
import Timer from "./Timer"
import TypewriterComponent from 'typewriter-effect';

const styles = {
    heroContainer: {
        height: 547,
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        textAlign: 'center',
    }
};

const Header = () => {
    return (


        <Grid container
            justifyContent="center"
            // alignItems="right"
            style={styles.heroContainer}
            sx={{ textAlign: 'center' }}
        >
            <Slide cascade>
                <Grid item
                    sx={{
                        // width: '50%',
                        height: '50vh',
                        margin: '0 auto',
                        borderRadius: '0.3em',
                        // border: 'thick double rgb(255 19 123)',
                        position: 'relative',
                        top: '10rem',
                        backgroundColor: '#000',
                        opacity: '0.7',
                        padding: '2rem',
                        color: '#FFF',
                    }}
                >
                    <Zoom >
                        <TypewriterComponent
                            option={{
                                string: ['Mariage', 'Officiel'],
                                autoStart: true,
                                loop: true
                            }}
                            onInit={(typewriter) => {
                                typewriter.typeString('Mariage Officiel!')
                                    .start();
                            }}
                        />
                        <Typography variant="h4" sx={{ padding: '0.3rem' }}>Ogilvy et Dominique  </Typography>
                        <hr />
                        <Typography variant="h5">
                            Le 16 Septembre 2023
                            <Timer />
                        </Typography>
                    </Zoom>
                </Grid>
            </Slide>
        </Grid>
    )
}

export default Header