import axios from "axios";
import { getToken } from "../Services/auth";
const api = axios.create({
    baseURL: "https://localhost:7138/api",
})
//Passa o token através das requisições
api.interceptors.request.use(async config => {
    const token = getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  });
export default api;