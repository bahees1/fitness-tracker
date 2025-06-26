import React, { useState } from 'react';
import './styles/EditActivityCards.css';
import getIconByName from '../utils/getIconByName';


const EditActivityCards = ({activities, setActivities, completedActivities, setCompletedActivities}) => {
    const [localEdits, setLocalEdits] = useState(() => 
    activities.map(activity => ({ ...activity }))
    );
    

    const handleChange = (key, field, value) => {
        const updated = [...localEdits];
        updated[key][field] = value;
        setLocalEdits(updated);

    };
    const handleSave = (key) => {
        const updated = [...activities];
        updated[key] = {...localEdits[key]};
        setActivities(updated);
        updated[key].progress = Math.floor((updated[key].current / updated[key].goal) * 100);
        alert(`Edit Saved`)
    };

    const handleRemove = (delkey) => {
        const original = [...activities]
        const remove = original.filter((activity, key) => key !== delkey);
        setActivities(remove);
        alert(`Activity Removed`);
    };
    
    const handleAdd = () => {
        const newActivity = {
            key: Date.now(),
            name: "New Activity",
            goal: 0,
            current: 0,
            progress: 0,
            icon: "walking"
        }
        setActivities((prev) => [...prev, newActivity]);
        alert(`Activity Added`);
    };

    const handleComplete = (key) => {
        setCompletedActivities(prev => [...prev, { ...localEdits[key] }]);
        handleRemove(key);
        alert(`Activity Completed`);
        
    };
    
    

    return (
        <div className='edit-activity-page'>
            <div className='edit-header'>
                <h2>Edit Activities</h2>
                <button className='new-task-btn' onClick={handleAdd}>New Task</button>
            </div>
            <div className='activity-cards'>
                {localEdits.map((activity, key) => (
                    <div className='activity-card-editable' key={key}>
                        <div className='activity-header'>
                            <div className='activity-icon'>{getIconByName(activity.icon)}</div>
                            <div className='activity-name'>{activity.name}</div>
                        </div>
                        <label>
                            Goal 
                            <input 
                                type='number'
                                value={activity.goal}
                                placeholder='Enter # of hours'
                                onChange={(e) => handleChange(key, 'goal', e.target.value)}
                            />
                        </label>
                        <label>
                            Current 
                            <input 
                                type='number'
                                value={activity.current}
                                placeholder='Enter # of hours'
                                onChange={(e) => handleChange(key, 'current', e.target.value)}
                                
                            />
                        </label>
                        <div className='edit-buttons'>
                            <button onClick={() => handleSave(key)}>Save</button>
                            <button onClick={() => handleRemove(key)}>Remove</button>
                            <button onClick={() => handleComplete(key)}>Completed</button>
                        </div>

                    </div>
                ))}

            </div>


        </div>
    )


};

export default EditActivityCards;

