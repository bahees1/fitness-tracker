import logo from './logo.svg';
import './App.css';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import ActivityCards from './components/ActivityCard';
import Overview from './components/Overview';

function App() {
  return (
    <div className="App">
        <Sidebar />
        <div className='main-content'>
          <Header />
          <Overview />
          <ActivityCards />

        </div>
    </div>
  );
}

export default App;
