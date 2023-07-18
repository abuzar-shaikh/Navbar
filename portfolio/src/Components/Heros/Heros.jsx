import React from 'react'
import "../Heros/Heros.css"
import wallpepr from "../Images/i-abc2.jpg"

const Heros = () => {
  return (
    <div className='hero'>
        <div className='mask'>
<img src={wallpepr} alt="wallpeper" className="into-img" />
        </div>
        <div className="content">
        
          <h1>Hi,I am <span className='abuzar-name'>Abuzar Shaikh</span></h1>
        <div className='fullStack-heading-div'>  <img className='fullStack-heading' src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=700&size=25&pause=1000&color=151515FD&width=506&lines=A+Full+Stack+Web+Developer+;A+MERN+Stack+Web+Developer+" alt="Typing SVG" /></div>
          <p>A passionate Full Stack Software Developer having an experience of building Web applications with JavaScript / Reactjs / Nodejs / MongoDb and some other cool libraries and frameworks.</p>
        <div className='hero-btn-div'>
          <a href="" className="hero-btn">Resume</a>
          <a href="" className="hero-light-btn">Contact</a>
        </div>
        </div>
     
    </div>
  )
}

export default Heros
