import React from 'react';
import ReactDOM from 'react-dom/client';
import Dash from './components/Dash/Dash';
import App from './components/App';
import AppList from './components/AppList';


const root = ReactDOM.createRoot(document.getElementById('list'));
root.render(
  <div>
    <AppList></AppList>
  </div>
);
