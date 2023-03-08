import axios from 'axios';

const api = axios.create({
    // baseURL: "http://localhost:3004"
    baseURL: "https://jsonplaceholder.typicode.com"
})

export default api