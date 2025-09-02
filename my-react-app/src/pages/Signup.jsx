import React, { useState } from 'react'; 
import { Link } from 'react-router-dom';
import '../styles/Signup.css'; 

const Signup = () => { 
  const [formData, setFormData] = useState({ 
    name: '', 
    email: '', 
    username: '', 
    password: '', 
  }); 
  
  const [validate, setValidate] = useState(''); 
  
  const sendInfo = async () =>  { 
    try { 
  const response = await fetch('http://localhost:5000/api/register', { 
     method: 'POST', 
     headers: { 'Content-Type': 'application/json'}, 
     body: JSON.stringify(formData) 
  }); 
 
    const result = await response.json(); 
    console.log('Backend response:', result); 
    
    if (response.ok) { 
    setValidate(result.message); 
    
    } 
     else {
      setValidate(result.error); 
     } 
 
} 
    catch (error) { 
    console.log("Error in sending form data to backend!") 
    } 
     
} 
   
  function handleChange(e) {
    const { name, value } = e.target;

    setFormData(prevFormData => ({
      ...prevFormData, 
      [name]: value, 
    })); 
  }
 
  function handleSubmit(e) { 
    e.preventDefault(); 
    sendInfo(); 
   
  } 

  return ( 
    <>
      <form className="login" onSubmit={handleSubmit}>
        <h1 className="word">Sign Up</h1>

        <div className="container">
          <div className="user">
            <label>First Name</label> 
            <input 
              type="text" 
              name="name"
              className="value"
              placeholder="Enter first name"
              value={formData.name} 
              onChange={handleChange} 
            />
          </div> 
 
          <div className="user">
            <label>Email</label> 
            <input
              type="email" 
              name="email"
              className="value" 
              placeholder="Enter email"
              value={formData.email}
              onChange={handleChange} 
            />
          </div>

          <div className="user">
            <label>Username</label>
            <input
              type="text"
              name="username"
              className="value"
              placeholder="Enter username"
              value={formData.username} 
              onChange={handleChange}
            />
          </div>
 
          <div className="user">
            <label>Password</label>
            <input
              type="password"
              name="password"
              className="value" 
              placeholder="Enter password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>

          {validate && <p className="validation-error">{validate}</p>}

          {}

          <button type="submit" className="button">
            Create Account 
          </button> 

          <p>
            Already have an account? <Link to="/login">Login instead</Link>
          </p> 
        </div>
      </form> 
    </> 
  );
  }; 

export default Signup; 