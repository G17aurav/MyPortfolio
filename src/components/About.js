import React from 'react';
import './About.css';
import Blob from '../stack/blob vector.png';
import HTML from '../stack/HTML.png';
import CSS from '../stack/CSS.png';
import JavaScript from '../stack/Javascript.svg'
import Git from '../stack/Git.svg';
import GitHub from '../stack/Github.svg';
import Reactimage from '../stack/React.png';
import MongoDB from '../stack/MongoDB.svg';
import express from '../stack/Express.png';
import node from '../stack/NodeJs.svg';
import Tailwind from '../stack/Tailwind.png';
import Bootstrap from '../stack/Bootstrap.svg'
import Vercel from '../stack/Vercel.svg'
const About = () => {
  return (
    <div id='about'>
      <div className='wrapper1'>
        <div className='intro-container'>
          <h2 className='intro-heading'>
            <span className='caps'>M</span>e and<br />
            MyTech Stack
          </h2>
          <div className='intro-text'>
            <p>
              Greetings, everyone! I'm Gaurav Singh, a passionate Full Stack Web Developer
              currently in my third year at the Indian Institute of Information Technology,
              Surat (IIIT SURAT). I specialize in Computer Science Engineering and am
              deeply engaged in crafting exceptional websites using the MERN stack.
            </p>
            <p className='second-para'>
              I am actively seeking full stack development opportunities where I can contribute 
              my skills and grow professionally. I'm eager to connect with like-minded professionals, 
              potential collaborators, and industry experts. If you share a passion for technology 
              and innovation, let's connect and explore how we can work together to create impactful 
              digital solutions.
            </p>
          </div>
        </div>
        <div className='skills-container'>
          <img src={Blob} className='blob-style' alt='blob'></img>
          <img src={HTML} className='skills-logo' alt='HTML'></img>
          <img src={CSS} className='skills-logo' alt='CSS'></img>
          <img src={JavaScript} className='skills-logo' alt='Javascript'></img>
          <img src={Git} className='skills-logo' alt='Git'></img>
          <img src={GitHub} className='skills-logo' alt='Github'></img>
          <img src={Reactimage} className='skills-logo' alt='ReactJs'></img>
          <img src={MongoDB} className='skills-logo' alt='Mongo-DB'></img>
          <img src={express} className='skills-logo' alt='Express'></img>
          <img src={Tailwind} className='skills-logo' alt='Tailwind'></img>
          <img src={Bootstrap} className='skills-logo' alt='Bootstrap'></img>
          <img src={Vercel} className='skills-logo' alt='Vercel'></img>
          <img src={node} className='skills-logo' alt='NodeJs'></img>
        </div>
      </div>
    </div>
  )
}

export default About
