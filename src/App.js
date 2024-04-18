// App.js
import React from 'react';
import './App.css';
import Dashboard from './components/Dashboard';
import ItemList from './components/ItemList/ItemList';
import MissingItems from './components/MissingItems';
import Notifications from './components/Notifications';
import backgroundImage from './assets/images/background.png';

function App() {
  const appStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    width: '100vw',
    minHeight: '100vh',
  };

  return (
    <div style={appStyle}>
      <div className="header">
        <div className="logo">LostAndFound+</div>
        <div className="right-side">
            <div className="search-icon"></div>
          <div className="profile-pic"></div>
        </div>
      </div>
      <div className="main-content">
        <Dashboard />
        <ItemList />
        <MissingItems />
        <Notifications />
      </div>
    </div>
  );

}

export default App;
