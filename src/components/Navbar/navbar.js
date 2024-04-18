import React from 'react';
import './navbar.css';
import logo from '../../Assets/logo.png';
// import { Link } from 'react-scroll';
import contact from "../../Assets/contact.png"
import { Link, animateScroll as scroll } from 'react-scroll';

const Navbar = () => {
  return (
   <nav className="navbar">
    <img src={logo} alt="logo" className='logo'/>
    <div className="Menu">
        <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="list">Home</Link>
        <Link activeClass='active' to='about' spy={true} smooth={true} offset={-100} duration={500} className="list">About</Link>
        <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-100} duration={500} className="list">Skills</Link>
        <Link activeClass='active' to='project' spy={true} smooth={true} offset={-100} duration={500} className="list">Projects</Link>
    </div>
    <button className="Menubtn" onClick={() =>{
       document.getElementById('contactpage').scrollIntoView({behavior:'smooth'});
    }}>
        <img src={contact} alt="" className="Image" />Contact Me</button>
   </nav>
  )
}

export default Navbar;