import React, { useState } from 'react'
import "../Navbar/NavBar.css"
import { FaBars ,FaTimes} from 'react-icons/fa'


const NavBar = () => {
    const [Click,SetClick]=useState(false)
    const[colores,setcolor]=useState(false)
    const Changecolor=()=>{
        if(window.scrollY>=1000){
            setcolor(true)
        }else{
            setcolor(false)
        }
    }

    window.addEventListener("scroll",Changecolor)
    const HandlClick=()=>{
        SetClick(!Click)
    }
  return (
    <div className={colores ? "header header-bg":"header"}>
    
    <a href=""><h1 className='abuzarName'>Abuzar Shakh</h1></a>
<div className='nav-option'>
<ul className={Click ? ("nav-menu active"):("nav-menu")}>
    <li>
        <a href="">Home</a>
    </li>
    <li>
        <a href="">About</a>
    </li>
    <li>
        <a href="">Skills</a>
    </li>
    <li>
        <a href="">Projects</a>
    </li>
    <li>
        <a href="">Statistics</a>
    </li>
    <li>
        <a href="">Contacts</a>
    </li>
    <li className=''>
        <a href="">Resume</a>
    </li>
</ul>
</div>
<div className='hamburger' onClick={HandlClick}>
    {Click ? (
<FaTimes size={25} style={{color:"white"}}/>):(
<FaBars size={25} style={{color:"black"}}/>)}




</div>
    </div>
  )
}

export default NavBar
 