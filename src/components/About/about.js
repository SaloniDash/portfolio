import React from 'react'
import './about.css';
import salu from "../../Assets/salu.jpg";

const about = () => {
  return (
      <section id="about">
        <div className="content1">
        <div className="text1"> About Me</div>
        <p className="para1">I am Saloni Dash,belongs to Odisha. 
        Experienced in programming<br/> languages like C++ and Python, I thrive on
        challenge and seek<br/> to innovate through technology.My core
        skills is based on HTML,<br/>CSS & JavaScript.I possess strong 
        communication,problem-solving,and teamwork skills,crucial
        for effective collaboration in software development projects.</p>
        </div>
        <img src={salu} alt="profile" className="Salu"/>
      </section>
  )
}

export default about;