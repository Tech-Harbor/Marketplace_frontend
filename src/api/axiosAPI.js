import axios from 'axios';

const mainInstance = axios.create({
  baseURL: 'https://marketplace-p93k.onrender.com/api/',
});

export default mainInstance;
