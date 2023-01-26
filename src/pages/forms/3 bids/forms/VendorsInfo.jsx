// import React from "react";
// import { useDispatch } from "react-redux";
// import { ButtonWhiteBG, Error } from "../../../../ui";
// import { Close, DashboardButton } from "../../../Dashboard/Components";
// import { FormSelect } from "../../components";
// import { FormInputContainer } from "../../Notice-to-Proceed/Forms";
// import { closeModal } from "../../reducer";
// import { prevChoiceStep } from "../Reducer";

import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useGetVendorsQuery } from "../../../../features/services/api";
import { Error } from "../../../../ui";
import { Close } from "../../../Dashboard/Components";
import { getList } from "../../Advertisement-for-bid-template/reducer";
import { FormSelect } from "../../components";
import { FormInputContainer } from "../../Notice-of-intent-consultant/Forms";

// useEffect(() => {
// 	vendorData?.forEach((cur) => {
// 		if (cur.company_name === e.target.value)
// 			data.values.information[index].address = cur.address;
// 	});
// }, []);

// export default VendorsInfo;
export const FormInputBigContainer = ({ name, children, close }) => {
	return (
		<div className="flex flex-col">
			<label className="text-base font-semibold mb-1 py-4 px-2 bg-[#89A5AF] rounded-t-md flex items-center justify-between">
				{name}
				{close}
			</label>
			{children}
		</div>
	);
};

