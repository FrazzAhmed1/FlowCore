import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => { 
    return ( 
        <>          
<form class="login"> 
    <h1 className="word"> Login </h1> 

    <div className="container"> 

    <div className="user">
    <label> Username</label>
    <input type="text" class="value" placeholder="Enter username" /> 
    </div>

    <div className="user">
    <label>Password</label>
    <input type="password" className="value" placeholder="Enter password" />
    </div> 
    
    <button className="button"> Login </button>

    <p> Forgot Password?</p> 

    </div> 
 </form>
  </>
    ); 
};

export default Login;  
