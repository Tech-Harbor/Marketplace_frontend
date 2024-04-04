import { useState, useEffect } from 'react';
import mainInstance from '../api/axiosAPI.js';
// import { useDispatch } from 'react-redux';
// import { setTokens } from '../redux/auth/authSlice.js';

// const dispatch = useDispatch();

// export const useLogin = () => {
//   return async body => {
//     try {
//       const { data } = await mainInstance.post('/api/auth/login', body);
//       if (data) {
//         dispatch(setTokens(data));
//       }
//       return data;
//     } catch (error) {
//       throw error;
//     }
//   };
// };

export const useApi = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendData = async (url, data) => {
    setIsLoading(true);

    try {
      // const { data: result } = await mainInstance.post('/auth/signup', data);
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
