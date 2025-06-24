import React from 'react';
import './styles/Header.css';
import { FaSearch } from 'react-icons/fa';

const Header = () => {
    return (
        <header className="header">
            <div className="header-content">
                <h1>Fitness Tracker</h1>
                <div className="header-right">
                    <div className="profile-pic">
                        <img alt="Profile" />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;