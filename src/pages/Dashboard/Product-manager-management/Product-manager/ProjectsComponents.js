import { useFormik } from "formik";
import { ButtonRedBG, ButtonWhiteBG } from "../../../../ui";
import { AddProjectSchema } from "../../../../yup";
import { Close, DashboardButton, DashboardInput } from "../../Components";

export const ProductHeader = ["Full Name", "Email", "Phone Number", ""];

export const productContent = [
	{
		id: 1,
		name: "Jane Cooper",
		email: "debra.holt@example.com",
		phone: "+1 625 724 8761",
	},
	{
		id: 2,
		name: "Jane Cooper",
		email: "debra.holt@example.com",
		phone: "+1 625 724 8761",
	},
	{
		id: 3,
		name: "Jane Cooper",
		email: "debra.holt@example.com",
		phone: "+1 625 724 8761",
	},
	{
		id: 4,
		name: "Jane Cooper",
		email: "debra.holt@example.com",
		phone: "+1 625 724 8761",
	},
	{
		id: 5,
		name: "Jane Cooper",
		email: "debra.holt@example.com",
		phone: "+1 625 724 8761",
	},
	{
		id: 6,
		name: "Jane Cooper",
		email: "debra.holt@example.com",
		phone: "+1 625 724 8761",
	},
	{
		id: 7,
		name: "Jane Cooper",
		email: "debra.holt@example.com",
		phone: "+1 625 724 8761",
	},
	{
		id: 8,
		name: "Jane Cooper",
		email: "debra.holt@example.com",
		phone: "+1 625 724 8761",
	},
	{
		id: 9,
		name: "Jane Cooper",
		email: "debra.holt@example.com",
		phone: "+1 625 724 8761",
	},
	{
		id: 10,
		name: "Jane Cooper",
		email: "debra.holt@example.com",
		phone: "+1 625 724 8761",
	},
];

export function AddPojectsManagerModal({ close }) {
	const {
		values,
		errors,
		touched,
		handleChange,
		handleSubmit,
		handleReset,
		isSubmitting,
	} = useFormik({
		initialValues: {
			name: "",
			email: "",
			phone: "",
		},
		validationSchema: AddProjectSchema,
		onSubmit: (values) => {
			console.log(values);
		},
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
		name: {
			name: "Full Name",
			id: "name",
			placeholder: "Full Name",
			value: values.name,
			onChange: handleChange,
			error: errors.name,
			touched: touched.name,
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

	const HandleClose = () => {
		close();
		handleReset();
	};

	return (
		<div
			className="relative w-full max-w-lg h-screen md:h-auto mx-auto mt-14"
			onClick={(e) => e.stopPropagation()}>
			{/* Modal content */}
			<div className="relative bg-white w-[492px] rounded-lg shadow pb-4 md:pb-0">
				<div className="flex justify-between items-baseline px-6 py-3 rounded-t border-b">
					<div>
						<h3 className="text-lg font-bold text-gray-900">
							Add New Project Manager
						</h3>
						<h4 className="text-gray-700">
							Add new project manager information
						</h4>
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
							<DashboardInput {...props.name} />
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
								disabled={isSubmitting ? true : false}
							/>
							<DashboardButton
								name="ADD NEW PROJECT MANAGER"
								hidden
								type="submit"
								width=""
								loading={isSubmitting}
							/>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}

export function DeleteProjectModal({ close }) {
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
					<ButtonRedBG name="yes, delete" />
				</div>
			</div>
		</div>
	);
}
