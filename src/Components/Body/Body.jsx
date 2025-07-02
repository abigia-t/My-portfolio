import React from 'react'
import './Body.css';
import Profile_img from '../../assets/Profile_img.jpg';

const Body = () => {
  return (
    <div className='body'>
        <img src={Profile_img} alt="Profile" />
        <h1><span>I'm Abigia Tarekegn,</span> fullstack developer. </h1>
        <p> I'm a passionate full-stack developer from Addis Ababa, ready to bring your ideas to life!</p>
   <div className="body-action">
    <div className="body-connect">Connect with me</div>
    <div className="body-resume">My resume</div>

   </div>
    </div>
  )
}

export default Body