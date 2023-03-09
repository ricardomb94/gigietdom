import React from 'react'
// import ImageCard from './components/ImageCard'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Home from "./pages/Home";
import About from "./pages/About";
import Ceremony from "./pages/Ceremony";
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { Box } from '@mui/material';

const App = () => {
    return (
            <Router>
                <Navbar />
                <Header />
                <Routes>
                    <Route exact path="/" element={<Home/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/ceremony" element={<Ceremony/>}/>
                </Routes>
            </Router>
    )
}

export default App