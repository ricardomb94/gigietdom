import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import Image from '../assets/images/mariage-large.jpg'


const imageCard = () => {
    return (
        <Card sx={{ maxWidth: 1400 }}>
            <CardMedia
                component="img"
                alt="mariage"
                height="550"
                image={Image}
            />
            <CardContent>
                <Typography noWrap variant="h5" component="div" align="center"   >
                    Ogilvy et Dominique
                </Typography>
                <Typography variant="caption" color="text.secondary">
                    Il lui a demandé sa main et elle a dit oui
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    )
}

export default imageCard