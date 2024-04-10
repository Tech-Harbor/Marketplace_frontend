import { useState, useEffect } from 'react';
import mainInstance from '../api/axiosAPI.js';

export const useApi = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendData = async (url, data) => {
    setIsLoading(true);

    try {
      const { data: result } = await mainInstance.post(url, data);
      setData(result);
    } catch (error) {
      setError(error);
    }

    setIsLoading(false);
  };

  useEffect(() => {
    if (data) {
      sendData();
    }
  }, [data]);

  return { data, isLoading, error, sendData };
};
