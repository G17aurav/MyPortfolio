import React, { useState } from 'react';
import './Navbar.css';
import LOGO from '../assets/LogoName.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faHome,
    faUser,
    faEnvelope,
    faFile,
    faBars,
} from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    const [showVerticalMenu, setShowVerticalMenu] = useState(false);

    const toggleVerticalMenu = () => {
        setShowVerticalMenu(!showVerticalMenu);
    };

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
            setShowVerticalMenu(false); // Close the vertical menu after clicking on a section
        }
    };

    return (
        <div className='wrapper2'>
            <div className='logo-container'>
                <div className='logo-image'><img src={LOGO} width='30px' height='30px' alt='Logo' /></div>
                <div className='logo-text'>aurav Singh</div>
            </div>
            <div className='menu-items'>
                <div><a href="#home" onClick={() => scrollToSection('home')}><div><FontAwesomeIcon icon={faHome} className='icons'/></div><div className='icon-text'>Home</div></a></div>
                <div><a href="#about" onClick={() => scrollToSection('about')}><div><FontAwesomeIcon icon={faUser} className='icons'/></div><div className='icon-text'>About</div></a></div>
                <div><a href="#projects" onClick={() => scrollToSection('projects')}><div><FontAwesomeIcon icon={faFile} className='icons'/></div><div className='icon-text'>Projects</div></a></div>
                <div><a href="#contact" onClick={() => scrollToSection('contact')}><div><FontAwesomeIcon icon={faEnvelope} className='icons'/></div></a><div className='icon-text'>Contact</div></div>
            </div>
            <div className='vertical-menu' style={{ display: showVerticalMenu ? 'block' : 'none' }}>
                <div><a href="#home"  onClick={() => scrollToSection('home')}>Home</a></div>
                <div><a href="#about" onClick={() => scrollToSection('about')}>About</a></div>
                <div><a href="#projects" onClick={() => scrollToSection('projects')}>Projects</a></div>
                <div><a href="#contact" onClick={() => scrollToSection('contact')}>Contact</a></div>
            </div>
            <button className='hamburger-icon' onClick={toggleVerticalMenu}><FontAwesomeIcon icon={faBars}/></button>
        </div>
    );
};

export default Navbar;
