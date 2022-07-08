import { BASE_URL, axiosClient } from "./axiosClient";

export const DashboardAPI = async (params) => {
  const resp = await axiosClient.get(
    `${BASE_URL}/dashboard?startDate=${params.startDate}&endDate=${params.endDate}`
  );
  return resp;
};
