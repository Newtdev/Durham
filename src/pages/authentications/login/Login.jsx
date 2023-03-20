import { useEffect, useState } from "react";
import { Button, ModalOverlay } from "../../../ui";
import AuthComp, {
	AuthHeader,
	CheckBox,
	ImageSideContainer,
	InputContainer,
} from "../component";
import { useFormik } from "formik";
import { LoginSchema } from "../../../yup";
import { ForgetPasswordModal } from "../change-password/Components";
import { useUserLoginMutation } from "../../../features/services/api";
import { toast } from "react-toastify";
import "../../../index.css";
import { useNavigate } from "react-router-dom";

const GetLoginDetails = () => {
	const data = JSON.parse(localStorage.getItem("login_info"));
	if (!data) return "";
	return data;
};

const Login = () => {
	const navigate = useNavigate();
	const [showModal, setShowModal] = useState(false);
	// const dispatch = useDispatch();
	const savedURL = sessionStorage.getItem("storedSessionUrl");

	const [userLogin, { isLoading }] = useUserLoginMutation();

	const HandleRequest = async (value) => {
		try {
			const response = await userLogin({ ...value });
			if (response?.error) {
				toast.error(response?.error?.message, {
					position: toast.POSITION.TOP_CENTER,
				});
			} else {
				console.log(savedURL);
				localStorage.setItem("durham_token", JSON.stringify(response.data));
				if (!savedURL) {
					navigate("/dashboard");
				} else {
					navigate(savedURL);
				}
				// dispatch(userInfo(localStorage.getItem('durham_token')));
			}
		} catch (error) {
			console.log(error);
		}
	};

	const { values, errors, touched, handleChange, handleSubmit, setValues } =
		useFormik({
			initialValues: {
				email: "",
				password: "",
				check: false,
			},
			validationSchema: LoginSchema,
			onSubmit: (values) => {
				HandleRequest(values);
			},
		});

	useEffect(() => {
		setValues({
			email: GetLoginDetails().email,
			password: GetLoginDetails().password,
		});
	}, [setValues]);

	// console.log(data)

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
		password: {
			name: "Password",
			id: "password",
			placeholder: "Enter your password",
			type: "password",
			value: values.password,
			onChange: handleChange,
			error: errors.password,
			touched: touched.password,
		},
	};

	return (
		<section>
			<article className="mx-10 px-4 mx-auto h-screen w-screen flex">
				<AuthComp>
					<div className="mt-36">
						<div className="h-16 flex items-center justify-center">
							{/* <img src={User} alt="user" className='mx-auto mb-6 h-28 w-28 rounded-full object-cover' /> */}
							{/*  */}
							<AuthHeader name="Welcome Back" />
						</div>
						<form
							className="flex flex-col items-center justify-center"
							onSubmit={handleSubmit}>
							<InputContainer {...props.email} />
							<InputContainer {...props.password} />

							<CheckBox
								name="Remember me on this device"
								onChange={() =>
									localStorage.setItem(
										"login_info",
										JSON.stringify({
											email: values.email,
											password: values.password,
										})
									)
								}
							/>

							<div className="mt-12">
								<Button name="LOG IN" loading={isLoading} />
							</div>
							<div className="my-4">
								<span
									role="button"
									onClick={() => setShowModal(true)}
									className=" underline text-base font-bold text-[#3B6979]">
									Forgot password?
								</span>
							</div>
						</form>
					</div>
				</AuthComp>
				<ImageSideContainer />
				<ModalOverlay show={showModal} close={() => setShowModal(false)}>
					<ForgetPasswordModal close={() => setShowModal(false)} />
					{/* <ResendPasswordLink email={values.email} /> */}
				</ModalOverlay>
			</article>
		</section>
	);
};

export default Login;
