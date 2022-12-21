import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import {
	useAddProjectManagerMutation,
	useUpdateProductManagerDetailsMutation,
} from "../../../../features/services/api";
import { supabase } from "../../../../lib/supabase";
import { ButtonRedBG, ButtonWhiteBG } from "../../../../ui";
import { AddProjectSchema } from "../../../../yup";
import { Close, DashboardButton, DashboardInput } from "../../Components";
import { save_project_manager } from "../projectManagerSlice";

export const ProductHeader = [
	"First Name",
	"Last name",
	"Email",
	"Phone Number",
	"",
];

export const productContent = [
	{
		id: 1,
		first_name: "Jane ",
		last_name: " Cooper",
		email: "debra.holt@example.com",
		phone: "+1 (925) 727-5161",
	},
	{
		id: 2,
		first_name: "Jane ",
		last_name: " Cooper",
		email: "debra.holt@example.com",
		phone: "+1 (925) 727-5161",
	},
	{
		id: 3,
		first_name: "Jane ",
		last_name: " Cooper",
		email: "debra.holt@example.com",
		phone: "+1 (925) 727-5161",
	},
	{
		id: 4,
		first_name: "Jane ",
		last_name: " Cooper",
		email: "debra.holt@example.com",
		phone: "+1 (925) 727-5161",
	},
	{
		id: 5,
		first_name: "Jane ",
		last_name: " Cooper",
		email: "debra.holt@example.com",
		phone: "+1 (925) 727-5161",
	},
	{
		id: 6,
		first_name: "Jane ",
		last_name: " Cooper",
		email: "debra.holt@example.com",
		phone: "+1 (925) 727-5161",
	},
	{
		id: 7,
		first_name: "Jane ",
		last_name: " Cooper",
		email: "debra.holt@example.com",
		phone: "+1 (925) 727-5161",
	},
	{
		id: 8,
		first_name: "Jane ",
		last_name: " Cooper",
		email: "debra.holt@example.com",
		phone: "+1 (925) 727-5161",
	},
	{
		id: 9,
		first_name: "Jane ",
		last_name: " Cooper",
		email: "debra.holt@example.com",
		phone: "+1 (925) 727-5161",
	},
	{
		id: 10,
		first_name: "Jane ",
		last_name: " Cooper",
		email: "debra.holt@example.com",
		phone: "+1 (925) 727-5161",
	},
];

function SuccessModal({ close }) {
	return (
		<article>
			{/* Main modal */}
			<div className="relative w-full max-w-md h-screen md:h-auto mx-auto mt-14">
				{/* Modal content */}
				<div className="relative bg-white rounded-lg shadow pb-4">
					<div className="flex justify-between items-baseline px-6 py-3 rounded-t border-b">
						<div>
							<h3 className="text-lg font-bold text-gray-900">
								New Product Manager Add Successfully
							</h3>
						</div>
						<button
							type="button"
							onClick={close}
							className="text-gray-900 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
							data-modal-toggle="small-modal">
							<Close />
						</button>
					</div>
					<div className="py-3 px-5">
						<p className="text-base text-gray-600">
							You’ve successfully added to Durham system. Please check your
							email for verification.
						</p>
					</div>

					{/* Buttons */}
					<div className="mt-12 mr-5 flex gap-4 justify-end">
						<DashboardButton
							name="PROCEED"
							hidden
							width="78px"
							onClick={close}
						/>
					</div>
				</div>
			</div>
		</article>
	);
}

