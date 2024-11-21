import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login';
import BasicPage from './BasicPage';
import IntermediatePage from './IntermediatePage';
import AdvancedPage from './AdvancedPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/basic" element={<BasicPage />} />
        <Route path="/intermediate" element={<IntermediatePage />} />
        <Route path="/advanced" element={<AdvancedPage />} />
      </Routes>
    </Router>
  );
}

export default App;