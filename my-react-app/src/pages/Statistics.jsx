import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Chart from 'chart.js/auto';
import Header from '../components/Header';
import '../styles/Statistics.css';

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
          backgroundColor: '#9279B8',
          borderColor: '#7E5A9B',
          borderWidth: 2,
          borderRadius: 6
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false } },
        scales: {
          y: { beginAtZero: true, grid: { color: 'rgba(0,0,0,0.05)' } },
          x: { grid: { display: false } }
        }
      }
    });

    return () => timeChart.destroy();
  }, []);

  useEffect(() => {
    const ctx2 = chartRef2.current.getContext('2d');
    const tasksChart = new Chart(ctx2, {
      type: 'line',
      data: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [{
          label: 'Hours Spent Learning',
          data: [5, 12, 16, 12, 11, 3, 7],
          backgroundColor: 'rgba(146, 121, 184, 0.2)',
          borderColor: '#9279B8',
          borderWidth: 3,
          tension: 0.3,
          fill: true,
          pointBackgroundColor: '#fff',
          pointBorderColor: '#9279B8',
          pointBorderWidth: 2,
          pointRadius: 5
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false } },
        scales: {
          y: { beginAtZero: true, grid: { color: 'rgba(0,0,0,0.05)' } },
          x: { grid: { display: false } }
        }
      }
    });

    return () => tasksChart.destroy();
  }, []); 

  return (
    <>
      <Header />
      <div className="stats-container">
        <div className="stats">
          <h1>Statistics</h1>
          <h2>Welcome, Fraz!</h2>
          <div className="chart-row">
            <div className="chart-wrapper">
              <canvas ref={chartRef}></canvas>
            </div>
            <div className="chart-wrapper">
              <canvas ref={chartRef2}></canvas>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Statistics; 
