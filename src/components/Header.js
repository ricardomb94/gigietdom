import React from 'react'
import { Box, Typography } from '@mui/material';
import { Image } from 'mui-image';
import imageUrl from '../assets/images/mariage-assise.jpg';

const Header = () => {
    return (
        <Box sx={{ position: 'relative', textAlign: 'center' }} >
            <Image src={imageUrl} alt="unis pour la vie" sx={{ width: '100%', height: 'auto' }} />
            <Typography variant="caption" color="secondary" >Ogilvy et Dominique se marient </Typography>
        </Box>

    )
}

export default Header