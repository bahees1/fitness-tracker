import React from 'react';
import './styles/CompletedActivityCards.css';
import getIconByName from '../utils/getIconByName';

const CompletedActivityCards = ({ completedActivities }) => {
    return (
        <div className='activity-cards'>
            {completedActivities.map((completedActivity, key) => (
                <div className='activity-card' key={key}>
                    <div className='activity-header'>
                        <div className='activity-icon'>{getIconByName(completedActivity.icon)}</div>
                        <div className='activity-name'>{completedActivity.name}</div>
                    </div>
                    <div className='activity-info'>
                        <div className='progress-header'>
                            <span className='progress-label'>Progress</span>
                            <span className='progress-percent'>{completedActivity.progress}%</span>
                        </div>
                        <div className='progress-bar'>
                            <div className='progress' style={{ width: `${completedActivity.progress}%`}}></div>
                        </div>
                        <div className='current-progress'>
                            <span>{completedActivity.current}/{completedActivity.goal} Hrs</span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )


};

export default CompletedActivityCards;