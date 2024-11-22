// src/pages/BasicPage.js
import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import Portal from './Portal'; // Import the Portal component

const BasicPage = () => {
  const navigate = useNavigate(); // Initialize navigate function

  const sensorData = {
    sensors: {
      'LDR': true,
      'PIR': true,
      'IR': false,
      'DHT11': false,
      'ULTRASONIC': false,
      'SOUND SENSOR': false,
      'TOF': false,
      'TOUCH': false,
      'MPU6050 GYRO': false,
      'ROTARY SENSOR': false,
    },
    actuators: {
      'RGB LEDS': true,
    }
  };

  // Function to handle button click and navigate to UserDashboard
  const handleButtonClick = () => {
    navigate('/user-dashboard', { state: { userLevel: 'Advanced', sensorData } }); // Pass sensor data to UserDashboard
  };

  return (
    <div>
      <Portal onClick={handleButtonClick} /> {/* Show the Portal component */}
    </div>
  );
};

export default BasicPage;
