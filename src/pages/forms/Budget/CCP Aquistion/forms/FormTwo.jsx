import { FieldArray } from "formik";
import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ButtonWhiteBG, Error } from "../../../../../ui";
import { Close, DashboardButton } from "../../../../Dashboard/Components";
import { getList } from "../../../Advertisement-for-bid-template/reducer";
import { FormSelect, FormInputPlain } from "../../../components";
import { FormInputContainer } from "../../../Notice-of-intent-consultant/Forms";
import { closeModal } from "../../../reducer";
import { prevStep } from "../reducer";
import { useGetVendorsQuery } from "../../../../../features/services/api";
import { useState } from "react";
import { useEffect } from "react";
import { location } from "../../../../../lib/data";

const FormTwo = (props) => {
	const dispatch = useDispatch();
	const states = useSelector(getList);
	const vendors = useGetVendorsQuery({ queryValue: "" });
	const vendor = vendors?.data?.data?.data;
	const [focus, setShow] = useState(false);

	const showVendor = () => {
		if (!vendors?.data) return null;
		return vendor?.map((vendor, index) => {
			return (
				<option key={index} value={vendor.company_name}>
					{vendor.company_name}
				</option>
			);
		});
	};

	function CheckAddressState() {
		if (!props.values.addressState) {
			return;
		}
		let stat = Object.values(states)?.find(
			(state) => state.name === props.values.addressState
		);

		if (!stat) {
			return;
		}
		return Object.keys(stat.cities)?.map((cur, id) => {
			return (
				<option key={id} value={cur}>
					{cur}
				</option>
			);
		});
	}

	function CheckAddressZipCode() {
		if (!props.values.addressCity) {
			return;
		}
		const city = Object.values(states)?.filter(
			(state) => state.name === props.values.addressState
		);
		const zipcode = city?.find((cities) => cities);
		return zipcode?.cities[props.values.addressCity]?.map((zipcode, index) => {
			return (
				<option key={index} value={zipcode}>
					{zipcode}
				</option>
			);
		});
	}

	function CheckState() {
		if (!props.values.state) {
			return;
		}
		let stat = Object.values(states)?.find(
			(state) => state.name === props.values.state
		);

		return Object.keys(stat?.cities)?.map((cur, id) => {
			return (
				<option key={id} value={cur}>
					{cur}
				</option>
			);
		});
	}

	function CheckZipCode() {
		if (!props.values.city) {
			return;
		}
		const city = Object.values(states)?.filter(
			(state) => state.name === props.values.state
		);
		const zipcode = city?.find((cities) => cities);
		return zipcode?.cities[props.values.city]?.map((zipcode, index) => {
			return (
				<option key={index} value={zipcode}>
					{zipcode}
				</option>
			);
		});
	}

	useEffect(() => {
		if (!focus) {
		} else {
			vendor?.forEach((cur) => {
				if (cur?.company_name === props?.values?.vendor) {
					props.values.companyName = cur?.company_name;
					props.values.vendorId = cur?.vendor_id;
					props.values.addressState = cur?.state;
					props.values.addressCity = cur?.city;
					props.values.addressStreet = cur?.street;
					props.values.addressZipCode = cur?.zip_code;
					// data.values.information[index].city = cur.city;
					// data.values.information[index].state = cur.state;
					// data.values.information[index].zip_code = cur.zip_code;
				}
				// else if (
				// 	// cur.company_name !== data.values.information[index].selectVendor
				// )
				// {
				// 	return;
				// 	// data.setFieldValue(`information.${index}.company_name`, "");
				// }
			});
		}
	}, [focus, props.values, vendor]);
	return (
		<div>
			<div
				className="relative w-full max-w-md h-screen md:h-auto mx-auto mt-14"
				onClick={(e) => e.stopPropagation()}>
				<form
					className="relative w-[600px] bg-white rounded-lg shadow py-4"
					onSubmit={props.handleSubmit}>
					<div className="flex justify-between items-baseline mx-6">
						<div>
							<h3 className="text-lg font-bold text-gray-900">
								CCP Requisition - MODIFIED 4-22-22FM
							</h3>
							<p className="text-base text-gray-700">
								Vendor and Shipping details
							</p>
						</div>
						<button
							onClick={() => dispatch(closeModal())}
							type="button"
							className="text-gray-900 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
							data-modal-toggle="small-modal">
							<Close />
						</button>
					</div>

					<div className="w-full bg-[#89A5AF] h-2.5 my-4">
						<div className="bg-[#2F5461] h-2.5 w-2/3"></div>
					</div>

					<div className="flex flex-col mx-6 mb-12">
						<div className="flex flex-col mx-6 mb-12">
							<FormSelect
								value={props?.values?.vendor}
								name="Select Vendor"
								id="vendor"
								error={props.errors.vendor}
								touched={props.touched.vendor}
								onChange={(e) => {
									if (e.target.value === "Add New Vendor") {
										setShow(false);
										props.setFieldValue("vendor", "");
									} else {
										setShow(true);
										props.setFieldValue("vendor", e.target.value);
									}
								}}>
								{!props?.values?.vendor ? (
									<option value="">Select vendor</option>
								) : (
									<option value={props?.values?.vendor}>
										{props?.values?.vendor}
									</option>
								)}
								{showVendor()}
								<option value="">Add New Vendor</option>
							</FormSelect>
							<div className="pt-4">
								<FormInputContainer name="Vendor ID.">
									<FormInputPlain
										value={props?.values?.vendorId}
										type={"text"}
										onChange={props.handleChange}
										name="vendorId"
										placeholder={"Enter Vendor ID"}
									/>
									{props.errors.vendorId && props.touched.vendorId && (
										<Error message={props.errors.vendorId} />
									)}
								</FormInputContainer>
							</div>
							<FormInputContainer name="Company Name">
								<FormInputPlain
									type={"text"}
									value={props?.values?.companyName}
									onChange={props.handleChange}
									name="companyName"
									placeholder={"Name"}
								/>
								{props.errors.companyName && props.touched.companyName && (
									<Error message={props.errors.companyName} />
								)}
							</FormInputContainer>
							<FormInputContainer name="Address">
								<FormInputPlain
									type={"text"}
									value={props?.values?.addressStreet}
									onChange={props.handleChange}
									name="addressStreet"
									placeholder={"Street"}
								/>
								{props.errors.addressStreet && props.touched.addressStreet && (
									<Error message={props.errors.addressStreet} />
								)}
								<div className="flex gap-2 justify-center items-end">
									{console.log(props.values.addressState)}
									<FormSelect
										id="addressState"
										value={props?.values?.addressState}
										error={props.errors.addressState}
										touched={props.touched.addressState}
										onChange={props.handleChange}>
										{!props?.values?.addressState ? (
											<option value="">Select State</option>
										) : (
											<option value={props?.values?.addressState}>
												{props?.values?.addressState}
											</option>
										)}
										{!states
											? null
											: Object.entries(states).map((cur, index) => {
													return (
														<option key={index} value={cur[1].name}>
															{cur[1].name}
														</option>
													);
											  })}
									</FormSelect>
									<FormSelect
										id="addressCity"
										value={props?.values?.addressCity}
										error={props.errors.addressCity}
										touched={props.touched.addressCity}
										onChange={props.handleChange}>
										{!props?.values?.addressCity ? (
											<option value="">Select CitaddressCity</option>
										) : (
											<option value={props?.values?.addressCity}>
												{props?.values?.addressCity}
											</option>
										)}
										{CheckAddressState()}
									</FormSelect>
									<FormSelect
										id="addressZipCode"
										value={props?.values?.addressZipCode}
										error={props.errors.addressZipCode}
										touched={props.touched.addressZipCode}
										onChange={props.handleChange}>
										{!props?.values?.addressZipCode ? (
											<option value="">Select zip code</option>
										) : (
											<option value={props?.values?.addressZipCode}>
												{props?.values?.addressZipCode}
											</option>
										)}
										{CheckAddressZipCode()}
									</FormSelect>
								</div>
							</FormInputContainer>
							<FormInputContainer name="Enter the persons name for the ATTN field.">
								<FormInputPlain
									type={"text"}
									value={props?.values?.name}
									onChange={props.handleChange}
									name="name"
									placeholder={"Enter Name"}
								/>
								{props.errors.name && props.touched.name && (
									<Error message={props.errors.name} />
								)}
							</FormInputContainer>
							<FormInputContainer name="Enter the Shipping address.">
								<div className="flex flex-col">
									<FormInputPlain
										type={"text"}
										onChange={props.handleChange}
										name="street"
										value={props?.values?.street}
										placeholder={"Street"}
									/>
									{props.errors.street && props.touched.street && (
										<Error message={props.errors.street} />
									)}
								</div>
								<div className="flex gap-2 justify-center items-end">
									<FormSelect
										value={props?.values?.vendor}
										id="state"
										error={props.errors.state}
										touched={props.touched.state}
										onChange={props.handleChange}>
										{!props?.values?.state ? (
											<option value="">Select state</option>
										) : (
											<option value={props?.values?.state}>
												{props?.values?.state}
											</option>
										)}
										{!states
											? null
											: Object.entries(states).map((cur, index) => {
													return (
														<option key={index} value={cur[1].name}>
															{cur[1].name}
														</option>
													);
											  })}
									</FormSelect>

									<FormSelect
										value={props?.values?.vendor}
										id="city"
										error={props.errors.city}
										touched={props.touched.city}
										onChange={props.handleChange}>
										{!props?.values?.city ? (
											<option value="">Select city</option>
										) : (
											<option value={props?.values?.city}>
												{props?.values?.city}
											</option>
										)}
										{CheckState()}
									</FormSelect>

									<FormSelect
										id="zipCode"
										value={props?.values?.zipCode}
										error={props?.errors.zipCode}
										touched={props?.touched.zipCode}
										onChange={props?.handleChange}>
										{!props?.values?.zipCode ? (
											<option value="">Select zip code</option>
										) : (
											<option value={props?.values?.zipCode}>
												{props?.values?.zipCode}
											</option>
										)}
										{CheckZipCode()}
									</FormSelect>
								</div>
							</FormInputContainer>
							<FormSelect
								value={props?.values?.vendor}
								id="location"
								error={props?.errors.location}
								touched={props?.touched.location}
								name="Select Location"
								onChange={props.handleChange}>
								{!props?.values?.location ? (
									<option value="">Select Location</option>
								) : (
									<option value={props?.values?.location}>
										{props?.values?.location}
									</option>
								)}

								{location?.map((location) => {
									return (
										<option key={location?.id} value={location?.name}>
											{location?.name}
										</option>
									);
								})}
							</FormSelect>
						</div>

						<div className="flex justify-end gap-8 pr-4">
							<ButtonWhiteBG
								width="w-[100px]"
								name="Previous"
								onClick={() => dispatch(prevStep(1))}
							/>
							<DashboardButton
								hidden
								name="NEXT"
								type="submit"
								width="w-[77px]"
							/>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
};

export default FormTwo;
