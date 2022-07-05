import axios from "axios";

export const BASE_URL = "http://18.117.40.59/api/v1";

// export const BASE_URL = "http://localhost:4000/api/v1";

const axiosClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
  },
});

axiosClient.interceptors.request.use(
  (req) => {
    req.headers.Authorization = `Bearer ${localStorage.getItem("accessToken")}`;
    // req.headers.authorization = `bearer ${
    //   JSON.parse(localStorage.getItem("token"))?.accessToken
    // }`;
    return req;
  },
  (error) => {
    console.error(error);
    return Promise.resolve(error.response);
  }
);

axiosClient.interceptors.response.use(
  (req) => req,
  (error) => {
    console.error(error);
    return Promise.resolve(error.response);
  }
);

export { axiosClient };
