import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simple authentication logic
    switch(username.toLowerCase()) {
      case 'basic':
        if (password === 'basic123') {
          navigate('/basic');
          return;
        }
        break;
      case 'intermediate':
        if (password === 'inter123') {
          navigate('/intermediate');
          return;
        }
        break;
      case 'advanced':
        if (password === 'advanced123') {
          navigate('/advanced');
          return;
        }
        break;
      default:
        // Show error message
        alert('Invalid username or password');
    }
  };

  return (
    <div className="login-container">
      <video 
        autoPlay 
        loop 
        muted 
        playsInline
        className="background-video"
      >
        <source src="/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      <div className="login-wrapper">
        <div className="image-container">
          <img 
            src="/image.png"  
            alt="Login Illustration" 
            className="login-image"
          />
        </div>
        
        <div className="login-box">
          <form onSubmit={handleSubmit} className="login-form">
            <h2 className="login-title">Login</h2>
            
            <div className="input-container">
              <div className="input-group left-aligned">
                <label htmlFor="username" className="input-label">Username</label>
                <input
                  type="text"
                  id="username"
                  className="input-field"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                  placeholder="Enter your username"
                />
              </div>
              
              <div className="input-group left-aligned">
                <label htmlFor="password" className="input-label">Password</label>
                <input
                  type="password"
                  id="password"
                  className="input-field"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  placeholder="Enter your password"
                />
              </div>
            </div>
            
            <div className="button-container">
              <button type="submit" className="login-button">
                Sign In
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;