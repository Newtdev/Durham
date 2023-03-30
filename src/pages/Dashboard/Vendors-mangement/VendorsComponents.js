import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import Delete from "../../../assets/delete.svg";
import Edit from "../../../assets/edit.svg";
import { useAddVendorMutation } from "../../../features/services/api";
import { ButtonRedBG, ButtonWhiteBG } from "../../../ui";
import { AddVendorsSchema } from "../../../yup";
import {
	getList,
	getStates,
} from "../../forms/Advertisement-for-bid-template/reducer";
import { FormInputContainer } from "../../forms/Notice-of-intent-consultant/Forms";
import {
	Close,
	DashboardButton,
	DashboardInput,
	SelectContainer,
} from "../Components";
import { save_awardee } from "./vendorSlice";

export const VendorsHeader = [
	"Vendor ID",

	"Company Name",
	"Mailing Address",

	"",
];

export function VendorTableBody({ dataArray, onDelete, onEdit }) {
	return (
		<tbody className="text-xs h-[2rem] font-medium overflow-y-auto ">
			{console.log(dataArray)}
			{dataArray?.map((vendor, index) => {
				const {
					id,
					// first_name,
					// last_name,
					// title,
					company_name,
					city,
					state,
					zip_code,
					// president,
					// secretary,
					vendor_id,
					street,
				} = vendor;
				const strip = index % 2 !== 0 ? "bg-white" : "bg-gray-50";

				return (
					<tr key={id} className={`border-b ${strip}`}>
						<td className="py-3 px-4 font-normal text-gray-900 whitespace-nowrap">
							{!vendor_id ? "none" : vendor_id}
						</td>
						{/* <td className="py-3  font-normal text-gray-900 whitespace-nowrap">
							{first_name}
						</td> */}
						{/* <td className="py-3 font-normal text-gray-900 whitespace-nowrap">
							{last_name}
						</td> */}
						{/* <td className="py-4 px-4">{title}</td> */}
						<td className="py-4 px-4 whitespace-nowrap">{company_name}</td>
						<td className="py-4 px-4">{`${street}, ${city}, ${state}, ${zip_code}`}</td>
						{/* <td className="py-4 px-4 whitespace-nowrap">{president}</td> */}
						{/* <td className="py-4 px-4 whitespace-nowrap">{secretary}</td> */}
						{/* <td className="py-4 px-4 whitespace-nowrap">{industry}</td> */}
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
	modal_name,
	title,
}) => {
	const dispatch = useDispatch();

	useEffect(() => {
		(async function () {
			const response = await (await fetch("/states.json")).json();
			dispatch(getStates(response));
		})();
	}, [dispatch]);
	const states = useSelector(getList);

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
			name: "Street",
			id: "street",
			placeholder: "Street",
			value: values.street,
			onChange: handleChange,
			error: errors.street,
			touched: touched.street,
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
		vendor_id: {
			name: "Vendor ID",
			id: "vendor_id",
			placeholder: "Vendor ID",
			value: values.vendor_id,
			onChange: handleChange,
			error: errors.vendor_id,
			touched: touched.vendor_id,
		},
	};
	function CheckState() {
		if (!values.state) {
			return;
		}
		let stat = Object.values(states)?.find(
			(state) => state.name === values.state
		);

		return !stat
			? ""
			: Object.keys(stat.cities)?.map((cur, id) => {
					return (
						<option key={id} value={cur}>
							{cur}
						</option>
					);
			  });
	}

	function CheckZipCode() {
		if (!values.city) {
			return;
		}
		const city = !states
			? ""
			: Object.values(states)?.filter((state) => state.name === values.state);

		const zipcode = city?.find((cities) => cities);
		return !zipcode
			? ""
			: zipcode.cities[values.city]?.map((zipcode, index) => {
					return (
						<option key={index} value={zipcode}>
							{zipcode}
						</option>
					);
			  });
	}

	const HandleClose = () => {
		close();
		handleReset();
		onSuccessClose();
	};

	return (
		<div className="relative w-[490px] h-screen md:h-auto mx-auto mt-14">
			{/* Modal content */}
			<div className="relative bg-white rounded-lg shadow pb-4 md:pb-0">
				<div className="flex justify-between items-baseline px-6 py-3 rounded-t border-b">
					<div>
						<h3 className="text-lg font-bold text-gray-900">{modal_name}</h3>
						<h4 className="text-gray-700">{title}</h4>
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
								<DashboardInput {...props.vendor_id} />
							</div>
							<div>
								<DashboardInput {...props.address} />
							</div>
							<FormInputContainer name="State">
								<input
									list="states"
									name={`state`}
									value={values.state}
									onChange={handleChange}
									placeholder="Select State"
									className={`bg-white border border-gray-400 text-gray-500 text-sm rounded focus:outline-[#3B6979] focus:border-[#3B6979] block w-full p-2`}
								/>
								<datalist id="states">
									{!states
										? null
										: Object.entries(states).map((cur, index) => {
												return (
													<option key={index} value={cur[1].name}>
														{cur[1].name}
													</option>
												);
										  })}
								</datalist>
							</FormInputContainer>

							<FormInputContainer name="City">
								<input
									list="city"
									name={`city`}
									value={values.city}
									onChange={handleChange}
									placeholder="Select city"
									className={`bg-white border border-gray-400 text-gray-500 text-sm rounded focus:outline-[#3B6979] focus:border-[#3B6979] block w-full p-2`}
								/>
								<datalist id="city">{CheckState()}</datalist>
							</FormInputContainer>

							<FormInputContainer name="Zip code">
								<input
									list="zip_code"
									name={`zip_code`}
									value={values.zip_code}
									onChange={handleChange}
									placeholder="Select Zip Code"
									className={`bg-white border border-gray-400 text-gray-500 text-sm rounded focus:outline-[#3B6979] focus:border-[#3B6979] block w-full p-2`}
								/>
								<datalist id="zip_code">{CheckZipCode()}</datalist>
							</FormInputContainer>
							<div>
								<DashboardInput {...props.president} />
							</div>
							<div>
								<DashboardInput {...props.secretary} />
							</div>
							<div>
								{/* <SelectContainer {...props.industry}>
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
								</SelectContainer> */}
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
			// const response = await supabase.from("vendor").insert([value]);
			const response = await addVendor({ ...value });

			if (response) {
				close();

				if (response?.error) {
					close();
					toast.error(response?.error?.message, {
						position: toast.POSITION.TOP_CENTER,
					});
					// setShowSuccess(false)
				} else if (response?.data) {
					setSuccess(true);
					// onSuccess show the modal and ask the manager to login
				}
			}
		} catch (error) {}
	};

	const vendorInfo = {
		onSuccess: () => setSuccess(true),
		onSuccessClose: () => setSuccess(false),
		loading: isLoading,
		close,
		button_name: "ADD VENDOR",
		modal_name: "ADD VENDOR",
		title: "Add Vendor's information",
		initialValues: {
			title: "",
			first_name: "",
			last_name: "",
			company_name: "",
			address: "",
			state: "",
			city: "",
			zip_code: "",
			president: "",
			secretary: "",
			industry: "",
			vendor_id: "",
		},
		onSubmit: (values) => {
			dispatch(save_awardee(values));
			HandleRequest({ ...values, address: values.street });
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
		button_name: "SAVE",
		modal_name: "EDIT VENDOR",
		title: "Edit Vendor's information",
		loading: isLoading,
		initialValues: {
			title: "",
			first_name: "",
			last_name: "",
			company_name: "",
			address: "",
			state: "",
			city: "",
			zip_code: "",
			president: "",
			secretary: "",
			industry: "",
		},
		vendorInitValue,
		onSubmit: (values) => {
			handleRequest({ ...values, address: values.street });
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
						{/* <p className="text-base text-gray-600">
							Lorem ipsum dolor sit amet consectetur. Consectetur bibendum ut
							nec malesuada sit ante ultrices orci libero.
						</p> */}
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
							Are you sure you want to delete this vendor information?
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
					{/* <p className="text-base text-gray-600">
						Lorem ipsum dolor sit amet consectetur. Consectetur bibendum ut nec
						malesuada sit ante ultrices orci libero.
					</p> */}
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
