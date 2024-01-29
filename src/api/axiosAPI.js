import axios from "axios"

const apiSettings = axios.create({
  baseURL: 'https://marketplace-p93k.onrender.com/api/',
});

export default apiSettings;
