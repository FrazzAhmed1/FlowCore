import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import HomePage from './HomePage.jsx';
import TaskPage from './TaskPage.jsx'; 
import GoalPage from './GoalPage.jsx'; 
import Statistics from './Statistics.jsx'; 
import KeyPage from './KeyPage.jsx'; 
import Login from './Login.jsx'; 
import Signup from './Signup.jsx';
import Faq from './faq.jsx'; 
import Journal from './Journal.jsx'; 
import './App.css';  

function App() { 
  const [count, setCount] = useState(0); 

  return (  
    <Router> 
      <Routes> 
        <Route path="/" element={<KeyPage />} />
        <Route path="/homepage" element={<HomePage/>}/> 
        <Route path="/tasks" element={<TaskPage />} />
        <Route path="/goals" element={<GoalPage />} />
        <Route path="/statistics" element={<Statistics/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/Signup" element={<Signup/>}/>
        <Route path="/faq" element={<Faq/>}/>
        <Route path="/journal" element={<Journal/>}/>
      </Routes> 
    </Router> 
  ); 
}

export default App; 
