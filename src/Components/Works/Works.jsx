import React from 'react';
import './Works.css'; // Create a separate CSS file for Work styles
import SMS from '../../assets/sms.jpg';
import Ecommerce from '../../assets/E-commerce.jpg';

const Works = () => {
  const works = [
    {
     title: 'E-commerce',
    //   description: 'A brief description of Project One.',
      image: Ecommerce , // Replace with your image URLs
    },
    {
      title: 'School Management System ',
    //   description: 'A brief description of Project Two.',
      image: SMS ,
    },
    {
      title: 'school centric budget tracker',
    //   description: 'A brief description of Project Three.',
      image: 'url_to_image_3.jpg',
    },
    {
      title: 'Book store',
    //   description: 'A brief description of Project Four.',
      image: 'url_to_image_4.jpg',
    },
  ];

  return (
    <div className="work-section">
      <div className="work-title">
        <h1>My Work</h1>
      </div>
      <div className="work-list">
        {works.map((work, index) => (
          <div className="work-item" key={index}>
            <div className="work-image" style={{ backgroundImage: `url(${work.image})` }}></div>
            <h3>{work.title}</h3>
            <p>{work.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Works;