import React from 'react';
import { Link, NavLink } from 'react-router-dom'; 
import '../styles/Header.css'; 

const Header = () => { 
    return ( 
        <header className="app-header-main">
            <h1 className="app-title-main">
                <Link to="/homepage" className="logo-link">FlowCore</Link> 
            </h1> 
            <nav className="main-nav">
                <NavLink to="/tasks" className="nav-button-main">Tasks</NavLink>
                <NavLink to="/goals" className="nav-button-main">Goals</NavLink>
                <NavLink to="/journal" className="nav-button-main">Journal</NavLink>
                <NavLink to="/statistics" className="nav-button-main">Statistics</NavLink>
                <NavLink to="/faq" className="nav-button-main">FAQ</NavLink>
                <NavLink to="/login" className="nav-button-main">Login</NavLink>
                <NavLink to="/signup" className="nav-button-main">Sign-Up</NavLink>
            </nav> 
        </header> 
    ); 
}; 

export default Header;