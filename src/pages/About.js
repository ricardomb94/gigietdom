import { Box, Container, Grid } from '@mui/material'
import React from 'react'
import ImageCard from '../components/ImageCard'

const About = () => {
  return (
    <Box 
      direction="row"
      sx={{backgoundColor: "rgb(230 230 230)"}} 
      >
      <Box item>
        <ImageCard/>
      </Box>
    </Box>
  )
}

export default About