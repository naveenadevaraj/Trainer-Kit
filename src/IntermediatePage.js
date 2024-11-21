import React from 'react';
import { useNavigate } from 'react-router-dom';
import './page.css'

const IntermediatePage = () => {
  const navigate = useNavigate();

  return (
    <div className="user-page intermediate-page">
      <div className="page-content">
        <h1>Intermediate User Dashboard</h1>
        <p>Welcome to the Intermediate Level Access</p>
        <button 
          onClick={() => navigate('/')} 
          className="logout-button"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default IntermediatePage;