import React from 'react';
import './CardComponent.css';
import img from '../assets/Project2.png'
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const CardComponent1 = (props) => {
    const title = props.title;
    const description = props.description;
    return (
        <div className="container">
            <div className="Serial-No-1">02</div>
            <div className="card">
                <div className="image">
                    <img src={img} alt="Card" />
                </div>
                <div className="content">
                    <h1 className='sub-heading'>{title} <li><a href='https://github.com/G17aurav/QuizMania.git' ><FontAwesomeIcon icon={faGithub} className='item'></FontAwesomeIcon></a></li></h1>
                    <p>{description}</p>
                    
                </div>
            </div>
        </div>
    );
}

export default CardComponent1;
