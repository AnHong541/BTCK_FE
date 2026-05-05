import axios from 'axios';

const api = axios.create({
    baseURL: "https://69f98e20c509a40d3aa2a1e7.mockapi.io/",
    timeout: 8000,
    headers: {
        "Content-Type": "application/json",
    },
});
export default api;