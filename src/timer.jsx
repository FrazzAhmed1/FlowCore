import React, { useEffect, useState } from 'react';
import './timer.css';

const Timer = ({ name, time, increment }) => {    
    const [timer, setTimer] = useState(increment ? 0 : time); 
    const [isRunning, setIsRunning] = useState(false); 

    const startTimer = () => { 
        setIsRunning(true);   
    }; 

    const pauseTimer = () => { 
        setIsRunning(false); 
    }; 

    const resetTimer = () => { 
        setTimer(increment ? 0 : time); 
        setIsRunning(false); 
    }; 

    useEffect(() => { 
        if (!isRunning) return; 

        const interval = setInterval(() => {
            setTimer(prevTimer => {
                if (!increment && prevTimer <= 0) {
                    clearInterval(interval);
                    setIsRunning(false); 
                    return 0;
                }
                return increment ? prevTimer + 1 : prevTimer - 1; 
            });
        }, 1000); 

        return () => clearInterval(interval);
    }, [isRunning, increment]); 

    return ( 
        <main className="timer"> 
            <h2>{name}</h2> 
            <p>{timer}</p> 
            <div className="play"> 
                <button onClick={startTimer} className="button2">Start</button> 
                <button onClick={pauseTimer} className="button2">Pause</button>
                <button onClick={resetTimer} className="button2">Reset</button>
            </div>
        </main> 
    ); 
};

export default Timer;

