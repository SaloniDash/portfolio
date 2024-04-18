import React from 'react';
import './project.css';
import payment from "../../Assets/payment.png";
import Twitt from "../../Assets/Twitt.jpg";
import medical from "../../Assets/medical.jpg";
import todo from "../../Assets/todo.jpg";

const Project = () => {
  return (
    <section id="project">
        <h1>My Projects</h1>
        <div className="container1">
        <div className="row1">
          <div className="col1">
            <div className="card1">
              <div className="inner1">
                <div className="front1">
                  <img src={payment} alt="" className="skillimg1" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        <div className="row1">
          <div className="col1">
            <div className="card1">
              <div className="inner1">
                <div className="front1">
                  <img src={Twitt} alt="" className="skillimg1" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row1">
          <div className="col1">
            <div className="card1">
              <div className="inner1">
                <div className="front1">
                  <img src={medical} alt="" className="skillimg1" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row1">
          <div className="col1">
            <div className="card1">
              <div className="inner1">
                <div className="front1">
                  <img src={todo} alt="" className="skillimg1" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Project;