import React from 'react';
import emailjs from 'emailjs-com';
import LinkedIn from '../assets/LinkedIn.png'
import email from '../assets/email.png'
import github from '../assets/github.png'
import { SectionWrapper } from '../styles/sameStyle';
import{Title,HR} from '../styles/about'
import '../styles/contact.css'
const Contact = (props) => {
  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('gmail', 'template_rTlM77lf', e.target, 'user_9ByIUdluMXbyVpzgkRLLA')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  }

  return(
<SectionWrapper>
      <Title>Contact</Title>
<HR/>
    Have any question or want to work with me?


      <form onSubmit={sendEmail} >

        <input placeholder ='Name' type="text" name= "name" required/>

        <input placeholder ='Email' type = "email" name="email" required/>

        <textarea placeholder="Your Message" type="text" name="message"/>

        <input type="submit" value="Send" />
      </form>
<div className='contact'>
        <a href='https://www.linkedin.com/in/tani314/'>
        <img src={LinkedIn} width="40" height="40"  alt='LinkedIn'/>
        </a>
        <a href='https://github.com/Tani314'>
        <img src={github} width="40" height="40" alt='github'/>
        </a>
        <a href='mailto: tanitabassum299@gmail.com'>
        <img src={email} width="40" height="40" alt='email'/>
        </a>
        </div>
        </SectionWrapper>

  )
}
export default Contact
