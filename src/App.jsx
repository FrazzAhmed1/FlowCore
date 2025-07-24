import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage.jsx'; 
import Statistics from './Statistics.jsx';
import KeyPage from './KeyPage.jsx';
import Login from './Login.jsx';
import Signup from './Signup.jsx';
import Faq from './faq.jsx';
import Journal from './Journal.jsx'; 
import ProductivityList from './ProductivityList.jsx'; 
import './App.css';

function App() { 

  return (
    <Router>
      <Routes>
        <Route path="/" element={<KeyPage />} />
        <Route path="/homepage" element={<HomePage />} />

        <Route
          path="/goals"
          element={
            <ProductivityList 
              pageTitle="Goals"
              inputPlaceholder="What goal do you want to achieve?"
              addButtonText="Add Goal"
              entityType="Goal"
              defaultPriority="middle"
            />
          }
        />

        <Route  
          path="/tasks"
          element={ 
            <ProductivityList
              pageTitle="Tasks"
              inputPlaceholder="What tasks do you want to complete?"
              addButtonText="Add Task"
              entityType="Task"
              defaultPriority="low"
            />
          }
        />

        <Route path="/statistics" element={<Statistics />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/journal" element={<Journal />} />
      </Routes>
    </Router>
  );
}

export default App;