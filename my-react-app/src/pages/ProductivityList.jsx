import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Productivity.css';
import Header from '../components/Header'; 


const ProductivityList = ({pageTitle, inputPlaceholder,addButtonText,entityType,defaultPriority}) => {
  const [array, setArray] = useState([]); 
  const [input, setInput] = useState(''); 
  const [priority, setPriority] = useState(defaultPriority || 'low'); 
  const [date, setDate] = useState('') 
 
  const addItem = () => { 
    if (input.trim() === '') return; 

    const newItem = { 
      text: input, 
      priority: priority, 
      id: Date.now(), 
      date: date, 
    }; 

    setArray([...array, newItem]); 
    setInput('');
    setPriority(defaultPriority || 'low');
    setDate(''); 
  };

  const deleteItem = (idToDelete) => {
    setArray(array.filter((item) => item.id !== idToDelete)); 
  };

  const editItem = (idToEdit) => {
    
  }

  return (
    <div className="task-app-container">
      <Header />

      <div className="task-management-container">
        <section className="task-input-section">
          <h2 className="section-title">Add New {entityType}</h2>
          <div className="input-group"> 
            <input 
              type="text" 
              className="task-input"
              placeholder={inputPlaceholder}
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
              <button onClick={addItem} className="add-button">{addButtonText} </button>
            </div>
          </div>
        </section> 

        <section className="task-list-section">
          <h2 className="section-title">Your {pageTitle}</h2>
          <div className="task-list-header">
            <span className="header-task">{entityType}</span>
            <span className="header-priority">Priority</span>
            <span className="header-date">Target Date</span>
            <span className="header-actions">Actions</span>
          </div>
          <div className="task-list"> 
            {array.map((item) => ( 
              <div key={item.id} className="task-item"> 
                <div className="task-content"> 
                  <span className="task-text">{item.text}</span>
                  <span className={`task-priority ${item.priority}`}>
                    {item.priority.charAt(0).toUpperCase() + item.priority.slice(1)}
                  </span> 
                  <span className="task-date">{item.date || 'No date'}</span> 
                </div>
                <div className="task-actions">
                  <button onClick={() => deleteItem(item.id)} className="delete-button">
                    Delete 
                  </button> 
                  <button className="update-button" onClick={() => editItem(item.id)}>Update</button>
                  <button className="complete-button" onClick={() => deleteItem(item.id)}> Complete</button>
                </div> 
              </div> 
            ))} 
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProductivityList;
