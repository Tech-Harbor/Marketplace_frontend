import axios from "../api/axiosAPI";

import { useEffect, useState } from "react";

export default function useGetDate(url) {
   const [data, setDatas] = useState({
      data: null,
      error: null,
   });

   useEffect(() => {
      const takeData = async () => {
         try {
            const { data } = await axios.get(url);
            setDatas((prevData) => ({ ...prevData, data }))
         } catch (error) {
            setDatas((prevData) => ({ ...prevData, error: error.message }))
         };
      };

      takeData();
   }, [url]);

   return [data];
}