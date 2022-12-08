import * as Yup from "yup";
import "yup-phone";

export const SignUpSchema = Yup.object().shape({
	first_name: Yup.string().required("First name is required!"),
	last_name: Yup.string().required("Last name is required!"),
	email: Yup.string()
		.required("Email is required!")
		.email("provided is not correct"),
	password: Yup.string()
		.min(6, "must be atleast 6 characters long ")
		.required("Password is required!"),
	password_confirmation: Yup.string()
		.oneOf([Yup.ref("password")], "Confirm password must match password")
		.required("Please confirm your password"),
	check: Yup.boolean().oneOf([true], "Accept terms of service"),
});

export const LoginSchema = Yup.object().shape({
	email: Yup.string()
		.required("Email is required!")
		.email("provided is not correct!"),
	password: Yup.string()
		.min(6, "must be atleast 6 characters long ")
		.required("Password is required!"),
});

export const ResetPasswordSchema = Yup.object().shape({
	password: Yup.string()
		.min(6, "must be atleast 6 characters long ")
		.required("Password is required!"),

	password_confirmation: Yup.string()
		.oneOf([Yup.ref("password")], "Confirm password must match password")
		.required("Please confirm your password"),
});

export const PasswordResendEmailSchema = Yup.object().shape({
	email: Yup.string()
		.required("Email is required!")
		.email("provided is not correct!"),
});

export const AddProjectSchema = Yup.object().shape({
	first_name: Yup.string().required("First name is required!"),
	last_name: Yup.string().required("Last name is required!"),
	email: Yup.string()
		.required("Email is required!")
		.email("provided is not correct!"),
	phone: Yup.string().required("Phone number is required!").phone("US", true),
});

export const AddVendorsSchema = Yup.object().shape({
	title: Yup.string().required("Company Representative is required!"),
	first_name: Yup.string().required("First name is required!"),
	last_name: Yup.string().required("Last name is required!"),
	company_name: Yup.string().required("Company name is required!"),
	address: Yup.string().required("Address is required!"),
	industry: Yup.string().required("Industry is required!"),
});

export const EditProfileDetailsSchema = Yup.object().shape({
	fullName: Yup.string().required("Full name is required"),
	email: Yup.string()
		.required("Email is required!")
		.email("provided is not correct!"),
	phone: Yup.string().required("Phone number is required!").phone("US", false),
	password: Yup.string()
		.min(6, "must be atleast 6 characters long ")
		.required("Password is required!"),
});

export const EditDurhamProfileSchema = Yup.object().shape({
	// chair_board_education: Yup.string().required("field is required"),
	// chief_finance_officer: Yup.string().required("field is required"),
	// construction_interim_director: Yup.string().required("field is required"),
	// business_Manager: Yup.string().required("field is required"),
	// project_manager: Yup.string().required("field is required"),
	// director_design: Yup.string().required("field is required"),
	// director_construction: Yup.string().required("field is required"),
	// project_manager_phone: Yup.string()
	// 	.required("field is required")
	// 	.phone("US", true),
	// director_durham: Yup.string().required("field is required"),
});


