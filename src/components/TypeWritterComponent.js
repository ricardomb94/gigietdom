import React from 'react'
import { Zoom } from 'react-awesome-reveal';
import TypewriterComponent from 'typewriter-effect';


const TypeWritterComponent = () =>

    // <Zoom >
        <TypewriterComponent
            option={{
                string: ['Mariage', 'Officiel'],
                autoStart: true,
                loop: true
            }}
            onInit={(typewriter) => {
                typewriter.typeString('Mariage Officiel!')
                    .start();
            }}
        />
    // </Zoom>



export default TypeWritterComponent