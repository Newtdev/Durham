import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import Delete from "../../../assets/delete.svg";
import Edit from "../../../assets/edit.svg";
import { useAddVendorMutation } from "../../../features/services/api";
import { supabase } from "../../../lib/supabase";
import { ButtonRedBG, ButtonWhiteBG, FullPageLoader } from "../../../ui";
import { AddVendorsSchema } from "../../../yup";
import {
	Close,
	DashboardButton,
	DashboardInput,
	SelectContainer,
} from "../Components";
import { save_awardee } from "./vendorSlice";

export const VendorsHeader = [
	"First name",
	"Last name",
	"Title",
	"Company Name",
	"Address",
	"President/Vp",
	"Secretary",
	"Industry",
	"",
];

export const VendorsContent = [
	{
		id: 1,
		first_name: "John",
		last_name: "Doe",
		title: "Manager",
		company_name: "Big Kahuna Burger Ltd.",
		address: "1901 Thornridge Cir. Shiloh, Hawaii 81063",
		president: "Marvin McKinney",
		secretary: "Esther Howard",
		industry: "Engineering",
	},
	{
		id: 2,
		first_name: "John",
		last_name: "Doe",
		title: "Manager",
		company_name: "Big Kahuna Burger Ltd.",
		address: "1901 Thornridge Cir. Shiloh, Hawaii 81063",
		president: "Marvin McKinney",
		secretary: "Esther Howard",
		industry: "Design Consultant",
	},
	{
		id: 3,
		first_name: "John",
		last_name: "Doe",
		title: "Manager",
		company_name: "Big Kahuna Burger Ltd.",
		address: "1901 Thornridge Cir. Shiloh, Hawaii 81063",
		president: "Marvin McKinney",
		secretary: "Esther Howard",
		industry: "Design Consultant",
	},
	{
		id: 4,
		first_name: "John",
		last_name: "Doe",
		title: "Manager",
		company_name: "Big Kahuna Burger Ltd.",
		address: "1901 Thornridge Cir. Shiloh, Hawaii 81063",
		president: "Marvin McKinney",
		secretary: "Esther Howard",
		industry: "Design Consultant",
	},
	{
		id: 5,
		first_name: "John",
		last_name: "Doe",
		title: "Manager",
		company_name: "Big Kahuna Burger Ltd.",
		address: "1901 Thornridge Cir. Shiloh, Hawaii 81063",
		president: "Marvin McKinney",
		secretary: "Esther Howard",
		industry: "Design Consultant",
	},
	{
		id: 6,
		first_name: "John",
		last_name: "Doe",
		title: "Manager",
		company_name: "Big Kahuna Burger Ltd.",
		address: "1901 Thornridge Cir. Shiloh, Hawaii 81063",
		president: "Marvin McKinney",
		secretary: "Esther Howard",
		industry: "Design Consultant",
	},
	{
		id: 7,
		first_name: "John",
		last_name: "Doe",
		title: "Manager",
		company_name: "Big Kahuna Burger Ltd.",
		address: "1901 Thornridge Cir. Shiloh, Hawaii 81063",
		president: "Marvin McKinney",
		secretary: "Esther Howard",
		industry: "Design Consultant",
	},
	{
		id: 8,
		first_name: "John",
		last_name: "Doe",
		title: "Manager",
		company_name: "Big Kahuna Burger Ltd.",
		address: "1901 Thornridge Cir. Shiloh, Hawaii 81063",
		president: "Marvin McKinney",
		secretary: "Esther Howard",
		industry: "Design Consultant",
	},
	{
		id: 9,
		first_name: "John",
		last_name: "Doe",
		title: "Manager",
		company_name: "Big Kahuna Burger Ltd.",
		address: "1901 Thornridge Cir. Shiloh, Hawaii 81063",
		president: "Marvin McKinney",
		secretary: "Esther Howard",
		industry: "Design Consultant",
	},
];

