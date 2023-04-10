import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import Delete from "../../../assets/delete.svg";
import Edit from "../../../assets/edit.svg";
import { useAddSchoolMutation } from "../../../features/services/api";
import { ButtonRedBG, ButtonWhiteBG, Error } from "../../../ui";
import { AddSchoolSchema } from "../../../yup";
import {
	getList,
	getStates,
} from "../../forms/Advertisement-for-bid-template/reducer";
import { FormInputContainer } from "../../forms/Notice-of-intent-consultant/Forms";

import { Close, DashboardButton, DashboardInput } from "../Components";
import { save_awardee } from "../Vendors-mangement/vendorSlice";
// import { save_awardee } from "./vendorSlice";

export const VendorsHeader = [
	"School/Department",
	"Identifier Number",
	"Type",
	"Tag",
	"Mailing Address",
	"",
];

export function VendorTableBody({ dataArray, onDelete, onEdit }) {
	return (
		<tbody className="text-xs h-[2rem] font-medium overflow-y-auto ">
			{!dataArray && (
				<tr>
					<td className="py-3 px-4 font-normal text-gray-900 whitespace-nowrap"></td>
					<td className="py-3 px-4 font-normal text-gray-900 whitespace-nowrap"></td>
					<td className="py-3 px-4 font-normal text-gray-900 whitespace-nowrap">
						Loading Data...
					</td>
					<td className="py-3 px-4 font-normal text-gray-900 whitespace-nowrap"></td>
					<td className="py-3 px-4 font-normal text-gray-900 whitespace-nowrap"></td>
				</tr>
			)}

			{dataArray?.map((vendor, index) => {
				const { id, name, code, type, tag, address } = vendor;
				const strip = index % 2 !== 0 ? "bg-white" : "bg-gray-50";

				return (
					<tr key={id} className={`border-b ${strip}`}>
						{/* <td className="py-3 px-4 font-normal text-gray-900 whitespace-nowrap">
							{!vendor_id? 'none':vendor_id}
						</td> */}
						<td className="py-3 px-4 font-normal text-gray-900 whitespace-nowrap">
							{name}
						</td>
						<td className="py-3 px-4 font-normal text-gray-900 whitespace-nowrap">
							{code}
						</td>
						<td className="py-4 px-4">{type}</td>
						<td className="py-4 px-4 whitespace-nowrap">{tag}</td>
						<td className="py-4 px-4">{address}</td>

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
		validationSchema: AddSchoolSchema,

		onSubmit,
	});

	useEffect(() => {
		if (!vendorInitValue) return;
		setValues(vendorInitValue);
	}, [setValues, vendorInitValue]);

	const props = {
		name: {
			name: "School/Dept Name",
			id: "name",
			placeholder: "School/Dept Name",
			value: values?.name,
			onChange: handleChange,
			error: errors.name,
			touched: touched.name,
			// option: "together",
		},
		code: {
			name: "School/Dept Identifier",
			id: "code",
			placeholder: "Enter School Identifier Number",
			value: values.code,
			onChange: handleChange,
			error: errors.code,
			touched: touched.code,
		},
		type: {
			name: "Type of School",
			id: "type",
			placeholder: "Enter Type of School",
			value: values.type,
			onChange: handleChange,
			error: errors.type,
			touched: touched.type,
		},
		tag: {
			name: "Tag",
			id: "tag",
			placeholder: "Enter Tag",
			value: values.tag,
			onChange: handleChange,
			error: errors.tag,
			touched: touched.tag,
		},
		address: {
			name: "School Mailing Address",
			id: "address",
			placeholder: "Enter School Mailing Address",
			value: values.address,
			onChange: handleChange,
			error: errors.address,
			touched: touched.address,
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
			: zipcode?.cities[values.city]?.map((zipcode, index) => {
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
						<div className="h-[26rem] w-full overflow-x-hidden overflow-y-auto pr-2">
							<div>
								<DashboardInput {...props.name} />
							</div>
							<div>
								<DashboardInput {...props.code} />
							</div>
							<div>
								<DashboardInput {...props.type} />
							</div>
							<div>
								<DashboardInput {...props.tag} />
							</div>

							<div>
								<DashboardInput {...props.address} />
							</div>
							<div className="grid grid-cols-2 content-center justify-content-between gap-x-2">
								<FormInputContainer name="State">
									<input
										list="states"
										name={`state`}
										value={values.state}
										onChange={handleChange}
										placeholder="Search State"
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
									{errors.state && touched.state && (
										<Error message={errors.state} />
									)}
								</FormInputContainer>

								<FormInputContainer name="City">
									{modal_name === "EDIT SCHOOL" ? (
										<select
											value={values?.city}
											name="city"
											id="city"
											onChange={handleChange}
											className={`bg-white border border-gray-400 text-gray-500 text-sm rounded focus:outline-[#3B6979] focus:border-[#3B6979] block w-full p-2`}
											placeholder="Enter/Select City">
											<option value={values?.city}>{values?.city}</option>
											{CheckState()}
										</select>
									) : null}
									{modal_name !== "EDIT SCHOOL" ? (
										<>
											<input
												list="city"
												name={`city`}
												value={values.city}
												onChange={handleChange}
												placeholder="Search City"
												className={`bg-white border border-gray-400 text-gray-500 text-sm rounded focus:outline-[#3B6979] focus:border-[#3B6979] block w-full p-2`}
											/>
											<datalist id="city">{CheckState()}</datalist>
										</>
									) : null}
									{errors.city && touched.city && (
										<Error message={errors.city} />
									)}
								</FormInputContainer>
							</div>

							<FormInputContainer name="Zip code">
								{modal_name !== "EDIT SCHOOL" ? (
									<>
										<input
											list="zip_code"
											name={`zip_code`}
											value={values?.zip_code}
											onChange={handleChange}
											placeholder="Select Zip Code"
											className={`bg-white border border-gray-400 text-gray-500 text-sm rounded focus:outline-[#3B6979] focus:border-[#3B6979] block w-full p-2`}
										/>
										<datalist id="zip_code">{CheckZipCode()}</datalist>
									</>
								) : null}
								{modal_name === "EDIT SCHOOL" ? (
									<select
										value={values?.zip_code}
										name="zip_code"
										id="zip_code"
										onChange={handleChange}
										className={`bg-white border border-gray-400 text-gray-500 text-sm rounded focus:outline-[#3B6979] focus:border-[#3B6979] block w-full p-2`}
										placeholder="Enter/Select City">
										<option value={values?.zip_code}>{values?.zip_code}</option>
										{CheckZipCode()}
									</select>
								) : null}
							</FormInputContainer>
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
	const [addSchool, { isLoading }] = useAddSchoolMutation();

	const HandleRequest = async (value) => {
		try {
			// const response = await supabase.from("vendor").insert([value]);
			const response = await addSchool({ ...value });

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
		} catch (error) {}
	};

	const vendorInfo = {
		onSuccess: () => setSuccess(true),
		onSuccessClose: () => setSuccess(false),
		loading: isLoading,
		close,
		button_name: "ADD SCHOOL",
		modal_name: "ADD SCHOOL",
		title: "Add school’s information below",
		initialValues: {
			name: "",
			level: "",
			code: "",
			type: "",
			tag: "",
			address: "",
			state: "",
			city: "",
			zip_code: "",
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
				name="New School Added Successfully"
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
							You've successfully added the new school ot the system
						</p>
					</div>

					{/* Buttons */}
					<div className="mt-12 mr-5 flex gap-4 justify-end">
						<DashboardButton
							name="PROCEED"
							onClick={() => {
								close();
								reset();
							}}
							hidden
							width="78px"
						/>
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
		modal_name: "EDIT SCHOOL",
		title: "Edit school’s information below",
		loading: isLoading,
		initialValues: {
			name: "",
			level: "",
			code: "",
			type: "",
			tag: "",
			address: "",
			state: "",
			city: "",
		},
		vendorInitValue,
		onSubmit: (values) => {
			handleRequest(values);
			dispatch(save_awardee(values));
		},
	};

	return <VendorInformationComponents {...vendorInfo} />;
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
							Are you sure you want to delete school information?
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
