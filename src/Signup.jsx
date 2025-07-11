import React from 'react';
import { Link } from 'react-router-dom';
import './Signup.css';

const Signup = () => { 
    return (
        <>
        <form className="login">  
    <h1 className="word"> Sign Up </h1>

    <div className="container">

    <div className="user">
    <label> First Name</label> 
    <input type="text" className="value" placeholder="Enter first name" /> 
    </div>

    <div className="user"> 
    <label> Last Name</label>
    <input type="text" className="value" placeholder="Enter last name" /> 
    </div>

    <div className="user">
    <label> Username</label>
    <input type="text" className="value" placeholder="Enter username" /> 
    </div>

    <div className="user">
    <label>Password</label>
    <input type="password" className="value" placeholder="Enter password" />
    </div> 
    
    <button className="button"> Create Account </button>

    <p> Login Instead?</p> 

    </div> 
 </form>
                </>
    );
};

export default Signup; 