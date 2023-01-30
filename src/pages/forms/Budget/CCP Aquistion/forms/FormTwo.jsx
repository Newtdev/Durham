import { FieldArray } from "formik";
import { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useGetVendorsQuery } from "../../../../../features/services/api";
import { ButtonWhiteBG, Error } from "../../../../../ui";
import { Close, DashboardButton } from "../../../../Dashboard/Components";
import { getList } from "../../../Advertisement-for-bid-template/reducer";
import { FormSelect, FormInputPlain } from "../../../components";
import { FormInputContainer } from "../../../Notice-of-intent-consultant/Forms";
import { closeModal } from "../../../reducer";
import { SelectComponent } from "../Component";
import { prevStep } from "../reducer";

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

	function CheckState(index) {
		if (!props.values.vendorState) {
			return null;
		}
		let stat = Object.values(states)?.find(
			(state) => state.name === props.values.vendorState
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

	function CheckZipCode(index) {
		if (!props.values.vendorCity) {
			return null;
		}
		const city = Object.values(states)?.filter(
			(state) => state.name === props.values.vendorCity
		);
		const zipcode = !city ? "" : city?.find((cities) => cities);
		return zipcode?.cities[props.values.vendorCity]?.map((zipcode, index) => {
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
				if (cur.company_name === props.values.vendor) {
					console.log(cur);
					console.log(props.values);

					props.values.companyName = cur?.company_name;
					props.values.vendorId = cur?.vendor_id;
					props.values.vendorState = cur?.state;
					props.values.vendorCity = cur?.city;
					props.values.vendorStreet = cur?.street;
					props.values.vendorZipCode = cur?.zip_code;
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
				{/* Modal content */}

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

					{/* Progress */}
					<div className="w-full bg-[#89A5AF] h-2.5 my-4">
						<div className="bg-[#2F5461] h-2.5 w-2/3"></div>
					</div>

					{/* form */}
					<div className="flex flex-col mx-6 mb-12">
						<FormSelect
							value={props.values.vendor}
							name="Select Vendor"
							id="vendor"
							error={props.errors.vendor}
							touched={props.touched.vendor}
							onChange={(e) => {
								if (e.traget.value === "Add New Vendor") {
									setShow(false);
									props.setFieldValue("vendor", "");
								} else {
									setShow(true);
									props.setFieldValue("vendor", e.target.value);
								}
							}}>
							<option value="">Select</option>
							{showVendor()}
							<option value="">Add New Vendor</option>
						</FormSelect>

						<div className="pt-4">
							<FormInputContainer name="Vendor ID.">
								<FormInputPlain
									type={"text"}
									onChange={props.handleChange}
									name="vendorId"
									placeholder={"Enter Vendor ID"}
									value={props.values.vendorId}
								/>
								{props.errors.vendorId && props.touched.vendorId && (
									<Error message={props.errors.vendorId} />
								)}
							</FormInputContainer>
						</div>
						<FormInputContainer name="Company Name">
							<FormInputPlain
								type={"text"}
								onChange={props.handleChange}
								name="companyName"
								placeholder={"Name"}
								value={props.values.companyName}
							/>
							{props.errors.companyName && props.touched.companyName && (
								<Error message={props.errors.companyName} />
							)}
						</FormInputContainer>
						<FormInputContainer name="Address">
							<FormInputPlain
								type={"text"}
								onChange={props.handleChange}
								name="vendorStreet"
								placeholder={"Street"}
								value={props.values.vendorStreet}
							/>
							{props.errors.vendorStreet && props.touched.vendorStreet && (
								<Error message={props.errors.vendorStreet} />
							)}

							<div className="flex gap-2 justify-center items-end">
								<FormSelect
									id="vendorState"
									value={props.values.vendorState}
									error={props.errors.vendorState}
									touched={props.touched.vendorState}
									onChange={props.handleChange}>
									{!props.values.vendorState ? (
										<option value="">Select State</option>
									) : (
										<option value={props.values.vendorState}>
											{props.values.vendorState}
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
									id="vendorCity"
									value={props.values.vendorCity}
									error={props.errors.vendorCity}
									touched={props.touched.vendorCity}
									onChange={props.handleChange}>
									{!props.values.vendorCity ? (
										<option value="">Select State</option>
									) : (
										<option value={props.values.vendorCity}>
											{props.values.vendorCity}
										</option>
									)}
									{CheckState()}
								</FormSelect>

								<div className="flex flex-col w-full">
									<FormSelect
										id="vendorZipCode"
										value={props.values.vendorZipCode}
										error={props.errors.vendorZipCode}
										touched={props.touched.vendorZipCode}
										onChange={props.handleChange}>
										{!props.values.vendorState ? (
											<option value="">Select State</option>
										) : (
											<option value={props.values.vendorZipCode}>
												{props.values.vendorZipCode}
											</option>
										)}

										{CheckZipCode()}
									</FormSelect>

									{props.errors.vendorZipCode &&
										props.touched.vendorZipCode && (
											<Error message={props.errors.vendorZipCode} />
										)}
								</div>
							</div>
						</FormInputContainer>
						<FormInputContainer name="Enter the persons name for the ATTN field.">
							<FormInputPlain
								type={"text"}
								onChange={props.handleChange}
								name="personName"
								value={props.values.personName}
								placeholder={"Enter Name"}
							/>
							{props.errors.personName && props.touched.personName && (
								<Error message={props.errors.personName} />
							)}
						</FormInputContainer>
						<FormInputContainer name="Enter the Shipping address.">
							<div className="flex flex-col">
								<FormInputPlain
									type={"text"}
									onChange={props.handleChange}
									name="personStreet"
									placeholder={"Street"}
									value={props.values.personStreet}
								/>
								{props.errors.personStreet && props.touched.personStreet && (
									<Error message={props.errors.personStreet} />
								)}
							</div>
							<div className="flex gap-2 justify-center items-end">
								<FormSelect
									value={props.values.personCity}
									id="personCity"
									error={props.errors.personCity}
									touched={props.touched.personCity}
									onChange={props.handleChange}>
									<option value="">Select City</option>
									{/* {city?.map((city, index) => {
										return (
											<option key={index} value={city.name}>
												{city.name}
											</option>
										);
									})} */}
								</FormSelect>
								<FormSelect
									value={props.values.personState}
									id="personState"
									error={props.errors.personState}
									touched={props.touched.personState}
									onChange={props.handleChange}>
									<option value="">Select State</option>
									{/* {state?.map((state, index) => {
										return (
											<option key={index} value={state.name}>
												{state.name}
											</option>
										);
									})} */}
								</FormSelect>
								<div className="flex flex-col w-full">
									<FormSelect
										value={props.values.personZipCode}
										id="personZipCode"
										error={props.errors.personZipCode}
										touched={props.touched.personZipCode}
										onChange={props.handleChange}>
										<option value="">Select State</option>
										{/* {state?.map((state, index) => {
										return (
											<option key={index} value={state.name}>
												{state.name}
											</option>
										);
									})} */}
									</FormSelect>
									{props.errors.personZipCode &&
										props.touched.personZipCode && (
											<Error message={props.errors.personZipCode} />
										)}
								</div>
							</div>
						</FormInputContainer>
						<FormSelect
							value={props.values.vendor}
							id="location"
							error={props.errors.location}
							touched={props.touched.location}
							name="Select Location"
							onChange={props.handleChange}>
							<option value="">Select Location</option>
							{/* {location?.map((location, index) => {
								return (
									<option key={index} value={location.name}>
										{location.name}
									</option>
								);
							})} */}
						</FormSelect>
					</div>

					{/* Buttons */}
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
				</form>
			</div>
		</div>
	);
};

export default FormTwo;
