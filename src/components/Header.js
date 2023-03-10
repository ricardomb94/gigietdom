import React from 'react'
import { Divider, Paper, Stack, Typography } from '@mui/material';
import imageUrl from '../assets/images/mariage-style.jpg';
import { Zoom } from "react-awesome-reveal";
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
        height: '89vh',
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        textAlign: 'center',
        marginBottom:'8rem'
    }
};

const Header = () => {
    return (
        <Stack direction='column'
            justifyContent="center"
            // spacing={4}
            // alignItems="right"
            style={styles.heroContainer}
            sx={{ textAlign: 'center' }}
        >
            <Zoom cascade>
                <Item
                    sx={{
                        width: '60%',
                        height: '50vh',
                        margin: '0 auto',
                        borderRadius: '0.3em',
                        border: 'thick double rgb(255 19 123)',
                        position: 'relative',
                        top: '2rem',
                        backgroundColor: '#fff',
                        opacity: '0.7',
                        // paddingTop: '0.8rem',
                        padding: '0.5rem',
                        color: '#000',
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
                            Ogilvie et Dominique
                        </Typography>
                        <Item variant="h4">
                            Le 16 Septembre 2023
                        </Item>
                         <hr style={{width:'45%', marginTop:"2rem"}}/>
                    </Zoom>
                    <Timer />
                </Item>
            </Zoom>
        </Stack>
    )
}

export default Header