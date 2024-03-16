import {
	Table,
	TableBody,
	TableCell,
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

const ClientsTable = () => {
	return (
		<div className="space-y-8">
			<Table>
				<TableHeader>
					<TableRow>
						<TableHead className="w-[100px]">SN</TableHead>
						<TableHead>Client</TableHead>
						<TableHead>Email</TableHead>
						<TableHead>Address</TableHead>
						<TableHead>Education</TableHead>
						<TableHead className="text-right">DOB</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					<TableRow>
						<TableCell className="font-medium">1</TableCell>
						<TableCell>Sandeep Sharma</TableCell>
						<TableCell>sandeep@gmail.com</TableCell>
						<TableCell>Bharatpur</TableCell>
						<TableCell>Bachelor</TableCell>
						<TableCell className="text-right">
							18 Feb 2021
						</TableCell>
					</TableRow>
				</TableBody>
			</Table>
			<Pagination>
				<PaginationContent>
					<PaginationItem>
						<PaginationPrevious href="#" />
					</PaginationItem>
					<PaginationItem>
						<PaginationLink href="#">1</PaginationLink>
					</PaginationItem>
					<PaginationItem>
						<PaginationNext href="#" />
					</PaginationItem>
				</PaginationContent>
			</Pagination>
		</div>
	);
};

export default ClientsTable;
