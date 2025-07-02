import React from 'react'
import './About.css';
import Profile_img from '../../assets/Profile_img.jpg';

const About = () => {
  return (
    <div className='about'>
<div className="about-title">
    <h>About me </h>
</div>
<div className="about-sections">
    <div className="about-left">
        <img src={Profile_img} alt="" />
    </div>
    <div className="about-right">
        <div className="about-para">
            <p>I am Abigia Tarekegn, a dedicated full-stack developer based in Addis Ababa. With a strong foundation in both front-end and back-end technologies, I thrive on creating dynamic web applications that deliver seamless user experiences. My passion for coding drives me to tackle challenges and find innovative solutions.</p>
            {/* <p>I have gained valuable experience in building responsive websites and applications. I am eager to continuously expand my skill set and explore new technologies. I believe in the power of collaboration and am always open to new opportunities.</p> */}

        </div>
        <div className="about-skills">
            <div className="about-skill"><p>React js</p><hr style={{width:"80%"}}/></div>
            <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"60%"}}/></div>
            <div className="about-skill"><p>Node js </p><hr style={{width:"50%"}}/></div>
            <div className="about-skill"><p>PHP</p><hr style={{width:"50%"}}/></div>
            <div className="about-skill"><p>Flutter</p><hr style={{width:"60%"}}/></div>
            <div className="about-skill"><p>Express </p><hr style={{width:"50%"}}/></div>
            <div className="about-skill"><p>Next js</p><hr style={{width:"60%"}}/></div>
            {/* <div className="about-skill"><p>React js</p><hr style={{width:"80%"}}/></div>
            <div className="about-skill"><p>React js</p><hr style={{width:"80%"}}/></div>
            <div className="about-skill"><p>React js</p><hr style={{width:"80%"}}/></div> */}


        </div>
    </div>
</div>
<div className="about-achievements">
    <div className="about-achievement">
        <h1>3+</h1>
        <p>YEARS OF EXPERIENCE</p>
    </div>
    <hr/>
     <div className="about-achievement">
        <h1>6+</h1>
        <p>PROJECTS COMPLETED</p>
    </div>
    <hr/>
     <div className="about-achievement">
        <h1>3+</h1>
        <p>HAPPY CLIENTS</p>
    </div>
</div>
    </div>
  )
}

export default About