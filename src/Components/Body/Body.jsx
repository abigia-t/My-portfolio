import React from 'react';
import './Body.css';
import Profile_img from '../../assets/Profile_img.jpg';
import Resume from '../../assets/ABIGIA TAREKEGN resume.pdf'; // Adjust the path as necessary

const Body = () => {
  return (
    <div className='body'>
        <img src={Profile_img} alt="Profile" />
        <h1><span>I'm Abigia Tarekegn,</span> fullstack developer.</h1>
        <p> I'm a passionate full-stack developer from Addis Ababa, ready to bring your ideas to life!</p>
        <div className="body-action">
            <div className="body-connect">Connect with me</div>
            <a href={Resume} target="_blank" rel="noopener noreferrer" className="body-resume">
              My resume
            </a>
        </div>
    </div>
  );
}

export default Body;