import * as Yup from "yup";
import "yup-phone";

export const SignUpSchema = Yup.object().shape({
  firstName: Yup.string().required("First name is required!"),
  lastName: Yup.string().required("Last name is required!"),
  email: Yup.string()
    .required("Email is required!")
    .email("provided is not correct"),
  password: Yup.string()
    .min(6, "must be atleast 6 characters long ")
    .required("Password is required!"),
  confirmPassword: Yup.string()
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

  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Confirm password must match password")
    .required("Please confirm your password"),
});

export const PasswordResendEmailSchema = Yup.object().shape({
  email: Yup.string()
    .required("Email is required!")
    .email("provided is not correct!"),
});

export const AddProjectSchema = Yup.object().shape({
  name: Yup.string().required("First name is required!"),
  email: Yup.string()
    .required("Email is required!")
    .email("provided is not correct!"),
  phone: Yup.string()
    .required("Phone number is required!")
    .phone("US", true, "Add the +1 at the beginning of your phone number"),
});

export const AddVendorsSchema = Yup.object().shape({
  representive: Yup.string().required("Company Rep is required!"),
  firstName: Yup.string().required("First name is required!"),
  lastName: Yup.string().required("Last name is required!"),
  companyName: Yup.string().required("Company name is required!"),
  address: Yup.string().required("Address is required!"),
  industry: Yup.string().required("Industry is required!"),
});

export const AddUsersSchema = Yup.object().shape({
  fullName: Yup.string().required("Full name is required!"),
  emailAddress: Yup.string()
    .required("Email address is required!")
    .email("provided is not correct!"),
  phoneNumber: Yup.string().required("Phone Number is required!"),
  password: Yup.string()
    .required("Password name is required!")
    .phone("US", true, "Add the +1 at the beginning of your phone number"),
});