const VendorsInfo = (props) => {
	const { index, data, remove } = props;
	const vendors = useGetVendorsQuery({ queryValue: "" });
	const states = useSelector(getList);
	const vendorData = !vendors?.data ? [] : vendors?.currentData?.data?.data;

	function CheckState(index) {
		if (!data.values.information[index].state) {
			return;
		}
		let stat = Object.values(states)?.find(
			(state) => state.name === data.values.information[index].state
		);
		console.log(stat);
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
		if (!data.values.information[index].city) {
			return;
		}
		const city = Object.values(states)?.filter(
			(state) => state.name === data.values.information[index].state
		);
		const zipcode = !city ? "" : city?.find((cities) => cities);
		return zipcode?.cities[data.values.information[index].city]?.map(
			(zipcode, index) => {
				return (
					<option key={index} value={zipcode}>
						{zipcode}
					</option>
				);
			}
		);
	}

	useEffect(() => {
		vendorData?.forEach((cur) => {
			if (cur.company_name === data.values.information[index].selectVendor) {
				data.values.information[index].company_name = cur.company_name;
				data.values.information[index].address = cur.street;
				data.values.information[index].city = cur.city;
				data.values.information[index].state = cur.state;
				data.values.information[index].zip_code = cur.zip_code;
			} else if (
				cur.company_name !== data.values.information[index].selectVendor
			) {
				return;
				// data.setFieldValue(`information.${index}.company_name`, "");
			}
		});
	}, [data.values.information, index, vendorData]);

	return (
		<div className=" mb-3">
			<div className=" border-spacing-10 bg-gray-50 rounded-md p-1">
				<FormInputBigContainer
					name={`Vendor Information (${index + 1})`}
					close={
						<button
							onClick={() => {
								if (index === 0) {
									return;
								}
								remove(index);
							}}
							type="button"
							className="text-gray-900 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
							data-modal-toggle="small-modal">
							<Close />
						</button>
					}>
					<div className="flex flex-col rounded-md bg-white px-1">
						<FormSelect
							value={data.values.information[index].selectVendor}
							onChange={data.handleChange}
							id={`information.${index}.selectVendor`}
							name="Select Vendor">
							<option>Select Vendor</option>;
							{vendorData?.map((cur) => {
								return (
									<option value={cur.company_name}>{cur.company_name}</option>
								);
							})}
							<option value="">Add New Vendor</option>;
						</FormSelect>
						{/* {data.errors.addVendor && data.touched.addVendor && (
							<Error message={data.errors.addVendor} />
						)} */}
						<div className="flex flex-col my-5">
							<label className="text-sm text-gray-900 mb-1">Company Name</label>
							<input
								value={data.values.information[index].company_name}
								name={`information.${index}.company_name`}
								onChange={data.handleChange}
								type="text"
								placeholder="Company Name"
								className="bg-transparent border border-gray-400 text-gray-900 text-sm rounded-sm hover:outline-[#3B6979] hover:border-[#3B6979] w-full p-2 flex items-center "
							/>
							{data.errors.companyName && data.touched.companyName && (
								<Error message={data.errors.companyName} />
							)}
						</div>
						<div className="flex flex-col mb-5">
							<label className="text-sm text-gray-900 mb-1">Address</label>
							<input
								value={data.values.information[index].address}
								name={`information.${index}.address`}
								onChange={data.handleChange}
								type="text"
								placeholder="Address"
								className="bg-transparent border border-gray-400 text-gray-900 text-sm rounded-sm hover:outline-[#3B6979] hover:border-[#3B6979] w-full p-2 flex items-center "
							/>
							{data.errors.address && data.touched.address && (
								<Error message={data.errors.address} />
							)}
						</div>
						<div className="flex items-center gap-4">
							<div className="flex-1">
								{console.log(data.values.information[index].state)}
								<FormSelect
									value={data.values.information[index].state}
									id={`information.${index}.state`}
									onChange={data.handleChange}>
									{data.values.information[index].state ? (
										<option value={data.values.information[index].state}>
											{data.values.information[index].state}
										</option>
									) : (
										<option value="">Select State</option>
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
								{data.errors.projectState && data.touched.projectState && (
									<Error message={data.errors.projectState} />
								)}
							</div>
							<div className="flex-1">
								<FormSelect
									value={data.values.information[index].city}
									id={`information.${index}.city`}
									onChange={data.handleChange}>
									{data.values.information[index].city ? (
										<option value={data.values.information[index].state}>
											{data.values.information[index].city}
										</option>
									) : (
										<option value="">Select City</option>
									)}
									{CheckState(index)}
								</FormSelect>

								{data.errors.projectCity && data.touched.city && (
									<Error message={data.errors.city} />
								)}
							</div>
							<div className="flex-1">
								<FormSelect
									value={data.values.information[index].zip_code}
									id={`information.${[index]}.zip_code`}
									onChange={data.handleChange}>
									{data.values.information[index].zip_code ? (
										<option value={data.values.information[index].zip_code}>
											{data.values.information[index].zip_code}
										</option>
									) : (
										<option value="">Select Zip code</option>
									)}
									{CheckZipCode(index)}
								</FormSelect>

								{/* {data.errors.projectZipCode && data.touched.projectZipCode && (
									<Error message={data.errors.projectZipCode} />
								)} */}
								{/* <input
                                      {...zipCode}
                                      className="bg-transparent border border-gray-400 text-gray-900 text-sm rounded-sm hover:outline-[#3B6979] hover:border-[#3B6979] w-full p-2 flex items-center "
                                    />
                                    {data.errors.zipCode &&
                                      data.touched.zipCode && (
                                        <Error message={data.errors.zipCode} />
                                      )} */}
							</div>
						</div>
						<div className="mt-4">
							<FormInputContainer name="Enter the price that the vendor has quoted.">
								<div className="flex justify-center gap-4 items-center my-4">
									<div className="flex mb-1">
										<input
											onChange={(e) => {
												if (isNaN(e.target.value)) {
													return "";
												} else {
													data.setFieldValue(
														`information.${[index]}.unitPrice`,
														e.target.value
													);
												}
											}}
											value={data.values.information[index].unitPrice}
											name={`information.${[index]}.unitPrice`}
											placeholder="Unit Price"
											className="bg-transparent border border-gray-400 text-gray-900 text-sm rounded-sm hover:outline-[#3B6979] hover:border-[#3B6979] w-full p-2 flex items-center "
										/>
										{data.errors.unitPrice && data.touched.unitPrice && (
											<Error message={data.errors.unitPrice} />
										)}
									</div>
									<div className="flex mb-1">
										<input
											onChange={(e) => {
												if (isNaN(e.target.value)) {
													return "";
												} else {
													data.setFieldValue(
														`information.${[index]}.totalPrice`,
														e.target.value
													);
												}
											}}
											value={data.values.information[index].totalPrice}
											name={`information.${[index]}.totalPrice`}
											placeholder="Total Price"
											className="bg-transparent border border-gray-400 text-gray-900 text-sm rounded-sm hover:outline-[#3B6979] hover:border-[#3B6979] w-full p-2 flex items-center "
										/>
										{data.errors.totalPrice && data.touched.totalPrice && (
											<Error message={data.errors.totalPrice} />
										)}
									</div>
									<div className="flex mb-1">
										<input
											onChange={(e) => {
												if (isNaN(e.target.value)) {
													return "";
												} else {
													data.setFieldValue(
														`information.${[index]}.shippingPrice`,
														e.target.value
													);
												}
											}}
											value={data.values.information[index].shippingPrice}
											name={`information.${[index]}.shippingPrice`}
											placeholder="Shipping Price"
											className="bg-transparent border border-gray-400 text-gray-900 text-sm rounded-sm hover:outline-[#3B6979] hover:border-[#3B6979] w-full p-2 flex items-center "
										/>
										{data.errors.shippingPrice &&
											data.touched.shippingPrice && (
												<Error message={data.errors.shippingPrice} />
											)}
									</div>
								</div>
							</FormInputContainer>
						</div>
					</div>
				</FormInputBigContainer>
			</div>
		</div>
	);
};

export default VendorsInfo;
