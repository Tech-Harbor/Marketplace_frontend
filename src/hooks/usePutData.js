import { useState } from 'react';
import axios from '../api/axiosAPI.js';

export default function usePutData() {
  const [response, setResponse] = useState({
    answer: {},
    errors: {},
  });

  const putData = async (url, objectData) => {
    try {
      const data = await axios.put(url, objectData);
      setResponse(prevData => ({ ...prevData, answer: data }));
    } catch (error) {
      setResponse(prevData => ({ ...prevData, errors: error }));
    }
  };

  return [response, putData];
}
