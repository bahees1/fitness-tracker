import React from 'react';
import { FaWalking, FaRunning, FaDumbbell} from 'react-icons/fa';
import './styles/ActivityCards.css';

const ActivityCards = () => {
    const activities = [
        { name: "Walking", progress: 45, goal: "10km / week", current: "4.5/10 km", icon: <FaWalking />},
        { name: "Running", progress: 75, goal: "20km / week", current: "15/20 km", icon: <FaRunning />},
        { name: "Workouts", progress: 25, goal: "4x / week", current: "1/4 times", icon: <FaDumbbell />},

    ];

    return (
        <div className='activity-cards'>
            {activities.map((activity, index) => (
                <div className='activity-card' key={index}>
                    <div className='activity-header'>
                        <div className='activity-icon'>{activity.icon}</div>
                        <div className='activity-name'>{activity.name}</div>
                    </div>
                    <div className='activity-info'>
                        <div className='progress-header'>
                            <span className='progress-label'>Progress</span>
                            <span className='progress-percent'>{activity.progress}%</span>
                        </div>
                        <div className='progress-bar'>
                            <div className='progress' style={{ width: `${activity.progress}%`}}></div>
                        </div>
                        <div className='current-progress'>
                            <span>{activity.current}</span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );




};

export default ActivityCards;