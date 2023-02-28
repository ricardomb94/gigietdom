import React from 'react'
// import ImageCard from './components/ImageCard'
import Header from './components/Header'
import Navbar from './components/Navbar'

const LinksArray = ["Accueil", "Notre histoire", "Ceremonie", "Localisation"]

const App = () => {
    return (
        <div className='App'>
            <Navbar links={LinksArray} />
            <Header />
        </div>
    )
}

export default App