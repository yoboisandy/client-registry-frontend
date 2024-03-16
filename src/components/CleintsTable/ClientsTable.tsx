import {
	Table,
	TableBody,
	TableCell,
	TableFooter,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import {
	Pagination,
	PaginationContent,
	PaginationItem,
	PaginationLink,
	PaginationNext,
	PaginationPrevious,
} from "@/components/ui/pagination";
import { useQuery } from "react-query";
import { getClients } from "@/services/clients";
import { useState } from "react";
import { Client } from "@/config/types";

const ClientsTable = () => {
	const [page, setPage] = useState<number>(1);

	const { data, isFetching } = useQuery(
		["get-clients", page],
		() => getClients(page),
		{
			refetchOnWindowFocus: false,
		}
	);
	return (
		<div className="space-y-8 px-4">
			<Table>
				<TableHeader>
					<TableRow>
						<TableHead className="w-[100px]">SN</TableHead>
						<TableHead>Id</TableHead>
						<TableHead>Client</TableHead>
						<TableHead>Email</TableHead>
						<TableHead>Address</TableHead>
						<TableHead>Education</TableHead>
						<TableHead className="text-right">DOB</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					{!isFetching &&
						data?.data?.map((client: Client, index: number) => (
							<TableRow key={client.id}>
								<TableCell className="font-medium">
									{(page - 1) * data?.pagination?.page_size +
										index +
										1}
								</TableCell>
								<TableCell>{client.id}</TableCell>
								<TableCell>{client.name}</TableCell>
								<TableCell>{client.email}</TableCell>
								<TableCell>{client.address}</TableCell>
								<TableCell>{client.education}</TableCell>
								<TableCell className="text-right">
									{new Date(client.dob).toLocaleDateString()}
								</TableCell>
							</TableRow>
						))}
				</TableBody>
				<TableFooter>
					{!isFetching && data?.pagination?.total_records > 0 && (
						<TableRow>
							<TableCell colSpan={7}>
								<div className="grid place-items-center">
									Showing{" "}
									{data?.pagination?.total_records <=
									data?.pagination?.page_size
										? data?.pagination?.total_records
										: data?.data?.length}{" "}
									of {data?.pagination?.total_records} records
								</div>
							</TableCell>
						</TableRow>
					)}
					{!isFetching &&
						data?.data?.length > 0 &&
						data?.pagination && (
							<TableRow>
								<TableCell colSpan={7}>
									<div className="grid place-items-start">
										<Pagination className="grid place-items-start">
											<PaginationContent>
												<PaginationItem>
													<PaginationPrevious
														href="#"
														onClick={() =>
															page > 1 &&
															setPage(page - 1)
														}
													/>
												</PaginationItem>
												{Array.from(
													{
														length: data.pagination
															.total_pages,
													},
													(_, index) => index + 1
												).map((pageNumber) => (
													<PaginationItem
														key={pageNumber}
													>
														<PaginationLink
															href="#"
															onClick={() =>
																setPage(
																	pageNumber
																)
															}
															isActive={
																pageNumber ===
																page
															}
														>
															{pageNumber}
														</PaginationLink>
													</PaginationItem>
												))}
												<PaginationItem>
													<PaginationNext
														href="#"
														onClick={() =>
															page <
																data.pagination
																	.total_pages &&
															setPage(page + 1)
														}
													/>
												</PaginationItem>
											</PaginationContent>
										</Pagination>
									</div>
								</TableCell>
							</TableRow>
						)}
					{isFetching && (
						<TableRow>
							<TableCell colSpan={7}>
								<div className="grid place-items-center my-7">
									Loading...
								</div>
							</TableCell>
						</TableRow>
					)}
					{!isFetching && data?.data?.length < 1 && (
						<TableRow>
							<TableCell colSpan={7}>
								<div className="grid place-items-center my-7">
									No records found
								</div>
							</TableCell>
						</TableRow>
					)}
				</TableFooter>
			</Table>
		</div>
	);
};

export default ClientsTable;
