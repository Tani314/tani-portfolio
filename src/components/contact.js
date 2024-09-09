import React, { useState } from "react";
import emailjs from "emailjs-com";
import LinkedIn from "../assets/LinkedIn.png";
import email from "../assets/email.png";
import github from "../assets/github.png";
import "../styles/contact.css";

const Contact = () => {
  const [statusMessage, setStatusMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_0rnrnbv",
        "template_rTlM77lf",
        e.target,
        "user_9ByIUdluMXbyVpzgkRLLA"
      )
      .then(
        (result) => {
          console.log("Message sent:", result.text);
          setStatusMessage("Your message has been sent successfully!");
        },
        (error) => {
          console.error("Error sending message:", error.text);
          setStatusMessage("There was an error sending your message. Please try again.");
        }
      );
  };

  return (
    <div id="contact">
      <div className="page">
        <div className="triangle-up"></div>
        <div className="contactTitle">Contact</div>
        <hr className="contactHr" />
        <div className="line">Have any questions or want to work with me?</div>

        <div className="formdesign">
          <form onSubmit={sendEmail}>
            <input placeholder="Name" type="text" name="name" required />
            <input placeholder="Email" type="email" name="email" required />
            <textarea placeholder="Your Message" name="message" required />
            <input type="submit" value="Send" />
          </form>
          {statusMessage && <p className="statusMessage">{statusMessage}</p>}
        </div>

        <div className="contact1">
          <a href="https://www.linkedin.com/in/tani314/" target="_blank" rel="noopener noreferrer">
            <img src={LinkedIn} width="60" height="60" alt="LinkedIn profile" />
          </a>
          <a href="https://github.com/Tani314" target="_blank" rel="noopener noreferrer">
            <img src={github} width="60" height="60" alt="GitHub profile" />
          </a>
          <a href="mailto: tanitabassum299@gmail.com">
            <img src={email} width="60" height="60" alt="Email contact" />
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
