import React, { useState } from 'react';
import './styles/EditActivityCards.css';


const EditActivityCards = ({activities, setActivities}) => {
    const [localEdits, setLocalEdits] = useState(() => 
    activities.map(activity => ({ ...activity }))
    );
    

    const handleChange = (index, field, value) => {
        const updated = [...localEdits];
        updated[index][field] = value;
        setLocalEdits(updated);
        
    };
    const handleSave = (index) => {
        const updated = [...activities];
        updated[index] = {...localEdits[index]};
        setActivities(updated);
        alert(`Edit Saved`)
    };

    const handleReset = (index) => {
        const original = activities[index];
        const updated = [...localEdits];
        updated[index] = {...original };
        setLocalEdits(updated);

    };

    const handleRemove = (delIndex) => {
        const original = [...activities]
        const remove = original.filter((activity, index) => index !== delIndex);
        setActivities(remove);
        alert(`Activity Removed`);
    };
    
    const handleAdd = () => {
        const add = [...activities, activities[0]];
        setActivities(add);
        alert(`Activity Added`);
    }
    
    

    return (
        <div className='edit-activity-page'>
            <div className='edit-header'>
                <h2>Edit Activities</h2>
                <button className='new-task-btn' onClick={handleAdd}>New Task</button>
            </div>
            <div className='activity-cards'>
                {localEdits.map((activity, index) => (
                    <div className='activity-card-editable' key={index}>
                        <div className='activity-header'>
                            <div className='activity-icon'>{activity.icon}</div>
                            <div className='activity-name'>{activity.name}</div>
                        </div>
                        <label>
                            Goal
                            <input 
                                type='number'
                                value={activity.goal}
                                onChange={(e) => handleChange(index, 'goal', e.target.value)}
                            />
                        </label>
                        <label>
                            Current
                            <input 
                                type='number'
                                value={activity.current}
                                onChange={(e) => handleChange(index, 'current', e.target.value)}
                                
                            />
                        </label>
                        <div className='edit-buttons'>
                            <button onClick={() => handleSave(index)}>Save</button>
                            <button onClick={() => handleRemove(index)}>Remove</button>
                        </div>

                    </div>
                ))}

            </div>


        </div>
    )


};

export default EditActivityCards;

