import React, { useRef, useEffect } from 'react'; 
import { Link } from 'react-router-dom';
import Chart from 'chart.js/auto';

const Statistics = () => { 
  const chartRef = useRef(null);
  const chartRef2 = useRef(null); 

  useEffect(() => { 
    const ctx = chartRef.current.getContext('2d'); 

    const timeChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Tasks Completed'], 
        datasets: [{
          label: 'Tasks',
          data: [25],
          backgroundColor: ['#9279B8'], 
          borderColor: ['#9279B8'],
          borderWidth: 1 
        }]
      },
      options: {
        responsive: true, 
        plugins: {
          legend: {
            display: true,
            labels: { color: '#333' } 
          }
        },
        scales: {
          y: {
            beginAtZero: true,
            ticks: { color: '#333' }
          },
          x: {
            ticks: { color: '#333' }
          }
        }
      }
    });

    
    return () => {
      timeChart.destroy();
    };
  }, []); 

  useEffect(() => { 
    const ctx2 = chartRef2.current.getContext('2d'); 

    const tasksChart = new Chart(ctx2, {
      type: 'line',
      data: {
        labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        datasets: [{
          label: 'Hours Spent Learning',
          data: [5, 12, 16, 12, 11, 3, 7],
          backgroundColor: 'rgba(153, 102, 255, 0.2)',
          borderColor: 'rgba(153, 102, 255, 1)',
          borderWidth: 2,
          tension: 0.4 
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            display: true,
            labels: { color: '#333' }
          }
        },
        scales: {
          y: {
            beginAtZero: true,
            ticks: { color: '#333' }
          },
          x: {
            ticks: { color: '#333' } 
          }
        }
      }
    }); 

  
    return () => {
      tasksChart.destroy(); 
    };
  }, []); 

  return ( 
    <>
      <header className="header">
        <h1 className="title">FlowCore</h1>
        <nav className="access">
          <Link to="/tasks" className="button1">Tasks</Link>
          <Link to="/goals" className="button1">Goals</Link>
          <Link to="/faq" className="button1">FAQ</Link>
        </nav>
      </header>

      <div className="stats"> 
        <h1>Statistics</h1>
        <h2>Welcome, Fraz!</h2>
        <canvas ref={chartRef}></canvas> 
        <canvas ref={chartRef2}></canvas> 
      </div>
    </>
  );
};

export default Statistics;  
