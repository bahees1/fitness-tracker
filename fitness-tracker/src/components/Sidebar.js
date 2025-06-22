import React from 'react';
import './styles/Sidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faRunning } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';


function Sidebar() {
  return (
    <div className="sidebar">
      <nav>
        <ul>
            <Link to='/'>
                <li>
                    <FontAwesomeIcon icon={faHome} className="fa-icon" />
                </li>
            </Link>
            <Link to='/edit-activity'>
                <li>
                    <FontAwesomeIcon icon={faRunning} className="fa-icon" />
                </li>
            </Link>
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;