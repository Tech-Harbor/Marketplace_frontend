import { useState, useEffect } from 'react';
import axios from 'axios';

export const useAxiosPost = url => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendData = async data => {
    setIsLoading(true);

    try {
      const { data: result } = await axios.post(url, data);
      setData(result);
    } catch (e) {
      setError(e);
    }

    setIsLoading(false);
  };

  useEffect(() => {
    if (data) {
      // console.log('sendData', data);
      sendData();
    }
  }, [data]);

  return { data, isLoading, error, sendData };
};
