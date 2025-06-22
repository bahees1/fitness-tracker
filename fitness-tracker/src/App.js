import React, { useState } from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import ActivityCards from './components/ActivityCard';
import Overview from './components/Overview';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { FaWalking, FaRunning, FaDumbbell} from 'react-icons/fa';

function App() {
  const [activities, setActivities] = useState([
      { name: "Walking", progress: 45, goal: "10km / week", current: "4.5/10 km", icon: <FaWalking />},
      { name: "Running", progress: 75, goal: "20km / week", current: "15/20 km", icon: <FaRunning />},
      { name: "Workouts", progress: 25, goal: "4x / week", current: "1/4 times", icon: <FaDumbbell />},

  ]);




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
              }/>

            {/* Edit Activity Card Page*/}
            <Route 
              path='/edit-activity' 
              element={
                <EditActivityCards 
                  activities={activities}
                  setActivities={setActivities}
                />} />
          </Routes>
        </div>
      </div>
    </Router>
    
  );
}

export default App;
