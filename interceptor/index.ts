import { setTokens } from "./../utils/token";
import axios from "axios";
import moment from "moment";

const axiosClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_HOST,
  timeout: 10000,
  headers: {
    "Accept-Encoding": "gzip,deflate,compress,",
    "Content-Type": "application/json",
  },
});

// Add a request interceptor
axiosClient.interceptors.request.use(
  async (config) => {
    try {
      const accessToken = await localStorage.getItem("access_token");
      const expiredDate = await localStorage.getItem("expired");
      if (expiredDate === null) {
        return config;
      }

      // Date.now() is in milliseconds expires is in seconds
      if (moment().isBefore(expiredDate)) {
        config.headers = {
          ...config.headers,
          Authorization: `Bearer ${accessToken}`,
        };
      }
    } catch (error) {
      console.log("error");
    }

    // Do something before request is sent
    return config;
  },
  (err) => {
    // Do something with request error
    return Promise.reject(err);
  }
);

// Add a response interceptor
axiosClient.interceptors.response.use(
  (response) => {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  async (err) => {
    try {
      const refreshToken = await localStorage.getItem("refresh_token");
      if (!refreshToken) {
        return Promise.reject(err);
      }
      const originalConfig = err.config;
      if (originalConfig.url !== "/login" && err.response) {
        // Access Token was expired
        if (err.response.status === 401 && !originalConfig._retry) {
          originalConfig._retry = true;
          try {
            const { data } = await axios.post(
              "/user/refreshToken",
              {
                refreshToken,
              },
              {
                baseURL: process.env.NEXT_PUBLIC_BE_URL,
              }
            );

            setTokens(data.accessToken, data.expiredDate, refreshToken);

            originalConfig.headers = {
              ...originalConfig.headers,
              Authorization: `Bearer ${data.accessToken}`,
            };

            return axiosClient(originalConfig);
          } catch (_error) {
            return Promise.reject(_error);
          }
        }
      }
      // Any status codes that falls outside the range of 2xx cause this function to trigger
      // Do something with response error
    } catch (error) {
      console.log("error", error);
    }

    return Promise.reject(err);
  }
);

export default axiosClient;
