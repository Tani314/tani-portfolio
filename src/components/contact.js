import React from "react";
import emailjs from "emailjs-com";
import LinkedIn from "../assets/LinkedIn.png";
import email from "../assets/email.png";
import github from "../assets/github.png";

import "../styles/contact.css";
const Contact = props => {
  function sendEmail(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_t88lyfk",
        "template_rTlM77lf",
        e.target,
        "user_9ByIUdluMXbyVpzgkRLLA"
      )
      .then(
        result => {
          console.log(result.text);
        },
        error => {
          console.log(error.text);
        }
      );
  }

  return (
    <div id="contact">
      <div className="page">
        <div class="triangle-up"></div>
        <div className="contactTitle">Contact</div>
        <hr className="contactHr" />
        <div className="line">Have any question or want to work with me?</div>

        <div className="formdesign">
          <form onSubmit={sendEmail}>
            <input placeholder="Name" type="text" name="name" required />

            <input placeholder="Email" type="email" name="email" required />

            <textarea placeholder="Your Message" type="text" name="message" />

            <input type="submit" value="Send" />
          </form>
        </div>

        <div className="contact1">
          <a href="https://www.linkedin.com/in/tani314/">
            <img src={LinkedIn} width="60" height="60" alt="LinkedIn" />
          </a>
          <a href="https://github.com/Tani314">
            <img src={github} width="60" height="60" alt="github" />
          </a>
          <a href="mailto: tanitabassum299@gmail.com">
            <img src={email} width="60" height="60" alt="email" />
          </a>
        </div>
        <div className="footer">
          Nuzhat Tabassum Tani &#169;{new Date().getFullYear()}
        </div>
      </div>
    </div>
  );
};
export default Contact;
