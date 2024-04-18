import React from 'react';

// Assuming you have a component for each section like ItemList, MissingItems, and Notifications
import ItemList from './ItemList/ItemList';
import MissingItems from './MissingItems';
import Notifications from './Notifications';

function Dashboard() {
    return (
        <div className="dashboard">
            <header className="dashboard-header">
                <h1>Good Morning, Faye!</h1>
                <p>Let’s build something great today.</p>
            </header>
            <main className="dashboard-content">
                <ItemList />
                <MissingItems />
                <Notifications />
            </main>
        </div>
    );
}

export default Dashboard;
