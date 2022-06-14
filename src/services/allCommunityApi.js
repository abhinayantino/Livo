import { BASE_URL, axiosClient } from "./axiosClient";

export const getReportedPosts = async () => {
    const resp = await axiosClient.get(`${BASE_URL}/posts/reported`);
    return resp;
};

export const DeleteReportedPost = async (id) => {
    const resp = await axiosClient.get(`${BASE_URL}/posts/${id}`);
    return resp;
};
