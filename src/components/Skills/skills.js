import React from "react";
import "./skills.css";
import machine from "../../Assets/machine.jpg";
import web from "../../Assets/web.jpg";
import front from "../../Assets/front.jpg";
import prog from "../../Assets/prog.jpg";

const Skills = () => {
  return (
    <section id="skills">
        <h1>My Skills</h1>
        <div className="container1">
        <div className="row">
          <div className="col">
            <div className="card">
              <div className="inner">
                <div className="front">
                  <img src={machine} alt="" className="skillimg" />
                </div>
                <div className="back">
                  <h2>AI/ML</h2>
                  <h5>Proficient in developing <br/> machine learning models<br/> using libraries such as <br/> TensorFlow, Matplotlib<br/> Numpy and Pandas.</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="card">
              <div className="inner">
                <div className="front">
                  <img src={prog} alt="" className="skillimg" />
                </div>
                <div className="back">
                  <h2>CPP</h2>
                  <h5>Proficient in C++: <br/>algorithms, data structures,<br/>efficient code implementation.</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="card">
              <div className="inner">
                <div className="front">
                  <img src={front} alt="" className="skillimg" />
                </div>
                <div className="back">
                  <h2>WEB DEV.</h2>
                  <h5>Familiar <br/> HTML5, CSS3, and JavaScript, ensuring cross-browser compatibility and responsive design principles.</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="card">
              <div className="inner">
                <div className="front">
                  <img src={web} alt="" className="skillimg" />
                </div>
                <div className="back">hii saloni </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="skillbtn">See More</div>
    </section>
  );
};

export default Skills;
