import { axiosClient, BASE_URL } from "./axiosClient";

export const getAllInvoice = async () => {
    const resp = await axiosClient.get(`${BASE_URL}/maintenances/admin`);
    return resp;
};
