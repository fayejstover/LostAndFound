import React from 'react';

// Mock data for notifications
const notificationsData = [
  { id: 1, message: 'Item Detected', type: 'Classify' },
  { id: 2, message: 'Item Detected', type: 'Classify' },
  // ... other notifications
];

function Notifications() {
  return (
    <section className="notifications">
      <h2>NOTIFICATIONS</h2>
      <ul>
        {notificationsData.map((notification) => (
          <li key={notification.id} className="notification">
            <span className="notification-message">{notification.message}</span>
            <button className="notification-action">{notification.type}</button>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Notifications;

