import axios from "axios";

const api = axios.create({
  baseURL: "https://69c48d418a5b6e2dec2aca0d.mockapi.io/",
  timeout: 8000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;