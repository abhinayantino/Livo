import { BASE_URL, axiosClient } from "./axiosClient";

export const getReportedPosts = async () => {
    const resp = await axiosClient.get(`${BASE_URL}/posts/reported`);
    return resp;
};
