import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './page/Home/Home';
import Login from './page/Login/login';

function App() {
  
  const initialUser = sessionStorage.getItem('loggedInUser')
    ? JSON.parse(sessionStorage.getItem('loggedInUser'))
    : null;

  const [loggedInUser, setLoggedInUser] = useState(initialUser);

  useEffect(() => {
    sessionStorage.setItem('loggedInUser', JSON.stringify(loggedInUser));
  }, [loggedInUser]);

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<Login setLoggedInUser={setLoggedInUser} />} />
      <Route path="/home" element={<Home loggedInUser={loggedInUser} />} />
    </Routes>
  );
}

export default App;
