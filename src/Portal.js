import React from 'react';
import './Portal.css';
import { useLocation } from 'react-router-dom';

const Portal = ({ onClick }) => {
  const location = useLocation();
  const { userType } = location.state || {};

  const contentMap = {
    Basic: {
      title: 'Trainer Kit Mini',
      cardContent: `
        This basic trainer kit is designed for beginners to explore essential sensors 
        and actuators. It provides an easy-to-use platform for understanding fundamental 
        electronics and data collection.
      `,
    },
    Intermediate: {
      title: 'Trainer Kit V1',
      cardContent: `
        The intermediate trainer kit introduces additional complexity, enabling students 
        to work with more advanced sensors and actuators. Perfect for learners ready to 
        deepen their technical knowledge.
      `,
    },
    Advanced: {
      title: 'Trainer Kit V2',
      cardContent: `
        This advanced trainer kit is an all-encompassing solution for mastering sophisticated 
        sensor technologies and actuator integration. Ideal for advanced learners and professionals.
      `,
    },
  };

  const { title, cardContent } = contentMap[userType] || {};

  return (
    <div className="portal-container">
      <div className="portal-content">
        <h1 className="portal-title">{title}</h1>
        <p className="portal-subtitle">
          "View the sensor and actuator data with ease in our All-in-One Learning Platform"
        </p>
        <div className="portal-floating-card">
          <p className="portal-card-content">{cardContent}</p>
        </div>

        <div className="portal-button-container">
          <button onClick={onClick} className="portal-button primary">DASHBOARD</button>
          <button className="portal-button secondary">MANUAL</button>
        </div>

        
      </div>
    </div>
  );
};

export default Portal;
