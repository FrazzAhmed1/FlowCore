import React, { useState } from 'react'; 
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [userData, setUserData] = useState('');
  const [password, setPassword] = useState('');
  const [validMessage, setValidMessage] = useState('');

  function handleLogin(e) { 
    e.preventDefault();

    const pattern = /^(?=[A-Z])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{9}$/; 

    if (!userData || !password) {
      setValidMessage("Must enter both fields"); 
      return;
    }

    if (userData.length < 3) { 
      setValidMessage("Username must be at least 3 characters");
      return;
    }

    if (!pattern.test(password)) {
      setValidMessage("Password must be 9 chars, start with uppercase, include 1 special char");
      return;
    }

    setValidMessage('');
    setPassword('');
    setUserData(''); 
     
  } 

  return (
    <>
      <form className="login" onSubmit={handleLogin}>
        <h1 className="word">Login</h1> 

        <div className="container">
          <div className="user">
            <label>Username</label>
            <input
              type="text"
              className="value"
              placeholder="Enter username"
              value={userData}
              onChange={(e) => setUserData(e.target.value)} 
            />
          </div>

          <div className="user">
            <label>Password</label>
            <input
              type="password"
              className="value"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)} 
            />
          </div>

          <button type="submit" className="button">Login</button>

          {validMessage && <p className="error">{validMessage}</p>}

          <p> Forgot Password? <Link to="/signup"> Reset Password </Link> </p>
        </div>
      </form>
    </>
  );
};

export default Login; 
