import React from 'react'
import './Project.css'
import CardComponent from './CardComponent';
import CardComponent1 from './CardComponent1';
import CardComponent2 from './CardComponent2';
import CardComponent3 from './CardComponent3';

const Projects = () => {
  const ProjectsData = [
    {
      id: 'p1',
      title: 'Study Notion',
      description:'StudyNotion is a fully functional ed-tech platform that enables users to create, consume, and rate educational content. The platform is built using the MERN stack, which includes ReactJS, NodeJS, MongoDB, and ExpressJS. Allows payment methods through Razorpay payment gateway. StudyNotion is a versatile and intuitive ed-tech platform that is designed to provide an immersive learning experience to students and a platform for instructors to showcase their expertise.',
    },
    { 
      id: 'p2', 
      title: 'QuizMania',
      description:'A dynamic online platform using the MERN stack, offering educators the ability to create quizzes effortlessly and students to receive instant feedback. Tailwind CSS and React were leveraged for an intuitive, responsive, and visually appealing frontend. Redefining the assessment experience by streamlining quiz creation, taking, and result delivery.', 
    },
    {
      id: 'p3',
      title: 'Razorpay Frontend Clone',
      description:'Developed a Razorpay frontend clone utilizing Tailwind CSS, demonstrating proficiency in modern CSS frameworks and responsive design. Implemented key features including a dynamic UI, seamless navigation, and interactive elements to closely mimic the original Razorpay interface. Focused on clean, maintainable code and best practices in web development. Enhanced user experience with optimized performance and cross-browser compatibility.',
    },
    {
      id: 'p4',
      title: 'Dev Detective',
      description:'Developed a Dev Detective application using HTML, CSS, and JavaScript, leveraging the GitHub API to search for any user and display relevant information. Implemented a dark and light mode switch for enhanced user experience. This project highlights my ability to create functional, user-friendly web applications with modern design principles and attention to detail.',
    },
  ];

  return (
    <div id='projects' className='project-container'>
      <div className='project-section'>
        <div className='heading'><span className="caps">P</span>rojects</div>
        <div className='project-1'><CardComponent title={ProjectsData[0].title} description={ProjectsData[0].description}/></div>
        <div className='project-2'><CardComponent1 title={ProjectsData[1].title} description={ProjectsData[1].description}/></div>
        <div className='project-3'><CardComponent2 title={ProjectsData[2].title} description={ProjectsData[2].description}/></div>
        <div className='project-4'><CardComponent3 title={ProjectsData[3].title} description={ProjectsData[3].description}/></div>
      </div>

    </div>
  )
}

export default Projects
