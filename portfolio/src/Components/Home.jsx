import React from 'react'
import "../StyleComp/Home.css"
import onlyread from "../Images/onlyread.jpg"
import myimg from "../Images/myphoto2.png"
import vedios from "../vedio/v-abc4.mp4"


const Home = () => {
  return (
    <div className='HomePage'>

   <div className='MaskHome'>
    {/* <img src={onlyread} alt="homeIng" className='into-img' /> */}
    <video autoPlay loop muted playsInline className='into-video'>
      <source src={vedios} type='video/mp4' />
    </video>
   </div>

  <div >
  <div className='myName'>
    <p >Hello, My Name Is</p>
    <h2>Abuzar Shaikh</h2>
    <p>I'm an </p>
    <p align="center">
      </p>
  <a href="https://git.io/typing-svg"><img src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&weight=600&size=25&pause=1000&color=ED0331&width=435&lines=Full+Stack+Web+Developer" alt="Typing SVG" /></a>
    <div className='btn-div'>
        <a href="" className='btn-light'>Resume</a>
    </div>
   </div>
 
  </div>

  
   
   
  
    </div>
  )
}

export default Home
