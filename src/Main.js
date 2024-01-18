import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import {faLinkedin} from '@fortawesome/free-solid-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import { faEnvelope} from '@fortawesome/free-solid-svg-icons'

export default function Main(){

    return(

        <div className="main--container">

                <div className="image--container" >

                    <img src="Images\Photograph.jpg" preload />

                </div>

                <div className="intro--container">

                    <h2 className="hello">Hello, I'm</h2>
                    <h1 className="main--name">Madhur Goyal</h1>
                    <h2 className="job">Frontend Developer</h2>
                    <button className="button1">Download CV</button>
                    <button className="button2">Contact Info</button> 

                    <div className='icons-container'>
                        <div className='icon1'>
                            <FontAwesomeIcon icon={faLinkedin} size="2x" />
                        </div>

                        <div className='icon2'>
                            <FontAwesomeIcon icon={faGithub} size="2x" />
                        </div>
                    </div>

                    

            
            </div>

        </div>
        
        


    )
}