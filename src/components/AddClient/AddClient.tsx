import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function AddClient() {
	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button size={"sm"}>Add Client</Button>
			</DialogTrigger>
			<DialogContent className="sm:max-w-[425px] md:max-w-[600px] overflow-y-scroll max-h-[96vh]">
				<DialogHeader>
					<DialogTitle>Add Client</DialogTitle>
					<DialogDescription>
						Adds a new client to the csv registry.
					</DialogDescription>
				</DialogHeader>
				<div className="grid gap-4 py-4">
					<div className="grid grid-cols-4 items-center gap-4">
						<Label htmlFor="name" className="text-right">
							Name
						</Label>
						<Input id="name" className="col-span-3" />
					</div>
					<div className="grid grid-cols-4 items-center gap-4">
						<Label htmlFor="email" className="text-right">
							Email
						</Label>
						<Input id="email" className="col-span-3" type="email" />
					</div>
					<div className="grid grid-cols-4 items-center gap-4">
						<Label htmlFor="phone" className="text-right">
							Phone
						</Label>
						<Input id="phone" className="col-span-3" type="tel" />
					</div>
					<div className="grid grid-cols-4 items-center gap-4">
						<Label htmlFor="address" className="text-right">
							Address
						</Label>
						<Input id="address" className="col-span-3" />
					</div>
					<div className="grid grid-cols-4 items-center gap-4">
						<Label className="text-right">Gender</Label>
						<RadioGroup defaultValue="comfortable" className="flex gap-4">
							<div className="flex items-center space-x-2">
								<RadioGroupItem value="male" id="r1" />
								<Label htmlFor="r1">Male</Label>
							</div>
							<div className="flex items-center space-x-2">
								<RadioGroupItem value="female" id="r2" />
								<Label htmlFor="r2">Female</Label>
							</div>
							<div className="flex items-center space-x-2">
								<RadioGroupItem value="other" id="r3" />
								<Label htmlFor="r3">Other</Label>
							</div>
						</RadioGroup>
					</div>
					<div className="grid grid-cols-4 items-center gap-4">
						<Label htmlFor="nationality" className="text-right">
							Nationality
						</Label>
						<Input id="nationality" className="col-span-3" />
					</div>
					<div className="grid grid-cols-4 items-center gap-4">
						<Label htmlFor="dob" className="text-right">
							Birth Date
						</Label>
						<Input
							id="dob"
							className="col-span-3 w-full"
							type="date"
						/>
					</div>
					<div className="grid grid-cols-4 items-center gap-4">
						<Label htmlFor="education" className="text-right">
							Education
						</Label>
						<Select>
							<SelectTrigger className="col-span-3">
								<SelectValue placeholder="Select Your Education" />
							</SelectTrigger>
							<SelectContent>
								<SelectItem value="High School">
									High School
								</SelectItem>
								<SelectItem value="banana">Bachelor</SelectItem>
								<SelectItem value="blueberry">
									Master
								</SelectItem>
								<SelectItem value="grapes">PHD</SelectItem>
							</SelectContent>
						</Select>
					</div>
					<div className="grid grid-cols-4 items-center gap-4">
						<Label htmlFor="education" className="text-right">
							Preffered Mode of Contact
						</Label>
						<RadioGroup defaultValue="comfortable" className="flex gap-4">
							<div className="flex items-center space-x-2">
								<RadioGroupItem value="email" id="m1" />
								<Label htmlFor="m1">Email</Label>
							</div>
							<div className="flex items-center space-x-2">
								<RadioGroupItem value="phone" id="m2" />
								<Label htmlFor="m2">Phone</Label>
							</div>
							<div className="flex items-center space-x-2">
								<RadioGroupItem value="none" id="m3" />
								<Label htmlFor="m3">None</Label>
							</div>
						</RadioGroup>
					</div>
				</div>
				<DialogFooter>
					<Button type="submit">Save</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
}
