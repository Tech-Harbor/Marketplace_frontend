import axios from "axios"

const apiSettings = axios.create({
   baseURL: 'http://localhost:8080/',
});

export default apiSettings;