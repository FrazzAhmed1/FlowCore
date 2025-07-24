import React, { useEffect,useState } from 'react';
import { Link } from 'react-router-dom'; 
import './HomePage.css';
import Timer from './timer'; 


const HomePage = () => { 

    const [quote, setQuote] = React.useState(''); 
    const [author, setAuthor] = React.useState('');  
 
    const key = '5NGROY6U+kPPOPHarq01ZA==O8nMQCn7ZM8RmhEO'; 
     
    useEffect(() => { 
        
        const fetchQuote = async () => {   
 
            try { 
                const response = await fetch(`https://api.api-ninjas.com/v1/quotes 
`, {
                    method: 'GET',  
                    headers: {
                        'X-Api-Key': key,  
                        'Content-Type': 'application/json' 
                    }
                }); 
                if (!response.ok) {
                    throw new Error('Network response was not ok'); 
                }  
             
                const data = await response.json(); 

                if (data.length > 0) {
                    setQuote(data[0].quote);
                    setAuthor(data[0].author);
                }
            } catch (error) { 
                console.error('Error fetching quote:', error);
                setQuote('Failed to fetch quote');
                setAuthor('Unknown');
            }
        };
        fetchQuote(); 
    }, [key]); 
 
    

    return ( 
        <div className="homepage">  
            <header className="header"> 
                <h1 className="title">FlowCore</h1> 
                <nav className="access"> 
                    <Link to="/tasks" className="button1">Tasks</Link>
                    <Link to="/goals" className="button1">Goals</Link> 
                    <Link to="/" className="button1">FAQ</Link> 
                    <Link to="/" className="button1">Login</Link> 
                    <Link to="/" className="button1">Sign-Up</Link> 
                    <Link to="/statistics" className="button1">Statistics</Link>
                    <Link to="/journal" className="button1">Journal</Link> 
                </nav> 
            </header> 

            <div className="quote">  
                <h2>Daily Quote:</h2> 
                <p>"{quote}"</p> 
                <p>- {author}</p> 
            </div> 

            <Timer name="Pomodoro Timer" time={25*60} increment={false}/> 
            <Timer name="Study Productive Counter" time={0} increment={true}/> 
             
        </div> 
    );
}; 

export default HomePage; 