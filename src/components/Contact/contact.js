import React from "react";
import "./contact.css";
import instagram from "../../Assets/instagram.png";
import whatsapp from "../../Assets/whatsapp.png";
import twitter from "../../Assets/twitter.png";
import linkedin from "../../Assets/linkedin.webp";

const Contact = () => {
  return (
    <section id="contactpage">
      <h1 className="ctitle">Contact Me</h1>
      {/* <span className="cdesk"></span> */}
      <form className="cform">
        <input type="text" className="name" placeholder="Your Name"></input>
        <input type="email" className="email" placeholder="Your Email"></input>
        <textarea
          className="msg"
          name="message"
          rows="5"
          placeholder="your Message"
        ></textarea>
        <button type="submit" value="Send" className="submitbtn">    

          Submit
        </button>
        <div className="links">
          <a
            href="https://wa.me/916371482242"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={whatsapp} alt="whatsapp" className="link" />
          </a>
          <a
            href="https://x.com/SaloniDash"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={twitter} alt="twitter" className="link" />
          </a>
          <a
            href="https://www.linkedin.com/in/salonidash/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedin} alt="linkedin" className="link" />
          </a>
        </div>
      </form>
    </section>
  );
};

export default Contact;
