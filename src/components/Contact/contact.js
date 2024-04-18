import React from 'react';
import './contact.css';
import instagram from "../../Assets/instagram.png";
import whatsapp from "../../Assets/whatsapp.png";
import twitter from "../../Assets/twitter.png";
import linkedin from "../../Assets/linkedin.webp";


const Contact = () => {
  return (
    <section id="contactpage">
        <h1 className='ctitle'>Contact Me</h1>
        {/* <span className="cdesk"></span> */}
        <form className="cform">
            <input type="text" className="name" placeholder='Your Name'></input>
            <input type="email" className="email" placeholder='Your Email'></input>
            <textarea className='msg' name="message" rows="5" placeholder='your Message'></textarea>
            <button type='submit'value='Send' className="submitbtn">Submit</button>
            <div className="links">
              <img src={instagram} alt="facebook" className="link"/>
              <img src={whatsapp} alt="whatsapp" className="link"/>
              <img src={twitter} alt="twitter" className="link"/>
              <img src={linkedin} alt="linkedin" className="link"/>

            </div>
        </form>
    </section>
  )
}

export default Contact