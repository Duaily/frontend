import axios, { AxiosError } from "axios";

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;

let refresh = false;

axios.interceptors.response.use(
  (res) => res,
  async (error: AxiosError) => {
    if (error.response?.status === 401 && !refresh) {
      refresh = true;
      const response = await axios.post("auth/refresh", {
        accessToken: localStorage.getItem("accessToken"),
        refreshToken: localStorage.getItem("refreshToken"),
      });
      if (response.status === 200) {
        axios.defaults.headers.common[
          "Authorization"
        ] = `${response.data.grantType} ${response.data.accessToken}`;
        return axios(error.config!);
      }
    }
    if (error.response?.status === 400 && !refresh) {
      return Promise.reject(error);
    }
    refresh = false;
    return error;
  }
);
