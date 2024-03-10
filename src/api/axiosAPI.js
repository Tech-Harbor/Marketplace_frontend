import axios from 'axios';

const mainInstance = axios.create({
  baseURL: 'https://api.oranger.store/api/',
});

export default mainInstance;
