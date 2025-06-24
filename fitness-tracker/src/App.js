import React, { useState, useEffect } from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import ActivityCards from './components/ActivityCard';
import Overview from './components/Overview';
import EditActivityCards from './components/EditActivityCards';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { FaWalking, FaRunning, FaDumbbell} from 'react-icons/fa';

function App() {
  const [activities, setActivities] = useState(() => {
    const savedActivities = localStorage.getItem('activities'); 
    return savedActivities ? JSON.parse(savedActivities)  : 
      [
      { name: "Empty", progress: 0, goal: 0, current: 0, icon: <FaWalking />},
      { name: "Walking", progress: 45, goal: 10, current: 4.5, icon: <FaWalking />},
      { name: "Running", progress: 75, goal: 20, current: 15, icon: <FaRunning />},
      { name: "Workouts", progress: 25, goal: 4, current: 1, icon: <FaDumbbell />},
      ]
  });

  useEffect(() => {
    localStorage.setItem('activities', JSON.stringify(activities));

  }, [activities]);




  return (
    <Router>
      <div className="App">
        <Sidebar />
        <div className='main-content'>
          <Header />
          <Routes>
            {/* Main Dashboard*/}
            <Route 
              path='/' 
              element={
                <>
                  <Overview />
                  <ActivityCards activities={activities}/>
                </>
              }
            />

            {/* Edit Activity Card Page*/}
            <Route 
              path='/edit-activity' 
              element={
                <EditActivityCards 
                  activities={activities}
                  setActivities={setActivities}
                />
              } 
            />
            {/* Completed Activity Card Page*/}
            <Route 
              path='/completed' 
              element={
                <EditActivityCards 
                  activities={activities}
                  setActivities={setActivities}
                />
              } 
            />
          </Routes>
        </div>
      </div>
    </Router>
    
  );
}

export default App;
