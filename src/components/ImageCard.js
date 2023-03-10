import styled from '@emotion/styled';
import { Box, Card, CardContent, CardMedia, Grid, Paper, Stack, Typography } from '@mui/material'
import React from 'react'
import bague from '../assets/images/alliance.jpg'


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

const ImageCard = () => {
    return (
       <Box sx={{ flexGrow: 1 }}>
        <Grid 
            container 
            rowSpacing={1} 
            columns={16 }
            spacing={2}
            mt={10}
            >
            <Grid item xs={8}>
                <Item>
                    <Card sx={{ maxWidth: 800 }}>
                        <CardMedia
                            component="img"
                            alt="mariage"
                            height="550"
                            image={bague}
                        />
                    </Card>
                </Item>
            </Grid>
            <Grid item xs={8}>
                {/* <Item> */}
                    <CardContent>
                        <Typography noWrap variant="h5" component="div">
                            Notre histoire
                        </Typography>
                        <Typography variant="paragraph" color="text.secondary">
                        Ogilvie et Dominique ont trouvé l'amour l'un en l'autre, et aujourd'hui ils choisissent de s'unir pour la vie. Leur amour est un exemple pour nous tous, et leur engagement l'un envers l'autre est un témoignage de leur amour et de leur respect mutuel.
                        </Typography>
                    </CardContent>
                {/* </Item> */}
            </Grid>
        </Grid>
    </Box>
    )
}

export default ImageCard