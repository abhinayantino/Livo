import { BASE_URL, axiosClient } from "./axiosClient";

export const citiesAPI = async () => {
  const resp = await axiosClient.get(`${BASE_URL}/cities`);
  return resp;
};

export const localitiesAPI = async (id) => {
  const resp = await axiosClient.get(`${BASE_URL}/localities?cityId=${id}`);
  return resp;
};

export const buildingsAPI = async (data) => {
  const resp = await axiosClient.post(`${BASE_URL}/buildings`, data);
  return resp;
};
export const flatAPI = async (data) => {
  const resp = await axiosClient.post(`${BASE_URL}/flats`, data);
  return resp;
};

export const createNewOwnerAPI = async (data) => {
  const resp = await axiosClient.post(`${BASE_URL}/flats`, data);
  return resp;
};
export const AllUserAPI = async () => {
  const resp = await axiosClient.get(`${BASE_URL}/master-users`);
  return resp;
};
export const AllUnitAPI = async () => {
  const resp = await axiosClient.get(`${BASE_URL}/flats/admin`);
  return resp;
};
