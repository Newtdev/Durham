import { Button, Error, Label, Select } from "../../../ui";
import { AuthHeader, AuthSuccessModal, InputContainer } from "../component";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import { PasswordResendEmailSchema } from "../../../yup";
import { useState } from "react";
import { useForgotPasswordMutation } from "../../../features/services/api";
import { toast } from "react-toastify";

export function ForgetPasswordModal({ close }) {
	const [showSuccessModal, setShowSuccessModal] = useState(false);
	const [forgotPassword, { isLoading }] = useForgotPasswordMutation();

	const HandleRequest = async (value) => {
		try {
			const response = await forgotPassword({ ...value });
			console.log(response);
			if (response?.error) {
				toast.error(response?.error?.message, {
					position: toast.POSITION.TOP_CENTER,
				});
				// setShowSuccess(false)
			} else if (response?.data) {
				setShowSuccessModal(true);

				// setShowSuccess(true);
				// onSuccess show the modal and ask the manager to login
			}
		} catch (error) {
			console.log(error);
		}
	};

	const { values, errors, touched, handleChange, handleSubmit } =
		useFormik({
			initialValues: {
				email: "",
			},
			validationSchema: PasswordResendEmailSchema,
			onSubmit: (value) => {
				HandleRequest(value);
			},
		});
	const props = {
		email: {
			name: "Email",
			id: "email",
			placeholder: "Enter your email address",
			value: values.email,
			onChange: handleChange,
			error: errors.email,
			touched: touched.email,
		},
	};
	const successProps = {
		content:
			"Follow the link in the email to reset your password . If you did not receive the email, kindly check your spam or you can resend the email.",
		email: values.email,
		name: "Password Resent Link Sent",
		close
	};

	if (showSuccessModal) {
		return <AuthSuccessModal {...successProps} />;
	}

	return (
		<div
			className="h-[450px] w-[472px] mx-auto mt-10 w-full bg-white py-6 px-14 rounded-lg"
			onClick={(e) => e.stopPropagation()}>
			<form
				className="h-full w-full flex flex-col justify-evenly items-center"
				onSubmit={handleSubmit}>
				<div className="h-[48px] w-[48px] mx-auto rounded-lg bg-[#374151]"></div>
				<AuthHeader name="Forget Password" />
				<p className="text-center text-sm text-gray-500">
					Enter your email address and we’ll send you an email to reset your
					password
				</p>
				<InputContainer {...props.email} />
				<Button name="RESET PASSWORD" loading={isLoading} />
				<p className="text-base text-gray-800 font-light text-center ">
					<Link
						onClick={close}
						className=" underline  text-[#3B6979] font-bold">
						Return to login
					</Link>
				</p>
			</form>
		</div>
	);
}

export function SelectContainer(props) {
	const { name, error, touched } = props;
	return (
		<div className="mb-4 w-full">
			<Label
				name={name}
				styles="block mb-2 text-sm font-medium text-gray-900"
			/>
			<Select {...props} />
			{error && touched && <Error message={error} />}
		</div>
	);
}
// export function ResendPasswordLink({ email }) {
// 	return (
// 		<div
// 			className="h-[344px] w-[472px] mx-auto mt-10 w-full bg-white py-6 px-14 rounded-lg"
// 			onClick={(e) => e.stopPropagation()}>
// 			<div className="h-full w-full flex flex-col justify-evenly items-center">
// 				<AuthHeader name="Password Resent Link Sent" />
// 				<p className="text-center text-sm text-gray-500">
// 					We sent a link to {email}
// 				</p>
// 				<p className="text-center text-sm text-gray-500">
// 					Follow the link in the email to reset your password . If you did not
// 					receive the email, kindly check your spam or you can resend the email.
// 				</p>
// 				<button className="text-[#3B6979] text-base font-normal w-[360px] hover:bg-blue-800 focus:ring-4 hover:bg-[#3B6979] transition-all focus:outline-none focus:ring-blue-300 hover:bg-transparent border border-[#3B6979] hover:text-white font-bold rounded-md text-sm px-5 py-3 text-center">
// 					Resend Email
// 				</button>
// 			</div>
// 		</div>
// 	);
// }
