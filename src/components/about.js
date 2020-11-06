import React from 'react';
import Skills from './skills'

import IMG_2877 from '../assets/IMG_2877.jpeg'
import { SectionWrapper } from '../styles/sameStyle';
import { Wrapper } from '../styles/about';
const About = (props) => {
  return(
     //image
     <SectionWrapper >
       <Wrapper>
      <h2>About</h2>
      <h3>Who am I?</h3>
      <p>I am a Full Stack Software Engineer based in Brooklyn, New York. I recently completed the immersive software engineering bootcamp at the Grace Hopper Program at Fullstack Academy. Currently, I am looking forward to  being part of a diverse, innovative and inspiring team that values creativity and social change.
      </p>

      <a href="/#/contact" className ='cont'>Lets work together</a>


      <img src={IMG_2877} alt="" className="photo"/>


      <Skills/>
      </Wrapper>
    </SectionWrapper>
  )
}
export default About