export function VendorTableBody({ dataArray, onDelete, onEdit }) {
	const [data, setData] = useState([]);
	const [request, setRequest] = useState(true);
	useEffect(() => {
		async function getData() {
			const response = await supabase.from("vendor").select("*");
			console.log(response);
			if (response) {
				setData(response.data);
				setRequest(false);
			}
		}
		getData();
	}, []);

	return (
		<tbody className="text-xs h-[2rem] font-medium overflow-y-auto ">
			{request && <FullPageLoader />}

			{data?.map((vendor) => {
				const {
					id,
					first_name,
					last_name,
					title,
					company_name,
					address,
					president,
					secretary,
					industry,
				} = vendor;
				// const strip = id % 2 === 0 ? "bg-white" : "bg-gray-50";

				return (
					<tr key={id} className={`border-b`}>
						<td className="py-3 px-4 font-normal text-gray-900 whitespace-nowrap">
							{first_name}
						</td>
						<td className="py-3 px-4 font-normal text-gray-900 whitespace-nowrap">
							{last_name}
						</td>
						<td className="py-4 px-4">{title}</td>
						<td className="py-4 px-4 whitespace-nowrap">{company_name}</td>
						<td className="py-4 px-4 whitespace-wrap">{address}</td>
						<td className="py-4 px-4 whitespace-nowrap">{president}</td>
						<td className="py-4 px-4 whitespace-nowrap">{secretary}</td>
						<td className="py-4 px-4 whitespace-nowrap">{industry}</td>
						<td className="py-4 px-4 flex items-center justify-start gap-3">
							<span className="w-4 cursor-pointer" onClick={() => onDelete(id)}>
								<img className="w-full" src={Delete} alt="delete" />
							</span>
							<span
								className="w-4 cursor-pointer"
								onClick={() => onEdit(vendor)}>
								<img className="w-full" src={Edit} alt="edit" />
							</span>
						</td>
					</tr>
				);
			})}
		</tbody>
	);
}

/**********VENDOR INFORMATION COMPONENTS************/

