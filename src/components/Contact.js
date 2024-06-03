import React from 'react'
import { useState } from 'react';
import './Contact.css';
// import 'animate.css';
import emailjs from '@emailjs/browser';
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Contact = () => {
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const serviceId = 'service_d1emk3l';
    const templateId = 'template_enoxrza';
    const publicKey = 'FMkkWTO9xncVi65-d';

    const templateParams = {
      from_name: firstname,
      from_email: email,
      to_name: 'Gaurav Singh',
      message: message,
    };
    console.log(templateParams);

    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log('Email sent successfully', response);
        setFirstName('');
        setLastName('');
        setEmail('');
        setMessage('');
      })
      .catch((error) => {
        console.log('Error in sending email : ', error);
      })
  }
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
};

  return (
    <div id='contact'>
      <div className='contact-heading'><span className="caps">C</span>ontact Me</div>
      <div className="container1">
        <div className="row header">
          <h1>CONTACT ME &nbsp;</h1>
          <h3>Fill out the form below to be in touch!</h3>
        </div>
        <div class="row body">
          <form onSubmit={handleSubmit} className='emailForm'>
            <ul>

              <li>
                <p className="left">
                  <label for="first_name">first name</label>
                  <input className='field'
                    type="text"
                    value={firstname}
                    placeholder="John"
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </p>
                <p className="pull-right">
                  <label for="last_name">last name</label>
                  <input className='field'
                    type="text"
                    value={lastname}
                    placeholder="Smith"
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </p>
              </li>

              <li>
                <p>
                  <label for="email">email <span className="req">*</span></label>
                  <input className='field'
                    type="email"
                    value={email}
                    placeholder="john.smith@gmail.com"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </p>
              </li>
              <li><div className="divider"></div></li>
              <li>
                <label for="comments">comments</label>
                <textarea cols="46" rows="3"
                  className='field'
                  style={{
                    width: '100%',
                    boxSizing: 'border-box',
                    // Set default cols and rows
                    cols: 46,
                    rows: 3,
                  }}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                >
                </textarea>
              </li>

              <li>
                <button type='submit' className='btn'>Send Email</button>
              </li>

            </ul>
          </form>
        </div>
      </div>
      <div className='footer'>
        <div className='waves'>
          <div className='wave' id='wave1'></div>
          <div className='wave' id='wave2'></div>
          <div className='wave' id='wave3'></div>
          <div className='wave' id='wave4'></div>
        </div>
        <div>
          <div>
            <ul className='social_icon'>
              <li><a href='https://github.com/G17aurav' ><FontAwesomeIcon icon={faGithub} className='item'></FontAwesomeIcon></a></li>
              <li><a href='https://www.linkedin.com/in/gaurav-singh-0b6913258/'><FontAwesomeIcon icon={faLinkedin} className='item'></FontAwesomeIcon></a></li>
              <li><a href='https://www.instagram.com/gaurav_.0.9?igsh=MTc0Nnlnd3RpOGU3NQ=='><FontAwesomeIcon icon={faInstagram} className='item'></FontAwesomeIcon></a></li>
              <li><a href='mailto:gauravlucifer20@gmail.com'><FontAwesomeIcon icon={faEnvelope} className='exception'></FontAwesomeIcon></a></li>
            </ul>
          </div>
          <div className='footer-navbar'>
              <div><a href="#home" onClick={() => scrollToSection('home')}>Home</a></div>
              <div><a href="#about" onClick={() => scrollToSection('about')}>About</a></div>
              <div><a href="#projects" onClick={() => scrollToSection('projects')}>Projects</a></div>
              <div><a href="#contact" onClick={() => scrollToSection('contact')}>Contact</a></div>
          </div>
        </div>


      </div>

    </div>
  )
}

export default Contact
