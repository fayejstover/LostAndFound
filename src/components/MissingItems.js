import React from 'react';

// Mock data for missing items
const missingItemsData = [
  { id: 1, name: 'Wallet', time: '2 hrs', user: 'Alex' },
  { id: 2, name: 'Keys', time: '1 day', user: 'Jordan' },
  // ... other missing items
];

function MissingItems() {
  return (
    <section className="missing-items">
      <h2>MISSING ITEMS</h2>
      <ul>
        {missingItemsData.map((item) => (
          <li key={item.id} className="missing-item">
            <span className="item-name">{item.name}</span>
            <span className="item-time">{item.time}</span>
            <button className="item-contact">CONTACT</button>
            <button className="item-dismiss">DISMISS</button>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default MissingItems;