const VendorInformationComponents = ({
	close,
	onSuccess,
	onSuccessClose,
	button_name,
	initialValues,
	onSubmit,
	loading,
	vendorInitValue,
}) => {
	const {
		values,
		errors,
		touched,
		handleChange,
		handleSubmit,
		isSubmitting,
		handleReset,
		setValues,
	} = useFormik({
		initialValues,
		validateOnChange: true,
		validationSchema: AddVendorsSchema,

		onSubmit,
	});

	useEffect(() => {
		if (!vendorInitValue) return;
		setValues(vendorInitValue);
	}, [setValues, vendorInitValue]);

	const props = {
		title: {
			name: "Representative Title",
			id: "title",
			placeholder: "Representative Title",
			value: values.title,
			onChange: handleChange,
			error: errors.title,
			touched: touched.title,
			option: "together",
		},
		first_name: {
			name: "Representative First Name",
			id: "first_name",
			placeholder: "Representative First Name",
			value: values.first_name,
			onChange: handleChange,
			error: errors.first_name,
			touched: touched.first_name,
		},
		last_name: {
			name: "Representative Last Name",
			id: "last_name",
			placeholder: "Representative Last Name",
			value: values.last_name,
			onChange: handleChange,
			error: errors.last_name,
			touched: touched.last_name,
		},
		company_name: {
			name: "Company Name",
			id: "company_name",
			placeholder: "Company Name",
			value: values.company_name,
			onChange: handleChange,
			error: errors.company_name,
			touched: touched.company_name,
		},
		address: {
			name: "Company Address",
			id: "address",
			placeholder: "Ccompany Address",
			value: values.address,
			onChange: handleChange,
			error: errors.address,
			touched: touched.address,
		},
		president: {
			name: "President/VP",
			id: "president",
			placeholder: "President/VP",
			value: values.president,
			onChange: handleChange,
			error: errors.president,
			touched: touched.president,
		},
		secretary: {
			name: "Secretary",
			id: "secretary",
			placeholder: "Secretary",
			value: values.secretary,
			onChange: handleChange,
			error: errors.secretary,
			touched: touched.secretary,
		},
		industry: {
			name: "Industry",
			id: "industry",
			placeholder: "Industry",
			value: values.industry,
			onChange: handleChange,
			error: errors.industry,
			touched: touched.industry,
		},
	};

	const HandleClose = () => {
		close();
		handleReset();
		onSuccessClose();
	};

	return (
		<div className="relative w-[490px] h-screen md:h-auto mx-auto mt-14">
			{/* Modal content */}
			{console.log(values)}
			<div className="relative bg-white rounded-lg shadow pb-4 md:pb-0">
				<div className="flex justify-between items-baseline px-6 py-3 rounded-t border-b">
					<div>
						<h3 className="text-lg font-bold text-gray-900">{button_name}</h3>
						<h4 className="text-gray-700">Add Vendor's information</h4>
					</div>
					<button
						onClick={HandleClose}
						disabled={isSubmitting ? true : false}
						type="button"
						className="text-gray-900 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
						data-modal-toggle="small-modal">
						<Close />
					</button>
				</div>
				<div className="py-3 px-6 lg:px-8">
					<form className="space-y-6 " onSubmit={handleSubmit}>
						<div className="h-[30rem] w-full overflow-x-hidden overflow-y-auto pr-2">
							<div>
								{/* <SelectContainer {...props.title}>
									<option value="">Select Representative Title</option>

									{["MR.", "MRS", "MISS"].map((cur, index) => (
										<option key={index}>{cur}</option>
									))}
								</SelectContainer> */}
								<DashboardInput {...props.title} />
							</div>
							<div>
								<DashboardInput {...props.first_name} />
							</div>
							<div>
								<DashboardInput {...props.last_name} />
							</div>
							<div>
								<DashboardInput {...props.company_name} />
							</div>
							<div>
								<DashboardInput {...props.address} />
							</div>
							<div>
								<DashboardInput {...props.president} />
							</div>
							<div>
								<DashboardInput {...props.secretary} />
							</div>
							<div>
								<SelectContainer {...props.industry}>
									<option value={!values.industry ? "" : values.industry}>
										{!values.industry ? "Select Industry" : values.industry}
									</option>
									{[
										"Design Consultant",
										"Contractor",
										"Engineer",
										"Construction Manager",
									].map((cur, index) => (
										<option value={cur} key={index}>
											{cur}
										</option>
									))}
								</SelectContainer>
							</div>
						</div>

						{/* Buttons */}
						<div className="mt-24 flex gap-4 justify-end items-center">
							<ButtonWhiteBG
								name="cancel"
								// onClick={onSuccess}
								onClick={HandleClose}
								disabled={loading}
							/>

							<DashboardButton
								name={button_name}
								hidden
								type="submit"
								loading={loading}
								width="w-[136px]"
							/>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};
/**********ADD VENDOR************/
export function AddVendor({ close }) {
	const dispatch = useDispatch();
	const [success, setSuccess] = useState(false);
	const [addVendor, { isLoading }] = useAddVendorMutation();

	const HandleRequest = async (value) => {
		try {
			const response = await supabase.from("vendor").insert([value]);
			console.log(response);
			// const response = await addVendor({ ...value });
			if (!response?.error) {
				toast.error("Vendor added successfully", {
					position: toast.POSITION.TOP_CENTER,
				});
				setSuccess(true);
			} else {
				toast.error(response?.error, {
					position: toast.POSITION.TOP_CENTER,
				});
				close();
			}
			// if (response?.error) {
			// 	console.log(response?.error);
			// 	close();
			// 	toast.error(response?.error?.message, {
			// 		position: toast.POSITION.TOP_CENTER,
			// 	});
			// 	// setShowSuccess(false)
			// } else if (response?.data) {
			// 	setSuccess(true);
			// 	// onSuccess show the modal and ask the manager to login
			// }
		} catch (error) {
			console.log(error);
		}
	};

	const vendorInfo = {
		onSuccess: () => setSuccess(true),
		onSuccessClose: () => setSuccess(false),
		loading: isLoading,
		close,
		button_name: "ADD VENDOR",
		initialValues: {
			title: "",
			first_name: "",
			last_name: "",
			company_name: "",
			address: "",
			president: "",
			secretary: "",
			industry: "",
		},
		onSubmit: (values) => {
			dispatch(save_awardee(values));
			HandleRequest(values);
		},
	};

	if (success) {
		return (
			<SuccessModal
				close={vendorInfo.close}
				reset={vendorInfo.onSuccessClose}
				name="New Vendor Added Successfully"
			/>
		);
	}
	return <VendorInformationComponents {...vendorInfo} />;
}

/************SUCCESS MODAL******************* */

export function SuccessModal({ close, reset, name }) {
	return (
		<article>
			{/* Main modal */}
			<div className="relative w-full max-w-md h-screen md:h-auto mx-auto mt-14">
				{/* Modal content */}
				<div className="relative bg-white rounded-lg shadow pb-4">
					<div className="flex justify-between items-baseline px-6 py-3 rounded-t border-b">
						<div>
							<h3 className="text-lg font-bold text-gray-900">{name}</h3>
						</div>
						<button
							type="button"
							onClick={() => {
								close();
								reset();
							}}
							className="text-gray-900 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
							data-modal-toggle="small-modal">
							<Close />
						</button>
					</div>
					<div className="py-3 px-5">
						<p className="text-base text-gray-600">
							You’ve successfully added to Durham system. Please inform them to
							check their email for their log in information.
						</p>
					</div>

					{/* Buttons */}
					<div className="mt-12 mr-5 flex gap-4 justify-end">
						<DashboardButton name="PROCEED" hidden width="78px" />
					</div>
				</div>
			</div>
		</article>
	);
}

/*****EDIT VENDOR INFORMATION******* */
export function EditVendorModal({
	close,
	vendorInitValue,
	handleRequest,
	isLoading,
}) {
	const [showVendorInfo, setShowVendorInfo] = useState(false);
	const dispatch = useDispatch();
	const vendorInfo = {
		onSuccess: () => setShowVendorInfo(true),
		onSuccessClose: () => setShowVendorInfo(false),
		close,
		button_name: "EDIT VENDOR",
		loading: isLoading,
		initialValues: {
			title: "",
			first_name: "",
			last_name: "",
			company_name: "",
			address: "",
			president: "",
			secretary: "",
			industry: "",
		},
		vendorInitValue,
		onSubmit: (values) => {
			handleRequest(values);
			dispatch(save_awardee(values));
		},
	};

	if (showVendorInfo) {
		return <VendorInformationComponents {...vendorInfo} />;
	}

	return (
		<article>
			{/* Main modal */}

			<div className="relative w-full max-w-md h-screen md:h-auto mx-auto mt-14">
				{/* Modal content */}
				<div className="relative bg-white rounded-lg shadow pb-4">
					<div className="flex justify-between items-baseline px-6 py-3 rounded-t border-b">
						<div>
							<h3 className="text-lg font-bold text-gray-900">
								Are you sure you want to edit this vendor’s information?
							</h3>
						</div>
						<button
							onClick={close}
							type="button"
							className="text-gray-900 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
							data-modal-toggle="small-modal">
							<Close />
						</button>
					</div>
					<div className="py-3 px-6 lg:px-8">
						<p className="text-base text-gray-600">
							Lorem ipsum dolor sit amet consectetur. Consectetur bibendum ut
							nec malesuada sit ante ultrices orci libero.
						</p>
					</div>

					{/* Buttons */}
					<div className="mt-2 mr-5 flex gap-4 justify-end items-center">
						<ButtonWhiteBG name="NO, CANCEL" onClick={close} />
						<DashboardButton
							name="YES, EDIT"
							hidden
							width="78px"
							onClick={vendorInfo.onSuccess}
						/>
					</div>
				</div>
			</div>
		</article>
	);
}

export function DeleteVendorModal({ close, onClick, isLoading }) {
	return (
		<div
			className="relative w-full max-w-md md:h-auto mx-auto mt-14"
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
					<ButtonWhiteBG name="no, cancel" onClick={close} />
					<ButtonRedBG
						name="yes, delete"
						onClick={onClick}
						loading={isLoading}
					/>
				</div>
			</div>
		</div>
	);
}