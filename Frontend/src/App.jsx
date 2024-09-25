import './App.css';
import { Routes, Route } from 'react-router-dom';
import Firstpagecontent from './Pages/LandingPage/FirstPage.jsx'; 
import Login from './Pages/LoginPage/login.jsx';
import Signup from './Pages/SignUppage/signup.jsx';
import Dashboard from './Pages/dashboard/dashboard.jsx';
import React, { useEffect, useState } from "react";



const App=()=> {
  const [data, setData] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/");
        const jsonData = await response.json();
        setData(jsonData.message);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

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
