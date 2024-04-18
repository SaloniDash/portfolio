import React from 'react';
import './intro.css';
import Saloni1 from '../../Assets/Saloni1.jpg';
import btnimg from '../../Assets/hire.png';
import { Link } from 'react-scroll';


const Intro = () => {
  return (
    <section id="intro">
     <div className="content">
        <div className="hello">Hello,</div>
        <div className="text">Myself <div className="Name">Saloni</div> <br/> web developer</div>
        <p className="para">I am a Passionate frontend developer skilled in <br/>crafting intuitive user interfaces,
        and engaging digital experiences.</p>
        <Link><button className="btn"><img src={btnimg} alt="hire" className="btnImg"/>Hire Me</button></Link>
    </div>
     <img src={Saloni1} alt="profile" className="saloni1"/>
    </section>

  )
}

export default Intro;