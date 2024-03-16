import ClientsTable from "./components/CleintsTable/ClientsTable";

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
					<ClientsTable />
				</div>
			</div>
		</>
	);
}

export default App;
