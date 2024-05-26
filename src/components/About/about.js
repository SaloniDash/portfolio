import React from 'react'
import './about.css';
import salu from "../../Assets/salu.jpg";

const about = () => {
  return (
      <section id="about">
        <div className="content1">
        <div className="text1"> About Me</div>
        <p className="para1">My name is Saloni Dash,from Jajpur, Odisha.I am a computer sci-<br/>ence student at OUTR,BBSR.My aggregate CGPA is 9.19.
        Experienced in programming languages like C++ and Python, I thrive on<br/>
        challenge and seek to innovate through technology.My core
        skills is based on HTML,CSS & JavaScript.I possess strong communi-<br/>cation,problem-solving,and teamwork skills,crucial
        for effective collaboration in software development projects.</p>
        </div>
        <img src={salu} alt="profile" className="Salu"/>
      </section>
  )
}

export default about;