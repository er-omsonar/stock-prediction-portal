import axios from "axios";

const baseUrl = import.meta.env.VITE_BACKEND_BASE_API
const axiosInstance = axios.create({
  baseURL:baseUrl,
})

export default axiosInstance