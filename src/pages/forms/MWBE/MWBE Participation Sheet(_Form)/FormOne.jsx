import { useDispatch } from "react-redux";
import { ButtonWhiteBG, Error } from "../../../../ui";
import { Close, DashboardButton } from "../../../Dashboard/Components";
import { FormInputContainer } from "../../Notice-of-intent-consultant/Forms";
import { closeModal } from "../../reducer";
import { FormInputPlain, FormInput, FormSelect } from "../../components";
import { Fragment, useState } from "react";
import { FormTextArea } from "../../components";
import { useGetVendorsQuery } from "../../../../features/services/api";
import { useEffect } from "react";
import { FieldArray } from "formik";

const FormOne = (props) => {
	const dispatch = useDispatch();
	const [index, setIndex] = useState(0);
	const [focus, setFocus] = useState(false);

	const vendor = useGetVendorsQuery({ queryValue: "" });

	// const MoreComponent = ({ data, remove, index }) => {
	// 	return (

	// 	);
	// };

	// const removeItem = (index) => {
	// 	console.log("remove item: ", index);
	// 	props.values.contractors.splice(index, 1);
	// 	var arr = [...items];
	// 	arr.splice(index, 1);
	// 	// arr = arr.filter((item, arrIndex) => arrIndex !== index);
	// 	setItems(arr);
	// 	console.log("items: ", props.values.contractors);
	// };

	useEffect(() => {
		if (!focus) {
		} else {
			vendor?.currentData?.data?.data?.forEach((cur) => {
				if (cur.company_name === props.values.contractors[index].contractor) {
					// console.log(cur.company_name);
					props.values.contractors[index].companyName = cur.company_name;
				}
			});
		}
	}, [focus, props.values.contractors, index, vendor]);

	return (
		<div>
			<div
				className="relative w-full h-screen max-w-md mx-auto md:h-auto mt-14"
				onClick={(e) => e.stopPropagation()}>
				{/* Modal content */}
				<form
					className="relative w-[600px] bg-white rounded-lg shadow py-4"
					onSubmit={props.handleSubmit}>
					<div className="flex items-baseline justify-between mx-6">
						<div>
							<h3 className="text-lg font-bold text-gray-900">MWBE % Form</h3>
							<p className="text-base text-gray-700">Section I</p>
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
						<div className="bg-[#2F5461] h-2.5 w-full"></div>
					</div>

					<div className="mx-6 mb-12">
						<div className="mt-3 ml-2 flex flex-col gap-3 ">
							<div className="flex flex-col gap-3">
								<h2 className="text-sm text-gray-600 font-semibold">
									Select the purpose of this form.
								</h2>
								<div className="flex gap-3 items-center">
									<input
										id="default-radio-1"
										type="radio"
										value="For DPS use"
										name="purpose"
										onChange={props.handleChange}
										checked={
											props.values.purpose === "For DPS use" ? true : false
										}
										className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
									/>
									<label
										for="default-radio-1"
										className="text-base text-gray-900">
										For DPS use
									</label>
								</div>
								<div className="flex gap-3 items-center">
									<input
										id="default-radio-2"
										type="radio"
										value="To provide it to the vendor"
										name="purpose"
										className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
										checked={
											props.values.purpose === "To provide it to the vendor"
												? true
												: false
										}
										onChange={props.handleChange}
									/>
									<label
										for="default-radio-2"
										className="text-base text-gray-900">
										To provide it to the vendor
									</label>
								</div>
								{props.errors.purpose && props.touched.purpose && (
									<Error message={props.errors.purpose} />
								)}
							</div>

							{props?.values?.purpose === "For DPS use" && (
								<>
									<FormInputContainer name="What is the total contract amount?">
										<FormInput
											type={"text"}
											onChange={props.handleChange}
											name="totalContractAmount"
											placeholder={"0.00"}
											value={props.values.totalContractAmount}
										/>
										{props.errors.totalContractAmount &&
											props.touched.totalContractAmount && (
												<Error message={props.errors.totalContractAmount} />
											)}
									</FormInputContainer>
									<FieldArray
										name="contractors"
										render={({ remove, push }) => (
											<>
												<div className="mt-5">
													{props?.values?.contractors?.map((cur, index) => (
														<Fragment key={index}>
															<div className="flex flex-col w-full">
																<div className="flex justify-between items-center bg-[#89A5AF] py-2 px-1 rounded-t-lg">
																	<h2>MWBE Information ({index + 1})</h2>
																	<button
																		onClick={() => {
																			remove();
																		}}
																		disabled={index === 0 ? true : false}
																		type="button"
																		className="text-gray-900 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
																		data-modal-toggle="small-modal">
																		<Close />
																	</button>
																</div>
																<div className="flex flex-col gap-2 px-3 py-3 border border-[#9CA3AF]">
																	<FormSelect
																		value={
																			props?.values?.contractors?.contractor
																		}
																		name="Select contractor"
																		id={`contractors.${index}.contractor`}
																		error={props.errors.contractor}
																		touched={props.touched.contractor}
																		onChange={(e) => {
																			if (
																				e.target.selectedOptions[0].id ===
																				"add_new"
																			) {
																				setFocus(false);
																				props.setFieldValue(
																					`contractors.${index}.contractor`,
																					props?.values?.companyName
																				);
																			}
																			setFocus(true);
																			setIndex(index);
																			props.setFieldValue(
																				`contractors.${index}.contractor`,
																				e.target.value
																			);
																		}}>
																		{!props.values.contractors[index]
																			.contractor ? (
																			<option value="">Select</option>
																		) : (
																			<option value="">
																				{
																					props.values.contractors[index]
																						.contractor
																				}
																			</option>
																		)}
																		{vendor?.currentData?.data?.data?.map(
																			(contractor, index) => {
																				return (
																					<option
																						key={index}
																						value={contractor?.company_name}>
																						{contractor.company_name}
																					</option>
																				);
																			}
																		)}
																		<option id="add_new">Add New</option>
																	</FormSelect>
																	<FormInputContainer name="Contractor company name">
																		<FormInputPlain
																			value={
																				props.values.contractors[index]
																					.companyName
																			}
																			type="text"
																			onChange={(e) => {
																				props.setFieldValue(
																					`contractors.${index}.companyName`,
																					e.target.value
																				);
																			}}
																			name={`contractors.[${index}].companyName`}
																			placeholder={
																				"Enter Contractor company name"
																			}
																		/>
																		{props.errors.companyName &&
																			props.touched.companyName && (
																				<Error
																					message={props.errors.companyName}
																				/>
																			)}
																	</FormInputContainer>

																	<div className="flex flex-col gap-1">
																		<FormTextArea
																			onChange={props.handleChange}
																			value={
																				props.values.contractors[index]
																					.description
																			}
																			name="Enter the description of the work"
																			id={`contractors[${index}].description`}
																			placeholder="Enter the description of the work"
																			onBlur={() =>
																				props.setFieldTouched(
																					`contractors.${index}.description`,
																					true
																				)
																			}
																		/>
																		{props.errors.description &&
																			props.touched.description && (
																				<Error
																					message={props.errors.description}
																				/>
																			)}
																	</div>

																	<div className="flex flex-col gap-3">
																		<h2 className="text-sm text-gray-600 font-semibold">
																			Select type of company.
																		</h2>
																		<div className="flex gap-3 items-center">
																			<input
																				id="default-radio-1"
																				type="radio"
																				value="MBE"
																				name={`contractors[${index}].companyType`}
																				onChange={props.handleChange}
																				checked={
																					props.values.contractors[index]
																						.companyType === "MBE"
																						? true
																						: false
																				}
																				className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
																			/>
																			<label
																				for="default-radio-1"
																				className="text-base text-gray-900">
																				MBE
																			</label>
																		</div>
																		<div className="flex gap-3 items-center">
																			<input
																				id="default-radio-2"
																				type="radio"
																				value="WBE"
																				checked={
																					props.values.contractors[index]
																						.companyType === "WBE"
																						? true
																						: false
																				}
																				name={`contractors[${index}].companyType`}
																				className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
																				onChange={props.handleChange}
																			/>
																			<label
																				for="default-radio-2"
																				className="text-base text-gray-900">
																				WBE
																			</label>
																		</div>
																		{props.errors.companyType &&
																			props.touched.companyType && (
																				<Error
																					message={props.errors.companyType}
																				/>
																			)}
																	</div>

																	<FormInputContainer name="Enter the company's contract amount">
																		<FormInput
																			type="text"
																			onChange={props.handleChange}
																			name={`contractors.${index}.companyContractAmount`}
																			placeholder="0.00"
																			value={
																				props.values.contractors[index]
																					.companyContractAmount
																			}
																		/>
																		{props.errors.companyContractAmount &&
																			props.touched.companyContractAmount && (
																				<Error
																					message={
																						props.errors.companyContractAmount
																					}
																				/>
																			)}
																	</FormInputContainer>
																</div>
															</div>
														</Fragment>
													))}
													<div className="m-4">
														<button
															onClick={() => {
																push({
																	contractor: "",
																	companyName: "",
																	description: "",
																	companyType: "",
																	companyContractAmount: "",
																});
															}}
															disabled={
																props?.values?.contractors?.length === 12
																	? true
																	: false
															}
															className={`text-white text-sm font-normal hover:bg-blue-800 hover:text-white focus:ring-4 bg-[#3B6979] transition-all focus:outline-none focus:ring-blue-300 hover:border text-center border-[#3B6979] font-bold rounded-md text-sm px-5 py-2.5 flex items-center justify-center -ml-4 `}
															type="button">
															ADD MORE CONTRACTORS
														</button>
													</div>
												</div>
											</>
										)}></FieldArray>
								</>
							)}
						</div>
					</div>

					{/* Buttons */}
					<div className="flex justify-end gap-8 pr-4">
						<ButtonWhiteBG
							width="w-[100px]"
							name="Cancel"
							onClick={() => dispatch(closeModal())}
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

export default FormOne;
