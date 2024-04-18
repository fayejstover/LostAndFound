// ItemList.js

import React from 'react';
import useItems from '../../hooks/useItems'; // Adjust the import path according to your project structure

const ItemList = () => {
  const { items, isLoading, error } = useItems(); // Using the custom hook to get items

  if (isLoading) return <div>Loading...</div>; // Loading state
  if (error) return <div>Error: {error}</div>; // Error state

  // Render the list of items if not loading and no error
  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>{item.name}</li> // Adjust according to the structure of your items
      ))}
    </ul>
  );
};

export default ItemList;
