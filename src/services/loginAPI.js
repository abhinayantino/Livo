import { BASE_URL, axiosClient } from "./axiosClient";

export const adminLoginAPI = async ({ username, password }) => {
  const resp = await axiosClient.post(`${BASE_URL}/admins/login`, {
    user_name: username,
    password,
  });
  return resp;
};
