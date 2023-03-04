import React from 'react'
import { Grid, Paper, Stack, Typography } from '@mui/material';
import imageUrl from '../assets/images/mariage-style.jpg';
import { Fade, Slide, Zoom } from "react-awesome-reveal";
import { styled } from '@mui/styles';
// import Lottie from "lottie-react";
// import groovyWalkAnimation from "./groovyWalk.json";
import Timer from "./Timer"
import TypewriterComponent from './TypeWritterComponent'

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));


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


        // <Fade cascade>
        <Stack direction='row'
            justifyContent="center"
            // spacing={4}
            // alignItems="right"
            style={styles.heroContainer}
            sx={{ textAlign: 'center' }}
        >
            <Item
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
                    padding: '1rem',
                    color: '#FFF',
                }}
            >
                <TypewriterComponent />
                <Zoom cascade damping={0.3}>
                    <Typography variant="h4"
                        sx={{
                            padding: '0.3rem',
                            marginBottom: '1rem',
                            textTransform: 'uppercase',
                            fontStyle: 'italic',
                        }}
                    >
                        Ogilvy et Dominique
                    </Typography>
                    {/* <hr /> */}
                    <Item variant="h4">
                        Le 16 Septembre 2023
                    </Item>
                    <hr />
                </Zoom>
                <Timer />
            </Item>
        </Stack>
        // </Fade>
    )
}

export default Header