/*import { useState } from 'react';*/
import './Navbar.css';
import React from 'react'
import {Link} from 'react-scroll'
import ACMlogo from '../../assets/blanc.png'
import Enstab from '../../assets/enstablanc.png'
const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={ACMlogo} alt ="logoAcm" className="ACMlogo" />
         <div className="navbar-links">
            <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Home</Link>
            <Link className="desktopMenuListItem" to='sos-section' spy={true} smooth={true} offset={-100} duration={500} >About Us</Link>
            <Link className="desktopMenuListItem" to='feedback-container' spy={true} smooth={true} offset={-100} duration={500}>Feedback</Link>
            <Link className="desktopMenuListItem">Contact</Link>
         </div>
       
          <div className="search">
              <input placeholder="Search..." type="text" />
              <button type="submit">Go</button>
            </div> 
        <img src={Enstab} alt ="logoenstab" className="logo" />
            
    </nav>
  )
}
export default Navbar
/*<img src={Enstab} alt ="logoenstab" className="logo" />*/