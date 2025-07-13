import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Signup.css';

const Signup = () => {
  const [formData, setFormData] = useState({
    naming: '',
    email: '',
    uname: '',
    password: '', 
  }); 

  const [validate, setValidate] = useState(''); 
 
  function validEmpty() { 
    if (!formData.naming || !formData.email || !formData.uname || !formData.password) {
      setValidate("All fields must be filled in");
      return false; 
    } else {
      setValidate(''); 
      return true; 
    } 
  } 
 
  function validPassword () {
    if (formData.password.length>9)  { 
       setValidate("Password must be less than 9 letters"); 
       return false;
    }
       else {
        return true;
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
    if (validEmpty() && validPassword()) {
      console.log(formData);
      
    }
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
              name="naming"
              className="value"
              placeholder="Enter first name"
              value={formData.naming}
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
              name="uname"
              className="value"
              placeholder="Enter username"
              value={formData.uname}
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