const ProductManagerForm = ({
	close,
	show,
	isLoading,
	removeShow,
	onSubmit,
	data,
	modalHeading: { heading, description, button },
}) => {
	const {
		values,
		errors,
		touched,
		handleChange,
		handleSubmit,
		handleReset,
		setValues,
	} = useFormik({
		initialValues: {
			first_name: "",
			last_name: "",
			email: "",
			phone: "",
		},
		validationSchema: AddProjectSchema,
		onSubmit,
	});
	const props = {
		email: {
			name: "Email Address",
			id: "email",
			placeholder: "Enter Address",
			value: values.email,
			onChange: handleChange,
			error: errors.email,
			touched: touched.email,
		},
		first_name: {
			name: "First Name",
			id: "first_name",
			placeholder: "First name",
			value: values.first_name,
			onChange: handleChange,
			error: errors.first_name,
			touched: touched.first_name,
		},
		last_name: {
			name: "Last Name",
			id: "last_name",
			placeholder: "Last Name",
			value: values.last_name,
			onChange: handleChange,
			error: errors.last_name,
			touched: touched.last_name,
		},
		number: {
			name: "Phone Number",
			id: "phone",
			placeholder: "Phone Number",
			value: values.phone,
			onChange: handleChange,
			error: errors.phone,
			touched: touched.phone,
		},
	};

	useEffect(() => {
		if (!data) return;
		setValues(data);
	}, [setValues, data]);

	const HandleClose = () => {
		close();
		handleReset();
	};

	const CloseReset = () => {
		close();
		removeShow();
		handleReset();
	};

	if (show) {
		return <SuccessModal close={CloseReset} />;
	}

	return (
		<div
			className="relative w-full max-w-lg h-screen md:h-auto mx-auto mt-14"
			onClick={(e) => e.stopPropagation()}>
			{/* Same as */}
			{/* Modal content */}
			<div className="relative bg-white w-[492px] rounded-lg shadow pb-4 md:pb-0">
				<div className="flex justify-between items-baseline px-6 py-3 rounded-t border-b">
					<div>
						<h3 className="text-lg font-bold text-gray-900">{heading}</h3>
						<h4 className="text-gray-700">{description}</h4>
					</div>
					<button
						type="button"
						className="text-gray-900 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
						data-modal-toggle="small-modal"
						onClick={HandleClose}>
						<Close />
					</button>
				</div>
				<div className="py-3 px-6 lg:px-8">
					<form className="space-y-6" onSubmit={handleSubmit}>
						<div>
							<DashboardInput {...props.first_name} />
						</div>
						<div>
							<DashboardInput {...props.last_name} />
						</div>
						<div>
							<DashboardInput {...props.email} />
						</div>
						<div>
							<DashboardInput {...props.number} />
						</div>

						{/* Buttons */}
						<div className="mt-24 flex gap-4 items-center justify-end">
							<ButtonWhiteBG
								name="cancel"
								onClick={HandleClose}
								disabled={isLoading ? true : false}
							/>
							<DashboardButton
								name={button}
								hidden
								type="submit"
								width=""
								loading={isLoading}
							/>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

/*********** ADD PROJECT MANAGER MODAL ************** */
export function AddPojectsManagerModal({ close }) {
	const dispatch = useDispatch();
	const [show, setShow] = useState(false);

	const [addProjectManager, { isLoading }] = useAddProjectManagerMutation();

	async function HandleRequest(values) {
		// const response = await addProjectManager({ ...values });

		const response = await supabase.from("project_manager").insert([values]);

		if (response) {
			console.log(response);
			if (response.error) {
				close();
				toast.error(response?.error?.message, {
					position: toast.POSITION.TOP_CENTER,
				});
			} else {
				setShow(true);
			}
		}
	}

	const props = {
		isLoading,
		show,
		close,
		removeShow: () => setShow(false),
		onSubmit: (values) => {
			dispatch(save_project_manager(values));
			HandleRequest(values);
		},
		modalHeading: {
			heading: "Add New Project Manager",
			description: "Add new project manager information",
			button: "ADD NEW PROJECT MANAGER",
		},
	};

	return <ProductManagerForm {...props} />;
}
/*********** EDIT PROJECT MANAGER MODAL ************** */
export function EditPojectsManagerModal({ close, data }) {
	const [show, setShow] = useState(false);
	const dispatch = useDispatch();

	const [updateProductManagerDetails, { isLoading }] =
		useUpdateProductManagerDetailsMutation();

	async function HandleRequest(values) {
		const response = await updateProductManagerDetails({
			...values,
		});
		if (response) {
			// console.log(response);
			close();
			if (response.error) {
				toast.error(response?.error?.data?.message, {
					position: toast.POSITION.TOP_CENTER,
				});
			} else {
				toast.success(response?.data?.message, {
					position: toast.POSITION.TOP_CENTER,
				});
			}
		}
	}

	const props = {
		isLoading,
		show,
		close,
		removeShow: () => setShow(false),
		data,
		onSubmit: (values) => {
			dispatch(save_project_manager(values));

			HandleRequest(values);
		},
		modalHeading: {
			heading: "Update Project Manager ",
			description: "Update project manager information",
			button: "UPDATE PROJECT MANAGER",
		},
	};

	return <ProductManagerForm {...props} />;
}

export function DeleteProjectModal({ close, HandleRequest, isLoading }) {
	return (
		<div
			className="relative w-full max-w-md h-screen bg-red-900 md:h-auto mx-auto mt-14"
			onClick={(e) => e.stopPropagation()}>
			{/* Modal content */}
			<div className="relative bg-white  rounded-lg shadow pb-4">
				<div className="flex justify-between items-baseline px-6 py-3 rounded-t border-b">
					<div>
						<h3 className="text-base font-extrabold text-gray-900">
							Are you sure you want to delete this Project Manager information?
						</h3>
					</div>
					<button
						type="button"
						className="text-gray-900 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
						data-modal-toggle="small-modal"
						onClick={close}>
						<Close />
					</button>
				</div>
				<div className="py-3 px-6 lg:px-8">
					<p className="text-base text-gray-600">
						Lorem ipsum dolor sit amet consectetur. Consectetur bibendum ut nec
						malesuada sit ante ultrices orci libero.
					</p>
				</div>

				{/* Buttons */}
				<div className="mt-2 mr-5 flex gap-4 justify-end">
					<ButtonWhiteBG name="no, cancel" />
					<ButtonRedBG
						name="yes, delete"
						onClick={HandleRequest}
						loading={isLoading}
					/>
				</div>
			</div>
		</div>
	);
}
