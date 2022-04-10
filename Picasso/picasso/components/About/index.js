import React from 'react'
import { AboutContainer, AboutBg, AboutH1, AboutContent, AboutP, AboutH4, AboutCaption } from './AboutElements'
import {About_content} from './data'
import NavBar from '../Navbar'
const AboutSection = () => {
    return (
    <>
    <NavBar/>
        <AboutContainer>
            <AboutBg>
                <AboutH1>Who Is Picasso? </AboutH1>
                {About_content.map((thing, index) =>(
                    <>
                    <AboutH4 key={index}> {thing.title}</AboutH4>
                    <AboutCaption key={index}> {thing.caption}</AboutCaption>
                    <AboutP key={index}> {thing.body}</AboutP>
                    </>
               ))}
            </AboutBg>
        </AboutContainer>
    </>
    )
}

export default AboutSection
