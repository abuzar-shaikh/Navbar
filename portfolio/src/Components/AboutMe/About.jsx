import React from 'react'
import "../AboutMe/About.css"
import { FaGithubSquare,FaLinkedin } from 'react-icons/fa';
import abouteImg from "../Images/abuzarimg.png"

const About = () => {
  return (
    <div>
     <div className='about-heding'><h1>ABOUT <span style={{color:"#2978b5"}}>ME</span> </h1></div>
   <div className='img-about-delail'>
    <div className='about-photo'><img  src={abouteImg} alt="about me" width="100%" height="100%"/></div>
    <div className='about-detail'>
        <h1>Full Stack Web Developer</h1>
        <p>I am a passionate web developer driven by a relentless pursuit of excellence. With a meticulous attention to detail and a commitment to delivering pixel-perfect designs, I create immersive and engaging web experiences with the help of CSS , HTML , Javascript , React , MongoDB that leave a lasting impression</p>
      <a href="">  <FaGithubSquare style={{fontSize:"3rem",margin:"5px"}} /></a>
      <a href="">  <FaLinkedin style={{fontSize:"3rem" ,margin:"5px"}}/></a>
        
    </div>
   </div>
    </div>
  )
}

export default About
