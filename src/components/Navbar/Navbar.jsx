import React, { Component } from 'react'
import './Navbar.css'
import logo_light from "../../assets/logo_light.jpg";
import logo_dark from "../../assets/logo_dark.jpg";
const Navbar = () => {
  return (<>
    <div className='navbar'>
        <img src={logo_light} alt="" className='logo'/> مؤسسة عتيوي الرشيد 
        <ul>
            <a href="/home">الرئيسيه</a>
            <a href="/services">خدماتنا</a>
            <a href='/contact'>اتصل بنا</a>
            <a href='/about'>من نحن</a>           
        </ul>
    </div>
    
 
    </>
  )
}


export default Navbar