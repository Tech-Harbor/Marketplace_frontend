import axios from 'axios';

const mainInstance = axios.create({
  baseURL: 'https://api.oranger.store/',
});

export default mainInstance;
