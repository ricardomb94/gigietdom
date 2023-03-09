import React from 'react'
// import ImageCard from './components/ImageCard'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Home from "./pages/Home";
import About from "./pages/About";
import Ceremony from "./pages/Ceremony";
import { BrowserRouter as Router} from 'react-router-dom';
import { Box } from '@mui/material';

// const LinksArray = ["Accueil", "Notre histoire", "Ceremonie", "Localisation"]

const App = () => {
    return (
        <Box className='App'>
            <Navbar />
            <Header />
        </Box>
    )
}

export default App