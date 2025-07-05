import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';
import './styles/Overview.css';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const Overview = ({ completedActivities }) => {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  const getMonthlyData = (activityType) => {
    const result = Array(12).fill(0);
    completedActivities.forEach((a) => {
      if (a.icon === activityType) {
        const date = new Date(a.timestamp || a.date || Date.now());
        const monthIndex = date.getMonth();
        result[monthIndex] += Number(a.current || 0); 
      }
    });
    return result;
  };

  const walkingData = getMonthlyData('walking');
  const runningData = getMonthlyData('running');
  const workoutData = getMonthlyData('workouts'); 

  const data = {
    labels: months,
    datasets: [
      {
        label: 'Walking (hrs)',
        data: walkingData,
        borderColor: '#f2c57c',
        backgroundColor: 'rgba(242, 197, 124, 0.2)',
        fill: true,
      },
      {
        label: 'Running (hrs)',
        data: runningData,
        borderColor: '#df744a',
        backgroundColor: 'rgba(223, 116, 74, 0.2)',
        fill: true,
      },
      {
        label: 'Workouts (hrs)',
        data: workoutData,
        borderColor: '#6a4c93',
        backgroundColor: 'rgba(106, 76, 147, 0.2)',
        fill: true,
      },
    ],
  };

  const totalWalked = walkingData.reduce((a, b) => a + b, 0);
  const totalRan = runningData.reduce((a, b) => a + b, 0);
  const totalWorkoutHours = workoutData.reduce((a, b) => a + b, 0);

  const options = {
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        ticks: { color: '#fff' },
        grid: { color: 'rgba(255,255,255,0.1)' },
      },
      x: {
        ticks: { color: '#fff' },
        grid: { color: 'rgba(255,255,255,0.1)' },
      },
    },
    plugins: {
      legend: { labels: { color: '#fff' } },
    },
    elements: {
      line: { tension: 0.4 },
    },
  };

  return (
    <div className="overview">
      <h2>Overview</h2>
      <div className="overview-content">
        <div className="stats">
          <div className="stat">
            <h3>Total Hrs Walked</h3>
            <span>{totalWalked.toFixed(1)} Hr</span>
          </div>
          <div className="stat">
            <h3>Total Hrs Ran</h3>
            <span>{totalRan.toFixed(1)} Hr</span>
          </div>
          <div className="stat">
            <h3>Total Workout Hours</h3>
            <span>{totalWorkoutHours.toFixed(1)} Hr</span>
          </div>
        </div>

        <div className="chart">
          <Line data={data} options={options} />
        </div>
      </div>
    </div>
  );
};

export default Overview;
