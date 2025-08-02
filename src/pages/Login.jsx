import React, { useState } from 'react'; 
import { Link } from 'react-router-dom';
import '../styles/Login.css';

const Login = () => {
const [uname,setUname]= useState();
const [password,setPassword]= useState();
const [validate,setValidate]= useState(); 

function handleLogin(e) { 

    e.preventDefault(); 

    const pattern = /^(?=[A-Z])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{9}$/; 

    if (!password || !uname) { 
      setValidate('Must enter both fields'); 
      return; 
    } 
     if (uname.length<=3) { 
        setValidate('Name must be longer than 3 characters');
        return; 
     }

     
    if (!pattern.test(password)) { 
        setValidate("Password must be 9 chars, start with uppercase, include 1 special char");
        return;
    }
    
     setValidate(''); 

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
              value={uname}
              onChange={(e)=> setUname(e.target.value)}
            />
          </div> 

          <div className="user">
            <label>Password</label>
            <input
              type="password"
              className="value"
              placeholder="Enter password"
              value={password} 
              onChange={(e)=> SetPassword(e.target.value)} 
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
