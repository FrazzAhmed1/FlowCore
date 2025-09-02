import React, { useEffect, useState } from 'react'; 
import '../styles/timer.css'; 

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
        <main className="timer-container"> 
            <h2>{name}</h2> 

            {/* Preset options */} 
            <div className="timer-presets">
                <button>15 Min</button> 
                <button>25 Min</button>
                <button>45 Min</button>
            </div>

            <div className="timer-display">
                {timer}
            </div>

            <div className="timer-buttons"> 
                <button onClick={startTimer}>Start</button> 
                <button onClick={pauseTimer}>Pause</button>
                <button onClick={resetTimer}>Reset</button> 
            </div>
        </main> 
    ); 
};

export default Timer; 
