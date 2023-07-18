import React from 'react'
import "../StyleComp/About.css"
import AboutImg from "../Images/myphoto2.png"

const About = () => {
  return (
    <div className='About-main'>

        <div className='about-heading'>     <h1>About me</h1></div>

      

<div className='about-Ditels-photo'>

<div className='about-Dilet'>
    <h2>Full Stack Web Developer</h2>
    <p>I am a passionate web developer driven by a relentless An enthusiastic Full-stack Developer, skilled in Node.JS. Experienced in Developing websites using JavaScript, Node.js, Express.js, MongoDB. An optimistic person, always ready to take critical decisions and ready to work under pressure. Always ready to try some new things for optimization.</p>
</div>
   
   <div className='about-myphotos'><img src={AboutImg} alt="myphoto" /></div>
</div>
    </div>
  )
}

export default About
