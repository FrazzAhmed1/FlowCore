import React from 'react';
import { Link } from 'react-router-dom';
import './GoalPage.css';
import './timer.jsx';

const GoalPage = () => {  
    return (
        <> 
                    <header className="header"> 
                        <h1 className="title">FlowCore</h1> 
                        <nav className="access">
                            <Link to="/tasks" className="button1">Tasks</Link>
                            <Link to="/goals" className="button1">Goals</Link> 
                            <Link to="/" className="button1">FAQ</Link> 
                        </nav> 
                    </header> 
        
                    <main className="display"> 
                        <h1 className="title1">My Goals</h1> 
                        <div className="bar"> 
                            <input type="text" className="value" id="task" placeholder="Enter your tasks here" />
                            <button className="add">Add</button> 
                        </div> 
                        <div className="todos"> 
                            <p className="first">
                                Complete Math homework 
                                <button className="remove">Delete</button> 
                                <button className="update">Update</button>
                            </p>
                            <p className="first">
                                45 minute gym session 
                                <button className="remove">Delete</button> 
                                <button className="update">Update</button>
                            </p> 
                            <p className="first">
                                Pick up mom from the store 
                                <button className="remove">Delete</button> 
                                <button className="update">Update</button>
                            </p> 
                        </div> 
                    </main>
                </>
    );
};

export default GoalPage; 