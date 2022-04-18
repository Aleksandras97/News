import axios from "axios";

const axiosClient = axios.create({
  baseURL: 'http://localhost:80/api'
})

export default axiosClient;
