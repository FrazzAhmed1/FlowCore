import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/KeyPage.css';
import Header from '../components/Header'; 

const KeyPage = () => { 
  return ( 
    <div className="keypage-container"> 
      <header className="keypage-header">
        <div className="keypage-logo">
          <span className="logo-gradient">FlowCore</span>
        </div> 
        <nav className="keypage-nav"> 
          <Link to="/login" className="keypage-nav-link hover-effect">Login</Link>
          <Link to="/signup" className="keypage-nav-link hover-effect">Sign Up</Link>
          <Link to="/faq" className="keypage-nav-link hover-effect">FAQ</Link>
          <Link to="/homepage" className="key">Home</Link> 
        </nav> 
      </header> 

      <main className="keypage-main">
        <section className="keypage-hero">
          <div className="hero-content"> 
            <h1 className="keypage-hero-title">
              <span className="title-gradient">Organize.</span>
              <span className="title-gradient">Achieve.</span>
              <span className="title-gradient">Repeat.</span>
            </h1>
            <p className="keypage-hero-description">
              FlowCore is your all-in-one productivity dashboard — manage tasks, track goals, 
              and visualize your progress with beautiful analytics.
            </p>
            <div className="keypage-buttons">
              <Link to="/tasks" className="keypage-btn primary hover-effect">
                Get Started
                <span className="btn-arrow">→</span>
              </Link> 
            </div> 
          </div>
          <div className="hero-image">
            <div className="dashboard-mockup"></div>
          </div>
        </section>

        <section className="features-section">
          <div className="feature-card">
            <div className="feature-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="12" y1="20" x2="12" y2="10"></line>
                <line x1="18" y1="20" x2="18" y2="4"></line>
                <line x1="6" y1="20" x2="6" y2="16"></line>
              </svg>
            </div>
            <h3>Advanced Analytics</h3>
            <p>Track your productivity with detailed charts and insights.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
            </div> 
            <h3>Task Management</h3>
            <p>Organize your workflow with powerful task tools.</p> 
          </div>
        </section> 
      </main>

      <footer className="keypage-footer">
        <div className="footer-content">
          <p>&copy; {new Date().getFullYear()} FlowCore. All rights reserved.</p>
          <div className="footer-links"> 
            <Link to="/privacy" className="footer-link">Privacy Policy</Link>
            <Link to="/terms" className="footer-link">Terms of Service</Link>
            <Link to="/contact" className="footer-link">Contact Us</Link>
          </div>
        </div>
      </footer>
    </div> 
  );
};

export default KeyPage; 