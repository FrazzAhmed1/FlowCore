import React from 'react';
import { Link } from 'react-router-dom';
import './Journal.css';

const Journal = () => {
  return (
    <div className="journal-app">
      <header className="journal-header">
        <h1 className="journal-logo">FlowCore</h1>
        <nav className="journal-nav">
          <Link to="/tasks" className="nav-item">Tasks</Link>
          <Link to="/goals" className="nav-item">Goals</Link>
          <Link to="/journal" className="nav-item active">Journal</Link>
          <Link to="/" className="nav-item">FAQ</Link>
        </nav>
      </header>

      <div className="journal-main">
        <div className="journal-sidebar">
          <div className="sidebar-header">
            <h2>Entries</h2>
            <button className="new-entry-btn">+ New</button>
          </div>
          <div className="entries-list">
            <div className="entry-preview active">
              <h3>Today's Reflection</h3>
              <p>June 15, 2023</p>
            </div>
            <div className="entry-preview">
              <h3>Weekly Review</h3>
              <p>June 14, 2023</p>
            </div>
          </div>
        </div> 

        <div className="journal-editor">
          <div className="editor-header">
            <input 
              type="date" 
              className="entry-date" 
              value="2023-06-15" 
            />
            <div className="editor-actions">
              <button className="format-btn">B</button>
              <button className="format-btn">I</button>
              <button className="format-btn">U</button>
              <button className="save-btn">Save</button>
            </div>
          </div>
          <textarea 
            className="journal-textarea" 
            placeholder="Start writing your thoughts here..."
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default Journal; 