import { useEffect, useState } from 'react';
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

export const useActivateUser = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendRegistrationToken = async token => {
    setIsLoading(true);

    try {
      await mainInstance.post('/active', null, {
        headers: { Authorization: `Bearer ${token}` },
      });
    } catch (e) {
      setError(error);
    }

    setIsLoading(false);
  };

  return { sendRegistrationToken, isLoading };
};

export const useResetPassword = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendNewPassword = async (token, data) => {
    setIsLoading(true);
    try {
      await mainInstance.put(
        '/change-password',
        { password: data.password },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
    } catch (e) {
      setError(error);
    }

    setIsLoading(false);
  };

  return { sendNewPassword, isLoading };
};
