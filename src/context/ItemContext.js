import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios'; // Make sure axios is installed

// Create the context
const ItemContext = createContext();

// Provider component that wraps your app and makes an ItemContext object available to any child component that calls `useContext(ItemContext)`.
export const ItemProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchItems = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get('/api/items'); // Replace with your actual API endpoint
        setItems(response.data);
        setError(null);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchItems();
  }, []);

  return (
    <ItemContext.Provider value={{ items, isLoading, error }}>
      {children}
    </ItemContext.Provider>
  );
};

// Custom hook to use the ItemContext and access its value anywhere in the app
export const useItems = () => {
  const context = useContext(ItemContext);
  if (context === undefined) {
    throw new Error('useItems must be used within an ItemProvider');
  }
  return context;
};
