import { reissue } from "./auth";
import axios, { AxiosError } from "axios";

axios.defaults.baseURL =
  process.env.NODE_ENV === "development"
    ? process.env.REACT_APP_DEV_BASE_URL
    : process.env.REACT_APP_PROD_BASE_URL;

let refresh = false;

axios.interceptors.response.use(
  (res) => res,
  async (error: AxiosError) => {
    if (error.response?.status === 401 && !refresh) {
      refresh = true;
      const data = await reissue();
      if (data.status === 200) {
        localStorage.setItem("accessToken", `Bearer ${data.data.accessToken}`);
        localStorage.setItem(
          "refreshToken",
          `Bearer ${data.data.refreshToken}`
        );
        axios.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${data.data.accessToken}`;
        return axios(error.config);
      }
    }
    if (error.response?.status === 400 && !refresh) {
      return Promise.reject(error);
    }
    refresh = false;
    return error;
  }
);
