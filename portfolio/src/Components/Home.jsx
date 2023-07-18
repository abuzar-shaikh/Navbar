import React from 'react'
import "../StyleComp/Home.css"
import wallpeper from "../Images/i-abc5.jpg"




const Home = () => {
  return (
    <div className='HomePage'>

   <div className='MaskHome'>
    <img src={wallpeper} alt="homeIng" className='into-img' />
   
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
