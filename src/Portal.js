// FindYourDreamHome.js
import React from 'react';
import './Portal.css';

const Portal = ({ onClick }) => {
  return (
    <div className='container'>
    <div className="home-container">
      <h1 className="home-title">Mini Trainer Kit</h1>
      <p className="home-description">
      Discover your sensors and actuators with ease.
      </p>
      <div className="button-container">
          <button onClick={onClick} className="dashboard-btn">
            Dashboard
          </button>
          <button onClick={onClick} className="manual-btn">
            Manual
          </button>
        </div>
      <div className='portal-image'>
          <img 
            src="/pcb.jpeg"  
            alt="image" 
            className="portal-image"
          />
      </div>
      
        </div>
    </div>
  );
};

export default Portal;