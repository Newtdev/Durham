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
		if (!stat) {
			return;
		}
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
				}
			});
		}
	}, [focus, props.values, vendor]);
	return (
		<div>
			<div
				className="relative w-full max-w-md h-screen md:h-auto mx-auto mt-14"
				onClick={(e) => e.stopPropagation()}>
				<form
					className="relative w-[600px] bg-white rounded-lg shadow py-1"
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

								<div className="flex gap-2 mt-4 justify-center items-end">
									<input
										list="states"
										id="addressState"
										value={props?.values?.addressState}
										error={props.errors.addressState}
										touched={props.touched.addressState}
										onChange={props.handleChange}
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
									<input
										list="city"
										id="addressCity"
										value={props?.values?.addressCity}
										error={props.errors.addressCity}
										touched={props.touched.addressCity}
										onChange={props.handleChange}
										className={`bg-white border border-gray-400 text-gray-500 text-sm rounded focus:outline-[#3B6979] focus:border-[#3B6979] block w-full p-2`}
										placeholder="Select City"
									/>
									<datalist id="city">{CheckAddressState()}</datalist>
									<input
										list="zip_code"
										id="addressZipCode"
										value={props?.values?.addressZipCode}
										error={props.errors.addressZipCode}
										touched={props.touched.addressZipCode}
										onChange={props.handleChange}
										className={`bg-white border border-gray-400 text-gray-500 text-sm rounded focus:outline-[#3B6979] focus:border-[#3B6979] block w-full p-2 `}
										placeholder="Select Zip Code"
									/>
									<datalist id="zip_code">{CheckAddressZipCode()}</datalist>
									{/* <FormSelect
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
									</FormSelect> */}
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
								<div className="flex gap-2 mt-4 justify-center items-end">
									<input
										list="states"
										value={props?.values?.state}
										id="state"
										error={props.errors.state}
										touched={props.touched.state}
										onChange={props.handleChange}
										className={`bg-white border border-gray-400 text-gray-500 text-sm rounded focus:outline-[#3B6979] focus:border-[#3B6979] block w-full p-2 `}
										placeholder="Select State"
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

									<input
										list="cities"
										value={props?.values?.city}
										id="city"
										error={props.errors.city}
										touched={props.touched.city}
										onChange={props.handleChange}
										className={`bg-white border border-gray-400 text-gray-500 text-sm rounded focus:outline-[#3B6979] focus:border-[#3B6979] block w-full p-2`}
										placeholder="Select City"
									/>
									<datalist id="cities">{CheckState()}</datalist>

									<input
										list="zcode"
										id="zipCode"
										value={props?.values?.zipCode}
										error={props?.errors.zipCode}
										touched={props?.touched.zipCode}
										onChange={props?.handleChange}
										className={`bg-white border border-gray-400 text-gray-500 text-sm rounded focus:outline-[#3B6979] focus:border-[#3B6979] block w-full p-2 `}
										placeholder="Select Zip Code"
									/>
									<datalist id="zcode">{CheckZipCode()}</datalist>
									{/* <FormSelect
										id="zipCode"
										value={props?.values?.zipCode}
										error={props?.errors.zipCode}
										touched={props?.touched.zipCode}
										onChange={props?.handleChange}
										>
										{!props?.values?.zipCode ? (
											<option value="">Select zip code</option>
										) : (
											<option value={props?.values?.zipCode}>
												{props?.values?.zipCode}
											</option>
										)}
										{CheckZipCode()}
									</FormSelect> */}
								</div>
							</FormInputContainer>
							{/* <FormSelect
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
							</FormSelect> */}
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
