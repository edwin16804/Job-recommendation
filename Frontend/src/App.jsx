import './App.css';
import { Routes, Route } from 'react-router-dom';
import Firstpagecontent from './Pages/LandingPage/FirstPage.jsx'; 
import Login from './Pages/LoginPage/login.jsx';
import Signup from './Pages/SignUppage/signup.jsx';
import Dashboard from './Pages/dashboard/dashboard.jsx';
import React, { useEffect, useState } from "react";



const App=()=> {

  return (  
    <div>
      <Routes>
        <Route path="/" element={<Firstpagecontent />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/dashboard" element={<Dashboard />}/>
      </Routes>
    </div>
  );
}

export default App;
