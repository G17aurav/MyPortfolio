import React from 'react'
import './Home.css';
import 'animate.css';
// import { useState } from 'react';
import Cube from '../assets/cube.png';
import Plus from '../assets/plus.png';
import Circle from '../assets/circle.png';
import Profilu from '../assets/Profilu.png';
import Typewriter from '../components/Typewriter';


const Home = () => {

  const openResume = () => {
    window.open('https://drive.google.com/file/d/1GjUWLis48ZwvL2QqjaDeea6ClUPm5Vkl/view?usp=sharing', '_blank');
  };

  return (
    <div id='home'>
      <div className='hero-section animate__animated animate__fadeInUp'>
        <div className="hero-section-left">
          <div class="hero-section-heading">Hi! I am Gaurav Singh</div>

          <div className="hero-section-heading hero-section-sub-heading">
            I am a<span className="role"><Typewriter text=" Full Stack Developer" delay={120} /></span>
          </div>

          <div className="hero-section-description">
            I’m a full stack developer and here is my portfolio website. Here you’ll
            learn about my journey as a full stack developer.
          </div>

          <button className="btn-pink" id="btn" onClick={openResume}>My Resume</button>



        </div>

        <div className="hero-section-right">
          <div className="absolute icons icon-cube">
            <img src={Cube} alt="" />
          </div>
          <div className="absolute icons icon-circle">
            <img src={Circle} alt="" />
          </div>
          <div className="absolute icons icon-plus">
            <img src={Plus} alt="" />
          </div>
          <div className="user-image">
            <img src={Profilu} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}
export default Home
