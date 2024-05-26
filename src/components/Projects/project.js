import React from "react";
import "./project.css";
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
            <img src={payment} alt="" className="skillimg1" />
          </div>
          <div className="text-overlay">
            <h2>PAYMENT GATEWAY</h2>
            <p>Crafted empathetic payment platform with HTML, CSS, and JavaScript, linking to Razorpay. Enabled secure online transactions, aiding marginalized communities, showcasing tech skills, and social responsibility.</p>
          </div>
        </div>
      <div className="row1">
        <div className="col1">
          <img src={Twitt} alt="" className="skillimg1" />
        </div>
        <div className="text-overlay">
            <h2>CRISISTWITTSYNTH</h2>
            <p>Collaborative creation of this model, bolstering disaster response via tweet analysis, extracting vital insights. Synergized efforts for enhanced crisis management and rapid information extraction.</p>
          </div>
      </div>
      <div className="row1">
        <div className="col1">
          <img src={medical} alt="" className="skillimg1" />
        </div>
        <div className="text-overlay">
            <h2>HEALTHO</h2>
            <p>Teamed up with D-Buggers to create a front-end solution for comprehensive medicine and medical records storage, demonstrating adeptness in front-end development and seamless system integration.</p>
          </div>
      </div>
      <div className="row1">
        <div className="col1">
          <img src={todo} alt="" className="skillimg1" />
        </div>
        <div className="text-overlay">
            <h2>TODO-LIST</h2>
            <p>Crafted a responsive to-do list using HTML, CSS, and JavaScript, boosting organizational efficiency with dynamic features and interactive design, fostering seamless task management and user engagement.</p>
          </div>
      </div>
      </div>
    </section>
  );
};

export default Project;
