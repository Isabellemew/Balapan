import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BalapanLanding from './BalapanLanding';
import Register from './Register';
import Login from './Login';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BalapanLanding />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;