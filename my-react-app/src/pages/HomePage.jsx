import React, { useEffect, useState } from 'react'; 
import { Link } from 'react-router-dom';
import '../styles/HomePage.css';
import Timer from '../components/timer';
import Header from '../components/Header'; 

const HomePage = () => {  
    const [quote, setQuote] = useState('');
    const [author, setAuthor] = useState('');
    const key = import.meta.env.VITE_QUOTE_API_KEY; 

    useEffect(() => { 
        const fetchQuote = async () => { 
            try { 
                const response = await fetch(`https://api.api-ninjas.com/v1/quotes`, {
                    method: 'GET',
                    headers: {
                        'X-Api-Key': key,
                        'Content-Type': 'application/json'
                    } 
                });
                if (!response.ok) throw new Error('Network response was not ok');
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
            <Header />
            <div className="quote">
                <h2>Daily Quote:</h2>
                <p>"{quote}"</p>
                <p>- {author}</p> 
            </div>
            <div className="timers-container">
                <Timer name="Pomodoro Timer" time={25*60} increment={false}/>
                <Timer name="Study Counter" time={0} increment={true}/>
            </div>
        </div> 
    );
};

export default HomePage; 