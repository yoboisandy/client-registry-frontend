import axiosInstance from "@/config/axiosConfig";

export const getClients = async (pageNumber: number) => {
	const response = await axiosInstance.get(`/clients?page=${pageNumber}`);
	return response.data?.data;
};
