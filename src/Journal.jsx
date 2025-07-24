import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Journal.css';

const Journal = () => { 
    const [date, setDate] = useState(''); 
    const [title, setTitle] = useState('');
    const [write, setWrite] = useState(''); 
    const [array, setArray] = useState([]); 
    const [view,setView]= useState (null); 
    const [message,Setmessage] = useState(); 

    const addJournal = () => { 
        if (write.trim() === '' || date.trim() === '' || title.trim() === '') { 
         Setmessage('Must enter enter all required fields to save the journal'); 
            return; 
        } 

        const journal = { 
            id: Date.now(), 
            nametag: title, 
            input: write, 
            time: date,
        };

        setArray([...array, journal]); 

        setDate(''); 
        setTitle('');
        setWrite('');
        Setmessage('');
    }; 
 
    const renderJournal = (journal) => { 
      setView(journal);
      setDate(journal.time); 
      setTitle(journal.nametag); 
      setWrite(journal.input); 
    } 

    const renderBlank = () => { 
        setView('');
        setDate('');
        setTitle(''); 
        setWrite(''); 
    } 
    
    const deleteJournal = (journalToDelete) => { 
        setArray(prevArray => prevArray.filter(journal => journal.id !== journalToDelete.id));
        if (view && view.id === journalToDelete.id) {
            renderBlank(); 
        } 
        Setmessage(''); 
    }; 

    return ( 
        <div className="journal-app">
            <header className="journal-header">
                <h1 className="journal-logo">FlowCore</h1>
                <button onClick={addJournal} className="editor-save-btn">Save</button>
                <nav className="journal-nav">
                    <Link to="/tasks" className="nav-item">Tasks</Link>
                    <Link to="/goals" className="nav-item">Goals</Link>
                    <Link to="/journal" className="nav-item active">Journal</Link>
                    <Link to="/" className="nav-item">FAQ</Link>
                </nav>
            </header> 

            <div className="journal-content-wrapper">
                <div className="journal-fullscreen">
                    <div className="journal-entries-panel">
                        <div className="entries-header">
                            <h2>Journal Entries</h2> 
                            <button className="new-entry-btn" onClick={() => renderBlank()}>+ New Entry</button> 
                        </div> 
                        <div className="entries-scroll-container"> 
                            {array.map((entry, index) => (  
                                <div key={entry.id} className="entry-card"  onClick={() => renderJournal(entry)}> 
                                    <h3>{entry.nametag}</h3>
                                    <p>{entry.time}</p> 
                                    <button onClick = {() => deleteJournal(entry)}> delete </button> 
                                </div> 
                            ))} 
                        </div> 
                    </div>

                    <div className="journal-editor-panel">
                        <div className="editor-toolbar">
                            <input
                                type="date"
                                className="editor-date" 
                                value={date}
                                onChange={(e) => setDate(e.target.value)}
                            /> 
                             <p> {message} </p> 
                            <input
                                type="text" 
                                value={title} 
                                onChange={(e) => setTitle(e.target.value)}
                                placeholder="Title"
                                className="editor-title-input" 
                            /> 
                            <button onClick={addJournal} className="editor-save-btn">Save</button>
                        </div> 
                        <textarea
                            className="editor-main"
                            placeholder="Start writing your thoughts here..."
                            value={write}
                            onChange={(e) => setWrite(e.target.value)}
                        ></textarea> 
                    </div> 
                </div> 
            </div>
        </div>
    ); 
}; 

export default Journal;