import { axiosClient, BASE_URL } from "./axiosClient";

export const getAllRequests = async () => {
    const resp = await axiosClient.get(`${BASE_URL}/maintenances/admin`);
    return resp;
};

export const getGenerateInvoice = async () => {
    const resp = await axiosClient.get(`${BASE_URL}/maintenances/admin`);
    return resp;
};

export const getVisitorManagement = async (
    pageNo,
    dataLimit,
    startDate,
    endDate
) => {
    const resp = await axiosClient.get(
        `${BASE_URL}/visitings/logs?page=${pageNo}&limit=${dataLimit}&startDate=${startDate}&endDate=${endDate}`
    );
    return resp;
};

export const getAllRequestProperty = async (urlParams) => {
    const resp = await axiosClient.get(
        `${BASE_URL}/maintenances/admin/${urlParams}`
    );
    return resp;
};

export const getStaffdetail = async () => {
    const resp = await axiosClient.get("/staffs/admin");
    return resp;
};
export const postStaffDeatail = async (data) => {
    const resp = await axiosClient.post(
        `${BASE_URL}/maintenances/assign-staff`,
        data
    );
    return resp;
};

export const deleteStaffDeatail = async (data) => {
    const resp = await axiosClient.patch(
        `${BASE_URL}/maintenances/remove-staff`,
        data
    );
    return resp;
};

//'http://18.117.40.59/api/v1/visitings/logs?page=1&limit=10&startDate=10/03/2022&endDate=12/04/2022' \

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
