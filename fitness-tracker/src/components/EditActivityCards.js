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
        updated[index] = {...localEdits[index]}
        setActivities(updated);
        alert(`Activity Edits Saved: $(updated[index].name)`)
    };

    const handleReset = (index) => {
        const original = activities[index];
        const updated = [...localEdits]
        updated[index] = {...original };
        setLocalEdits(updated);

    };

    
    

    return (
        <div className='edit-activity-page'>
            <h2>Edit Activities</h2>
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
                                type='text'
                                value={activity.goal}
                                onChange={(e) => handleChange(index, 'goal', e.target.value)}
                            />
                        </label>
                        <label>
                            Current
                            <input 
                                type='text'
                                value={activity.current}
                                onChange={(e) => handleChange(index, 'current', e.target.value)}
                                
                            />
                        </label>
                        <div className='edit-buttons'>
                            <button onClick={() => handleSave(index)}>Save</button>
                            <button onClick={() => handleReset(index)}>Reset</button>
                        </div>

                    </div>
                ))}

            </div>


        </div>
    )


};

export default EditActivityCards;

