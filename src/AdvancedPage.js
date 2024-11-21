import React from 'react';
import { useNavigate } from 'react-router-dom';
import './page.css'

const AdvancedPage = () => {
  const navigate = useNavigate();

  return (
    <div className="user-page advanced-page">
      <div className="page-content">
        <h1>Advanced User Dashboard</h1>
        <p>Welcome to the Advanced Level Access</p>
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

export default AdvancedPage;