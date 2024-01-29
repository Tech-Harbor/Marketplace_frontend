import axios from '../api/axiosAPI.js';

import { useEffect, useState } from 'react';

export default function useGetData(url) {
  const [data, setData] = useState({
    data: null,
    error: null,
  });

  useEffect(() => {
    const takeData = async () => {
      try {
        const { data } = await axios.get(url);
        setData(prevData => ({ ...prevData, data }));
      } catch (error) {
        setData(prevData => ({ ...prevData, error: error.message }));
      }
    };

    takeData();
  }, [url]);

  return {...data};
}
