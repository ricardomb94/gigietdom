import { Box, Container, Grid } from '@mui/material'
import React from 'react'
import ImageCard from '../components/ImageCard'

const About = () => {
  return (
    <Box 
      sx={{backgoundColor: "rgb(230 230 230)"}} 
      >
      <Box >
        <ImageCard/>
      </Box>
    </Box>
  )
}

export default About