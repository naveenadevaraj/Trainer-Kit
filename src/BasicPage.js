import React from 'react';
import { useNavigate } from 'react-router-dom';
import './page.css'
const BasicPage = () => {
  const navigate = useNavigate();

  return (
    <div className="user-page basic-page">
      <div className="page-content">
        <h1>Basic User Dashboard</h1>
        <p>Welcome to the Basic Level Access</p>
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

export default BasicPage;