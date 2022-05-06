import { BASE_URL, axiosClient } from "./axiosClient";

const SIGNUP_API = `${BASE_URL}/admins`;

export const SignUpAdmin = async (data) => {
  const resp = await axiosClient.post(SIGNUP_API, data);
  return resp;
};
