import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './tasks.css';

const TaskPage = () => { 
  const [array, setArray] = useState([]); 
  const [input, setInput] = useState(''); 
  const [priority, setPriority] = useState('low'); 
  const [date, setDate] = useState(''); 

  const addTask = () => { 
    if (input.trim() === '') return; 
    const newTask = { 
      text: input, 
      priority: priority, 
      date: date, 
    }; 
    setArray([...array, newTask]); 
    setInput(''); 
    setPriority('low'); 
  };

  const deleteTask = (index) => {
    setArray(array.filter((_, i) => i !== index)); 
  };

  return (
    <div className="task-app-container">
      <header className="app-header">
        <h1 className="app-title">FlowCore</h1>
        <nav className="nav-links">
          <Link to="/tasks" className="nav-button">Tasks</Link>
          <Link to="/goals" className="nav-button">Goals</Link>
          <Link to="/" className="nav-button">FAQ</Link>
        </nav>
      </header>

      <div className="task-management-container">
        <section className="task-input-section">
          <h2 className="section-title">Add New Task</h2>
          <div className="input-group">
            <input
              type="text"
              className="task-input"
              placeholder="What needs to be done?"
              value={input} 
              onChange={(e) => setInput(e.target.value)} 
            />
            <div className="input-controls">
              <select
                value={priority}
                onChange={(e) => setPriority(e.target.value)} 
                className="priority-select" 
              >
                <option value="low">Low Priority</option>
                <option value="middle">Medium Priority</option>
                <option value="high">High Priority</option> 
              </select> 
              <input 
                type="date" 
                value={date} 
                onChange={(e)=> setDate(e.target.value)}
                className="date-select" 
              />
              <button onClick={addTask} className="add-button">+ Add Task</button> 
            </div>
          </div>
        </section>

        <section className="task-list-section">
          <h2 className="section-title">Your Tasks</h2>
          <div className="task-list-header">
            <span className="header-task">Task</span>
            <span className="header-priority">Priority</span>
            <span className="header-date">Due Date</span>
            <span className="header-actions">Actions</span>
          </div>
          <div className="task-list"> 
            {array.map((task, index) => ( 
              <div key={index} className="task-item"> 
                <div className="task-content">
                  <span className="task-text">{task.text}</span>
                  <span className={`task-priority ${task.priority}`}> 
                    {task.priority.charAt(0).toUpperCase() + task.priority.slice(1)}
                  </span>
                  <span className="task-date">{task.date || 'No date'}</span>
                </div>
                <div className="task-actions"> 
                  <button onClick={() => deleteTask(index)} className="delete-button">
                    Delete
                  </button>
                  <button className="update-button">Update</button>
                </div>
              </div> 
            ))}
          </div>
        </section>
      </div>
    </div> 
  );
}; 

export default TaskPage; 