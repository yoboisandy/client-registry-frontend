import { z } from "zod";

export const addClientSchema = z.object({
	name: z.string({
		errorMap: () => ({ message: "Name is a required field." }),
	}).min(1, { message: "Name is a required field." }),
	email: z.string({
    errorMap: () => ({
      message: "Email is a required field.",
    }),
  }).email({
		message: "Invalid email address.",
	}),
	address: z.string({
		errorMap: () => ({ message: "Address is a required field." }),
	}).min(1, { message: "Address is a required field." }),
	education: z.enum(["high school", "bachelor", "master", "phd"], {
		errorMap: () => ({
			message: "Education must be high school, bachelor, master or phd.",
		}),
	}),
	dob: z.date({
		errorMap: () => ({ message: "Birth Date is a required field." }),
	}),
	nationality: z.string({
		errorMap: () => ({ message: "Nationality is a required field." }),
	}).min(1, { message: "Nationality is a required field." }),
	phone: z
		.string({
			errorMap: () => ({
				message: "Phone number is a required field.",
			}),
		})
		.min(10, {
			message: "Phone number must be at least 10 characters.",
		}),
	mode_of_contact: z.enum(["phone", "email", "none"], {
		errorMap: () => ({
			message: "Mode of contact must be phone, email or none",
		}),
	}),
	gender: z.enum(["male", "female", "other"], {
		errorMap: () => ({
			message: "Gender must be male, female or other.",
		}),
	}),
});

export const clientDefaultValues = {
	mode_of_contact: "none",
};
