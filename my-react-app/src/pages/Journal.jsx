import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Journal.css';
import Header from '../components/Header'; 

const Journal = () => { 
    const [date, setDate] = useState(''); 
    const [title, setTitle] = useState(''); 
    const [write, setWrite] = useState(''); 
    const [array, setArray] = useState([]); 
    const [view,setView]= useState (null); 
    const [message,setMessage] = useState(); 

    const addJournal = () => { 
        if (write.trim() === '' || date.trim() === '' || title.trim() === '') { 
         setMessage('Must enter enter all required fields to save the journal'); 
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
        setMessage('');
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
        setMessage(''); 
    }; 

    return ( 
        <div className="journal-app">
            <Header /> y
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