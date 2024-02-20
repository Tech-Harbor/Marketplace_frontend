import { useState, useEffect } from 'react';
import mainInstance from '../api/axiosAPI.js';

export const useRegisterSubmit = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendData = async data => {
    setIsLoading(true);

    try {
      const { data: result } = await mainInstance.post('/auth/signup', data);
      setData(result);
    } catch (e) {
      setError(e);
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
