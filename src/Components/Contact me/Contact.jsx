import React from 'react';
import './Contact.css';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'; // Import icons

const Contact = () => {
const MAX_RETRIES = 5;

const onSubmit = async (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  formData.append("access_key", "2788b043-b404-4cff-ae8a-93d4bfc2fcb0");

  const object = Object.fromEntries(formData);
  const json = JSON.stringify(object);

  for (let attempt = 1; attempt <= MAX_RETRIES; attempt++) {
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      });

      if (res.status === 429) {
        // Wait before retrying
        const waitTime = Math.pow(2, attempt) * 1000; // Exponential backoff
        await new Promise(resolve => setTimeout(resolve, waitTime));
        continue; // Retry
      }

      const data = await res.json();
      if (data.success) {
        alert(data.message);
      } else {
        alert("Submission failed: " + data.message);
      }
      return; // Exit after successful submission

    } catch (error) {
      alert("An error occurred: " + error.message);
      return; // Exit on error
    }
  }
};

  return (
    <div  className="contact">
      <div className="contact-title">
        <h1>Get in Touch</h1>
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's Talk</h1>
          <p>
            I’m excited to connect and am currently accepting new projects! If you have an idea, a question, or just want to chat, please don’t hesitate to reach out. I look forward to hearing from you!
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <FaEnvelope size={20} /> <p>abigiatarekegn@gmail.com</p>
            </div>
            <div className="contact-detail">
              <FaPhone size={20} /> <p>+251-98-596-4267 / +251-71-419-8418</p>
            </div>
            <div className="contact-detail">
              <FaMapMarkerAlt size={20} /> <p>AA, Ethiopia</p>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
            <label htmlFor="">Your Name</label>
            <input type="text" placeholder='Enter your name' name='name'/>
            <label htmlFor="">Your Email</label>
            <input type="email" placeholder='Enter your email' name='email'/>
            <label htmlFor="">write your message here!</label>
            <textarea name="message"  rows="8" placeholder='Enter your message'></textarea>
          <button type='submit' className="contact-submit">Submit now</button>

        </form>
      </div>
    </div>
  );
};

export default Contact;