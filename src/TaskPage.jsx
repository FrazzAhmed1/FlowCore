import React from 'react';
import { Link } from 'react-router-dom';
import './tasks.css';

const TaskPage = () => {   

    const [task, setTask] = React.useState([]); 
    const [text, setText] = React.useState('');
    const [prioirity, setPriority] = React.useState("Low");  

    function handleAddTask() {   
        if (text.trim() !== '')  {
            setTask([...task, text]); 
            setText(''); 
        } 
    } 

    function deleteTask (index) { 
        const newTasks= task.filter((_, i) => i !== index); 
        setTask(newTasks); 
    }

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
                <h1 className="title1">My Tasks</h1> 

                <div className="bar">
                    <input
                        type="text"
                        className="value"
                        placeholder="Enter your tasks here" 
                        value={text} 
                        onChange={(e) => setText(e.target.value)} 
                    /> 
                    <button onClick={handleAddTask} className="add">Add</button> 
                </div> 

                <div className="todos">
                   {task.map((item, index) => ( 
                    <p className="first">
                        {item} 
                        <button onClick={ () => deleteTask (index)} className="remove">Delete</button>
                        <button className="update"> Update</button> 
                    </p> 
                   ))} 
                </div> 
            </main> 
        </> 
    ); 
};

export default TaskPage;  