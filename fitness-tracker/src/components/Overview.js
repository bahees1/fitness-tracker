import React, { useState, useEffect } from 'react';
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

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler);

const Overview = () => {
    const [data, setData] = useState({
        labels: [],
        datasets: [
            {
                label: 'Steps',
                data: [],
                backgroundColor: 'rgba(148, 137, 121, 0.2)',
                borderColor: '#948979',
                borderWidth: 2,
                pointBackgroundColor: '#dfd0b8',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#dfd0b8',
                pointHoverBorderColor: '#fff',
                fill: true,
            },
        ],
    });

    useEffect(() => {
        fetch('https://mockapi.io/endpoint')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(apiData => {
                setData({
                    labels: apiData.months,
                    datasets: [
                        {
                            label: 'Steps',
                            data: [],
                            backgroundColor: 'rgba(148, 137, 121, 0.2)',
                            borderColor: '#948979',
                            borderWidth: 2,
                            pointBackgroundColor: '#dfd0b8',
                            pointBorderColor: '#fff',
                            pointHoverBackgroundColor: '#dfd0b8',
                            pointHoverBorderColor: '#fff',
                            fill: true,
                        },
                    ],
                });
            })
            .catch(error => {
                console.error('Fetch error:', error);
                setData({
                    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                    datasets: [
                        {
                            label: 'Steps',
                            data: [3000, 5000, 7000, 9000, 8000, 10000, 12000, 14000, 13000, 15000, 16000, 17000],
                            backgroundColor: 'rgba(57, 62, 70, 0.2)',
                            borderColor: '#948979',
                            borderWidth: 2,
                            pointBackgroundColor: '#222831',
                            pointBorderColor: '#fff',
                            pointHoverBackgroundColor: '#393e46',
                            pointHoverBorderColor: '#fff',
                            fill: true,
                        },
                    ],
                });
            });
    }, []);

    const options = {
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true,
                grid: {
                    color: 'rgba(255, 255, 255, 0.1)',
                },
                ticks: {
                    color: '#fff',
                },
            },
            x: {
                grid: {
                    color: 'rgba(255, 255, 255, 0.1)',
                },
                ticks: {
                    color: '#fff',
                },
            },
        },
        plugins: {
            legend: {
                display: false,
            },
        },
        elements: {
            line: {
                tension: 0.4,
            },
        },
    };

    return (
        <div className="overview">
            <h2>Overview</h2>
            <div className="overview-content">
                <div className="stats">
                    <div className="stat">
                        <h3>Total KMs Walked</h3>
                        <div className="progress-bar">
                            <div className="progress" style={{ width: '75%' }}></div>
                        </div>
                        <div className="details">
                            <span>748 Hr</span>
                            <span>May</span>
                        </div>
                    </div>
                    <div className="stat">
                        <h3>Total KMs Ran</h3>
                        <div className="progress-bar">
                            <div className="progress" style={{ width: '90%' }}></div>
                        </div>
                        <div className="details">
                            <span>9,178 St</span>
                            <span>May</span>
                        </div>
                    </div>
                    <div className="stat">
                        <h3>Total Workout Sessions</h3>
                        <div className="progress-bar">
                            <div className="progress" style={{ width: '95%' }}></div>
                        </div>
                        <div className="details">
                            <span>9,200 St</span>
                            <span>May</span>
                        </div>
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