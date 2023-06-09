import axios, { InternalAxiosRequestConfig } from "axios";

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;

axios.interceptors.request.use(
  (req: InternalAxiosRequestConfig<any>) => {
    const token = JSON.parse(localStorage.getItem("token") as string);

    if (token) req.headers["token"] = token;

    return req;
  },
  (err) => {
    return Promise.reject(err);
  }
);
