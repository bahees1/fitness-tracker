import React from 'react';
import './styles/ActivityCard.css';
import getIconByName from '../utils/getIconByName';

const ActivityCards = ({ activities }) => {


    return (
        <div className='activity-cards'>

            {activities.map((activity, key) => (
                <div className='activity-card' key={key}>
                    <div className='activity-header'>
                        <div className='activity-icon'>{getIconByName(activity.icon)}</div>
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
                            <span>{activity.current}/{activity.goal} Hrs</span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );




};

export default ActivityCards;