import React, { useState } from 'react'; 
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'; 
import '../styles/Login.css'; 

const Login = () => { 
const [username,setUsername]= useState('');
const [password,setPassword]= useState(''); 
const [validate,setValidate]= useState(''); 

const navigate= useNavigate(); 
 
const sendLogin = async () => {
  try {
    const response= await fetch ('http://localhost:5000/api/login', {
        method: 'POST', 
        headers: { 'Content-Type': 'application/json'}, 
        body: JSON.stringify({username,password}) 
     }); 
     
     const result= await response.json(); 
     if (response.ok) { 
      setValidate(result.message); 
      navigate('/homepage'); 
     }  
     else { 
      setValidate(result.error); 
     }
  } 

  catch (error) {
   console.log("failed to send login data");
  } 
} 

function handleLogin(e) { 
   
    e.preventDefault(); 
     setValidate(''); 
     sendLogin(); 
} 
  return (  
    <>
      <form className="login" onSubmit={handleLogin} > 
        <h1 className="word">Login</h1> 

        <div className="container">
          <div className="user">
            <label>Username</label>
            <input
              type="text"
              className="value"
              placeholder="Enter username" 
              value={username}
              onChange={(e)=> setUsername(e.target.value)}
            />
          </div> 

          <div className="user">
            <label>Password</label>
            <input
              type="password" 
              className="value"
              placeholder="Enter password"
              value={password} 
              onChange={(e)=> setPassword(e.target.value)} 
            />
          </div>

          <button type="submit" className="button">Login</button>

          {validate && <p className="error">{validate}</p>} 

          <p> Forgot Password? <Link to="/signup"> Reset Password </Link> </p>
        </div>
      </form> 
    </> 
  );
};

export default Login; 
