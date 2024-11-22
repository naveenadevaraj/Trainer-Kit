// src/pages/UserDashboard.js
import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom'; // Import useLocation and useNavigate
import Live from './Live'; // Import the Live component
import './UserDashboard.css';

const UserDashboard = () => {
  const location = useLocation(); // Access passed state
  const {  sensorData } = location.state || {}; // Retrieve userLevel and sensorData from state
  const navigate = useNavigate(); // Initialize navigate function

  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [dialogType, setDialogType] = useState('');
  const [selectedItem, setSelectedItem] = useState(null);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Apply dark mode class to body
  useEffect(() => {
    document.body.classList.toggle('dark-mode', isDarkMode);
  }, [isDarkMode]);

  // Handle dialog open
  const handleDialogOpen = (type, item) => {
    setDialogType(type);
    setSelectedItem(item);
    setIsDialogOpen(true);
  };

  // Handle dialog close
  const handleDialogClose = () => {
    setIsDialogOpen(false);
    setSelectedItem(null);
  };

  return (
    <div className={`user-dashboard ${isDarkMode ? 'dark-mode' : ''}`}>
      <div className="dashboard-container">
        <div className="dashboard-header">
          <h1>DASHBOARD</h1>
          <div className="header-buttons">
            <button onClick={toggleDarkMode} className="theme-toggle-button">
              {isDarkMode ? '☀️' : '🌙'}
            </button>
            <button onClick={() => navigate('/')} className="logout-button">
              Logout
            </button>
          </div>
        </div>

        {/* Sensors Section */}
        <div className="sensors-actuators-container">
          <div className="sensor-section">
            <h2>SENSORS</h2><br/>
            <table className="status-table">
              <tbody>
                {Object.entries(sensorData.sensors).map(([sensor, status]) => (
                  <tr key={sensor}>
                    <td>{sensor}</td>
                    <td className="status-cell">
                      <div 
                        className={`status-circle ${status ? 'status-active' : 'status-inactive'}`}
                        onClick={() => status && handleDialogOpen('sensor', sensor)}
                      ></div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Actuators Section */}
          <div className="actuator-section">
            <h2>ACTUATORS</h2>
            <table className="status-table">
              <br/>
              <tbody>
                {Object.entries(sensorData.actuators).map(([actuator, status]) => (
                  <tr key={actuator}>
                    <td>{actuator}</td>
                    <td className="status-cell">
                      <div 
                        className={`status-circle ${status ? 'status-active' : 'status-inactive'}`}
                        onClick={() => status && handleDialogOpen('actuator', actuator)}
                      ></div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Dialog Box */}
      {isDialogOpen && (
        <div className="dialog-overlay">
          <div className="dialog-box">
            <button className="close-button" onClick={handleDialogClose}>✖</button>
            <h3>{dialogType === 'sensor' ? 'Sensor Details' : 'Actuator Details'}</h3><br/>
            <p>{selectedItem} is currently active.</p><br/>
            <Live /> {/* Render the Live component inside the dialog */}
          </div>
        </div>
      )}
    </div>
  );
};

export default UserDashboard;
