import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './page/Home/Home';
import Login from './page/Login/login';


function App() {
  const [loggedInUser, setLoggedInUser] = useState(null);

  return (
    
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<Login setLoggedInUser={setLoggedInUser} />} />
      <Route path="/home" element={<Home loggedInUser={loggedInUser} />} />
    </Routes>
  );
}

export default App;
