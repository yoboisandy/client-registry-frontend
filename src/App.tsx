import { AddClient } from "./components/AddClient/AddClient";
import ClientsTable from "./components/CleintsTable/ClientsTable";
import { Toaster } from "react-hot-toast";

function App() {
	return (
		<>
			<div className="flex flex-col mx-2 my-5 md:mx-20 md:my-10 gap-10">
				<div>
					<h1 className="text-primary text-center text-3xl font-bold">
						Client Registry
					</h1>
				</div>
				<div>
					<div className="flex justify-between bg-primary-foreground px-4 py-2 items-cen">
						<h2 className="text-primary text-2xl font-semibold">
							Clients
						</h2>
						<AddClient />
					</div>
					<ClientsTable />
				</div>
			</div>
			<Toaster position="top-center" reverseOrder={false} />
		</>
	);
}

export default App;
