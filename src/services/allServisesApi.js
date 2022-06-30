import { axiosClient, BASE_URL } from "./axiosClient";

export const getAllRequests = async () => {
    const resp = await axiosClient.get(`${BASE_URL}/maintenances/admin`);
    return resp;
};

export const getGenerateInvoice = async () => {
    const resp = await axiosClient.get(`${BASE_URL}/maintenances/admin`);
    return resp;
};

export const getVisitorManagement = async () => {
    const resp = await axiosClient.get(`${BASE_URL}/maintenances/admin`);
    return resp;
};
// export const getBudgetTotal = async () => {
//     const resp = await axiosClient.get(`${BASE_URL}/maintenances/admin`);
//     return resp;
// };

// export const getBudgetIncome = async () => {
//     const resp = await axiosClient.get(`${BASE_URL}/maintenances/admin`);
//     return resp;
// };
// export const getBudgetExpenses = async () => {
//     const resp = await axiosClient.get(`${BASE_URL}/maintenances/admin`);
//     return resp;
// };
