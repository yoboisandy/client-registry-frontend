import axiosInstance from "@/config/axiosConfig";
import { Client } from "@/config/types";

export const getClients = async (pageNumber: number) => {
	const response = await axiosInstance.get(`/clients?page=${pageNumber}`);
	return response.data?.data;
};

export const addClient = async (client: Client) => {
	const response = await axiosInstance.post("/clients", client);
	return response.data;
}