import axios from "axios";

export const intercept = axios.interceptors.request.use(
  (config) => {
    const url = config.url;
    const token = localStorage.getItem("token");
    if (token) {
      if (!url.includes("login") && !url.includes("createUser")) {
        config.headers["Authorization"] = "Bearer " + token;
      }
    }
    config.headers["Content-Type"] = "application/json";
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);
