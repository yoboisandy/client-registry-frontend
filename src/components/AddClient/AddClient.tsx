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
import { useForm } from "react-hook-form";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "../ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { addClientSchema, clientDefaultValues } from "./helper";
import { z } from "zod";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { Calendar } from "../ui/calendar";
import { CalendarIcon } from "@radix-ui/react-icons";
import { format } from "date-fns";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";
import { addClient } from "@/services/clients";
import { useMutation, useQueryClient } from "react-query";

export function AddClient() {
	const client = useQueryClient();
	const [open, setOpen] = useState(false);
	const form = useForm<z.infer<typeof addClientSchema>>({
		resolver: zodResolver(addClientSchema),
		defaultValues: clientDefaultValues as z.infer<typeof addClientSchema>,
	});
	const { mutate: AddClient, isLoading } = useMutation(addClient);

	useEffect(() => {
		if (!open) {
			form.reset();
		}
	}, [open]);

	const onSubmit = (data: any) => {
		AddClient(data, {
			onSuccess: (res: any) => {
				toast.success(
					res?.data?.message || "Client added successfully."
				);
				setOpen(false);
				client.invalidateQueries("get-clients");
			},
			onError: (error: any) => {
				toast.error(error?.response?.data?.message || "Failed to add client.");
			},
		});
	};
	return (
		<Dialog onOpenChange={setOpen} open={open}>
			<DialogTrigger asChild>
				<Button size={"sm"} onClick={() => setOpen(true)}>
					Add Client
				</Button>
			</DialogTrigger>
			<DialogContent className="sm:max-w-[425px] md:max-w-[600px] overflow-y-scroll max-h-[96vh]">
				<Form {...form}>
					<form onSubmit={form.handleSubmit(onSubmit)}>
						<DialogHeader>
							<DialogTitle>Add Client</DialogTitle>
							<DialogDescription>
								Adds a new client to the csv registry.
							</DialogDescription>
						</DialogHeader>
						<div className="grid gap-4 py-4">
							<FormField
								control={form.control}
								name="name"
								render={({ field }) => (
									<FormItem>
										<div className="grid grid-cols-4 items-center gap-4">
											<FormLabel className="text-right">
												Name
											</FormLabel>
											<Input
												className="col-span-3"
												{...field}
											/>
										</div>
										<div className="text-end">
											<FormMessage />
										</div>
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name="email"
								render={({ field }) => (
									<FormItem>
										<div className="grid grid-cols-4 items-center gap-4">
											<FormLabel className="text-right">
												Email
											</FormLabel>
											<Input
												className="col-span-3"
												type="email"
												{...field}
											/>
										</div>
										<div className="text-end">
											<FormMessage />
										</div>
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name="phone"
								render={({ field }) => (
									<FormItem>
										<div className="grid grid-cols-4 items-center gap-4">
											<FormLabel className="text-right">
												Phone
											</FormLabel>
											<Input
												className="col-span-3"
												type="tel"
												{...field}
											/>
										</div>
										<div className="text-end">
											<FormMessage className="" />
										</div>
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name="address"
								render={({ field }) => (
									<FormItem>
										<div className="grid grid-cols-4 items-center gap-4">
											<FormLabel className="text-right">
												Address
											</FormLabel>
											<Input
												className="col-span-3"
												{...field}
											/>
										</div>
										<div className="text-end">
											<FormMessage />
										</div>
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name="gender"
								render={({ field }) => (
									<FormItem>
										<div className="grid grid-cols-4 items-center gap-4">
											<FormLabel className="text-right">
												Gender
											</FormLabel>
											<RadioGroup
												className="flex gap-4"
												onValueChange={field.onChange}
												defaultValue={field.value}
											>
												<div className="flex items-center space-x-2">
													<RadioGroupItem
														value="male"
														id="r1"
													/>
													<Label htmlFor="r1">
														Male
													</Label>
												</div>
												<div className="flex items-center space-x-2">
													<RadioGroupItem
														value="female"
														id="r2"
													/>
													<Label htmlFor="r2">
														Female
													</Label>
												</div>
												<div className="flex items-center space-x-2">
													<RadioGroupItem
														value="other"
														id="r3"
													/>
													<Label htmlFor="r3">
														Other
													</Label>
												</div>
											</RadioGroup>
										</div>
										<div className="text-end">
											<FormMessage />
										</div>
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name="nationality"
								render={({ field }) => (
									<FormItem>
										<div className="grid grid-cols-4 items-center gap-4">
											<FormLabel className="text-right">
												Nationality
											</FormLabel>
											<Input
												className="col-span-3"
												{...field}
											/>
										</div>
										<div className="text-end">
											<FormMessage />
										</div>
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name="dob"
								render={({ field }) => (
									<FormItem>
										<div className="grid grid-cols-4 items-center gap-4">
											<FormLabel className="text-right">
												Date of birth
											</FormLabel>
											<Popover>
												<PopoverTrigger asChild>
													<FormControl>
														<Button
															variant={"outline"}
															className={cn(
																"pl-3 text-left font-normal col-span-3",
																!field.value &&
																	"text-muted-foreground"
															)}
														>
															{field.value ? (
																format(
																	field.value,
																	"PPP"
																)
															) : (
																<span>
																	Pick a date
																</span>
															)}
															<CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
														</Button>
													</FormControl>
												</PopoverTrigger>
												<PopoverContent
													className="col-span-3"
													align="start"
												>
													<Calendar
														mode="single"
														selected={field.value}
														onSelect={
															field.onChange
														}
														disabled={(date) =>
															date > new Date() ||
															date <
																new Date(
																	"1900-01-01"
																)
														}
														initialFocus
													/>
												</PopoverContent>
											</Popover>
										</div>
										<div className="text-end">
											<FormMessage />
										</div>
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name="education"
								render={({ field }) => (
									<FormItem>
										<div className="grid grid-cols-4 items-center gap-4">
											<FormLabel className="text-right">
												Education
											</FormLabel>
											<Select
												onValueChange={field.onChange}
												defaultValue={field.value}
											>
												<SelectTrigger className="col-span-3">
													<SelectValue placeholder="Select Your Education" />
												</SelectTrigger>
												<SelectContent>
													<SelectItem value="high school">
														High School
													</SelectItem>
													<SelectItem value="bachelor">
														Bachelor
													</SelectItem>
													<SelectItem value="master">
														Master
													</SelectItem>
													<SelectItem value="phd">
														PHD
													</SelectItem>
												</SelectContent>
											</Select>
										</div>
										<div className="text-end">
											<FormMessage />
										</div>
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name="mode_of_contact"
								render={({ field }) => (
									<FormItem>
										<div className="grid grid-cols-4 items-center gap-4">
											<FormLabel className="text-right">
												Preffered Mode of Contact
											</FormLabel>
											<RadioGroup
												onValueChange={field.onChange}
												defaultValue={field.value}
												className="flex gap-4"
											>
												<div className="flex items-center space-x-2">
													<RadioGroupItem
														value="email"
														id="m1"
													/>
													<Label htmlFor="m1">
														Email
													</Label>
												</div>
												<div className="flex items-center space-x-2">
													<RadioGroupItem
														value="phone"
														id="m2"
													/>
													<Label htmlFor="m2">
														Phone
													</Label>
												</div>
												<div className="flex items-center space-x-2">
													<RadioGroupItem
														value="none"
														id="m3"
													/>
													<Label htmlFor="m3">
														None
													</Label>
												</div>
											</RadioGroup>
										</div>
										<div className="text-end">
											<FormMessage />
										</div>
									</FormItem>
								)}
							/>
						</div>
						<DialogFooter>
							<Button
								variant={"outline"}
								type="button"
								onClick={() => setOpen(false)}
							>
								Cancel
							</Button>
							<Button disabled={isLoading} type="submit">
								{isLoading ? "Adding..." : "Add Client"}
							</Button>
						</DialogFooter>
					</form>
				</Form>
			</DialogContent>
		</Dialog>
	);
}
