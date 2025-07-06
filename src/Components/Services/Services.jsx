import React, { useState } from 'react';
import './Services.css';

const Services = () => {
  const [showMore, setShowMore] = useState({});

  const toggleDescription = (event, service) => {
    event.preventDefault(); // Prevent the default anchor behavior
    setShowMore(prevState => ({
      ...prevState,
      [service]: !prevState[service],
    }));
  };

  const services = [
    {
      title: 'Web Development',
      description: 'Creating responsive and dynamic websites tailored to client needs...',
      extra: [
        'I specialize in modern frameworks like React and Angular.',
        'My websites are optimized for SEO and performance.',
        'I ensure cross-browser compatibility for a seamless experience.',
      ],
    },
    {
      title: 'Backend Development',
      description: 'Building robust server-side applications and APIs for seamless data management...',
      extra: [
        'I use Node.js and Express for efficient server-side logic.',
        'My APIs are RESTful and designed for ease of use.',
        'I implement secure authentication mechanisms.',
      ],
    },
    {
      title: 'Mobile App Development',
      description: 'Developing cross-platform mobile applications that provide a great user experience...',
      extra: [
        'I create apps using Flutter for fast development and performance.',
        'My apps are designed with a user-first approach.',
        'I ensure compatibility across iOS and Android devices.',
      ],
    },
    {
      title: 'UI/UX Design',
      description: 'Crafting intuitive and visually appealing user interfaces to enhance user experiences...',
      extra: [
        'I conduct user research to inform our design decisions.',
        'My designs are responsive and accessible.',
        'I create prototypes to gather feedback before development.',
      ],
    },
  ];

  return (
    <div className="services">
      <div className="services-title">
        <h1>My Services</h1>
      </div>

      <div className="service-list">
        {services.map((service, index) => (
          <div className="service-item" key={index}>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <a href="#" className="read-more" onClick={(e) => toggleDescription(e, service.title)}>
              Read More <span className={`arrow ${showMore[service.title] ? 'rotated' : ''}`}>➔</span>
            </a>
            {showMore[service.title] && (
              <div className="extra-description">
                {service.extra.map((item, i) => (
                  <p key={i}>{item}</p>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;