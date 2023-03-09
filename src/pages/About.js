import { SkipNext, SkipPrevious } from '@mui/icons-material'
import { Card, CardContent, CardMedia, IconButton, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import theme from '../theme'

const About = () => {
  return (
    <Card sx={{ display: 'flex' }}>
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <CardContent sx={{ flex: '1 0 auto' }}>
        <Typography component="div" variant="h5">
          Live From Space
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" component="div">
          Mac Miller
        </Typography>
      </CardContent>
      <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
        <IconButton aria-label="previous">
          {theme.direction === 'rtl' ? <SkipNext /> : <SkipPrevious />}
        </IconButton>
        <IconButton aria-label="play/pause">
          {/* <PlayArrowIcon sx={{ height: 38, width: 38 }} /> */}
        </IconButton>
        <IconButton aria-label="next">
          {theme.direction === 'rtl' ? <SkipPrevious /> : <SkipNext />}
        </IconButton>
      </Box>
    </Box>
    <CardMedia
      component="img"
      sx={{ width: 151 }}
      image="/static/images/cards/live-from-space.jpg"
      alt="Live from space album cover"
    />
  </Card>
  )
}

export default About