import { useState } from 'react';
import axios from '../api/axiosAPI.js';

export default function usePostData() {
  const [response, setResponse] = useState({
    token: '',
    errors: '',
  });

  const putData = async (url, objectData) => {
    try {
      const { data } = await axios.post(url, objectData);
      setResponse(prevData => ({ ...prevData, token: data.token }));
    } catch (error) {
      setResponse(prevData => ({ ...prevData, errors: error.message }));
    }
  };

  return [response, putData];
}
