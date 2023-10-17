// src/App.js
import React, { useState } from 'react';
import Dash from './Dash/Dash';
import List from './List'
import './Sidebar/Sidebar.css';

function App() {
    const [currentPage, setCurrentPage] = useState('home');

    return (
        <div className="sidebar">
            <nav>
                <ul>
                    <li>
                        <a href="#" onClick={() => setCurrentPage('home')}>
                            Dashboard
                        </a>
                    </li>
                    <li>
                        <a href="#" onClick={() => setCurrentPage('about')}>
                            List
                        </a>
                    </li>
                </ul>
            </nav>

            {currentPage === 'home' ? <Dash /> : <List />}
        </div>
    );
}

export default App;
