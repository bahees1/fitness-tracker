import React, { useState, useEffect } from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import ActivityCards from './components/ActivityCard';
import Overview from './components/Overview';
import EditActivityCards from './components/EditActivityCards';
import CompletedActivityCards from './components/CompletedActivityCards';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  
  const [activities, setActivities] = useState(() => {
    const stored = localStorage.getItem('activities');
    return stored
      ? JSON.parse(stored)
      : [
          { key: 1, name: "Activity", progress: 0, goal: 0, current: 0, icon: "empty" },
          { key: 2, name: "Walking", progress: 45, goal: 10, current: 4.5, icon: "walking" },
          { key: 3, name: "Running", progress: 75, goal: 20, current: 15, icon: "running" },
          { key: 4, name: "Workouts", progress: 25, goal: 4, current: 1, icon: "workouts" },
        ];
  });

  const [completedActivities, setCompletedActivities] = useState(() => {
    const stored = localStorage.getItem('completedActivities');
    return stored ? JSON.parse(stored) : [];
  });


  useEffect(() => {
    localStorage.setItem('activities', JSON.stringify(activities));
  }, [activities]);

  
  useEffect(() => {
    localStorage.setItem('completedActivities', JSON.stringify(completedActivities));
  }, [completedActivities]);

  return (
    <Router>
      <div className="App">
        <Sidebar />
        <div className="main-content">
          <Header />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Overview />
                  <ActivityCards activities={activities} />
                </>
              }
            />
            <Route
              path="/edit-activity"
              element={
                <EditActivityCards
                  activities={activities}
                  setActivities={setActivities}
                  completedActivities={completedActivities}
                  setCompletedActivities={setCompletedActivities}
                />
              }
            />
            <Route
              path="/completed"
              element={
                <CompletedActivityCards completedActivities={completedActivities} />
              }
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
