// useItems.js
import { useState, useEffect } from 'react';
import axios from 'axios'; // Make sure to install axios with `npm install axios` or `yarn add axios`

const useItems = () => {
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
        setItems([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchItems();
  }, []);

  return { items, isLoading, error };
};

export default useItems;
