import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BalapanLanding from './BalapanLanding';
import Register from './Register';
import Login from './login';
import Password from './Password';
import Newpass from './Newpass';
import Language from './Language';
import Lesson from './Lesson';
import Profile from './Profile';
import Edit from './Edit';
import Les from './Les';
import Set from './Set';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BalapanLanding />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/password" element={<Password />} />
        <Route path="/newpass" element={<Newpass />} />
        <Route path="/language" element={<Language />} />
        <Route path="/lesson" element={<Lesson />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/edit" element={<Edit />} />
        <Route path="/les" element={<Les />} />
        <Route path="/set" element={<Set />} />
      </Routes>
    </Router>
  );
}

export default App;